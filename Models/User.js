const mongoose = require("mongoose");
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
      getUserByEmail(email, password){
        return UserDB.find(
          {
            $and:
              [{
                email: email,
                password: password
              }]
          }
          
          );
      }
      addUser(first_name, last_name, email, password){
        var user =new UserDB({first_name: first_name, last_name: last_name,
           email: email, password: password} );
        return user.save();
      }
      addCoin(email, name, amount){
        console.log(email)
        return new Promise((resolve, reject) => {
          UserDB.findOne({email: email})
          .then((user)=>{
            var coinIndex = -1;
            for(var i = 0; i < user.coins.length;i++){
              console.log(user.coins[i].name)
              if(user.coins[i].name == name){
                coinIndex = i;
              }
            }
            console.log(coinIndex)
            if(coinIndex > -1){
              console.log("running running")
              console.log(user.coins[coinIndex].amount)
              user.coins[coinIndex].amount += parseFloat(amount);
              console.log(user.coins[coinIndex].amount)
            }
            else{
              console.log("running else")
              user.coins.push({name:name, amount: amount});
            }
            
            user.save()
            resolve(user);
          })
          .catch((err)=>{
            reject(err)
          })
      })
}
}