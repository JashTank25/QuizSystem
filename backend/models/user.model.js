// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['candidate', 'admin', 'hr'], default: 'candidate' },
  //college: String,
  //resumeUrl: String,
  //resetToken: String,
  //resetTokenExpiry: Date
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
