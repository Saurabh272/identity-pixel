const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  ip: String,
  fullName: String,
  email: String,
  address: String,
  phoneNumber: String,
  visitCount: { type: Number, default: 1 },
  confidenceScore: Number,
});

module.exports = mongoose.model('Lead', LeadSchema);