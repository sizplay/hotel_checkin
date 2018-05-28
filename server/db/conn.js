const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/faces', {
  define: {
    timestamps: false,
    underscored: true
  },
  logging: false
});

module.exports = conn;

