const Volunteer = require("../models/VolunteerModel");
exports.createVolunteer = async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all volunteers
exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single volunteer by ID
exports.getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ error: "Volunteer not found" });
    }
    res.status(200).json(volunteer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a volunteer by ID
exports.updateVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!volunteer) {
      return res.status(404).json({ error: "Volunteer not found" });
    }
    res.status(200).json(volunteer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ error: "Volunteer not found" });
    }
    res.status(200).json({ message: "Volunteer deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.addAttendanceDetails = async (req, res) => {
  const { email, attendanceDate } = req.body;

  try {
    const volunteer = await Volunteer.findOne({ email });

    if (!volunteer) {
      return res
        .status(404)
        .json({ error: "Volunteer not found with the provided email" });
    }

    volunteer.attendanceDetails.push(new Date(attendanceDate));

    await volunteer.save();
    res
      .status(200)
      .json({ message: "Attendance details added successfully", volunteer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
