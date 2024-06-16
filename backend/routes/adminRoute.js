// routes/AdminRoutes.js
const express = require("express");
const router = express.Router();
const adc = require("../controllers/admincontroller");

// Create a new Admin
router.post("/", adc.createAdmin);

// Get all Admins
router.get("/", adc.getAllAdmins);

// Get a single Admin by ID
router.get("/:id", adc.getAdminById);

// Update a Admin by ID
router.put("/:id", adc.updateAdminById);

// Delete a Admin by ID
router.delete("/:id", adc.deleteAdmin);

module.exports = router;
