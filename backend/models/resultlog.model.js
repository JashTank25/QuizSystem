// models/ResultLog.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultLogSchema = new Schema({
  quizAttemptId: { type: Schema.Types.ObjectId, ref: 'QuizAttempt' },
  browserInfo: String,
  ipAddress: String,
  activityLog: Schema.Types.Mixed
}, { timestamps: true });

module.exports = mongoose.model('ResultLog', resultLogSchema);
