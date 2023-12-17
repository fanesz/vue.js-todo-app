<script setup>
import { ref, watch } from 'vue'
import TodoCard from './TodoCard.vue'
import { getTodos, saveTodos } from '../api/services.js'

const generateTodo = (id) => {
  return {
    id: id || 0,
    text: '',
    isChecked: false
  }
}

const storedTodos = getTodos('todoList')
const todoList = ref(storedTodos.length ? storedTodos : [generateTodo()])

watch(
  () => todoList.value,
  () => {
    // If the last todo is not empty, add a new todo
    if (
      (todoList.value.length === 1 && todoList.value[0].text !== '') ||
      (todoList.value.length > 1 && todoList.value[todoList.value.length - 1].text !== '')
    ) {
      todoList.value.push(generateTodo(todoList.value[todoList.value.length - 1].id + 1))
    }

    // If the last two todos are empty, remove the last todo
    if (todoList.value.length > 2) {
      if (
        todoList.value[todoList.value.length - 1].text === '' &&
        todoList.value[todoList.value.length - 2].text === ''
      ) {
        todoList.value.pop()
      }
    }

    saveTodos('todoList', todoList.value)
  },
  { deep: true }
)

const clearTodoList = () => {
  todoList.value = [generateTodo()]
}
defineExpose({
  clearTodoList
})
</script>

<template>
  <div>
    <TodoCard v-for="item in todoList" :key="item.id" :todo="item" @updateTodo="updateTodo" />
  </div>
</template>
