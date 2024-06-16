// routes/treatmentDetailsRoutes.js

const express = require("express");
const router = express.Router();
const treatmentDetailsController = require("../controllers/treatmentDetailsController");

// Create a new treatment detail
router.post("/", treatmentDetailsController.createTreatmentDetail);

// Get all
router.get("/", treatmentDetailsController.getAllTreatmentDetails);

// Get treatment detail by ID
router.get("/:id", treatmentDetailsController.getTreatmentDetailById);

// Update treatment detail by ID
router.patch("/:id", treatmentDetailsController.updateTreatmentDetailById);

// Delete treatment detail by ID
router.delete("/:id", treatmentDetailsController.deleteTreatmentDetailById);

module.exports = router;
