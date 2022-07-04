const mysql = require('mysql2');
const dbcon = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        passowrd:"letmein123",
        database:"nodejs"
    }  
);

dbcon.connect(function(error){
    if(error) throw error;
    console.log("Database connected successfully");

})

module.exports = dbcon;