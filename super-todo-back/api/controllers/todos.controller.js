const TodoModel = require('../models/todos.model')

async function createTodo (req, res) {
  try {
    const todo = await TodoModel.create(req.body)
    res.status(200).json(todo)
  } catch (error) {
    console.log(error)
    res.status(500).send('Cannot create todo')
  }
}

async function listTodos (req, res) {
  try {
    const todos = await TodoModel.find()
    res.status(200).json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).send('Cannot list todos')
  }
}

module.exports = {
  createTodo,
  listTodos
}
