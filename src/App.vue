<script setup>
import TodoList from './components/TodoList.vue'
import Note from './components/Note.vue'
import { ref } from 'vue'

const noteComponent = ref(null)
const todoListComponent = ref(null)

function handleClear() {
  noteComponent.value.clearNote()
  todoListComponent.value.clearTodoList()
}
</script>

<template>
  <div class="wrapper">
    <header>
      <div class="title">To Do List</div>
    </header>

    <main>
      <TodoList ref="todoListComponent" />
      <Note ref="noteComponent" />
    </main>

    <button class="clearButton" @click="handleClear">Clear Values</button>
  </div>
</template>

<style scoped>
.wrapper {
  border: 2px solid rgba(0, 0, 0, 0.541);
  border-radius: 5px;
  box-shadow: -5px 5px 5px 0px rgba(0, 0, 0, 0.178);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  background-color: rgb(247, 245, 236);
}

.title {
  font-size: 2.3rem;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
  font-family: 'Oxygen';
}

.clearButton {
  background-color: #5f432c;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.7rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  cursor: pointer;
}

.clearButton:hover {
  background-color: #4a3424;
  transition: background-color 0.2s ease-in-out;
}

@media (max-width: 768px) {
  .wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
