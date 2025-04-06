const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./config/db');
const waitlistRoutes = require('./routes/waitlistRoutes')

const app = express()

// CORS setup
app.use(cors({
  origin: ['http://localhost:5173', 'https://opinion-trading-landing-client-side.vercel.app'],
  credentials: true
}));


// Middleware
app.use(express.json());

// Routes
app.use('/api/waitlist', waitlistRoutes);

// MongoDB Connection
connectDB();

// Export the app for Vercel to use
module.exports = app;
