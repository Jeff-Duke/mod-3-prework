'use strict';
var _ = require('lodash');

const worker = (wordsArray) => {
    return _.chain(wordsArray)
            .map((word) => {
                return word + 'chained';
            })
            .map((word) => {
                return word.toUpperCase();
            })
            .sortBy()
            .value();
};

module.exports = worker;

