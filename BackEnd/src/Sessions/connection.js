const sequelize = require("sequelize");

const db = new sequelize("oyester1", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

db.authenticate()
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((e) => {
    console.log("ERROR DATABASE NOT CONNECTED");
  });

module.exports = { db };
