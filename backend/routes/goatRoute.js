// routes/goatRoutes.js
const express = require("express");
const router = express.Router();
const goatController = require("../controllers/goatcontroller");
router.post("/", goatController.createGoat);

// Get all goats
router.get("/", goatController.getAllGoats);

// Get a single goat by ID
router.get("/:id", goatController.getGoatById);

// Update a goat by ID
router.put("/:id", goatController.updateGoat);

// Delete a goat by ID
router.delete("/:id", goatController.deleteGoat);

module.exports = router;
