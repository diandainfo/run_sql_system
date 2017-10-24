/**
 * Created by zhangrz on 2017/10/24.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

/**
 * 定时任务
 */
class ScheduleJob {
    /**
     * 构造函数
     * @param {Number} jid 任务编号
     */
    constructor(jid) {
        if (jid) {
            this.rsj_id = jid;
        }
    }

    /**
     * 写入转换
     * @param {Object} job 定时任务
     * @return {Object}
     */
    setSJ(job) {
        this.rsj_database = job.db;
        this.rsj_title = job.title;
        this.rsj_file_name = job.fName;
        this.rsj_email_title = job.eTitle;
        this.rsj_email_address = job.eAdd;
        this.rsj_cron = job.cron;
        this.rsj_sql = job.sql;
        return this;
    }

    /**
     * 新增定时任务的转换
     * @param {Object} job 定时任务
     */
    addSJ(job) {
        this.setSJ(job);
        this.rsj_stats = 1; // 定时任务处于开启状态
        this.rsj_md5 = GLO.md5(this.rsj_title + new Date().getTime()); // 生成md5唯一标识
    }
}

module.exports = ScheduleJob;
