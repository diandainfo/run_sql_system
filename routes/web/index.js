/**
 * Created by zhangrz on 2017/10/17.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const express = require('express')
    , router = new express.Router();

// 登录
router.use('/login', require('./login'));

// 拦截所有页面到登录校验
router.use((req, res, next)=>require('../../service/login').auth(req, res) ? next() : res.redirect('/login'));

// 首页 - 中转到home页
router.get('/', (req, res)=>res.redirect('/home'));

// home页
router.get('/home', (req, res)=>
    res.render('./home/view', {
        title: '首页'
    })
);


module.exports = router;
