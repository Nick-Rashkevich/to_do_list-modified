import { modal } from "./templates.js";
import { render } from "./view.js";

// MODEL====================================================>
export const model = {
    counter: 2, //счётчик для ID 
    todos: [
        {
        title: 'заголовок 1',
        text: 'текст 1',
        time: [new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()].join('-'),
        id: '1', 
    },
    {
        title: 'заголовок 2',
        text: 'текст 2',
        time: [new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()].join('-'),
        id: '2', 
    },

    ],

    getLocalStorage: function(){
        model.todos = JSON.parse(localStorage.getItem('todos'))
    },

    setLocalStorage: function(todos = model.todos){
        localStorage.setItem('todos', JSON.stringify(model.todos))
        model.counter++
    }
}

