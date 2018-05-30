const conn = require('./conn');
const User = require('./models/User');
const Book = require('./models/Book');

Book.belongsTo(User);
User.hasMany(Book, {
  onDelete: 'cascade',
  hooks: true
});

const sync = () => conn.sync({ force: true });

const seed = () => {
  return Promise.all([
    Book.create({ startDate: 'Sun May 10 2018 10:22:41 GMT-0400 (EDT)', endDate: 'Sun May 20 2018 10:22:41 GMT-0400 (EDT)', room: '301' }),
    User.create({ name: 'ca', faceId: 'd4b11fdc9d2b471797d', gender: 'M', race: 'asian', age: 20, admin: true })
  ])
    .then(([book, user]) => {
      return Promise.all([
        book.setUser(user),
      ])
    })
};

module.exports = {
  conn,
  sync,
  seed,
  models: {
    Book,
    User
  }
};
