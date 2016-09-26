'use strict';
const _ = require('lodash');

const worker = (data) => {
    let mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";
    return _.template(mytemplate)(data); 
};


module.exports = worker;