const { db } = require("./connection");
const { DataTypes } = require("sequelize");

const User = db.define("customer_table", {
  customer_id : {
  		type: DataTypes.INTEGER(255),
      allowNull: false,
      autoIncrement:true,
      primaryKey:true
  },
  customer_first_name:{
  		type: DataTypes.STRING ,
  		allowNull: false
  },
  customer_last_name:{
  		type: DataTypes.STRING ,
  		allowNull: true
  },
  customer_email:{
  		type: DataTypes.STRING,
      allowNull: false
  },
  customer_password:{
  		type: DataTypes.STRING ,
  		allowNull: false
  },
  customer_phone_number:{
  		type: DataTypes.INTEGER(15) ,
  		allowNull: false
  },
  customer_institute_name:{
  		type: DataTypes.STRING,
  		allowNull: false
  },
  customer_subdomain_name:{
  		type: DataTypes.STRING ,
  		allowNull: false
  },
  customer_profile_picture:{
        type: DataTypes.STRING ,
        defaultValue:"https://ga.berkeley.edu/wp-content/uploads/2015/08/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
  },
  customer_short_introduction:{
    type: DataTypes.STRING,
    allowNull:true       
  },
  customer_skills:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  },
  customer_subscription:{
  		type: DataTypes.STRING,
  		allowNull: true
  },
  customer_facebook_id:{
  		type: DataTypes.STRING, 
  		allowNull: true
  },
  customer_facebook_id:{
  		type: DataTypes.STRING, 
  		allowNull: true
  },
  customer_linkedin_id:{
  		type: DataTypes.STRING, 
  		allowNull: true
  },
  customer_twitter_id:{
  		type: DataTypes.STRING, 
  		allowNull: true
  },
  customer_email_verified:{
        type: DataTypes.BOOLEAN ,
        defaultValue:false
  },
  customer_phone_verified:{
    type: DataTypes.BOOLEAN ,
    defaultValue:false
  },
  customer_zoom_jwt_token:{
    type: DataTypes.STRING,
    allowNull : true
  },
  customer_zoom_email:{
      type: DataTypes.STRING,
      allowNull: true
  }

});

db.sync();

module.exports = { db, User };
