const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/Login")
 .then(()=>{
    console.log("mongoDB connected");
})
.catch((e)=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
   email:{
    type:String,
    required:true
   },
   pass:{
    type:String,
    required:true
   }
})

const collection1 = mongoose.model("collection1",newSchema)
module.exports=collection1