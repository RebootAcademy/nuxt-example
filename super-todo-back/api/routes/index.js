const router = require('express').Router()
const UserRouter = require('./users.router')
const TodoRouter = require('./todos.router')

router
  .use('/users', UserRouter)
  .use('/todos', TodoRouter)
  .get('/', (req, res) => {
    res.send('Welcome to Super Todos API')
  })

module.exports = router
