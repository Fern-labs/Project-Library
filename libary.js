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
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("Red Rising", "Pierce Brown", 416, "read");
addBookToLibrary("Golden Son", "Pierce Brown", 464, "not read");
addBookToLibrary("Morning Star", "Pierce Brown", 576, "not read");
console.log(myLibrary);

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

const btn = document.querySelector(".btn");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

btn.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = form.title.value.trim();
  const author = form.author.value.trim();
  const pages = parseInt(form.pages.value, 10);
  const read = form.read.checked ? "read" : "not read";

  addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);
  document.querySelector(".bookshelf").innerHTML = "";
  updateBookShelf();
  form.reset();
  dialog.close();
});
