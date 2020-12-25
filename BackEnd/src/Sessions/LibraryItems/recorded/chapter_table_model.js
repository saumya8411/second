const { db } = require('../connections');
const { DataTypes } = require('sequelize');

const ChapterTable = db.define('chapter_table', {
    chapter_id: {
        type: DataTypes.INTEGER(255),
        primaryKey: true,
        autoIncrement:true
    },
    session_id: {
        type: DataTypes.INTEGER(255),
        references: 'session_tables', // <<< Note, its table's name, not object name
        referencesKey: 'session_id' // <<< Note, its a column name
    },
    customer_id: {
        type: DataTypes.INTEGER(255),
        references: 'customer_table',
        referencesKey:'customer_id'
    },
    chapter_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    chapter_number: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    chapter_learnings: {
        type: DataTypes.TEXT('long'),
        allowNull:false
    }
})

db.sync();
module.exports = { db, ChapterTable };