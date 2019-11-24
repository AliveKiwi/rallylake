const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateSchema = new Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  email: String,
  mobile: Number
});

const Corporate = mongoose.model('Corporate', corporateSchema);

module.exports = {
  Corporate
};
