const router = require('express').Router();
const { User } = require('../db').models;

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      user.update(req.body);
      res.send(user);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      user.destroy();
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;
