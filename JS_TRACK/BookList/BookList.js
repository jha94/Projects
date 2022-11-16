


let form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
     addBooks()
})

let totalBooks = [];

function sellBook(id){
     totalBooks.splice(id, 1)
     setBooks(totalBooks)
}

function rentBook(index){
    totalBooks[index].rented=true
    setBooks(totalBooks)
}

function setBooks(totalBooks, isAdd){
    const result = totalBooks.map(({name, author, desc, price, rented}, index)=>{
        if(rented){
        return `<tr><td><del>${name}</del>&nbsp;&nbsp;</td> <td><del>${author}</del>&nbsp;&nbsp;</td>  <td><del>${desc}</del>&nbsp;&nbsp;</td> <td><del>${price}</del>&nbsp;&nbsp;</td></tr>`

        } else{
        return `<tr><td>${name}&nbsp;&nbsp;</td> <td>${author}&nbsp;&nbsp;</td>  <td>${desc}&nbsp;&nbsp;</td></del> <td>${price}&nbsp;&nbsp;</td> <td><button onclick='rentBook(${index})'>Rent</button></td> <td><button onclick='sellBook(${index})'>Sell</button></td></tr>`
        }
    })
    
    document.getElementById('bookStore').style.display=(totalBooks.length?'block':'none')
    document.getElementById('addedBooks').innerHTML = result
    if(isAdd){
    document.getElementById('name').value='',
    document.getElementById('author').value='',
    document.getElementById('desc').value='',
    document.getElementById('price').value=''
    }
}

function addBooks(){
    let name = document.getElementById('name').value
    let author = document.getElementById('author').value
    let desc = document.getElementById('desc').value
    let price = document.getElementById('price').value
    
    let isAdded = false;
    totalBooks.forEach((value)=>{
        if(value.name===name){
            isAdded=true
        }
    })
    if(price<1){
alert('Price must be greater than or equal to 1.')
    } else if(isAdded){
        alert('This book has already been added to store. Please add another!!')
    }
    else{
    totalBooks.push({
        name,
        author,
        desc,
        price,
        rented:false,
    })
setBooks(totalBooks, true)
    }
    
}