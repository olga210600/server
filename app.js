const http = require('http');
const URL = require('url');
const {PORT} = require('./constants')
const pg = require("pg");
http.createServer((req, res) => {
    res.end('Hello')
}).listen(5000);

console.log('herggge')
let client = new pg.Client(URL);