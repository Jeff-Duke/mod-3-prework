'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
    reject(new Error('I DID NOT FIRE'));
});

function onFullFill() {
    console.log('MAIN PROGRAM');
    console.log('PROMISE VALUE');
}

function onReject(error) {
    console.log(error.message);
}

promise.then(onFullFill, onReject);