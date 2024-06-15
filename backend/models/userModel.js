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
      enum: ['admin', 'volunteer'],
      required: true,

    },
    villageAssigned :{
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password:{
      type: String,
      required: true
    },
    
  },
  { timestamps: true }
)


//static signup method
userSchema.statics.signup = async function (fullName, email, password, role, villageAssigned) {
  if (!email || !password || !fullName || !role ) {
    
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const emailExists = await this.findOne({ email })

  if (emailExists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const villageAssign = villageAssigned || "Admin"

  const user = await this.create({ fullName, email, role, villageAssign, password: hash })

  return user
}



//static login method
userSchema.statics.login = async function(email,password){

  if (!email || !password ) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({email})

  if(!user){
    throw Error(`User Doesn't Exists`)
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw Error(`Incorrect Password`)
  }

  return user
}


//Model
const User = mongoose.model('user', userSchema)

module.exports = User
