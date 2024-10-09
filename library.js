const myLibrary = [];

function Book(title, author, pages, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;

    this.printBooks = function(){

        let card = document.createElement('div');
        card.classList.add("card");
        document.querySelector('main').appendChild(card);
        
        let cardTitle = document.createElement('div');
        cardTitle.setAttribute("id", "card-title");
        cardTitle.innerText = this.title;
        card.appendChild(cardTitle);

        let author = document.createElement('div');
        author.setAttribute("id", "card-author");
        author.innerText = "Author: " +this.author;
        card.appendChild(author);

        let pages = document.createElement('div');
        pages.setAttribute("id", "card-pages");
        pages.innerText = "Page Count: " +this.pages;
        card.appendChild(pages);

        let rating = document.createElement('div');
        rating.setAttribute("id", "card-rating");
        rating.innerText = "Rating: " + this.rating;
        card.appendChild(rating);

        let deleteButton = document.createElement('button');
        
        deleteButton.innerText = "X";
        deleteButton.classList.add("delete-button");
        card.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            card.remove(); 
            const index = myLibrary.indexOf(this); 
            if (index > -1) {
                myLibrary.splice(index, 1);  
            }
        });
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//making button open dialog
const modal = document.querySelector('#add-modal');
const addBookButton = document.querySelector('#add-button');

addBookButton.addEventListener("click", () => {
    modal.showModal();
})

//these are the buttons inside the modal
const addButton = document.querySelector('#add-button-modal');
const closeButton = document.querySelector('#close-button');

closeButton.addEventListener("click", () => {
    modal.close();
})

addButton.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector('#pages').value;
    const rating = document.querySelector('#rating').value;
    const newBook = new Book(title, author, pages, rating);
    myLibrary.push(newBook);
    newBook.printBooks();
    modal.close();
})

