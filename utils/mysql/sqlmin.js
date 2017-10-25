/**
 * Created by zhangrz on 2017/10/25.
 * Copyright© 2015-2020 DiandaInfo (https://github.com/diandainfo)
 * @version 0.0.1 created
 * @Reference http://cdn.sojson.com/js/common/jquery/jquery.format.js
 */

'use strict';

module.exports = text=> text.replace(/\s+/g, ' ').replace(/\s+\(/, '(').replace(/\s+\)/, ')');
