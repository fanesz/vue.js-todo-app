<script setup>
import { ref, watch } from 'vue'
import { getTodos, saveTodos } from '../api/services.js'

const storedNote = getTodos('note')
const note = ref(storedNote.length ? storedNote : '')

watch(
  () => note.value,
  () => {
    saveTodos('note', note.value)
  },
  { deep: true }
)

const clearNote = () => {
  note.value = ''
}
defineExpose({
  clearNote
})
</script>

<template>
  <div class="note">
    <textarea v-model="note" class="textarea" spellcheck="false" placeholder="note..." />
  </div>
</template>

<style scoped>
.note {
  margin-top: 1.5rem;
}

.textarea {
  width: 100%;
  height: 10rem;
  border-radius: 5px;
  background-color: #c2a27f;
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
  font-family: 'Oxygen';
  resize: none;
  border: none;
  outline: none;
  box-shadow: -3px 3px 3px 0px rgba(0, 0, 0, 0.15);
}

::placeholder {
  color: rgba(255, 255, 255, 0.486);
}
</style>
