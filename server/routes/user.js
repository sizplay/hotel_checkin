const router = require('express').Router();
const { User } = require('../db').models;

router.post('/me', (req, res, next) => {
  User.findOne({ where: { faceId: req.body.faceId } })
    .then(result => {
        res.send(result)
      })
      .catch(next);
});

router.put('/me/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      user.update(req.body);
      res.send(user);
    })
    .catch(next);
});

router.delete('/me/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      user.destroy();
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;
