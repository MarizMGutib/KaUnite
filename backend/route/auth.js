import express from 'express';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../model/user.model.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with a specific _id
    const newUser = new User({
      _id: new mongoose.Types.ObjectId('66da91f7a0cdab04fbb2bf79'),
      fullName,
      username,
      email,
      password: hashedPassword
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'An error occurred during signup' });
  }
});

// ... rest of the code remains the same

export default router;