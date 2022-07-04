const smsModel = require('../models/sms.model');

exports.studentlogin = (req,res) =>
{
 smsModel.slogin(req.body,(err,stu)=>
 {
    console.log("Function slogin");
    if(err) throw(err);
    else
        {
            console.log("Student logging in");
            res.send(stu);
        }

 })
}

exports.studashboard = (req,res) =>
{
  smsModel.sdash((err,stu) =>
  {
    console.log("Function sdash");
        if(err) throw err;
        else 
        {
        console.log("Getting Student Dashboard");
        res.send(stu);
        }
  });
}

exports.getStudentMarks = (req,res) =>
{
    console.log("Marks of student");
    smsModel.getMarks(req.params.id,(err,stu) =>
    {
        console.log("Function getMarks");
        if(err) throw err;
        else 
        {
        console.log("Getting Marks");
        res.send(stu);
        }
    });
}

exports.getStudentList = (req,res) =>
{
    //console.log("All Employees List");
    smsModel.getAll((err,stu) =>
    {
        console.log("Function getAll");
        if(err) throw err;
        else 
        {
        console.log("Getting Student List");
        res.send(stu);
        }
    });
}

exports.getMarksList = (req,res) =>
{
    smsModel.getm((err,stu) =>
    {
        console.log("Function getm");
        if(err) throw err;
        else 
        {
        console.log("Getting Marks List");
        res.send(stu);
        }
    });
}

exports.teacherlogin = (req,res) =>
{
 smsModel.tlogin(req.body,(err,tea)=>
 {
    console.log("Function tlogin");
    if(err) throw(err);
    else
        {
            console.log("Teacher logging in");
            res.send(tea);
        }

 })
}

exports.addStudent = (req,res) =>
 {
    console.log("data",req.body);
    if(req.body.constuctor === Object && Object(req.body).length ===0 )
    {
        res.send(400).send({success:false,message:'Please fill all the fields'});
    }
    else
    {
        console.log("Adding a student");
        smsModel.newStudent(req.body,(err,stu)=>
        {
          if (err) throw err;
          res.send({status:true,message:'Student added successfully',data:stu});
        })
    }
 }

 exports.updatemarks =(req,res)=>
 {
    console.log("data",req.body);
     if(req.body.constuctor === Object && Object(req.body).length ===0 )
     {
         res.send(400).send({success:false,message:'Please fill all the field'});
     }
     else
     {
         console.log("Updating marks");
         console.log(req.body.sub2);
         smsModel.update(req.params.id,req.body,(err,stu)=>
         {
           if (err) throw err;
           res.send({status:true,message:'Marks updated successfully',data:stu});
         })
     }
 }
