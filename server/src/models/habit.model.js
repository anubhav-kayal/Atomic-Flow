const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true // Speeds up fetching habits for a specific user
  },
  title: { 
    type: String, 
    required: [true, 'Habit title is required'],
    trim: true,
    maxLength: 50
  },
  color: { 
    type: String, 
    default: '#3B82F6' // Default blue
  },
  frequency: {
    type: String,
    enum: ['DAILY', 'WEEKLY'],
    default: 'DAILY'
  },
  isArchived: { 
    type: Boolean, 
    default: false // Soft delete to preserve analytics
  }
}, { timestamps: true });

module.exports = mongoose.model('Habit', HabitSchema);