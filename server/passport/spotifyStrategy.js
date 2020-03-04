require('dotenv').config();

const passport = require('passport');
const User = require('../models/User');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy({
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      // callbackURL: `http://localhost:3000/home/callback`
      callbackURL: `http://localhost:4000/api/auth/spotify/callback`
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      console.log("accessToken=", accessToken)
      console.log("refreshToken=", refreshToken)
      console.log(done)
      console.log("*".repeat(100))

      User.find({
          spotifyID: profile.id
        })
        .then(foundUser => {
          if (foundUser.length > 0) {
            User.update({
              spotifyID: profile.id
            }, {
              token: accessToken,
              refreshToken: refreshToken
            }, function (err, user) {
              return done(err, foundUser[0]);
            })
          } else {
            User.create({
              spotifyID: profile.id,
              token: accessToken,
              refreshToken: refreshToken
            }, function (err, userCreated) {
              return done(err, userCreated);
            })
          }
        })
    }
  )
);