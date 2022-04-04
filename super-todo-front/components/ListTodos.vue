<template>
  <div>
    <v-form>
      <v-text-field v-model="searchInput" label="Search" />
    </v-form>
    <v-card class="todo-list" height="55vh">
      <v-card-title>
        Task List
      </v-card-title>
      <v-card-text>
        <v-list
          flat
        >
          <v-list-item-group
            multiple
            active-class=""
          >
            <v-list-item v-for="(todo, idx) in filteredTodos" :key="idx">
              <v-list-item-action>
                <v-checkbox />
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ todo.title }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">
                    mdi-dots-vertical
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  data () {
    return {
      searchInput: ''
    }
  },
  async fetch () {
    await this.$store.dispatch('getTodos')
  },
  computed: {
    filteredTodos () {
      if (this.searchInput === '') { return this.$store.state.todos }
      return this.$store.state.todos.filter(todo => todo.title.includes(this.searchInput))
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-list {
    overflow-y: auto;
  }
</style>
