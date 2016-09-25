'use strict';

// const attachTitle = (arg1) => {
//     return 'DR. ' + arg1;
// };

//this thing doesn't like ES6 

function attachTitle(arg1) {
    return 'DR. ' + arg1;
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);