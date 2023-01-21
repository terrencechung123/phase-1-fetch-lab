// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then(resp => resp.json())
//     .then(json => renderBooks(json))
// }

// const { create } = require("json-server");

// function renderBooks(books) {
//   const main = document.querySelector('main')
//   books.forEach(book => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = book.name
//     main.appendChild(h2)
//   })
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
// })

//grab shit u need
//create empty function called `fetchBooks()`

fetch('https://anapioficeandfire.com/api/books/')
  .then(res => res.json())
  .then(json => console.log(json));

function fetchBooks(){
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(json => renderBooks(json))
};

//put Game Of Thrones titles on your webpage using function renderBooks();
function renderBooks(books){
  const main = document.querySelector('main')
    books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  
})
}
//call fetchBooks when index.html is loaded
document.addEventListener('DOMContentLoaded', function(){
  fetchBooks()
});


//to pass lab, fetchBooks(){} needs to include a fetch request to Game of Thrones API (https://anapioficeandfire.com/api/books).
