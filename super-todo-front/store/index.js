export const state = () => ({
  todos: []
})

export const mutations = {
  updateTodos (state, todoList) {
    state.todos = todoList
  }
}

export const actions = {
  async getTodos (ctx) {
    const res = await this.$axios.get('/todos')
    ctx.commit('updateTodos', res.data)
  },

  async createTodo (state, todo) {
    await this.$axios.post('/todos', { title: todo })
  }
}
