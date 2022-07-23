
    let count = 0;
    let button = document.getElementById('button');
    console.log(document.getElementsByName('test'))
    button.addEventListener('click', ()=>{
        count++
        alert(`button clicked ${count}`)
    })
    document.getElementById('gyaan').innerHTML='hiiii'
