var express = require('express');
var passport = require('passport');
var router = express.Router();

var user = null;

router.get('/', function(req, res, next) {
if (user != null)
    user = req.user;  
  res.render('index', { message: req.flash('loginMessage'), user: user });
});

router.get('/main', isLoggedIn, function(req, res) {
  res.render('index.ejs', { user: req.user });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/main',
  failureRedirect: '/',
  failureFlash: true,
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
