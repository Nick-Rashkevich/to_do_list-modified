import { view } from './view.js';
import { model, todos } from './model.js';
import { controller } from './controller.js';
import { card, modal } from './templates.js'

//DOM
const root = document.querySelector('#root')


//APP
function app(){
    view.init(root)
    view.openModal()
    
}

app()

