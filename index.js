const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const waitlistRoutes = require('./routes/waitlistRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: 'http://localhost:5173/', // replace with your actual frontend domain
  credentials: true
}));

app.use(express.json())

// Routes
app.use('/api/waitlist', waitlistRoutes)

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
.catch(err => console.error('MongoDB connection error:', err))
