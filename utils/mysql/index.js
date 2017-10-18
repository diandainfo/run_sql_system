/**
 * Created by zhangrz on 2017/10/18.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const mysql = require('mysql')
    , config = require('../../config');

module.exports = (database = 'run_sql_system')=>mysql.createConnection(config[database]);
