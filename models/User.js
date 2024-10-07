// models/User.js
const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field is required
    trim: true, // Removes extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures the email is unique
    lowercase: true, // Converts the email to lowercase
    match: [/\S+@\S+\.\S+/, 'is invalid'], // Validates the email format
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensures password is at least 6 characters
  },
  age: {
    type: Number,
    min: 0, // Ensures the age is a positive number
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current date
  }
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
