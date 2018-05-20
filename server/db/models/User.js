const conn = require('../conn');
const Sequelize = require('sequelize');

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  faceId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = User;
