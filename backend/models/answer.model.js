const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  attemptId: { type: mongoose.Schema.Types.ObjectId, ref: 'QuizAttempt', required: true },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  selectedOption: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  timeTaken: { type: Number, default: 0 }
});

module.exports = mongoose.model('Answer', AnswerSchema);
