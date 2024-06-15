// controllers/goatController.js
const Goat = require("../models/GoatModel");

// Create a new goat
exports.createGoat = async (req, res) => {
  try {
    const goat = new Goat(req.body);
    await goat.save();
    res.status(201).json(goat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all goats
exports.getAllGoats = async (req, res) => {
  try {
    const goats = await Goat.find().populate("owner");
    res.status(200).json(goats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single goat by ID
exports.getGoatById = async (req, res) => {
  try {
    const goat = await Goat.findById(req.params.id).populate("owner");
    if (!goat) {
      return res.status(404).json({ message: "Goat not found" });
    }
    res.status(200).json(goat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a goat by ID
exports.updateGoat = async (req, res) => {
  try {
    const goat = await Goat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!goat) {
      return res.status(404).json({ message: "Goat not found" });
    }
    res.status(200).json(goat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a goat by ID
exports.deleteGoat = async (req, res) => {
  try {
    const goat = await Goat.findByIdAndDelete(req.params.id);
    if (!goat) {
      return res.status(404).json({ message: "Goat not found" });
    }
    res.status(200).json({ message: "Goat deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
