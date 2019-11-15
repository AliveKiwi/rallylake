const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: Number
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = {
  Volunteer
};
