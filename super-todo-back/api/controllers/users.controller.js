const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/users.model')

async function createUser (req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await UserModel.create(req.body)
    res.status(200).send('User created')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error: ', error)
  }
}

module.exports = createUser
