/**
 * Created by zhangrz on 2017/10/16.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const express = require('express')
    , router = new express.Router()
    , log4js = GLO.log4js;

// 请求日志
router.use((req, res, next)=> {
    GLO.http(req);
    next();
});

// 响应日志
router.use(log4js.connectLogger(log4js.getLogger('http'), {
    level: 'INFO'
    , format: ':remote-addr  :method  :url  :status  :response-time' + 'ms'
}));

// api接口
router.use('/api', require('./api'));

// web页面
router.use('/', require('./web'));

// 系统错误 - 返回
router.use((err, req, res, next) => {
    // http状态值
    res.status(err.status || 500);
    if (err.status !== 404) {
        GLO.logger('router').error(err);
        req.flash('ems', '系统错误');
        return res.redirect('/?e=1');
    } else {
        req.flash('ems', '未找到请求地址');
        return res.redirect('/?e=1');
    }
});

module.exports = router;
