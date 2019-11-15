const express = require('express');
const { Corporate } = require('../models/Corporate');

const router = express.Router();

// localhost:3000/lakes/register
router.post('/register', function(req, res) {
  const body = req.body;
  const corporate = new Corporate(body);
  corporate
    .save()
    .then(function(corporate) {
      res.send(corporate);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/', function(req, res) {
  Corporate.find()
    .then(function(corporates) {
      res.send(corporates);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:_id', function(req, res) {
  console.log(req.body.params);
  const id = req.body.params;
  Corporate.deleteOne(id)
    .then(function(corporate) {
      res.send(corporate);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  corporateRouter: router
};
