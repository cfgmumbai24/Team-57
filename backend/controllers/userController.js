const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Create Token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}


// login user
const loginUser = async (req, res) => {
    
    const {email,password} = req.body
    try {
      const user = await User.login(email, password)

      const token = createToken(user._id)
      const role = user.role;
      const fullName = user.fullName;
      const villageAssign = user.villageAssigned || "Admin";
      res.status(200).json({ email, token, fullName, role, villageAssign })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}



// signup user
const signupUser = async (req, res) => {
  const { fullName, villageAssigned, email, password, role } = req.body

  try {
    const user = await User.signup(fullName, email, password, role)

    const token = createToken(user._id)


    res.status(200).json({ email, token, fullName, role, villageAssigned})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}



module.exports = { signupUser, loginUser }







// async function handleGetAllUsers(req, res) {
//   const allDbUsers = await User.find({})
//   return res.json(allDbUsers)
// }

// async function handleGetUserById(req, res) {
//   const user = await User.findById(req.params.id)
//   if (!user) return res.status(404).json({ error: 'user not found' })
//   return res.json(user)
// }

// async function handleUpdateUserById(req, res) {
//   await User.findIdAndUpdate(req.params.id, { lastName: 'newValue' })
//   return res.json({ status: 'Success' })
// }

// async function handleDeleteUserById(req, res) {
//   await User.findIdAndDelete(req.params.id)
//   return res.json({ status: 'Success' })
// }

// async function handleCreateNewUser(req, res) {
//   const body = req.body
//   if (!body || !body.first_name || !body.last_name || !body.email)
//     return res.status(400).json({ msg: 'All Fields are Required' })

//   const result = await User.create({
//     firstName: body.first_name,
//     lastName: body.last_name,
//     email: body.email,
//     gender: body.gender,
//   })

//   return res.status(201).json({ msg: 'success', id: result._id })
// }

// module.exports = {
//   handleGetAllUsers,
//   handleGetUserById,
//   handleUpdateUserById,
//   handleDeleteUserById,
//   handleCreateNewUser,
// }
