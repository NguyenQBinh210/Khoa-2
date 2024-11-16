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
                }">Edit</button>
                <button class="todo-delete-button" data-id="${
                  todo.id
                }">Delete</button> 
              </li>`;
    })
    .join("");

  // Cập nhật số lượng công việc chưa hoàn thành
  const count = todos.filter((todo) => !todo.completed).length;
  todoCount.innerHTML = count === 0 ? "No task left" : `${count} task left`;
}
renderTodos();

// Xử lý sự kiện thêm công việc mới
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

  if (e.target.classList.contains("todo-delete-button")) {
    const id = e.target.getAttribute("data-id");
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

// Xử lý sự kiện nút "Clear Completed"
todoClear.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  renderTodos();
});
