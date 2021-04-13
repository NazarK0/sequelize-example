const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Group = require('./group');

const Faculty = sequelize.define('Faculty', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name_fac: {
      type: DataTypes.STRING,
      allowNull: false
    },
});

Faculty.hasMany(Group, { onDelete: 'cascade', foreignKey: 'faculty_fk' })

module.exports = Faculty;