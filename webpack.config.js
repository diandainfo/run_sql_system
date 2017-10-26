/**
 * Created by zrz on 2017/8/24.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 */

'use strict';

const path = require('path')
    , webpack = require('webpack')
    , BASE_URI = './public/javascript';

module.exports = {
    entry: {
        'add.schedule': BASE_URI + '/schedule/add'
    }, output: {
        path: path.join(__dirname, 'public/src')
        , filename: '[name].min.js'
    }, module: {// 引用的组件
        rules: [{
            test: /\.js$/
            , exclude: /node_modules/
            , use: 'babel-loader'
        }]
    }, plugins: [
        new webpack.optimize.UglifyJsPlugin({ // 开启代码压缩
            compress: {
                warnings: false
            }
        })
    ]
};
