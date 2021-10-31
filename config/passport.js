  const bcrypt = require('bcrypt');
const User = require("../models/User"); 
const LocalStrategy = require('passport-local').Strategy;



module.exports - function(passport) {
    
passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: "that email doesn't exisit." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      bcrypt.compare(password, user.password, (err, isMatch) =>{
         if(err) throw err;
         
         if(isMatch) {
             return done(null, user);
         } else {
             return done(null, false, { message: 'password is WRONG!'})
         }
      });
      
    });


  }

  
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });





}
