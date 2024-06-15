// beneficiaryRoutes.js

const express = require("express");
const router = express.Router();
const beneficiaryController = require("./beneficiaryController");

router.post("/beneficiaries", beneficiaryController.createBeneficiary);
router.get("/beneficiaries", beneficiaryController.getAllBeneficiaries);
router.get("/beneficiaries/:id", beneficiaryController.getBeneficiaryById);
router.put("/beneficiaries/:id", beneficiaryController.updateBeneficiary);
router.delete("/beneficiaries/:id", beneficiaryController.deleteBeneficiary);

module.exports = router;
