// VIEW====================================================>
import { header, todoList, modal, createCard} from "./templates.js"
import { controller } from "./controller.js"

// my add
import {model,} from './model.js';


function initListeners(){
    // btn add todo
    document.getElementById('add-todo').addEventListener('click', controller.addTodo)
    document.getElementById('add-todo').addEventListener('click', controller.openModal)

    // btn delete last task
    document.getElementById('delete-last-todo').addEventListener('click', controller.deleteLastTodo)
    // btn delete all
    document.getElementById('delete-all-todos').addEventListener('click', controller.deleteAllTodos)

    // modal btn cancel
    document.getElementById('modal__btn_cancel').addEventListener('click', controller.closeModal)
    // modal btn OK
    document.getElementById('modal__btn_ok').addEventListener('click', controller.closeModal)
    document.getElementById('modal__btn_ok').addEventListener('click', controller.getUserData)
    // document.getElementById('btn-delete-card').addEventListener('click', controller.deleteTodo)
    
}


function printApp(){
    root.insertAdjacentHTML('afterbegin', header())
    root.insertAdjacentHTML('beforeend', todoList())
    root.insertAdjacentHTML('beforeend', modal())
}

// доработанный рендер
function render(){
    let ren = document.getElementById('todo-list')
    while (ren.firstChild) {
        ren.removeChild(ren.firstChild)
    }
    model.todos.map((todo) => createCard(todo)).join('')
}

export { initListeners, printApp, render}