const todolists = document.querySelector(".todolist")
const todovalues = document.querySelector(".todovalue")
const btn = document.querySelector(".btn");
let todoListValue = [];


const getTodoListFromLS = () => {                    
  return JSON.parse(localStorage.getItem('todoData')) || [];
}

const addTodoLocalStorage = (todo) => {                        
  return localStorage.setItem('todoData', JSON.stringify(todo));
}

const showTodoList = () => {
  todoListValue = getTodoListFromLS()

  todoListValue.forEach((curTodo) => {

    const liElement = document.createElement("li");
    liElement.innerHTML = curTodo;
    todolists.append(liElement);
  })
}

const removeTodoList = (e) => {
  let currentTodo = e.target
  //console.log(todoListValue)

  updateTodoList = todoListValue.filter(
    (curTodoValue) => curTodoValue !== currentTodo.textContent
  );

  addTodoLocalStorage(updateTodoList)
  currentTodo.remove()
  //console.log(updateTodoList)
}


// Add Todo Values //
const addTodoList = (e) => {
  e.preventDefault();

  todoListValue = getTodoListFromLS()
  let newTodo = todovalues.value.trim();
  //console.log(newTodo)

  todovalues.value = "";


  if (newTodo.length != 0 && !todoListValue.includes(newTodo)) { // For empty & duplicate value condition
    console.log(typeof todoListValue)
    todoListValue.push(newTodo);


    addTodoLocalStorage(todoListValue);

    const liElement = document.createElement("li");
    liElement.innerHTML = newTodo;
    todolists.append(liElement);
  }

}

showTodoList();

btn.addEventListener("click", (e) => {
  addTodoList(e)

})

todolists.addEventListener("click", (e) => {
  removeTodoList(e)
})