// beneficiaryController.js
const Volunteer = require("../models/VolunteerModel");
const Beneficiary = require("../models/BeneficiaryModel");

// Create a new beneficiary
exports.createBeneficiary = async (req, res) => {
  try {
    const volunteerEmail = req.body.volunteer_email; // Assuming the volunteer email is in req.body.volunteer_email
    const volunteer = await Volunteer.findOne({ email: volunteerEmail });

    if (!volunteer) {
      return res
        .status(404)
        .json({ error: "Volunteer not found with the provided email" });
    }

    const beneficiary = new Beneficiary({
      name: req.body.name,
      income: req.body.income,
      earningMembers: req.body.earningMembers,
      totalMembers: req.body.totalMembers,
      villageAssigned: req.body.beneficiaryVillage,
      volunteer_email: volunteer.email, // Assign the volunteer's email
      dateOnboarded: req.body.dateOnboarded || Date.now(), // Optionally provide a date or default to current date
    });

    await beneficiary.save();
    res.status(201).json(beneficiary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get beneficiaries by village
exports.getBeneficiariesByVillage = async (req, res) => {
  try {
    const { villageAssigned, beneficiaryVillage } = req.query;

    if (!volunteerVillage || !beneficiaryVillage) {
      return res.status(400).json({ message: 'Both volunteerVillage and beneficiaryVillage query parameters are required' });
    }

    // Find volunteers assigned to the specified village
    const volunteers = await Volunteer.find({ beneficiaryVillage : villageAssigned });

    if (volunteers.length === 0) {
      return res.status(404).json({ message: 'No volunteers found for the specified village' });
    }

    // Find beneficiaries assigned to the specified village
    const beneficiaries = await Beneficiary.find({ villageAssigned: beneficiaryVillage });

    if (beneficiaries.length === 0) {
      return res.status(404).json({ message: 'No beneficiaries found for the specified village' });
    }

    res.status(200).json(beneficiaries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Get all beneficiaries
exports.getAllBeneficiaries = async (req, res) => {
  try {
    const beneficiaries = await Beneficiary.find();
    res.status(200).json(beneficiaries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single beneficiary by ID
exports.getBeneficiaryById = async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findById(req.params.id);
    if (!beneficiary) {
      return res.status(404).json({ error: "Beneficiary not found" });
    }
    res.status(200).json(beneficiary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a beneficiary
exports.updateBeneficiary = async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!beneficiary) {
      return res.status(404).json({ error: "Beneficiary not found" });
    }
    res.status(200).json(beneficiary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a beneficiary
exports.deleteBeneficiary = async (req, res) => {
  try {
    const beneficiary = await Beneficiary.findByIdAndDelete(req.params.id);
    if (!beneficiary) {
      return res.status(404).json({ error: "Beneficiary not found" });
    }
    res.status(200).json({ message: "Beneficiary deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get goats by beneficiary ID
exports.getGoatByBeneficiaryId = async (req, res) => {
  try {
    const beneficiaryId = req.params.id
    const goats = await Goat.find({ beneficiary: beneficiaryId })

    if (goats.length === 0) {
      return res
        .status(404)
        .json({ message: 'No goats found for this beneficiary' })
    }

    res.status(200).json(goats)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


// Get beneficiaries by volunteer email
exports.getBeneficiariesByVolunteerEmail = async (req, res) => {
  try {
    const volunteerEmail = req.params.email; // Assuming email is passed as a route parameter
    const volunteer = await Volunteer.findOne({ email: volunteerEmail });

    if (!volunteer) {
      return res
        .status(404)
        .json({ error: "Volunteer not found with the provided email" });
    }

    const beneficiaries = await Beneficiary.find({
      volunteer_email: volunteer.email,
    });
    res.status(200).json(beneficiaries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
