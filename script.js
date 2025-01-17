// Select elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

// Add a new task
addButton.addEventListener('click', () => {
  const task = inputField.value.trim();
  if (task) {
    addTask(task);
    inputField.value = ''; // Clear input field
  }
});

// Add task to the list
function addTask(taskText) {
  const li = document.createElement('li');
  li.className = 'todo-item';

  // Task text
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  // Complete task event
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}
