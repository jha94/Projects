

const card = document.getElementById('main')
const pagination = document.getElementById('pagination')
const pages = [];
let prevPage = 0
let currentPage = 1
let totalValue;
function insert(val=1, isClear){
    if(isClear){
        card.innerHTML =''
    }
    prevPage = (val-1)*10;

    for(let index=prevPage;index<prevPage+10;index++){
        if(totalValue[index]){
        card.innerHTML += `
            <div class="card">
            <img class="image" src=${totalValue[index].image}/>
    <div>
        <h3>${totalValue[index].name}</h3>
        <p>${totalValue[index].id}</p>
    </div>
    <div class="price">
        <h3>${totalValue[index].current_price}</h3>
        <p>${totalValue[index].price_change_percentage_24h}</p>
        
    </div>
    </div>
            `
        }
    }
  }

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=false`).then(value=>value.json()).then(value=>{
        for(let index=0;index<value.length/10;index++){
            pages.push(index+1)
        }
        totalValue = value;
        insert()
    pages.forEach((val)=> {
        pagination.innerHTML += `<button onclick="insert('${val}', ${true} )">${val}</button>`
      });
    })
})





