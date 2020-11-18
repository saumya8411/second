const mysql = require('mysql')

//Connecting to database
let connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    port     : process.env.RDS_PORT
});
   
console.log('✅',process.env.MYSQL_DATABASE)
console.log('✅',process.env.DB_HOST)

connection.connect(err => {
    if(err){
        throw err;
    }
    console.log("MYSQL Connected")
});

module.exports = connection