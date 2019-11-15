const express = require('express');
const { Event } = require('../models/Event');

const multer = require('multer');

const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now());
  }
});

var upload = multer({ storage: storage });

// localhost:3000/events/register
router.post('/register', function(req, res) {
  const body = req.body;
  const event = new Event(body);
  event
    .save()
    .then(function(event) {
      res.send(event);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/', function(req, res) {
  Event.find()
    .then(function(events) {
      res.send(events);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put('/update/:name', function(req, res) {
  const body = req.body;
  const name = req.body.params;
  Event.findOneAndUpdate(name, body, { new: true })
    .then(function(event) {
      res.send(event);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:name', function(req, res) {
  console.log(req.body.params);
  const name = req.body.params;
  Event.deleteOne(name)
    .then(function(event) {
      res.send(event);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  eventsRouter: router
};
