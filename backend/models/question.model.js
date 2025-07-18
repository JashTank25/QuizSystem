// models/Question.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: String,
  options: {
    a: String,
    b: String,
    c: String,
    d: String
  },
  correctAnswer: String,
  topic: String,
  difficulty: String,
  quizAttemptId: { type: Schema.Types.ObjectId, ref: 'QuizAttempt' }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
