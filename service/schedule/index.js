/**
 * Created by zhangrz on 2017/10/24.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created 服务 - 定时任务
 */

'use strict';

let ScheduleJobList = GLO.schedule_jobs; // 全局定时任务队列
const ScheduleJob = require('../../medals').ScheduleJob // 定时任务实体
    , createConnection = require('../../utils/mysql').createConnection
    , dao = require('./dao')
    ;

const _ = {
    // 创建定时任务：将定时任务注册到运行时
    create: (connection, job)=>new Promise((resolve, reject)=> {
        const schedule = require('node-schedule')
            , __job = schedule.scheduleJob(_job.rsj_cron, ()=> {
            // dao.query(connection,job.rsj_sql)
        });
    })
};

module.exports = {
    // 新增定时任务：将定时任务写入db，并创建定时任务
    add: job=>new Promise((resolve, reject)=> {
        const sj = new ScheduleJob()
            , connection = createConnection(job.rsj_database);
        sj.addSJ(job);
        dao.connection()
            .then(()=>dao.insert(connection, job)) // 定时任务写入db内
            .then(()=>_.create(connection, job))
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

    })

    // 初始化项目运行定时任务
    , init: job=>new Promise((resolve, reject)=> {
    })

    // 更新定时任务：定时任务出错时，将定时任务从db中标记，并杀掉定时任务
    , update: job=>new Promise((resolve, reject)=> {
    })
};
