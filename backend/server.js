import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './route/auth.js'; // Importing routes
import userRoutes from './route/user.route.js'; // Importing routes

dotenv.config(); // Load environment variables from .env file

const app = express();
const ATLAS_URI = process.env.ATLAS_URI || 'mongodb://localhost:27017/KaUnite'; // Fallback to local MongoDB if env var is missing
console.log('MongoDB URI:', ATLAS_URI); // Check if URI is loaded correctly

// Middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello Worldadad");
});

// Connect to MongoDB
mongoose.connect(ATLAS_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use("/user", userRoutes); // Using the auth routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
