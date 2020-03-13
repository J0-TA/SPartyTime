require('dotenv').config();

const passport = require('passport');
const User = require('../models/User');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy({
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: `/api/auth/spotify/callback`
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      User.find({
          spotifyID: profile.id
        })
        .then(foundUser => {
          if (foundUser.length > 0) {
            User.updateOne({
              spotifyID: profile.id
            }, {
              token: accessToken,
              refreshToken: refreshToken,
              photo: profile.photos[0],
              product: profile.product,
              spotifyUri: profile._json.uri
            }, function (err, user) {
              return done(err, foundUser[0]);
            })
          } else {
            User.create({
              spotifyID: profile.id,
              token: accessToken,
              refreshToken: refreshToken,
              photo: profile.photos[0],
              product: profile.product,
              spotifyUri: profile._json.uri
            }, function (err, userCreated) {
              return done(err, userCreated);
            })
          }
        })
    }
  )
);