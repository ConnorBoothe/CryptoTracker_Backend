require('dotenv').config();
const express = require('express');
const https = require('https');
// const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true },function(err){
//     console.log("Connect")
// });
const app = module.exports = express(); 
//API Routes
app.use([
    require('./Controllers/AddUser.js')
]); 

//Wildcard route
app.get('*', function(req, res) {
    res.json("Not valid")
});

https.createServer(app).listen(8080);

