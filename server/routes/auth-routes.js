const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Login del repo del viernes de Dani
// const login = (req, user) => {
//   return new Promise((resolve, reject) => {
//     req.login(user, err => {
//       console.log('req.login ')
//       console.log(user)


//       if (err) {
//         reject(new Error('Something went wrong'))
//       } else {
//         resolve(user);
//       }
//     })
//   })
// }
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, theUser, failureDetails) => {

//     // Check for errors
//     if (err) next(new Error('Something went wrong'));
//     if (!theUser) next(failureDetails)

//     // Return user and logged in
//     login(req, theUser).then(user => res.status(200).json(req.user));

//   })(req, res, next);
// });
// Hasta aquí

// Login con Spotify pendiente de reformular

// router.get(
//   '/auth/spotify',
//   passport.authenticate('spotify', {
//     scope: ['user-modify-playback-state', 'playlist-modify-public', 'user-read-private']
//   }),
//   function (req, res) {

//   }
// );

router.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-modify-playback-state', 'playlist-modify-public', 'user-read-private']
  }),
  function (req, res) {}
);

router.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    res.redirect("http://localhost:3000/home?")
  }
);

// router.get(
//   '/auth/spotify/callback',
//   passport.authenticate('spotify', {
//     failureRedirect: '/login'
//   }),
//   function (req, res) {
//     console.log("entraXXXentraXXXentraXXXentraXXXentraXXXentraXXXentraXXXentraXXX")
//     // res.json(req.user); //
//     res.redirect(`http: //localhost:3000/home/#` +
//       querystring.stringify({
//         access_token: access_token,
//         refresh_token: refresh_token
//       }));
//   }
// );
// Hasta aquí

//Resto de endpoints que creo que no es necesario reformular
router.get('/auth/currentUser', (req, res, next) => {
  console.log("req.session", req.session)

  if (req.session.user) {
    res.status(200).json(req.session.user);
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