const conn = require('../conn');
const Sequelize = require('sequelize');

const Book = conn.define('books', {
  startDate: {
    type: Sequelize.STRING,
  },
  endDate: {
    type: Sequelize.STRING,
  },
  room: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = Book;
