const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Cadet = sequelize.define('Cadet', {
    // атрибути моделі оголошуються тут
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false     // allowNull по замовчуванню true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false        
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false        
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    range: {
        type: DataTypes.STRING,
        allowNull: false        
      },
});

module.exports = Cadet;