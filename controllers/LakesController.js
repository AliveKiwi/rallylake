const express = require('express');
const { Lake } = require('../models/Lake');

const router = express.Router();

// localhost:3000/lakes/register
router.post('/register', function(req, res) {
  const body = req.body;
  const lake = new Lake(body);
  lake
    .save()
    .then(function(lake) {
      res.send(lake);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/', function(req, res) {
  Lake.find()
    .then(function(lakes) {
      res.send(lakes);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put('/update/:recordNumber', function(req, res) {
  const body = req.body;
  const recordNumber = req.body.params;
  Lake.findOneAndUpdate(recordNumber, body, { new: true })
    .then(function(lake) {
      res.send(lake);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:recordNumber', function(req, res) {
  console.log(req.body.params);
  const recordNumber = req.body.params;
  Lake.deleteOne(recordNumber)
    .then(function(lake) {
      res.send(lake);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  lakesRouter: router
};
