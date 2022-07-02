const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,

    },
    name:{
        type:String,
    },
    classes:{
      type:Number,
  
    },
    


})
module.exports=mongoose.model('users',userschema)
