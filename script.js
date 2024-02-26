const myLibrary = [];

function Book(book, author, pages, read) {
  this.book = book
  this.author = author
  this.pages = pages
  this.read = read
}

const silmarillion = new Book('The Silmarillion', 'J.R.R Tolkien', 365, true)
const lostTime = new Book('In Search of Lost Time', 'Marcel Proust', 4215, false)

myLibrary.push(silmarillion)
myLibrary.push(lostTime)

const template = function(idx, book, author, pages, read) {
  return `<tr data-attribute="${idx}">
    <td>${book}</td>
    <td>${author}</td>
    <td>${pages}</td>
    <td>${read === true ? "Yes" : "No"}</td>
    <td><button class="toggle-read">Mark read</button></td>
    <td><button class="delete">Delete</button></td>
    </tr>`
}

const library = document.querySelector('.library tbody')
myLibrary.forEach((title, idx) => {
  library.insertAdjacentHTML('beforeend', template(idx, title.book, title.author, title.pages, title.read))
})

Book.prototype.toggleStatus = function() {
  console.log(this)
  this.read = !this.read
}

function addBookToLibrary() {
  // do stuff here
}

const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
