const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CrudDB",(err)=>{

if (!err)

console.log('mongoDb connection succesfully...');

else 
console.log('eroor in DB connection:' + json.string(err,undefined,2));
});


module.exports = mongoose;