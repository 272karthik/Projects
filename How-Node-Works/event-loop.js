const fs= require('fs');
const crypto = require('crypto');

const start = Date.now();


setTimeout(() => console.log('timer 1 is finished'), 0);
setImmediate(() => console.log('immediate 1 is finished'));

fs.readFile('test-file.txt',() => {
    console.log('I/O finished');
    console.log('----------------');

    setTimeout(() => console.log('timer 2 is finished'), 6000);
    setTimeout(() => console.log('timer 3 is finished'), 3000);
    setImmediate(() => console.log('immediate 2 is finished'));

    process.nextTick(() => console.log('process.nextTick'));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log('password encrypted ' + (Date.now() - start));
    })

});

console.log('Hello from the top-level code');
