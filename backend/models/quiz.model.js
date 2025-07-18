// models/QuizConfig.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizConfigSchema = new Schema({
  title: String,
  topic: { type: String, enum: ['Python', 'OOPs', 'DBMS', 'DSA', 'Algorithms'] },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'] },
  duration: Number,
  totalQuestions: Number,
  passPercentage: Number,
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('QuizConfig', quizConfigSchema);
