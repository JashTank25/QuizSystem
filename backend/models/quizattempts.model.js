// models/QuizAttempt.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizAttemptSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  quizConfigId: { type: Schema.Types.ObjectId, ref: 'QuizConfig' },
  startTime: Date,
  endTime: Date,
  status: { type: String, enum: ['in-progress', 'completed', 'timeout'], default: 'in-progress' },
  score: Number,
  percentage: Number,
  passed: Boolean,
  flaggedQuestions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  feedback: String
}, { timestamps: true });

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
