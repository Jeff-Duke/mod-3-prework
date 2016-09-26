'use strict';
var _ = require('lodash');

// var worker = function (arrays) {
//     var quantity = _.sortBy(arrays, 'quantity');
//     return quantity.reverse();
// };

let worker = (articles) => { return _.sortBy(articles, 'quantity').reverse(); };

module.exports = worker;