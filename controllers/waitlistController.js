const Waitlist = require('../models/Waitlist')

exports.joinWaitlist = async (req, res) => {
  const { email, walletAddress } = req.body

  if (!email || !walletAddress) {
    return res.status(400).json({ message: 'All fields are required.' })
  }

  try {
    const exists = await Waitlist.findOne({ walletAddress })
    if (exists) {
      return res.status(400).json({ message: 'Wallet already joined the waitlist.' })
    }

    const newEntry = new Waitlist({ email, walletAddress })
    await newEntry.save()

    res.status(201).json({ message: 'Successfully joined waitlist!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error.' })
  }
}
