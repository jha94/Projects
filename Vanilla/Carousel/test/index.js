

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const greetings = ['Hi', 'Hello', 'morning', 'night'];
const div = document.getElementById('value');
div.innerHTML = greetings[0]
nextBtn.addEventListener('click', ()=>{
    document.getElementById('value').innerHTML = greetings[greetings.indexOf(div.innerHTML)+1]
})

prevBtn.addEventListener('click', ()=>{
    document.getElementById('value').innerHTML = greetings[greetings.indexOf(div.innerHTML)-1]
})
