
const card = document.getElementById('main')

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(value=>value.json()).then(value=>{

    for(let index=0;index<value.length;index++){
        card.innerHTML += `
            <div class="card">
            <img class="image" src=${value[index].image}/>
    <div>
        <h3>${value[index].name}</h3>
        <p>${value[index].id}</p>
    </div>
    <div class="price">
        <h3>${value[index].current_price}</h3>
        <p>${value[index].price_change_percentage_24h}</p>
        
    </div>
    </div>
            `
    }
    })
})



