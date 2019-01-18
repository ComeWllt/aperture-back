const express = require('express');
const passport = require('passport');

const router = express.Router();

const album_controller = require('../controllers/album.controller');

router.get(
  '/',
  passport.authenticate('user', { session: false }),
  album_controller.getAll
);
router.post(
  '/',
  passport.authenticate('admin', { session: false }),
  album_controller.create
);
router.put(
  '/',
  passport.authenticate('admin', { session: false }),
  album_controller.update
);
router.delete(
  '/',
  passport.authenticate('admin', { session: false }),
  album_controller.removeAll
);

router.get(
  '/:albumId',
  passport.authenticate('user', { session: false }),
  album_controller.getById
);
router.post(
  '/:albumId',
  passport.authenticate('admin', { session: false }),
  album_controller.createById
);
router.put(
  '/:albumId',
  passport.authenticate('admin', { session: false }),
  album_controller.updateById
);
router.delete(
  '/:albumId',
  passport.authenticate('admin', { session: false }),
  album_controller.removeById
);

module.exports = router;
