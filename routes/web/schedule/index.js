/**
 * Created by zhangrz on 2017/10/23.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const express = require('express')
    , router = new express.Router();

// 任务 - home
router.get('/', (req, res)=>res.redirect('/job/list'));

// 任务 - 定时任务列表
router.get('/list', (req, res)=>
    res.render('./schedule/list/view.ejs', {
        title: '定时任务列表'
    })
);

// 任务 - 新增定时任务
router.get('/add', (req, res)=>
    res.render('./schedule/add/view.ejs', {
        title: '新增定时任务'
    })
);

module.exports = router;
