const express = require("express");

const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('In M1');
    res.send('<h1>From Add product.</h1>');
})

app.use('/',(req, res, next) => {
    console.log('In M1');
    res.send('<h1>Hello World</h1>');
})

app.listen(3000);
