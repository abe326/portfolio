function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  if (todoInput.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const listItem = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });

  const textSpan = document.createElement('span');
  textSpan.textContent = todoInput.value;
  textSpan.className = 'task-text';

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'remove';
  removeButton.onclick = function () {
    todoList.removeChild(listItem);
  };

  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(removeButton);
  todoList.appendChild(listItem);
  todoInput.value = '';
}
