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
    , mysql: {// 读写分离
        read: { // 读库
            database: 'run_sql_system'
            , host: '127.0.0.1'
            , username: 'root' // 账号
            , password: 'root' // 密码
            , dialect: 'mysql'
        }, write: { // 写库
            database: 'run_sql_system'
            , host: '127.0.0.1'
            , username: 'root'
            , password: 'root'
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
        admin: 123456
    }
};
