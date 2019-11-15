const express = require('express');
const { Zone } = require('../models/Zone');

const router = express.Router();

// localhost:3000/lakes/register
router.post('/register', function(req, res) {
  const body = req.body;
  const zone = new Zone(body);
  zone
    .save()
    .then(function(zone) {
      res.send(zone);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/', function(req, res) {
  Zone.find()
    .then(function(zones) {
      res.send(zones);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put('/update/:zoneCode', function(req, res) {
  const body = req.body;
  const zoneCode = req.body.params;
  Zone.findOneAndUpdate(zoneCode, body, { new: true })
    .then(function(zone) {
      res.send(zone);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:zoneCode', function(req, res) {
  console.log(req.body.params);
  const zoneCode = req.body.params;
  Zone.deleteOne(zoneCode)
    .then(function(zone) {
      res.send(zone);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  zonesRouter: router
};
