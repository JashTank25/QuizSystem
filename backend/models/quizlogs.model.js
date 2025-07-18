const mongoose = require('mongoose');

const QuizLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  browserDetails: { type: String, default: '' },
  ipAddress: { type: String, default: '' },
  activityLog: { type: [String], default: [] },
  screenshotAttempt: { type: Boolean, default: false },
  devtoolsOpened: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizLog', QuizLogSchema);
