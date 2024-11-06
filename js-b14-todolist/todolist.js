//Dữ liệu ban đầu
let input = "";
let filter = "all";
let todos = [
  { id: 1, text: "Learn HTML", completed: true },
  { id: 2, text: "Learn CSS", completed: false },
];
//Truy vấn phần tử
const todoInput = document.querySelector(".todo-input");
const todoCreateFrom = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoCount = document.querySelector(".todo-count");
//Hàm update

//Hàm render
function renderTodos(todos) {
  //chuyển dữ liệu trong mảng thành giao diện
  todoList.innerHTML = todos
    .map((todo) => {
      return `<li class="todo-item">
                <input type="checkbox" class="todo-checkbox" ${
                  todo.completed ? "checked" : ""
                }>
                <span class="todo-text">${todo.text}</span>
                <button class="todo-edit-button">Edit</button>
                <button class="todo-delete-button">Delete</button>
            </li>
            `;
    })
    .join("");
}
renderTodos(todos);
const todoDelete = document.querySelector(".todo-delete-button");
const todoUpdate = document.querySelector(".todo-edit-button");
//Xử lý sự kiện
// todoInput.addEventListener('input', (e)=>{ lấy dữ liệu
//     input = todoInput.value;
// })
todoCreateFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text.length == 0) {
    return;
  } else {
    const newTodo = {
      id: Date.now(), 
      text, 
      completed: false,
    };
    todos.unshift(newTodo); //thêm vào đầu danh sách
    todoInput.value = ""; //clear nội dung ô input
    renderTodos(todos);
    countTodos(todos);
  }
});
function countTodos(todo) {
  todoCount.innerHTML = `Có ${todo.length} sự kiện`;
}countTodos(todos);