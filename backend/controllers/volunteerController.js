const Volunteer = require('../models/volunteerModel') // Assuming your volunteer schema is in volunteerModel.js

// Get a volunteer by ID
exports.getData = async (req, res) => {
  try {
    const volunteerId = req.params.id
    const volunteer = await Volunteer.findById(volunteerId)

    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' })
    }

    res.json(volunteer)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

// Create a new volunteer (corrected route)
exports.postData = async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body)
    const savedVolunteer = await newVolunteer.save()
    res
      .status(201)
      .json({
        message: 'Volunteer created successfully!',
        volunteer: savedVolunteer,
      })
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: err.message }) // Handle validation errors or other bad requests
  }
}

// Update a volunteer by ID
exports.updateData = async (req, res) => {
  try {
    const volunteerId = req.params.id
    const updateData = req.body

    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      volunteerId,
      updateData,
      { new: true }
    )

    if (!updatedVolunteer) {
      return res.status(404).json({ message: 'Volunteer not found' })
    }

    res.json({
      message: 'Volunteer updated successfully!',
      volunteer: updatedVolunteer,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}
