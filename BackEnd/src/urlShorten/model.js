const { db } = require("./connection");
const { DataTypes } = require("sequelize");

const ShortUrl = db.define("short_url", {
    full: {
        type: DataTypes.STRING,
        allowNull:false 
    },
    short: {
        type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
    }
})

db.sync();
module.exports = { db, ShortUrl };

/*
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)
*/
