const router = require('express').Router();

router.use('/auth', require('./auth-routes'))
router.use('/parties', require('./parties'))

module.exports = router;