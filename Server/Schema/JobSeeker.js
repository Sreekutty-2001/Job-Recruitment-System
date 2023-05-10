const mongoose = require("mongoose");

const jobSeekerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  userImage: {
    type: Object,
  },
  Tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('JobSeekerData',jobSeekerSchema)
