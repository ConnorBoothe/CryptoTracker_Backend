const express = require('express');
const router = express.Router();

var User = require('../models/User');
var users = new User();
//endpoint to add user to database
router.post('/API/AddUser', function(req, res){
    users.addUser(req.body.first_name, re.body.last_name, 
        req.body.email, req.body.password)
     .then(function(){
         console.log("Added user")
     })
});
module.exports = router;