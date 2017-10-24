/**
 * Created by zhangrz on 2017/10/24.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

// 定时任务相关的DB处理

module.exports = {
    // mysql连接
    connection: connection=>new Promise((resolve, reject)=>
        connection.connect(err=> {
            if (err) {
                return reject(err);
            } else {
                return resolve();
            }
        })
    )

    // 插入一条定时任务的记录
    , insert: (connection, job)=>new Promise((resolve, reject)=>
        connection.query('INSERT INTO rss_schedule_job SET ?', job, error=> {
            if (error) {
                return reject(error);
            } else {
                connection.end();
                return resolve();
            }
        })
    )

    // 执行查询
    , query: connection=>new Promise((resolve, reject)=>
        connection.query(sql, (error, results)=> {
            if (error) {
                return reject(error);
            } else {
                connection.end();
                return resolve(results);
            }
        })
    )
};
