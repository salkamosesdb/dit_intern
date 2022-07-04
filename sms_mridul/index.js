const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
var path = require('path');
const schema=require('./schema.js');
const stuschema=require('./schema1.js');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const cors =require('cors')
const app=express();
const port=5000;

app.use(express.json())
app.use(cors())
//app.use(morgan(tiny))passwordrohit23
mongoose.connect('mongodb+srv://Rohit_123:passwordrohit23@cluster1.9hif0.mongodb.net/?retryWrites=true&w=majority')
 .then(()=>{
      console.log("connected")
 })
 .catch((err)=>{
       console.log('failed')
 })
app.use(express.static(path.join(__dirname, './')))


app.post("/client",async(req,res)=>{
    try{
        const addclient =new schema(req.body);
        const insertclient = await addclient.save();
        res.send(insertclient);
    }catch(err){
        res.status(400).send(err)
    }
})

app.get('/top_10_student',async(req,res)=>{
    try{
  const top_10_student =  await stuschema.find({class:req.body.class,admission_year:req.body.admission_year}).sort({total_marks:-1}).limit(10);
     res.send(top_10_student);
    }catch(err){
        res.status(400).send(err)
    }
})



app.post('/register',async(req,res)=>{
    console.log(req.body);
    let user= await schema.find({email:req.body.email})
    console.log(user)
    if(user.length) return res.status(422).json({
       "success":false,
       "message":"User Already exists"
    })
    user=await schema.create({username:req.body.username,email:req.body.email,password:await bcrypt.hash(req.body.password,12),name:req.body.name,classes:req.body.classes,subjects:req.body.subjects})
    console.log(user)
    res.status(201).json({
       "success":true,
       user
    })
})

//login as teacher
app.post('/login/teacher',async(req,res)=>{
    const user=await schema.find({email:req.body.email})
    console.log(user)
    if(!user) return res.status(500).json({
        "success":false,
        "message":"User not found"
    })
    var token = jwt.sign({ email: req.body.email,id:user[0]._id}, 'joyk93661')
    console.log(user[0].password);
    console.log(req.body.password);
    const val=await bcrypt.compare(req.body.password,user[0].password);
    console.log(val);
    if(val){
        res.cookie({
            "token":token
        })
        res.status(200).json({
            "success":true,
            "message":"Login successful",
            "token":token,
            user
        })
    }
    else
    {
        res.status(200).json({
            "success":false,
            
        })
    }
})

// login as students
app.post('/login/student',async(req,res)=>{
    const user=await stuschema.find({email:req.body.email})
    console.log(user)
    if(!user) return res.status(500).json({
        "success":false,
        "message":"User not found"
    })
    var token = jwt.sign({ email: req.body.email,id:user[0]._id}, 'joyk93661')
    console.log(user[0].password);
    console.log(req.body.password);
    const val1 = await bcrypt.compare(req.body.password,user[0].password);
    console.log(val1);
    if(val1){
        res.cookie({
            "token":token
        })
        res.status(200).json({
            "success":true,
            "message":"Login successful",
            "token":token,
            user
        })
    }
    else
    {
        res.status(200).json({
            "success":false,
            
        })
    }
})

//student dashboard all details of particular student
app.post("/login/student/studentdashboard",async(req,res)=>{
    try{
        const getclient =await stuschema.findOne({email:req.body.email});
        res.status(200).json(getclient);
    }catch(err){
        res.status(400).send(err)
    }
})

app.patch("/client/:id",async(req,res)=>{
    try{
        const get_ind_client =await schema.findByIdAndUpdate(req.params.id,{username:req.body.username,email:req.body.email,password:await bcrypt.hash(req.body.password,12)},{
            new:true,
        })
        res.send( get_ind_client );
    }catch(err){
        res.status(400).send(err)
    }
})

app.delete("/client/:id",async(req,res)=>{
    try{
        const get_ind_client =await schema.findByIdAndDelete(req.params.id);
        res.send(get_ind_client);
    }catch(err){
        res.status(400).send(err)
    }
})

app.get("/client/:id",async(req,res)=>{
    try{
        const get_ind_client =await schema.findById(req.params.id);
        res.send(get_ind_client);
    }catch(err){
        res.status(400).send(err)
    }
})

app.get("/client",async(req,res)=>{
    try{
        const getclient =await schema.find();
        res.send(getclient);
    }catch(err){
        res.status(400).send(err)
    }
})

// app.get('/', function(req, res) {
//   res.sendFile('index.html')
// });

//teacher dashboard
app.post("/login/teacher/teacherdashboard",async(req,res)=>{
    try{
        const getteacher =await schema.find({email:req.body.email});
        res.send(getteacher);
    }catch(err){
        res.status(400).send(err)
    }
})

// register student
app.post("/login/teacher/teacherdashboard/registerstudent",async(req,res)=>{
  console.log(req.body.username);
  let user= await stuschema.find({email:req.body.email})
  console.log(user)
  if(user.length) return res.status(422).json({
     "success":false,
     "message":"User Already exists"
  })
  user=await stuschema.create({username:req.body.username,email:req.body.email,password:await bcrypt.hash(req.body.password,12),name:req.body.name,class:req.body.class,section:req.body.section,rollnum:req.body.rollnum,admission_year:req.body.admission_year,subjects:req.body.subjects})
  console.log(user)
  res.status(201).json({
     "success":true,
     user
  })
})

//all students
app.get("/login/teacher/teacherdashboard/displayallstudent",async(req,res)=>{
    try{
        const getstudent =await stuschema.find();
        res.send(getstudent);
    }catch(err){
        res.status(400).send(err)
    }
})

//Update Student marks
app.patch("/login/teacher/teacherdashboard/update_marks",async(req,res)=>{
    try{
      const update_student_marks= await stuschema.findOneAndUpdate({email:req.body.email},{subjects:req.body.subjects,total_marks:req.body.total_marks=await(req.body.subjects.sub1+req.body.subjects.sub2+req.body.subjects.sub3)},{
          new:true,
        });
        res.send(update_student_marks);
    }catch(err){
        res.status(400).send(err)
    }
})

//deleting a student
app.delete("/login/teacher/teacherdashboard/delete_student/:id",async(req,res)=>{
    try{
        console.log(req.params.id)
        const delete_student =await stuschema.findByIdAndDelete(req.params.id);
        
        res.json(delete_student);
    }catch(err){
        res.status(400).send(err)
    }
})

//update teacher details
app.put("/login/teacher/teacherdashboard/update_teacher_profile",async(req,res)=>{
    try{

        const update_teacher_profile= await schema.findOneAndUpdate({email:req.body.email},{username:req.body.username,email:req.body.email,password:await bcrypt.hash(req.body.password,12),name:req.body.name,classes:req.body.classes,subjects:req.body.subjects},{
          new:true,
        });
        res.send(update_teacher_profile);
    }catch(err){
        res.status(400).send(err)
    }
})

// update student details
app.patch("/login/student/studentdashboard/update_student_profile",async(req,res)=>{
    try{

        const update_student_profile= await stuschema.findOneAndUpdate({email:req.body.email},{email:req.body.email,name:req.body.name,class:req.body.class,section:req.body.section,rollnum:req.body.rollnum,admission_year:req.body.admission_year},{
          new:true,
        });
        res.send(update_student_profile);
    }catch(err){
        res.status(400).send(err)
    }
})



app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});
