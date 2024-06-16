// routes/paramedicRoutes.js
const express = require("express");
const router = express.Router();
const paramedicController = require("../controllers/paramediccontroller");

// Create a new paramedic
router.post("/", paramedicController.createParamedic);

// Get all paramedics
router.get("/", paramedicController.getAllParamedics);

// Get a single paramedic by ID
router.get("/:id", paramedicController.getParamedicById);

// Update a paramedic by ID
router.put("/:id", paramedicController.updateParamedic);

// Delete a paramedic by ID
router.delete("/:id", paramedicController.deleteParamedic);

module.exports = router;
