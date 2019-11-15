const express = require('express');
const { Contact } = require('../models/Contact');

const router = express.Router();

router.post('/register', function(req, res) {
  const body = req.body;
  const contact = new Contact(body);
  contact
    .save()
    .then(function(contact) {
      res.send(contact);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get('/', function(req, res) {
  Contact.find()
    .then(function(contacts) {
      res.send(contacts);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete('/delete/:_id', function(req, res) {
  console.log(req.body.params);
  const id = req.body.params;
  Contact.deleteOne(id)
    .then(function(contact) {
      res.send(contact);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = {
  contactRouter: router
};
