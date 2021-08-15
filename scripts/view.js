import { model, todos } from './model.js';
import { header, modal, card} from './templates.js';

export const view = {
    init: function(root){
        root.insertAdjacentHTML('beforeend', modal())
        root.insertAdjacentHTML('afterbegin', header())
    },
    openModal: function(){
        let mod = document.getElementById('modal__window')
        return mod.classList.remove('hidden')
    },
    closeModal: function(){
        let mod = document.getElementById('modal__window')
        return mod.classList.add('hidden')
    },

// аргументы рендера(что рендерим)
    render: function(){
       model.data.map((todo, index) => card(todo, index)).join('')
    },

}