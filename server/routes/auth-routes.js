const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

router.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-modify-playback-state', 'playlist-modify-public', 'user-read-private']
  }),
  function (req, res) {}
);

router.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify'),
  function (req, res) {
    res.redirect("http://localhost:3000/home")
  }
);

//Resto de endpoints que creo que no es necesario reformular
router.get('/auth/currentUser', (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user)
  } else {
    next(new Error('Not logged in'))
  }
});

router.get('/auth/logout', (req, res) => {
  req.logout();
  res.status(200).json({
    message: 'logged out'
  })
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
})

module.exports = router;