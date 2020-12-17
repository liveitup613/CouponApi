const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
let port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({ data: 'body' });
});

app.use('/coupons', require('./app/controllers/coupons'));

app.listen(port, () => {
    console.log('The server is listening...');
});