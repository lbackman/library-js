const myLibrary = [];

function Book(book, author, pages, read) {
  // book constructor
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
