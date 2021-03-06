'use strict';

const _ = require('lodash');

const overview = (orders) => {

    let overviewarray = [],
        total = 0;

    orders = _.groupBy(orders, 'article');

    _.forEach(orders, (item, key) => {

        key = parseInt(key);
        total = 0;

        if (item.length === 1) {
            total = item[0].quantity;
        }
        else {
            total = _.reduce(item, function (sum, item) {
                return sum + item.quantity;
            }, 0);
        }

        overviewarray.push({
            article: key,
            total_orders: total
        });

    });

    overviewarray = _.sortBy(overviewarray, 'total_orders').reverse();

    return overviewarray;
};

module.exports = overview;