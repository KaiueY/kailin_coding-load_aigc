var todoData = []
var addTodo = document.querySelector('.btn')
var todoList = document.querySelector('.list')

function addNewTodo() {
  if (document.getElementById('newTodo').value !== '') {
    todoData.push({
      id: Date.now(),
      content: document.getElementById('newTodo').value,
      completed: false
    })

    render()
    document.getElementById('newTodo').value = ''
  }
}

function render() {
  var str = ''

  for (var i = 0; i < todoData.length; i++) {
    var item = todoData[i]

    str += `
      <li class="list-item">
        <input type="checkbox" class="item-check" id="${item.id}">
        <p class="item-content">${item.content}</p>
        <span class="close" data-id="${item.id}" data-action="remove">&#10006;️</span>
      </li>
    `
  }

  todoList.innerHTML = str
}

function removeTodo(e) {
  if (e.target.dataset.action == "remove") {
    var id = parseInt(e.target.dataset.id)
    todoData = todoData.filter(item => item.id !== id)
    render()
  }
}

addTodo.addEventListener('click', addNewTodo)
todoList.addEventListener('click', removeTodo)
