const passport = require('passport');

console.log("index.js siendo llamado")

require('./serializers');
require('./spotifyStrategy');

module.exports = (app)  => {
  app.use(passport.initialize());
  app.use(passport.session());
}
