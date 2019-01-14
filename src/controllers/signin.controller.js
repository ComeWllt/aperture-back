const User = require('../models/user');
const Tests = require('../models/test');
const passport = require('passport');
require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');

exports.create = function(req, res) {
  User.findOne(
    {
      username: req.body.username
    },
    function(err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({
          success: false,
          msg: 'Authentication failed. User not found.'
        });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(
              {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12,
                data: user.toJSON()
              },
              process.env.PASSPORT_SECRET
            );
            // return the information including token as JSON
            res.json({ success: true, token: token });
            Tests.create(req.body).then(() => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json({ username: req.body.username });
            });
          } else {
            res.status(401).send({
              success: false,
              msg: 'Authentication failed. Wrong password.'
            });
          }
        });
      }
    }
  );
};
