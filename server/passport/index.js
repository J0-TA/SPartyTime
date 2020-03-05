const passport = require('passport');

require('./serializers');
require('./spotifyStrategy');

module.exports = (app)  => {
  app.use(passport.initialize());
  app.use(passport.session());
}
