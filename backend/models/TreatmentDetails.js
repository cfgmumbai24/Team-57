const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const treatmentDetailsSchema = new Schema(
  {
    treatmentDate: {
      type: Date,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    paramedic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paramedic",
      required: true,
    },
    volunteer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Volunteer",
      required: true,
    },
    goat_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goat",
      required: true,
    },
    attendanceDetails: {
      type: [Date],
      required: true,
    },
    nextVaccineDate: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

const TreatmentDetails = mongoose.model(
  "TreatmentDetails",
  treatmentDetailsSchema
);
module.exports = TreatmentDetails;
