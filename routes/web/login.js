/**
 * Created by zhangrz on 2017/10/17.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const express = require('express')
    , router = new express.Router()
    , loginService = require('../../service/login');

// 登录页面
router.get('/', (req, res)=>
    loginService.auth(req, res)
        ? res.redirect('/')
        : res.render('./login/view.ejs', {
        title: '登录'
        , ems: req.flash('ems')
    })
);

// 登录请求
router.post('/', (req, res)=> {
    const body = req.body;
    let _ = {};
    if ('loginName' in body && body.loginName) {
        _.loginName = body.loginName;
    } else {
        req.flash('ems', '请填写用户名');
        return res.redirect('/login?e=1');
    }
    if ('pwd' in body && body.pwd) {
        _.password = body.pwd;
    } else {
        req.flash('ems', '请输入密码');
        return res.redirect('/login?e=1');
    }
    const user = loginService.login(_);
    if (user) {
        req.session.user = user;
        return res.redirect('/');
    } else {
        req.flash('ems', '用户名和密码不匹配');
        return res.redirect('/login?e=1');
    }
});

// 退出请求
router.get('/off', (req, res)=> {
    req.session.destroy();// 销毁session
    return res.redirect('/login');
});

module.exports = router;
