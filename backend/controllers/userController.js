const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Admin = require("../models/AdminModel");
const Volunteer = require("../models/VolunteerModel");
// Create Token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    const token = createToken(user._id);
    const role = user.role;
    const fullName = user.fullName;
    const villageAssign = user.villageAssigned || "Admin";
    res.status(200).json({ email, token, fullName, role, villageAssign });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { fullName, villageAssigned, email, password, role } = req.body;

  try {
    const user = await User.signup(fullName, email, password, role);

    const token = createToken(user._id);
    if (role == "volunteer") {
      const volunteer = new Volunteer({
        fullName,
        villageAssigned,
        email,
      });
      await volunteer.save();
    } else {
      const admin = new Admin({
        fullName,
        email,
      });
      await admin.save();
    }

    res.status(200).json({ email, token, fullName, role, villageAssigned });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
