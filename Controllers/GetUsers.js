const express = require('express');
const router = express.Router();

var User = require('../models/User');
var users = new User();
//endpoint to add user to database
router.get('/API/GetAllUsers', function(req, res){
    console.log("API hit")
    users.getAllUsers()
     .then(function(users){
         res.send(users)
     })
});
module.exports = router;