const express = require('express');
const passport = require('passport');

const router = express.Router();

const portfolio_controller = require('../controllers/portfolio.controller');

router.get(
  '/',
  passport.authenticate('user', { session: false }),
  portfolio_controller.get
);
router.post(
  '/',
  passport.authenticate('admin', { session: false }),
  portfolio_controller.create
);
router.put(
  '/',
  passport.authenticate('admin', { session: false }),
  portfolio_controller.update
);
router.delete(
  '/',
  passport.authenticate('admin', { session: false }),
  portfolio_controller.remove
);

module.exports = router;
