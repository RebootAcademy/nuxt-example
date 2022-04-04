const router = require('express').Router()
const {
  createTodo,
  listTodos
} = require('../controllers/todos.controller')

router
  .get('/', listTodos)
  .post('/', createTodo)

module.exports = router
