const mysql = require('mysql');
const dbcon = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"sms"
    }  
);

dbcon.connect(function(error){
    if(error) throw error;
    console.log("Database connected successfully");

})

module.exports = dbcon;