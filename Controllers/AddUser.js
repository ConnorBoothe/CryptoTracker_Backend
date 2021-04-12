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
router.post('/API/AddUser', function(req, res){
    console.log("Trying to add user")
    console.log(req.body)
    users.addUser(req.body.first_name, req.body.last_name, 
        req.body.email, req.body.password)
     .then(function(){
         console.log("Added user")
         res.json("Complete")
     })
});
module.exports = router;