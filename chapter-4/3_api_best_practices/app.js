require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { PORT = 3000 } = process.env;

const v1Router = require('./routes/v1');

app.use(bodyParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.use('/api/v1', v1Router);

app.use((req, res, next) => {
    res.status(404).json({
        status: false,
        message: 'Not Found!',
        data: null
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        status: false,
        message: 'Internal Server Error!',
        data: err.message
    });
});

app.listen(PORT, () => console.log('listening on port', PORT));