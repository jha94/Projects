const form = document.getElementById('addTodo');
const input = document.getElementById('input');
const list = document.getElementById('todoList');
const addTaskBtn = document.getElementById('addTaskBtn');

const todoList = JSON.parse(sessionStorage.getItem('todoList'))||[];

window.addEventListener('load', ()=>{
    renderToDoList();
})

input.addEventListener('input', ()=>{
    document.getElementById('addTaskBtn').disabled = !input.value;
})

addTaskBtn.addEventListener('click', ()=>{
    addTasks()
})

input.addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
        event.preventDefault();
        addTasks()
    }
})

function addTasks(){
    todoList.push(input.value);
    sessionStorage.setItem('todoList', JSON.stringify(todoList))
    input.value='';
    renderToDoList();
    document.getElementById('addTaskBtn').disabled=true
}

function renderToDoList(ind=-1, type=''){
    list.innerHTML = '';
   const unorderedList = document.createElement('ul');
   for(let index=0;index<todoList.length;index++){

    const listItem = document.createElement('li');
    listItem.innerHTML = (index===ind && type==='Done')? '<s>'+todoList[index]+'</s>':todoList[index];
    unorderedList.appendChild(listItem);

    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = (index===ind && type==='Done')?'Undone':'Done';
    doneBtn.addEventListener('click', ()=>{
        todoListOps((index===ind && type==='Done')?'Undone':'Done', index)
    })
    unorderedList.appendChild(doneBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', ()=>{
        todoListOps('delete', index)
    })
    unorderedList.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', ()=>{
        todoListOps('edit', index)
    })
    unorderedList.appendChild(editBtn);
   }
   list.appendChild(unorderedList);
}

function todoListOps(type, index){
    switch(type){
        case 'Done':
            renderToDoList(index, type);
            break;
        case 'Undone':
            renderToDoList(index, type);
            break;
        case 'delete':
            todoList.splice(index,1);
            renderToDoList();
            break
        case 'edit':
            input.value = todoList[index];
            document.getElementById('addTaskBtn').disabled=false;
            todoList.splice(index,1);
            renderToDoList();
            break;
    }

}