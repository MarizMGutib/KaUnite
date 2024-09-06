const express = require('express');
const connectDB = require('./connect.cjs');

const app = express();

// Middleware and route setup here...

const PORT = process.env.PORT || 5000;

connectDB()
  .then(client => {
    // MongoDB is connected, start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });
