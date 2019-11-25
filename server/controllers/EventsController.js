const express = require('express');
const multer = require('multer');
const router = express.Router();
const uploadLocation = require('../../client/src/uploads/uploadsLocation');

const { Event } = require('../models/Event');

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadLocation);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post('/register', upload.single('imgName'), function(req, res) {
  const body = req.body;
  const file = req.file;
  body.imgName = file.filename;
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

router.get('/:_id', function(req, res) {
  const _id = req.params._id;
  Event.findOne({ _id })
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
