const EventEmitter = require('events');
const http = require('http');

class Sale extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new EventEmitter();

myEmitter.on('new Sale', () => {
    console.log('there was a new sale');
});

myEmitter.on('new Sale', () => {
    console.log('customer name : Karthik');
});

myEmitter.on('new Sale', (stock) => {
    console.log('there are ' + stock + 'iteams left in the stock');
});

myEmitter.emit('new Sale', 9);


/////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('new request');
    console.log(req.url);
    res.end('request received');
});

server.on('request', (req, res) => {
    console.log('another request');
});

server.close('close', () => {
    console.log('server closed')
});

server.listen(8000, '127.0.0.1', () => {
    console.log('waiting for request....');
});

