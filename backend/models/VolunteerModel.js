const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const volunteerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid 10-digit phone number!`,
      },
    },
    villageAssigned: {
      type: String,
      required: true,
    },
    numberOfFamilyVisited: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
  },
  { timestamps: true }
);
const Volunteer = mongoose.model("Volunteer", volunteerSchema);
module.exports = Volunteer;
