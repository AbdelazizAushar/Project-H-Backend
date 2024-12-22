// User Schema
const mongoose = require('mongoose')

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 20,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    profileImg: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    preferences: {
      type: Array,
      default: [],
    },
    followers: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'User',
    },
    following: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'User',
    },
    posts: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'Post',
    },
    savedPosts: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'Post',
    },
    likedPosts: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'Post',
    },
    savedJobs: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'Job',
    },
    appliedJobs: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'Job',
      status: {
        type: String,
        enum: [
          'pending',
          'accepted',
          'rejected',
          'no longer accepting responses',
        ],
        default: 'pending',
      },
    },
    postedJobs: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: 'Job',
      status: {
        type: String,
        enum: ['active', 'no longer accepting responses'],
        default: 'active',
      },
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('User', User)