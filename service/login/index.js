/**
 * Created by zhangrz on 2017/10/17.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created 用户登录信息相关服务
 */

'use strict';

const user = require('../../config').user;

module.exports = {
    // 权限认证
    auth: (req, res)=> 'session' in req && 'user' in req.session && req.session.user

    // 登录
    , login: u=>u.loginName in user && GLO.pwd(u.password) === user[u.loginName].password ? user[u.loginName] : false
};
