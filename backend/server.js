import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


import userRoutes from './route/user.js'; // Importing routes


dotenv.config(); // Load environment variables from .env file


const app = express();
const ATLAS_URI = process.env.ATLAS_URI || 'mongodb://localhost:27017/KaUnite'; // Fallback to local MongoDB if env var is missing
console.log('MongoDB URI:', ATLAS_URI); // Check if URI is loaded correctly




// Middleware
app.use(cors());
app.use(express.json());




app.get("/", (req, res) => {
  res.send("");
});


// Connect to MongoDB
mongoose.connect(ATLAS_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));


// Routes


app.use("/user", userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



