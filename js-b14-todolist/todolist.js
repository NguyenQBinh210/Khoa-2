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
function renderTodos() {
  //chuyển dữ liệu trong mảng thành giao diện
  todoList.innerHTML = todos
    .map((todo) => {
      return `<li class="todo-item">
                <input type="checkbox" class="todo-checkbox" ${
                  todo.completed ? "checked" : ""
                }>
                <span class="todo-text">${todo.text}</span>
                <button class="todo-edit-button" data-id="${
                  todo.id
                }">Edit</button>
                <button class="todo-delete-button" data-id="${
                  todo.id
                }">Delete</button> 
                </li>
                `;
      //Gán dữ liệu vào 1 thẻ html để thao tác thông qua js
    })
    .join("");
  todoList.querySelectorAll(".todo-delete-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = button.getAttribute("data-id");
      todos = todos.filter((todo) => todo.id != id);
      renderTodos();
    });
  });
  const count = todos.filter((todo) => !todo.completed).length;
  if(count == 0){
    todoCount.innerHTML = "No task left";
  }else{
    todoCount.innerHTML =  `${count} task left`
  }
}
renderTodos();
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
    renderTodos();
    // countTodos(todos);
  }
});
// function countTodos(todo) {ds  
//   todoCount.innerHTML = `Có ${todo.length} sự kiện`;
// }
// countTodos(todos);
