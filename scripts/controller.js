// CONTROLLER====================================================>

import { model } from "./model.js"
import {render} from "./view.js"

export const controller = {

    deleteTodo: function(button){
        
        let withoutDeletedTodos = model.todos.filter((item) => item.id != button.target.id)
        model.todos = withoutDeletedTodos
        
        render()
    },
    
    completeTodo: function()
    {
        
    },

    addTodo: function()
    {
        model.setLocalStorage()
        model.getLocalStorage()
        render()
    },

    deleteAllTodos: function(){
        model.todos.length = 0
        model.setLocalStorage()
        render()
    },

    deleteLastTodo: function(){
        model.todos.pop()
        model.setLocalStorage()
        render()
    },

    // User INPUT 
    getUserData: function(){
        let userDataObj = {
        title: document.getElementById('modal__input_title').value,
        text: document.getElementById('modal__input_description').value,
        time: [new Date().getFullYear(), new Date().getMonth(), new Date().getDay()].join('-'), //need use new Date
        id: model.counter + 1,
        }
        model.todos.push(userDataObj)
        model.setLocalStorage()
        console.log(model.todos);
        render()
        document.getElementById('modal__input_title').value = ''
        document.getElementById('modal__input_description').value = ''
    },

    // Modal window
    openModal: function(){
        document.getElementById('modal__window').classList.remove('hidden')
    },

    closeModal: function(){
        document.getElementById('modal__window').classList.add('hidden')
    }
}
