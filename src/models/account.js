const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true, unique: true },
  balance: { type: Number, required: true },
  owner: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);