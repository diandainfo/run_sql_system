/**
 * Created by zhangrz on 2017/10/24.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created 服务 - 定时任务
 */

'use strict';

let ScheduleJobList = GLO.schedule_jobs; // 全局定时任务队列
const xls = require('node-xlsx')
    , fs = require('fs')
    , ScheduleJob = require('../../medals').ScheduleJob // 定时任务实体
    , createConnection = require('../../utils/mysql').createConnection
    , dao = require('./dao')
    ;

const _ = {
    // 创建定时任务：将定时任务注册到运行时
    create: (connection, job)=>new Promise((resolve, reject)=> {
        const schedule = require('node-schedule')
            , __job = schedule.scheduleJob(job.rsj_cron, ()=> {
            // dao.query(connection,job.rsj_sql)
        });
    })

    // 处理结果集
    , setResults: results=> {
        const keys = Object.keys(results[0]);
        let data = [];
        // 将key放在第一行
        data.push(keys);
        // 处理行数据：从对象到数组
        results.forEach(result=> {
            let row = [];
            keys.forEach(key=> {
                row.push(result[key]);
            });
            data.push(row);
        });
        return data;
    }

    // 将数据写入到excel中
    , excel: (data, fileName)=>new Promise((resolve, reject)=> {
        const buffer = xls.build([{name: '结果', data: data}])
            , file_path = require('path').join(__dirname, '../../public/download/' + fileName + '.xls');
        fs.writeFile(file_path, buffer, err=>err ? reject(err) : resolve(true));
    })

    // 执行定时任务
    , run: (connection, job)=>new Promise((resolve, reject)=> {
        dao.query(connection, job.rsj_sql)
            .then(results=> {
                if (results && results instanceof Array && results.length > 0) {
                    let data = _.setResults(results);
                    resolve(data);
                } else {
                    resolve(false);
                }
            })
            .catch(e=>reject(e));
    })
};

module.exports = {
    // 新增定时任务：将定时任务写入db，并创建定时任务
    add: job=>new Promise((resolve, reject)=> {
        const sj = new ScheduleJob();
        sj.addSJ(job);
        const connection = createConnection(sj.rsj_database);
        dao.connection(connection)
            .then(()=>dao.insert(connection, sj)) // 定时任务写入db内
            .then(()=>_.create(connection, sj))
            .then(()=>resolve(true))
            .catch(err=>reject(err));
    })

    // 删除定时任务：将定时任务从db中软删除，并杀掉定时任务
    , remove: job=>new Promise((resolve, reject)=> {
    })

    // 杀掉定时任务：将定时任务从运行时移除
    , kill: job=>new Promise((resolve, reject)=> {
    })

    // 查看定时任务
    , list: job=>new Promise((resolve, reject)=> {
    })

    // 即时运行定时任务
    , now: job=>new Promise((resolve, reject)=> {
        const sj = new ScheduleJob();
        sj.addSJ(job);
        const connection = createConnection(sj.rsj_database);
        dao.connection(connection)
            .then(()=>_.run(connection, sj))
            .then(data=>data ? _.excel(data, sj.rsj_file_name) : data)
            .then(result=>resolve(result ? '/download/' + sj.rsj_file_name + '.xls' : false))
            .catch(err=>reject(err));
    })

    // 初始化项目运行定时任务
    , init: job=>new Promise((resolve, reject)=> {
    })

    // 更新定时任务：定时任务出错时，将定时任务从db中标记，并杀掉定时任务
    , update: job=>new Promise((resolve, reject)=> {
    })
};
