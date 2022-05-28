// TEMPLATES====================================================>
import {model} from './model.js' 

// page header HTML
function header(){
    return `
    <header id="header" class="p-5 bg-gradient-to-r from-green-200 via-indigo-400 to-green-200" >
    <h1 class="mx-auto text-2xl font-bold leading-7 text-gray-600 sm:text-3xl sm:truncate">Todo List: <strong id="todo-counter">${1}</strong></h1>

    <div id="button__container" class="mt-4 flex justify-around">
        <button id="add-todo" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">Add</button>
        <button id="delete-last-todo" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">Delete last task</button>
        <button id="delete-all-todos" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">Delete all</button>
    </div>
</header>
    `
}


// to-do body HTML
function todoList(){
    return `
    <div id="task__counter__container" class="flex p-2 justify-around">

    <p class="italic text-xl">In progress: <strong id='progress-counter'>${3}</strong></p>
    </div>
        <div id="todo-list"></div>
    `
    //    <p class="italic text-xl">Completed task: <strong id="copmleted-counter">${model.todos.length}</strong></p>
}

// todo card HTML
function createCard(obj) {
  const card = document.createElement('div')
  const cardTitle = document.createElement('h2')
  const cardText = document.createElement('p')
  const cardTime = document.createElement('p')
  const cardBtn = document.createElement('button')

  card.className = 'flex flex-col w-80 h-48 bg-indigo-300 m-auto mt-4 p-2 shadow-lg rounded-lg text-justify'
  cardTitle.className = 'p-2 text-2xl overflow-hidden'
  cardText.className = 'overflow-hidden'
  cardTime.className = 'p-2 italic'
  cardBtn.className = 'btn-delete-card px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700'

  cardTitle.textContent = obj.title
  cardText.textContent = obj.text
  cardTime.textContent = obj.time
  cardBtn.textContent = 'DELETE'
  cardBtn.id = obj.id

  card.append(cardTitle, cardText, cardTime, cardBtn)
  document.getElementById('todo-list').append(card)
}
// ________________________________________________________________________

// modal window HTML
function modal() {
    return `
    <div id="modal__window" class="hidden fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                add todo
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Add a title and a description of your case:
                </p>
              </div>
              <div class="input__container ">
                <input id="modal__input_title" type="text" class="m-3 focus:ring-purple-500 focus:border-purple-500 block w-full p-2 sm:text-sm border border-gray-300 rounded-md" placeholder="todo title">
                <textarea id="modal__input_description" type="text" class="m-3 focus:ring-purple-500 focus:border-purple-500 block w-full p-2 sm:text-sm border border-gray-300 rounded-md" placeholder="todo description"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button id="modal__btn_ok" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm">
            OK
          </button>
          <button id="modal__btn_cancel" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>`
}



export {header, todoList, modal, createCard}