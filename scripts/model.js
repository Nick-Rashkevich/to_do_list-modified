import { modal } from "./templates.js";
import { render } from "./view.js";

// MODEL====================================================>
export const model = {
    todos: [
        {
        title: 'заголовок',
        text: 'текст',
        time: 'время',
        id: 1, 
    },
    {
        title: 'заголовок_1',
        text: 'текст_1',
        time: 'время_1',
        id: 2, 
    },
    ],

    getLocalStorage: function(){
        model.todos = JSON.parse(localStorage.getItem('todos'))
    },

    setLocalStorage: function(){
        localStorage.setItem('todos', JSON.stringify(model.todos))
    }
}

