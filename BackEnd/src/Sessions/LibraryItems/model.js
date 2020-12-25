const { db } = require('./connections');
const { DataTypes } = require('sequelize');

const LibraryItem = db.define('library_items', {
    item_id: {
        type: DataTypes.INTEGER(255),
        primaryKey: true,
        autoIncrement: true
    },
    session_id: {
        type: DataTypes.INTEGER(255),
        allowNull: false,
        // references: 'session_tables', // <<< Note, its table's name, not object name
        // referencesKey: 'session_id' // <<< Note, its a column name
    },
    session_type: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: 'session_tables',
        // referencesKey: 'session_type'
    },
    customer_id: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: 'customer_tables',
        // referencesKey: 'customer_id'
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item_size: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

db.sync();

module.exports = { db, LibraryItem };