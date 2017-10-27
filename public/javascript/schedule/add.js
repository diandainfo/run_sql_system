/**
 * Created by zhangrz on 2017/10/26.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

// 新增定时任务

$(function () {
    $('#schedule_add_submit').on('click', ()=> {
        $('#schedule_add_form').attr('action', '/schedule/add');
        $('#form_submit').click();
    });
    $('#schedule_now_submit').on('click', ()=> {
        $('#schedule_add_form').attr('action', '/schedule/now');
        $('#form_submit').click();
    });
});
