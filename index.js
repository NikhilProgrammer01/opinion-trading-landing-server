const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const waitlistRoutes = require('./routes/waitlistRoutes')

const app = express()

// CORS setup
app.use(cors({
  origin: 'http://localhost:5173', // replace with your actual frontend domain
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/waitlist', waitlistRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Export the app for Vercel to use
module.exports = app;
