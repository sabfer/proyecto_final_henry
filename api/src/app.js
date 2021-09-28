const express = require('express');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const users = require('./routes/users');
const clients = require('./routes/clients');
const products = require('./routes/products');
const orders = require('./routes/orders');

require('./db.js');

const server = express();

server.name = 'API';
server.use(cors());
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use('/users', users);
server.use('/clients', clients);
server.use('/products', products);
server.use('/orders', orders);


// Error catching endware.
server.use((err, _req, res, _next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;