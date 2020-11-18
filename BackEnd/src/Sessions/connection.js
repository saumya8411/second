const sequelize = require("sequelize");

const db = new sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_user, process.env.MYSQL_ROOT_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST,
});

db.authenticate()
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((e) => {
    console.log("ERROR DATABASE NOT CONNECTED");
  });

module.exports = { db };
