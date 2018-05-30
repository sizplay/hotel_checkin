const conn = require('../conn');
const Sequelize = require('sequelize');

const User = conn.define('users', {
  name: Sequelize.STRING,
  faceId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  gender: Sequelize.STRING,
  age: Sequelize.STRING,
  race: Sequelize.STRING,
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = User;
