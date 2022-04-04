<template>
  <v-card>
    <v-card-title>Input Task</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="task" label="Input Task" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="addTask">
        Create
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CreateTaskComponent',
  data () {
    return {
      task: ''
    }
  },
  methods: {
    async addTask () {
      try {
        await this.$store.dispatch('createTodo', this.task)
        this.task = ''
        this.$store.dispatch('getTodos')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
