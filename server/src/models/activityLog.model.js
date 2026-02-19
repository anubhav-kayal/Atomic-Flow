const mongoose = require('mongoose');

const ActivityLogSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  habitId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Habit', 
    required: true 
  },
  date: { 
    type: String, 
    required: true,
    // Format must always be "YYYY-MM-DD" to avoid timezone drift
  },
  completed: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// Compound Indexes for fast querying and preventing duplicate daily entries
ActivityLogSchema.index({ habitId: 1, date: 1 }, { unique: true });
ActivityLogSchema.index({ userId: 1, date: 1 });

module.exports = mongoose.model('ActivityLog', ActivityLogSchema);