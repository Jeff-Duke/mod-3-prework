'use strict';
var _ = require('lodash');

var worker = function (towns) {
    return _.forEach(towns, function (t) {
        if (t.population > 1) {
            t.size = 'big';
        }
        else if (t.population >= 0.5) {
            t.size = 'med';
        }
        else {
            t.size = 'small';
        }
    });
};

module.exports = worker;
