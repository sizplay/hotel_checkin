const router = require('express').Router();
const { Book } = require('../db').models;

router.get('/', (req, res, next) => {
  Book.findAll()
    .then(books => {
      res.send(books);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Book.create(req.body)
    .then(book => res.send(book))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Book.findById(req.params.id)
    .then(book => {
      book.update(req.body);
      res.send(book);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Book.findById(req.params.id)
    .then(book => {
      book.destroy();
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;
