const { db } = require('../connections');
const { DataTypes } = require('sequelize');

const LessonTable = db.define('lesson_table', {
    lesson_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    },
    session_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'session_table',
            key:'session_id'
        }
    },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'customer_table',
            key:'customer_id'
        }
    },
    chapter_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'chapter_table',
            key:'chapter_id'
        }
    },
    lesson_name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lesson_number: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    lesson_video_id: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    lesson_assignment_id: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    lesson_quiz_id: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    lesson_handouts_id: {
        type: DataTypes.INTEGER,
        allowNull:true
    }
})

db.sync();
module.exports = { db, LessonTable };