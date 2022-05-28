// VIEW====================================================>
import { header, todoList, modal, createCard} from "./templates.js"
import { controller } from "./controller.js"

// my add
import {model,} from './model.js';


function initListeners(){
    // btn add todo
    // document.getElementById('add-todo').addEventListener('click', controller.addTodo)
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
    
    
}


function printApp(){
    root.insertAdjacentHTML('afterbegin', header())
    root.insertAdjacentHTML('beforeend', todoList())
    root.insertAdjacentHTML('beforeend', modal())
}

// доработанный рендер
function render(){
    let ren = document.getElementById('todo-list')

    // счётчик дел
    let progressCounter = document.getElementById('progress-counter')
    progressCounter.innerText = model.todos.length
   
    while (ren.firstChild) {
        ren.removeChild(ren.firstChild)
    }
    // создание todo карт
    model.todos.map((todo) => createCard(todo))

    //повесим слушатель удаления кнопки на все карты, сколько бы их не было
    let btnCollection = document.getElementsByClassName('btn-delete-card')

    for (let i = 0; i < btnCollection.length; i++) {
        btnCollection.item(i).addEventListener('click', controller.deleteTodo)
    }

}

export { initListeners, printApp, render}