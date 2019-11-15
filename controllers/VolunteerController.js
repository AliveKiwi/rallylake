const express = require('express');
const { Volunteer } = require('../models/Volunteer');

const router = express.Router();

// localhost:3000/lakes/register
router.post('/register', function(req, res) {
  const body = req.body;
  const volunteer = new Volunteer(body);
  volunteer
    .save()
    .then(function(volunteer) {
      res.send(volunteer);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/', function(req, res) {
  Volunteer.find()
    .then(function(volunteers) {
      res.send(volunteers);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:_id', function(req, res) {
  console.log(req.body.params);
  const id = req.body.params;
  Volunteer.deleteOne(id)
    .then(function(volunteer) {
      res.send(volunteer);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  volunteerRouter: router
};
