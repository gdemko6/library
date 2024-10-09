const myLibrary = [];

function Book(title) {
    this.title = title;

    this.printBooks = function(){
        myLibrary.forEach(book => {
            let card = document.createElement('div');
            card.classList.add("card");
            document.querySelector('main').appendChild(card);
            
            let cardTitle = document.createElement('div');
            cardTitle.setAttribute("id", "card-title");
            cardTitle.innerText = book.title;
            card.appendChild(cardTitle);
        });
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const harryPotter = new Book("Harry Potter");
addBookToLibrary(harryPotter);

const lotr = new Book("Lord of the Rings");
addBookToLibrary(lotr);

const maze = new Book("Maze Runner");
addBookToLibrary(maze);

const mazes = new Book("Maze Runner");
addBookToLibrary(mazes);
harryPotter.printBooks();