require('dotenv').config();
const express = require('express');
const https = require('https');
const app = module.exports = express(); 

//API Controllers
app.use([
    require('./Controllers/AddUser.js'),
    require('./Controllers/AddCoin.js'),
    require('./Controllers/SellCoin.js'),
    require('./Controllers/GetUsers.js'),
    require('./Controllers/GetUser.js')
]); 

//Wildcard route
app.get('*', function(req, res) {
    res.send("Not valid")
});
app.listen(8080);

