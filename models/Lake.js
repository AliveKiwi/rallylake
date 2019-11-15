const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// console.log(Schema);
const lakeSchema = new Schema({
  district: { type: String },
  division: { type: String },
  recordNumber: { type: Number },
  location: { lat: Number, long: Number },
  taluk: { type: String },
  status: { type: String },
  video: { type: String },
  imgBefore: { type: String },
  imgAfter: { type: String }
});

const Lake = mongoose.model('Lake', lakeSchema);

module.exports = {
  Lake
};
