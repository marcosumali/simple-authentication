const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json()) // body parser replacer
app.use(express.urlencoded({extended: false})) // body parser replacer

app.use('/', require('./routes'));

app.listen('3000', () => {
    console.log('App is listening on port #3000')
});