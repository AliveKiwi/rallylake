const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
  zoneCode: String
});

const Zone = mongoose.model('Zone', zoneSchema);

module.exports = {
  Zone
};
