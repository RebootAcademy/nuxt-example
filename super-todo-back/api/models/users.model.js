const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  full_name: String,
  email: {
    type: String,
    required: [true, 'A valid email is required'],
    unique: [true, 'This email already exists'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        );
      }
    }
  },
  password: {
    type: String,
    required: true
  }
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel


