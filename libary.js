const btn = document.querySelector(".btn");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

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
Book.prototype.toggleRead = function () {
  this.read = this.read === "read" ? "not read" : "read";
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("Red Rising", "Pierce Brown", 416, "read");
addBookToLibrary("Golden Son", "Pierce Brown", 464, "not read");
addBookToLibrary("Morning Star", "Pierce Brown", 576, "not read");
console.log(myLibrary);

function updateBookShelf() {
  const bookShelf = document.querySelector(".bookshelf");
  bookShelf.innerHTML = "";

  for (let book of myLibrary) {
    let addBook = document.createElement("div");
    addBook.classList.add("book");

    addBook.innerHTML = book.info();

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "Remove";
    removeBtn.setAttribute("data-id", book.id);
    removeBtn.addEventListener("click", (e) => {
      let id = e.target.getAttribute("data-id");
      let bookTarget = myLibrary.findIndex((book) => book.id == id);
      myLibrary.splice(bookTarget, 1);
      updateBookShelf();
    });

    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("toggleBtn");
    toggleBtn.textContent = "Toggle Read";
    toggleBtn.setAttribute("data-id", book.id);
    toggleBtn.addEventListener("click", (e) => {
      let id = e.target.getAttribute("data-id");
      let bookTarget = myLibrary.find((book) => book.id == id);
      if (bookTarget) {
        bookTarget.toggleRead();
        updateBookShelf();
      }
    });

    addBook.appendChild(removeBtn);
    addBook.appendChild(toggleBtn);

    bookShelf.appendChild(addBook);
  }
}

updateBookShelf();

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
