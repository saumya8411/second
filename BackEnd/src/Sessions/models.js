const { db } = require("./connection");
const { DataTypes } = require("sequelize");

const Session = db.define("session_table", {
  session_id : {
  		type: DataTypes.INTEGER(255),
  		primaryKey:true,
		allowNull: false,
		autoIncrement:true
  },
  customer_id: {
  		type: DataTypes.INTEGER(255),
  		allowNull: true,
  		// defaultValue: Null
  },
  session_type:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null
  },
  session_name:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null
  },
  session_description:{
  		type: DataTypes.TEXT('long'),
  		allowNull: true,
  		// defaultValue: Null/
  },
  session_tags:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null
  },
  session_tagline:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null
  },
  session_trainer_id:{
  		type: DataTypes.INTEGER(255),
  		allowNull: true,
  		// defaultValue: Null
  },
  session_duration:{
  		type: DataTypes.INTEGER(50) ,
  		allowNull: true,
  		// defaultValue: Null
  },
  session_fee:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null
  },
  session_link:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null
  },
  session_uploaded_on:{
  		 type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
  },
  session_occurance:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null
  },
  session_start_date:{
  		type: DataTypes.DATEONLY, 
  		defaultValue: DataTypes.NOW,
  		allowNull: true,
  },
  session_start_time:{
  		type: DataTypes.TIME, 
  		defaultValue: DataTypes.NOW,
  		allowNull: true,
  },
  session_end_time:{
  		type: DataTypes.TIME, 
  		defaultValue: DataTypes.NOW,
  		allowNull: true,
  },
  session_registration:{
  		type: DataTypes.BOOLEAN, 
  		defaultValue: DataTypes.NOW,
  		allowNull: true,
  },
  session_associated_course_id:{
  		type: DataTypes.INTEGER(255),
  		allowNull: true,
  		// defaultValue: Null
  },
  session_zoom_code:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null	
  },
  session_zoom_password:{
  		type: DataTypes.STRING ,
  		allowNull: true,
  		// defaultValue: Null
  }


});

db.sync();

module.exports = { db, Session };