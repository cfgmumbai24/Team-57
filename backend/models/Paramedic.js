const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const goatSchema = new Schema(
    {
      
      height: {
        type: Number,
        required: true,
        min: 0,
      },
      weight: {
        type: Number,
        required: true,
        min: 0,
      },
      isPregnant: {
        type: Boolean,
        required: true,
      },
      isVaccinated: {
        type: Boolean,
        required: true,
      },
      gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
      },
      age: {
        type: Number,
        required: true,
        min: 0,
      },
      remark: {
        type: String,
      },
      lastCheckup: {
        type: Date,
        required: true,
      },
      isAlive: {
        type: Boolean,
        required: true,
      },
      dateDied: {
        type: Date,
        required: function () {
          return !this.isAlive;
        },
      },
    },
    { timestamps: true }
  );
  const Goat = mongoose.model("Goat", goatSchema);
  module.exports = Goat;
  