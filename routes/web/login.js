/**
 * Created by zhangrz on 2017/10/17.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const express = require('express')
    , router = new express.Router();

// 登录页面
router.get('/', (req, res)=>
    res.render('./login/view.ejs', {
        title: '登录'
    })
);

module.exports = router;
