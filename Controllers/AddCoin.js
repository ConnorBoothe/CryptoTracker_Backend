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
router.post('/API/AddCoin', function(req, res){
 
    users.addCoin(req.body.email,req.body.name, req.body.amount)
     .then(function(){
         console.log("Added coin")
         res.json("Complete")
     })
     .catch((err)=>{
         res.json("Error")
     })
});
module.exports = router;