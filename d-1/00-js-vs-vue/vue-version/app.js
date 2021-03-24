// const todoList = document.querySelector("#todoList");
// const todoInput = document.querySelector("#todoInput");
// const addButton = document.querySelector("#addButton");

// addButton.addEventListener("click", () => {
//   const liElement = document.createElement("li");
//   liElement.textContent = todoInput.value;
//   todoList.appendChild(liElement);
//   todoInput.value = "";
// });

// vue3
const app = Vue.createApp({
  data() {
    return {
      todoList: [],
      todoValue: null,
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoValue);
      this.todoValue = "";
    },
  },
}).mount("#app");
