const express = require('express');
const router = express.Router();
const { lakesRouter } = require('../controllers/LakesController');
const { zonesRouter } = require('../controllers/ZoneController');
const { usersRouter } = require('../controllers/UserController');
const { volunteerRouter } = require('../controllers/VolunteerController');
const { corporateRouter } = require('../controllers/CorporateController');
const { contactRouter } = require('../controllers/ContactController');
const { eventsRouter } = require('../controllers/EventsController');

router.use('/api/lakes', lakesRouter);
router.use('/api/zones', zonesRouter);
router.use('/api/users', usersRouter);
router.use('/api/events', eventsRouter);

router.use('/api/volunteer', volunteerRouter);
router.use('/api/corporate', corporateRouter);
router.use('/api/contact', contactRouter);

module.exports = {
  router
};
