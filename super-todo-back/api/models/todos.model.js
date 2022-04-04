const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: String,
  date: {
    type: Date,
    default: Date.now()
  },
  done: {
    type: Boolean,
    default: false
  }
})

const TodoModel = mongoose.model('todo', todoSchema)

module.exports = TodoModel
