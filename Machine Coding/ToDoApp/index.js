let toDoS = []
    let button = document.getElementById('button');
    let xyz = document.getElementById('addedTodo');
    button.addEventListener('click', ()=>{
        toDoS.push(document.getElementById('task').value);
        toDoS.forEach((value, index)=>{
            console.log('index', index)
            let toDo = document.createElement('p');
            toDo.innerText = value
            xyz.appendChild(toDo)
        })
        document.getElementById('task').innerHTML=''
    })

    
