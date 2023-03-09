const btn = document.getElementById('save-btn');
const input = document.getElementById('input');

const toDos = [];
let todo = '';
input.addEventListener('input', (e)=>{
    todo=e.target.value
})

btn.addEventListener('click', ()=>{
   toDos.push(todo)
   input.value=''
})

{toDos.length?toDos.map(value=>{
<p>{value}</p>
}):''}