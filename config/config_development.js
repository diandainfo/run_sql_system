/**
 * Created by zrz on 2017/8/22.
 * Copyright© 2015-2020 codingview (https://github.com/codingview)
 * @version 0.0.1 created
 */

'use strict';

const path = require('path');

module.exports = {
    host: ''
    , port: 3000
    , mysql: { // 多库读写
        run_sql_system: {
            database: 'run_sql_system'
            , host: '127.0.0.1'
            , user: 'root' // 账号
            , password: 'root' // 密码
            , dialect: 'mysql'
        }
    }, redis: {
        host: '192.168.1.101'
        , port: 6379
        , db: 6
        , ttl: 86000
        , secret: 'run_sql_system'
        , key: 'run_sql_system'
    }, user: { // 登录账号
        admin: {
            password: '00431fd54c73507e66e75f059eb6210a'
            , name: '管理员'
        }
    }
};
