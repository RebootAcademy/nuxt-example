const router = require('express').Router()

const createUser = require('../controllers/users.controller')

router
  .get('/', (req, res) => {res.send('User router')})
  .post('/', createUser)

module.exports = router
