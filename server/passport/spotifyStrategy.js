require('dotenv').config();

const passport = require('passport');
const User = require('../models/User');
const SpotifyStrategy = require('passport-spotify').Strategy;

// console.log(process.env.SPOTIFY_CLIENT_ID)
// console.log(process.env.SPOTIFY_CLIENT_SECRET)
// console.log(process.env.BACK_BASE_URL)

passport.use(
  new SpotifyStrategy({
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: `http://localhost:3000/home/callback`
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      console.log("accessToken=", accessToken)
      console.log("refreshToken=", refreshToken)
      console.log(profile)
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
            }).then(_ => {
              console.log("foundUser>>>>", foundUser[0])
              return done({}, foundUser[0]);
            })
          } else {
            User.create({
              spotifyID: profile.id,
              token: accessToken,
              refreshToken: refreshToken
            }).then(userCreated => {
              console.log("userCreated>>>>", userCreated)
              return done({}, userCreated);
            })
          }
        })
    }
  )
);