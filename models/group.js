const { DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Cadet = require('./cadet');

const Group = sequelize.define('Group', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name_group: {
      type: DataTypes.STRING,
      allowNull: false        
    },
});

Group.hasMany(Cadet, { onDelete: 'cascade', foreignKey: 'group_fk' })

module.exports = Group;