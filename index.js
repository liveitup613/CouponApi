const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({ data: 'body' });
});

app.use('/coupons', require('./app/controllers/coupons'));

app.listen(3000, () => {
    console.log('The server is listening...');
});