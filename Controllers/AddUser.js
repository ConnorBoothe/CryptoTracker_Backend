const express = require('express');
const router = express.Router();

var User = require('../models/User');
var users = new User();
console.log("add user controller")
users.addUser("Connor", "Boothe", "connorboothe@gmail.com",
     "Niner96*")
     .then(function(){
         console.log("Added user")
     })
//send list of my courses
router.get('/API/AddUser', function(req, res){
    users.addUser("Connor", "Boothe", "connorboothe@gmail.com",
     "Niner96*")
     .then(function(){
         console.log("Added user")
     })
});
module.exports = router;