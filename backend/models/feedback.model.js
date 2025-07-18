const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  strengths: { type: String, default: '' },
  improvements: { type: String, default: '' },
  verdict: { type: String, default: '' },
  cumulativeStrengths: { type: String, default: '' },
  cumulativeWeaknesses: { type: String, default: '' },
  recommendation: { type: String, default: '' },
  technicalReadiness: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
