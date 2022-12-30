let value = 0;
document.getElementById('value').innerHTML = value
document.getElementById('increase').addEventListener('click',()=>{
    value+=1;
    document.getElementById('value').innerHTML = value
})
document.getElementById('decrease').addEventListener('click',()=>{
    value-=1;
    document.getElementById('value').innerHTML = value
})