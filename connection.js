const { Sequelize } = require('sequelize');

// 1: URI
// const sequelize = new Sequelize('mysql://user@localhost:3306?get-server-public-key=true') // Example

// 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });
  
  // 2: кожен параметр окремо
  // const sequelize = new Sequelize('test-db', 'username', 'password', {
  //   host: 'localhost',
  //   dialect: 'mysql'
  // });

module.exports = sequelize;