/**
 * Created by zhangrz on 2017/10/23.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const express = require('express')
    , router = new express.Router()
    , scheduleJobService = require('../../../service/schedule');

// 任务 - home
router.get('/', (req, res)=>res.redirect('/job/list'));

// 任务 - 定时任务列表 - 页面
router.get('/list', (req, res)=>
    res.render('./schedule/list/view.ejs', {
        title: '定时任务列表'
    })
);

// 任务 - 定时任务列表 - 接口
router.post('/list', (req, res)=> {
    const body=req.body;
    scheduleJobService.list()
        .then(({data, count})=>res.json(GLO.success(data, count)))
        .catch(err=>res.json(GLO.success([], 0)));
});

// 任务 - 新增定时任务 - 页面
router.get('/add', (req, res)=>
    res.render('./schedule/add/view.ejs', {
        title: '新增定时任务'
        , database: Object.keys(require('../../../config').mysql)
    })
);

// 任务 - 新增定时任务 - 接口
router.post('/add', (req, res)=>
    scheduleJobService.add(req.body)
        .then(()=>res.redirect('/schedule/list'))
        .catch(err=>res.json(GLO.success(err)))
);

// 任务 - 即时执行任务 - 接口
router.post('/now', (req, res)=>
    scheduleJobService.now(req.body)
        .then(uri=>uri ? res.redirect(uri) : res.json(GLO.success(uri)))
        .catch(err=>res.json(GLO.success(err)))
);

module.exports = router;
