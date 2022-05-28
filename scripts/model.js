import { modal } from "./templates.js";
import { render } from "./view.js";

// MODEL====================================================>
export const model = {
    counter: 3, //счётчик для ID 
    todos: [
        {
        title: 'заголовок',
        text: 'текст',
        time: 'время',
        id: '1', 
    },
    {
        title: 'заголовок_1',
        text: 'текст_1',
        time: 'время_1',
        id: '2', 
    },
    {
        title: 'заголaewsfовок_1',
        text: 'текст_awef1',
        time: 'времweafsdя_1',
        id: '3', 
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

