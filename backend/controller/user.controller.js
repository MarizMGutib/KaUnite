// import { Request, Response } from "express";
import User from "../model/user.model.js";

// Signup controller
export const signup = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    user = new User({
      fullName,
      username,
      email,
      password,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Server error" });
  }
};
