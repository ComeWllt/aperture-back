const express = require('express');
const passport = require('passport');

const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get(
  '/',
  passport.authenticate('admin', { session: false }),
  user_controller.getAll
);
router.post(
  '/',
  passport.authenticate('admin', { session: false }),
  user_controller.create
);
router.put(
  '/',
  passport.authenticate('admin', { session: false }),
  user_controller.update
);
router.delete(
  '/',
  passport.authenticate('admin', { session: false }),
  user_controller.removeAll
);

router.get(
  '/:userId',
  passport.authenticate('admin', { session: false }),
  user_controller.getById
);
router.post(
  '/:userId',
  passport.authenticate('admin', { session: false }),
  user_controller.createById
);
router.put(
  '/:userId',
  passport.authenticate('admin', { session: false }),
  user_controller.updateById
);
router.delete(
  '/:userId',
  passport.authenticate('admin', { session: false }),
  user_controller.removeById
);

module.exports = router;
