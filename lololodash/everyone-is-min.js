'use strict';

var _ = require('lodash');

let worker = (weather) => {

    let townList = { hot: [], warm: [] };

    let checkTemp = (weather) => {
        return weather > 19;
    };

    _.forEach(weather, (town, townName) => {
        if (_.every(town, checkTemp)) {
            townList.hot.push(townName);
        }
        else if (_.some(town, checkTemp)) {
            townList.warm.push(townName);
        }
    });

    return townList;
};

module.exports = worker;