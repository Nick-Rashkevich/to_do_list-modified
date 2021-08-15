const todos = 
{
    title: 'Загаловок дела N1',
    text: 'Подробное описание задачи, которое может состоять из некоторого количества слов.',
    time: '14:00',
    isDone: true,
    id: '0'
}

 const model = {   
    data: [],
    get: function(){
        if(localStorage.getItem('todos')){
            model.data = JSON.parse(localStorage.getItem('todos'))
        }
    },
    set: function(value){
        model.data.push(value)
        localStorage.setItem('todos', JSON.stringify(model.data))
    },

}
export {todos, model}

console.log(model.data);


