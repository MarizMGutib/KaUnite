import User from '../models/user.js'; // Make sure this import is correct

export const signupUser = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  console.log("Request body:", req.body);

  // Check if all required fields are provided
  if (!fullName || !username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    user = new User({
      fullName,
      username,
      email,
      password, // Note: You should hash this password before saving
    });

    // Save user to database
    const savedUser = await user.save();
    console.log("User created successfully:", savedUser);

    res.status(201).json({ message: "User created successfully", userId: savedUser._id });
  } catch (error) {
    console.error("Error in signup:", error.message, error.stack);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};