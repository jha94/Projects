
document.getElementById('inputhandler').addEventListener('input', (e)=>{
    document.querySelector('.piechart').style = `--percentage:${e.target.value}%`
})