import { model } from "./model.js"
// import { createCard } from "./templates.js"
import { initListeners, printApp, render } from "./view.js"

// ROOT====================================================>
const root = document.getElementById('root')

// APP====================================================>

function app(){
    model.setLocalStorage()
    // 
    model.getLocalStorage()
    printApp()
    render()
    initListeners()

}

app()
// console.log(document.getElementsByClassName('btn-delete-card'));


console.log(model.todos);