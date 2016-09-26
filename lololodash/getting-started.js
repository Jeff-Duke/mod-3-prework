var _ = require("lodash");

var worker = function (userList) {
    return _.filter(userList, {active: true});
};


module.exports = worker;

//template
// 'use strict';
// const _ = require('lodash');

// const worker = function (/* arguments */) {
    
// };


// module.exports = worker;