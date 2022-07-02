var db = require('../../config/db.config');

var Student = (student) =>
{
    this.sid=student.sid;
    this.sname=student.sname;
    this.class=student.class;
    this.ay=student.ay;
    this.yoj=student.yoj;
    this.sub1=student.sub1;
    this.sub2=student.sub2;
    this.sub3=student.sub3;
    this.avgm=student.avgm;
}

var Teacher = (teacher) =>
{
  this.tid=teacher.tid;
  this.tname=teacher.tname;
}

Student.slogin = (studata,result) =>
{
  db.query("select * from studentlogin where sid = ? and pass = ?",[studata.sid,studata.pass],(err,res) =>
  {
    if(err) throw err;
    else{
      console.log("Login successful");
      result(null,res);
    }
  })
}

Student.sdash = (result) =>
{
  db.query('select sname,avgm from studentdets order by avgm desc',(err,res)=>
  {
    if(err) throw(err);
    else{
        console.log("Student Dashboard fetched successfully");
        result(null,res);
    }
  })
}

Student.getAll = (result) =>
{
 db.query('select * from studentdets', (err,res)=>
 {
    if(err) throw(err);
    else{
        console.log("Student List fetched successfully");
        result(null,res);
    }
 })
}

Student.getm = (result) =>
{
 db.query('select sname,sub1,sub2,sub3 from studentdets', (err,res)=>
 {
    if(err) throw(err);
    else{
        console.log("Marks List fetched successfully");
        result(null,res);
    }
 })
}

Student.getMarks = (id,result) =>
{
  db.query('select sub1,sub2,sub3 from studentdets where sid=?',[id],(err,res)=>
  {
    if(err) throw(err);
    else{
        console.log("Student Marks fetched successfully");
        result(null,res);
    }
  })
}

Student.newStudent = (studata,result) =>
{
  db.query('insert into studentdets set ?',studata,(err,res)=>
  {
    if(err) throw(err);
    else{
        console.log("Student added successfully");
        result(null,res);
    }
  });
}


Teacher.tlogin = (teadata,result) =>
{
  db.query("select * from teacherlogin where tid = ? and pass = ?",[teadata.tid,teadata.pass],(err,res) =>
  {
    if(err) throw err;
    else{
      console.log("Login successful");
      result(null,res);
    }
  })
}

Student.update = (id,studata,result) =>
{
  db.query('update studentdets SET sub1=?, sub2=? and sub3=? where sid=?',[studata.sub1,studata.sub2,studata.sub3,id],(err,res)=>
  {
    if(err) throw err;
    else{
      console.log("Updating successful");
      result(null,res);
    }
  })
 
}

module.exports = Student,Teacher;