const express = require('express');
const multer = require('multer');
const router = express.Router();
const uploadLocation = require('../../client/src/uploads/uploadsLocation');
const { Lake } = require('../models/Lake');

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadLocation);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post(
  '/register',
  upload.fields([{ name: 'imgBefore' }, { name: 'imgAfter' }]),
  function(req, res) {
    const body = req.body;
    const files = req.files;
    body.imgBefore = files.imgBefore[0].filename;
    body.imgAfter = files.imgAfter[0].filename;
    // console.log(body);
    const lake = new Lake(body);
    lake
      .save()
      .then(function(lake) {
        res.send(lake);
      })
      .catch(function(err) {
        res.send(err);
      });
  }
);

router.get('/:recordNumber', function(req, res) {
  const recordNumber = req.params.recordNumber;
  Lake.findOne({ recordNumber })
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
  const recordNumber = req.params.recordNumber;
  Lake.findOneAndUpdate(recordNumber, body, { new: true })
    .then(function(lake) {
      res.send(lake);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:recordNumber', function(req, res) {
  const recordNumber = req.params.recordNumber;
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
