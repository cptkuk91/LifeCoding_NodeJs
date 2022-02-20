var db = require('../lib/db');
var bcrypt = require('bcrypt');

module.exports = function (app) {
    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy,
        GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        console.log('serializeUser', user);
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        var user = db.get('users').find({id:id}).value();
        console.log('deserializeUser', id, user);
        done(null, user);
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'pwd'
        },
        function(email, password, done) {
            console.log('LocalStrategy', email, password);
            var user = db.get('users').find({
                email: email
            }).value();
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if(result) {
                        return done(null, user, {
                            message: 'Welcome.'
                        });
                    } else {
                        return done(null, false, {
                            message: 'Password is not correct.'
                        });
                    }
                });
            } else {
                return done(null, false, {
                    message: 'There is no email.'
                });
            }
        }
    ));

    passport.use(new GoogleStrategy({
            clientID: "311095303022-l4hrbvefkehkqo0u0qppn95hv7vdff3l.apps.googleusercontent.com",
            clientSecret: "fPlbpHOxcrU_hhjuZKEJkSXN",
            callbackURL: "http://localhost:3000/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            User.findOrCreate({
                googleId: profile.id
            }, function (err, user) {
                return done(err, user);
            });
        }
    ));
    return passport;
}
