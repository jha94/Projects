let btn = document.getElementById("add");

btn.addEventListener("click", addBooks, false);

function addBooks(){
    let name = document.getElementById('name').value
    let author = document.getElementById('author').value
    let id = document.getElementById('id').value
    const bookDetails = {};
    bookDetails.name = name;
    bookDetails.author = author;
    bookDetails.id = id;
    const totalBooks = [];
    totalBooks.push(bookDetails)
   const result = totalBooks.map(({name, author, id})=>{
        return `${name} &emsp; ${author} &emsp; ${id} <br/>`
    })
    document.getElementById('addedBooks').innerHTML = result

}