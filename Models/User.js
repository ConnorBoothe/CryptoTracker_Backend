const mongoose = require("mongoose");
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true },function(err){
    console.log("Connect")
});
var Schema = mongoose.Schema;
var CoinSchema = new Schema ({
    name:{type:String, required:true},
    amount:{type:Number, reqired: true}
})
var UserSchema = new Schema({
    first_name:{type:String, required: true},
    last_name:{type:String, required: true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    coins: [CoinSchema]
   
}, {collection: 'User'});
var UserDB = mongoose.model('User',UserSchema);

module.exports = class User {
     //return all users
     getAllUsers(){
        return UserDB.find({});
      }
      getUserById(id){
        return UserDB.find({_id: id});
      }
      getUserByEmail(email){
        return UserDB.find({email: email});
      }
      addUser(first_name, last_name, email, password){
        var user =new UserDB({first_name: first_name, last_name: last_name,
           email: email, password: password} );
        return user.save();
    }
     
}
