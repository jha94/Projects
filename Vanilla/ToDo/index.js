
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoListWrapper = document.getElementById('todoListContainer');
const todoList = JSON.parse(sessionStorage.getItem('todoList'))|| [];
const completedTodo = JSON.parse(sessionStorage.getItem('completedTodo'))|| [];

window.addEventListener('load', ()=>{
    renderTodoList()
    addTodoBtn.disabled = true;
})

todoInput.addEventListener('input', ()=>{
    addTodoBtn.disabled = !todoInput.value
})

addTodoBtn.addEventListener('click', ()=>{
    todoList.push(todoInput.value);
    sessionStorage.setItem('todoList',JSON.stringify(todoList))
    todoInput.value='';
    renderTodoList();
    addTodoBtn.disabled=false;
})

function createButton(text, index){
    const btn = document.createElement('button');
    btn.textContent=text;
    btn.addEventListener('click', ()=>{
       todoOps(text, index);
       renderTodoList();
    })
    return btn
}

function todoOps(text, index){
    switch(text){
        case 'Delete':
            todoList.splice(index, 1);
            sessionStorage.setItem('todoList',JSON.stringify(todoList))
            break;
        case 'Edit':
            todoInput.value=todoList.splice(index, 1);
            addTodoBtn.disabled=false;
            completedTodo.splice(index,1);
            sessionStorage.setItem('completedTodo', JSON.stringify(completedTodo))
            break;
        case 'Done':
            completedTodo.push(index);
            sessionStorage.setItem('completedTodo', JSON.stringify(completedTodo))
            break;
        default:
            completedTodo.splice(index,1);
            sessionStorage.setItem('completedTodo', JSON.stringify(completedTodo))
            break;
    }
}

function renderTodoList(){
    todoListWrapper.innerHTML='';
    const listWrapper = document.createElement('span');
    for(let index=0;index<todoList.length;index++){
       const todo = document.createElement('p');
       todo.innerHTML = completedTodo.includes(index)?'<s>'+todoList[index]+'</s>': todoList[index];
       listWrapper.appendChild(todo);
       listWrapper.appendChild(createButton('Delete', index));
       listWrapper.appendChild(createButton('Edit', index));
       listWrapper.appendChild(createButton(completedTodo.includes(index)?'Undone':'Done', index));
    }
    todoListWrapper.appendChild(listWrapper)
}