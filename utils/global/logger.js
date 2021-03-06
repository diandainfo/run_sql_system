/**
 * Created by zhangrz on 2017/10/16.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';
const ENV = process.env.NODE_ENV || 'development'
    , log4js =
    ()=> { // 配置log4js
        const _ = require('log4js');
        _.configure(require('../../config/log4js')[ENV]);
        return _;
    }, logger =
    (name, level = 'info')=> {// 日志记录器
        const _ = log4js().getLogger(name);
        _.level = level;
        return _;
    };

// 抛出引用
module.exports = {

    // 抛出原生log4js
    log4js: log4js()

    // 日志记录器
    , logger: logger

    /**
     * 请求日志
     * @param req       request，请求体
     * @returns {string}
     */
    , http: req=> {
        const ip = GLO.ip(req)
            , _ = ip
                + '  ' + req.originalUrl
                + '  ' + req.method
                + '  ' + JSON.stringify(req.query || {})
                + '  ' + JSON.stringify(req.body || {})
                + '  ' + JSON.stringify(req.params || {})
            ;
        logger('http').info(_);
        req.__ip = ip; // 真实ip
        return _;
    }

    /**
     * 错误信息类
     * @param error         错误对象或信息
     * @param status        错误状态
     * @param message       错误信息
     * @returns {*}
     */
    , Error: (error, status = -1, message = '')=> {
        let _error, _type = typeof error;
        if (_type === 'object') {
            _error = error;
        } else if (_type === 'undefined') { // 错误对象不存在，使用message作为信息创建错误对象
            _error = new Error(message ? message : '未知错误');
        } else if (_type === 'string') { // 错误对象为信息，使用error作为信息创建错误对象
            _error = new Error(error);
            message = error;
        } else {
            _error = new Error();
        }
        _error.message = message;
        _error.status = status;
        return _error;
    }

    /**
     * 错误日志,记录错误日志，返回错误说明
     * @param error         错误对象
     * @param message       错误信息
     * @param status        错误状态
     * @returns {string|*|string}
     */
    , eLog: function (error, message, status = -1) {
        let _error = this.Error(error, status, message);
        if (typeof error === 'string') {
            logger('error').error(error, status, message);
        } else {
            logger('error').error(_error);
        }
        return _error.message;
    }

    /**
     * 主动 - 日志 - 记录
     * @param msg       日志信息
     * @param tag       标记
     */
    , log: (msg, tag = 'log')=>logger(tag).info(typeof msg === 'string' ? msg : JSON.stringify(msg))


    /**
     * 非生产环境打印日志
     * @param msg       日志信息
     * @param info      提示信息，标记该日志打印位置
     */
    , debug: (msg, info = 'INFO:')=> {
        if (!GLO.isPro()) {
            logger('debug').info(info + ' ' + typeof msg === 'string' ? msg : JSON.stringify(msg));
        }
    }
};
