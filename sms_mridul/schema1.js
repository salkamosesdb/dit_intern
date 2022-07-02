const mongoose=require('mongoose')

const studentschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
      
    },
    name:{
        type:String,
        required:true
    },
    class:{
        type:Number,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    rollnum:{
        type:Number,
        required:true
    },
    admission_year:{
        type:Number,
        required:true
    },
    subjects:{
      sub1:{
        type:Number,
        default:0

      },
      sub2:{
        type:Number,
        default:0

      },
      sub3:{
        type:Number,
        default:0

      }
    },
    total_marks:{
      type:Number,
      default:0

    }


})
module.exports=mongoose.model('students',studentschema)