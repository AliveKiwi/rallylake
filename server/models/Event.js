const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const eventSchema = new Schema({
  name: { type: String },
  dateFrom: { type: Date },
  dateTo: { type: Date },
  timeFrom: { type: Date },
  timeTo: { type: Date },
  location: { type: String },
  imgName: { type: String }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = {
  Event
};
