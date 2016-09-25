'use strict';

var firstPromise = first();

var secondPromise = firstPromise.then((val) => {
    return second(val);
});

secondPromise.then(console.log);