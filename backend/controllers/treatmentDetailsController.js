const TreatmentDetails = require("../models/TreatmentDetails");

// Create a new treatment detail
exports.createTreatmentDetail = async (req, res) => {
  try {
    const treatmentDetail = new TreatmentDetails(req.body);
    const savedTreatmentDetail = await treatmentDetail.save();
    res.status(201).json(savedTreatmentDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all treatment details
exports.getAllTreatmentDetails = async (req, res) => {
  try {
    const treatmentDetails = await TreatmentDetails.find();
    res.json(treatmentDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get treatment detail by ID
exports.getTreatmentDetailById = async (req, res) => {
  try {
    const treatmentDetail = await TreatmentDetails.findById(req.params.id)
      .populate("paramedic")
      .populate("volunteer")
      .populate("goat_id");
    if (!treatmentDetail) {
      return res.status(404).json({ message: "Treatment detail not found" });
    }
    res.json(treatmentDetail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update treatment detail by ID
exports.updateTreatmentDetailById = async (req, res) => {
  try {
    const treatmentDetail = await TreatmentDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
      .populate("paramedic")
      .populate("volunteer")
      .populate("goat_id");
    if (!treatmentDetail) {
      return res.status(404).json({ message: "Treatment detail not found" });
    }
    res.json(treatmentDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete treatment detail by ID
exports.deleteTreatmentDetailById = async (req, res) => {
  try {
    const treatmentDetail = await TreatmentDetails.findByIdAndDelete(
      req.params.id
    );
    if (!treatmentDetail) {
      return res.status(404).json({ message: "Treatment detail not found" });
    }
    res.json({ message: "Treatment detail deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
