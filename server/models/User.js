const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now,
    },
    roles: {
      type: [String],
      default: ['user'],
      enum: ['admin', 'manager', 'user'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model('user', UserSchema);
