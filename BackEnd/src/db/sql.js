const mysql = require('mysql')

//Connecting to database
let connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE
});
   
connection.connect(err => {
    if(err){
        console.log('✅',process.env.MYSQL_DATABASE)
        throw err;
    }
    console.log("MYSQL Connected")
});

module.exports = connection