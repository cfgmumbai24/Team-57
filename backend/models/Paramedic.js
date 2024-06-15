const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const paramedicSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialisation: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      min: [0, "Experience cannot be negative"],
    },
    contact: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v.toString());
        },
        message: (props) =>
          `${props.value} is not a valid 10-digit phone number!`,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email format",
      },
    },
    next: {
      type: String,
      required: true,
    },
    travellingCost: {
      type: Number,
      required: true,
      min: [0, "Travelling cost cannot be negative"],
    },
  },
  { timestamps: true }
);

const Paramedic = mongoose.model("Paramedic", paramedicSchema);
module.exports = Paramedic;
