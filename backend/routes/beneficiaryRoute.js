// beneficiaryRoutes.js

const express = require("express");
const router = express.Router();
const beneficiaryController = require("../controllers/beneficiaryController");
router.post("/", beneficiaryController.createBeneficiary);
router.get("/", beneficiaryController.getAllBeneficiaries);
router.get("/:id", beneficiaryController.getBeneficiaryById);
router.put("/:id", beneficiaryController.updateBeneficiary);
router.delete("/:id", beneficiaryController.deleteBeneficiary);
router.get("/goat/:id", beneficiaryController.getGoatByBeneficiaryId);
module.exports = router;
