const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const volunteerSchema = new Schema(
  {
    name: {
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
      required: true,
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
    query: {
      type: String,
      required: true,
    },
    travellingCost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const Volunteer = mongoose.model("Volunteer", volunteerSchema);
module.exports = Volunteer;
