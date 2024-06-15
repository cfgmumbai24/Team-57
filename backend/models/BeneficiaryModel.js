const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const beneficiarySchema = new Schema(
  {
    maleCount: {
      type: Number,
      required: true,
      min: 0,
    },
    femaleCount: {
      type: Number,
      required: true,
      min: 0,
    },
    children: {
      type: Number,
      required: true,
      min: 0,
    },
    name: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Beneficiary = mongoose.model("Beneficiary", beneficiarySchema);
module.exports = Beneficiary;
