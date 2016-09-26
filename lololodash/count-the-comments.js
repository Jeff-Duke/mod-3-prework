'use strict';
var _ = require('lodash');

const worker = (usersComments) => {
   let comments= _.groupBy(usersComments, 'username');
   let count = [];
   _.forEach(comments, (comment, name) => {
       count.push({
           username: name,
           comment_count: _.size(comment)
       });
   });

   return _.sortBy(count, "comment_count").reverse();

};

module.exports = worker;