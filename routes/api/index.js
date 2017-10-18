/**
 * Created by zhangrz on 2017/10/17.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const express = require('express')
    , router = new express.Router();

// 所有接口需登录才能访问
router.use((req, res, next)=>require('../../service/login').auth(req, res) ? next() : res.redirect('/login'));

// 

module.exports = router;
