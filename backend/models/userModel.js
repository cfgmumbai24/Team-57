const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'volunteer'],
      required: true,
    },
    villageAssigned: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: 'Invalid email format',
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, { minLength: 8 }),
        message:
          'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character',
      },
    },
  },
  { timestamps: true }
)

// Static method for user signup
userSchema.statics.signup = async function (
  fullName,
  email,
  password,
  role,
  villageAssigned
) {
  if (!email || !password || !fullName || !role) {
    throw new Error('All fields must be filled')
  }

  if (!validator.isEmail(email)) {
    throw new Error('Invalid email format')
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error('Password not strong enough')
  }

  const emailExists = await this.findOne({ email })

  if (emailExists) {
    throw new Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const villageAssign = villageAssigned || 'Admin'

  const user = await this.create({
    fullName,
    email,
    role,
    villageAssigned: villageAssign,
    password: hash,
  })

  return user
}

// Static method for user login
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error('All fields must be filled')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw new Error(`User with email ${email} does not exist`)
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw new Error('Incorrect Password')
  }

  return user
}

// Model
const User = mongoose.model('User', userSchema)

module.exports = User
