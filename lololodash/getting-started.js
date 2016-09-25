var _ = require("lodash");

var worker = function (userList) {
    return _.filter(userList, {active: true});
};


module.exports = worker;