const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const eventSchema = new Schema({
  name: { type: String },
  dateFrom: { type: Date },
  dateTo: { type: Date },
  timings: { type: String },
  location: { type: String },
  imgURL: { type: String }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = {
  Event
};
