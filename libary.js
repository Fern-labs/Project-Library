const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = self.crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("Red Rising", "Pierce Brown", 416, "read");
addBookToLibrary("Golden Son", "Pierce Brown", 464, "not read");
addBookToLibrary("Morning Star", "Pierce Brown", 576, "not read");
console.log(myLibrary);

//creates a new book div for each book object
//displays title author pages and read
//does this for the entire array when this is ran

function updateBookShelf() {
  for (let book of myLibrary) {
    const bookShelf = document.querySelector(".bookshelf");
    let addBook = document.createElement("div");
    addBook.classList.add("book");
    //for later book.title works for css
    //addBook.innerHTML = book.title;
    addBook.innerHTML = book.info();
    bookShelf.appendChild(addBook);
  }
}

updateBookShelf();
