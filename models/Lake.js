const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// console.log(Schema);
const lakeSchema = new Schema({
  recordNumber: { type: Number },
  state: { type: String },
  district: { type: String },
  taluk: { type: String },
  hobli: { type: String },
  village: { type: String },
  zone: { type: String },
  status: { type: String },
  video: { type: String },
  imgBefore: { type: String },
  imgAfter: { type: String }
});

const Lake = mongoose.model('Lake', lakeSchema);

module.exports = {
  Lake
};
