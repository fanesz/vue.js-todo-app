// just pretend this is a real service
export function getTodos(item) {
  return JSON.parse(localStorage.getItem(`todos-${item}`)) || []
}

export function saveTodos(item, data) {
  localStorage.setItem(`todos-${item}`, JSON.stringify(data))
}
