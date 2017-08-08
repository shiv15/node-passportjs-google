var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var habitat = require('habitat');

habitat.load(.env);

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clienSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALL_BACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));
