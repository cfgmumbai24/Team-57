const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const volunteerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
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
