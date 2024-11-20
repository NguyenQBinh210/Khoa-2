// Dữ liệu ban đầu
let input = "";
let filter = "all";
let todos = [
  { id: 1, text: "Learn HTML", completed: true },
  { id: 2, text: "Learn CSS", completed: false },
];

// Truy vấn phần tử
const todoInput = document.querySelector(".todo-input");
const todoCreateForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoCount = document.querySelector(".todo-count");
const filterForm = document.querySelector(".todo-filter-form");
const todoClear = document.querySelector(".todo-clear-button");
let idUpdate = "";
let isUpdate = false;

// Xử lý sự kiện lọc
filterForm.addEventListener("change", (e) => {
  filter = e.target.value;
  renderTodos();
});

// Hàm render
function renderTodos() {
  // Chuyển dữ liệu trong mảng thành giao diện
  let filteredTodos = [...todos];
  if (filter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  todoList.innerHTML = filteredTodos
    .map((todo) => {
      return `<li class="todo-item">
                <input type="checkbox" class="todo-checkbox" ${
                  todo.completed ? "checked" : ""
                } data-id="${todo.id}">
                <span class="todo-text">${todo.text}</span>
                <button class="todo-edit-button" data-id="${
                  todo.id
                }"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg></button>
                <button class="todo-delete-button" data-id="${
                  todo.id
                }"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button> 
              </li>`;
    })
    .join("");

  const count = todos.filter((todo) => !todo.completed).length;
  todoCount.innerHTML = count === 0 ? "No task left" : `${count} task left`;
}
renderTodos();

todoCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text.length === 0) {
    return;
  }

  if (isUpdate) {
    todos = todos.map((todo) =>
      todo.id == idUpdate ? { ...todo, text } : todo
    );
    isUpdate = false;
    idUpdate = "";
  } else {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todos.unshift(newTodo);
  }

  todoInput.value = "";
  renderTodos();
});

// Xử lý sự kiện click vào danh sách
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-edit-button")) {
    const id = e.target.getAttribute("data-id");
    const todoToEdit = todos.find((todo) => todo.id == id);
    if (todoToEdit) {
      isUpdate = true;
      idUpdate = id;
      todoInput.value = todoToEdit.text;
      todoInput.focus();
    }
  }

  if (e.target.closest(".todo-delete-button")) {
    const id = e.target.closest(".todo-delete-button").getAttribute("data-id");
    todos = todos.filter((todo) => todo.id != id);
    renderTodos();
  }


  if (e.target.classList.contains("todo-checkbox")) {
    const id = e.target.getAttribute("data-id");
    todos = todos.map((todo) =>
      todo.id == id ? { ...todo, completed: e.target.checked } : todo
    );
    renderTodos();
  }
});
todoClear.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
});
