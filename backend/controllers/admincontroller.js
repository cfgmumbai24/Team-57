const Admin = require("../models/AdminModel");
const Volunteer=require("../models/VolunteerModel");
// Create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const savedAdmin = await admin.save();
    res.status(201).json(savedAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update admin by ID
exports.updateAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(admin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete admin by ID
exports.deleteAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json({ message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.addAttendanceDetails = async (req, res) => {
  const { email, attendanceDate } = req.body;

  try {
    // Find the volunteer by email
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
