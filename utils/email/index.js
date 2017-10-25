/**
 * Created by zhangrz on 2017/10/25.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 * @Reference https://github.com/nodemailer/nodemailer/issues/406#issuecomment-83941225
 */

'use strict';

// 发送email

const email = require('nodemailer')
    , config = require('../../config').email;

module.exports = option=>new Promise((resolve, reject)=> {
    // 创建传输协议
    let transporter = email.createTransport(config);
    transporter.sendMail(option, (error, info)=> {
        if (error) {
            return reject(error);
        } else {
            return resolve(info);
        }
    });
});
