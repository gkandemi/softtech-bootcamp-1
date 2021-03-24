const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
  const liElement = document.createElement("li");
  liElement.textContent = todoInput.value;
  todoList.appendChild(liElement);
  todoInput.value = "";
});
