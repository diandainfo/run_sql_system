/**
 * Created by zhangrz on 2017/10/17.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

// 登录服务

module.exports = {
    auth: (req, res, next)=> {
        if ('session' in req && 'user' in req.session && req.session.user) {
            next();
        } else {
            return res.redirect('/login');
        }
    }
};
