<template>
  <v-container fluid fill-height>
    <v-row id="todo-list">
      <v-col cols="12">
        <ListTodos />
      </v-col>
    </v-row>
    <v-row align="end">
      <v-col cols="12">
        <FormCreateTask @task-added="getTodos()" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default'
}
</script>
