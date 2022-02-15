const Sequelize = require('sequelize'); // capital S: means to import a constructor function.

const sequelize = new Sequelize('ShopDB', 'dbmasteruser', 'F{T>Y)I{+|dTu`rr<;B?].ex)k4oYo5g', { dialect: 'mysql', host: 'ls-5f1f559b0d49ab35a6339151469365979f7fd620.ckfvonntqvam.ap-northeast-2.rds.amazonaws.com' });

module.exports = sequelize;