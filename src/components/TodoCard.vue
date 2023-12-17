<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const handleCheck = () => {
  props.todo.isChecked = !props.todo.isChecked
}
</script>

<template>
  <div class="wrapper">
    <div class="check" @click="handleCheck">
      <img
        v-if="todo.isChecked"
        alt="Check icon"
        src="../assets/CheckIcon.svg"
        width="15"
        height="15"
      />
    </div>
    <div class="input_wrapper" :class="todo.isChecked && 'input_wrapper_checked'">
      <input
        class="input"
        :class="todo.isChecked && 'input_checked'"
        v-model="todo.text"
        spellcheck="false"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.check {
  background-color: #5f432c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 1.85rem;
  margin-top: auto;
  margin-bottom: auto;
}

.input_wrapper {
  border-radius: 5px;
  color: white;
  background-color: #c2a27f;
  border-radius: 20px;
  width: 100%;
}

.input {
  border: none;
  background-color: transparent;
  color: white;
  padding: 0.8rem;
  padding-left: 1.1rem;
  width: 100%;
  font-size: 1.2rem;
}

.input:focus {
  outline: none;
  background-color: #af9273;
  border-radius: 20px;
  transition: background-color 0.2s ease-in-out;
}

.input_wrapper_checked {
  background-color: #af9273d2;
}

.input_checked {
  text-decoration: line-through;
  text-decoration-thickness: 0.1rem;
  color: rgba(255, 255, 255, 0.486);
}
</style>
