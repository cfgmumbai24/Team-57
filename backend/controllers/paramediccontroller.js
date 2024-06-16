// controllers/paramedicController.js
const Paramedic = require("../models/Paramedic");

exports.createParamedic = async (req, res) => {
  try {
    console.log(req + "Hitanshu");
    const paramedic = new Paramedic(req.body);
    await paramedic.save();
    res.status(201).json(paramedic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllParamedics = async (req, res) => {
  try {
    const paramedics = await Paramedic.find().populate("owner");
    res.status(200).json(paramedics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getParamedicById = async (req, res) => {
  try {
    const paramedic = await Paramedic.findById(req.params.id).populate("owner");
    if (!paramedic) {
      return res.status(404).json({ message: "Paramedic not found" });
    }
    res.status(200).json(paramedic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateParamedic = async (req, res) => {
  try {
    const paramedic = await Paramedic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!paramedic) {
      return res.status(404).json({ message: "paramedic not found" });
    }
    res.status(200).json(paramedic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteParamedic = async (req, res) => {
  try {
    const paramedic = await Paramedic.findByIdAndDelete(req.params.id);
    if (!paramedic) {
      return res.status(404).json({ message: "paramedic not found" });
    }
    res.status(200).json({ message: "paramedic deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
