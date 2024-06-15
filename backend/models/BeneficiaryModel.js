const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beneficiarySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    income: {
      type: Number,
      required: true,
      min: 0,
    },
    earningMembers: {
      type: Number,
      required: true,
      min: 0,
    },
    totalMembers: {
      type: Number,
      required: true,
      min: 0,
    },
    volunteer_email: {
      type: String,
      ref: "Volunteer",
      require: true,
    },
    dateOnboarded: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);
module.exports = Beneficiary;
