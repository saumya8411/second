const mysql = require('mysql')

//Connecting to database
let connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_user,
    password : process.env.DB_PASSWORD,
    database : process.env.DB
  });
   
connection.connect(err => {
    if(err){
        throw err;
    }
    console.log("MYSQL Connected")
});

module.exports = connection