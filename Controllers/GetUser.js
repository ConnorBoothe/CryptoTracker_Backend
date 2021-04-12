const express = require('express');
const router = express.Router();

var User = require('../models/User');
var users = new User();
//endpoint to add user to database
router.get('/API/GetUser/:email/:password', function(req, res){
    users.getUserByEmail(req.params.email,req.params.password)
     .then(function(users){
         res.send(users)
     })
     .catch((err)=>{
        res.send(err)
     })
});
module.exports = router;