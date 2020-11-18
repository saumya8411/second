const sequelize = require("sequelize");

const db = new sequelize(process.env.DB, process.env.DB_user, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST
});

// console.log('🚀', process.env.DB_other)

db.authenticate()
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((e) => {
    console.log("error in database connectivity");
});

module.exports = { db };
