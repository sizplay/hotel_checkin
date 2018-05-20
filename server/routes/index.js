const router = require('express').Router()

router.use('/users', require('./users'));
router.use('/user', require('./user'));
router.use('/books', require('./books'));

module.exports = router;
