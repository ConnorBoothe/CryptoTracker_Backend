const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true,
    resave: false,
    saveUninitialized: true
}));
var User = require('../models/User');
var users = new User();
//endpoint to add user to database
router.post('/API/SellCoin', function(req, res){
 
    users.sellCoin(req.body.email,req.body.name, req.body.amount)
     .then(function(user){
         console.log("Sold coin")
         console.log("User", user)
         res.json(user)
     })
     .catch((err)=>{
         res.json("Error")
     })
});
module.exports = router;