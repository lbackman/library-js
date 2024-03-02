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
  return `<tr class="library-entry" data-attribute="${idx}">
    <td>${book}</td>
    <td>${author}</td>
    <td>${pages}</td>
    <td class="read">${read === true ? "Yes" : "No"}</td>
    <td><button class="toggle-read">${read === true ? "Mark unread" : "Mark read"}</button></td>
    <td><button class="delete">Delete</button></td>
    </tr>`
}

const library = document.querySelector('.library tbody')
myLibrary.forEach((title, idx) => {
  library.insertAdjacentHTML('beforeend', template(idx, title.book, title.author, title.pages, title.read))
})

Book.prototype.toggleStatus = function() {
  this.read = !this.read
}

const toggleReadText = function(element, status) {
  const readBox = element.querySelector('.read')
  const btn = element.querySelector('.toggle-read')
  if (status) {
    readBox.textContent = 'Yes'
    btn.textContent = 'Mark unread'
  } else {
    readBox.textContent = 'No'
    btn.textContent = 'Mark read'
  }
}

function addBookToLibrary(book, author, pages, read) {
  const newBook = new Book(book, author, pages, read)
  myLibrary.push(newBook)
  library.insertAdjacentHTML('beforeend', template(myLibrary.length - 1, book, author, pages, read))
}

const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector("input[type='submit']")

// "Show the dialog" button opens the dialog modally
addBookButton.addEventListener("click", () => {
  dialog.showModal()
})

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close()
})

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  const form = document.querySelector('form')
  const titleBook = form.querySelector('#book')
  const titleAuthor = form.querySelector('#author')
  const titlePages = form.querySelector('#pages')
  const titleRead = form.querySelector('#no')
  if (titleBook != '' && titleAuthor != '' && pages != '') {
    addBookToLibrary(titleBook.value, titleAuthor.value, titlePages.value, titleRead.checked ? false : true)
  }
  dialog.close()
  alert('Book added to library!')
  clearFields(titleBook, titleAuthor, titlePages, titleRead)
})

document.addEventListener("click", function(e){
  const toggleButton = e.target.closest(".toggle-read")
  const deleteButton = e.target.closest(".delete")

  if(toggleButton) {
    const element = toggleButton.closest(".library-entry")
    const idx = element.dataset.attribute
    myLibrary[idx].toggleStatus()
    const readStatus = myLibrary[idx].read
    toggleReadText(element, readStatus)
    console.log(`toggle read ${idx}`)
  }
  if(deleteButton) {
    const element = deleteButton.closest(".library-entry")
    const idx = element.dataset.attribute
    element.remove()
    delete myLibrary[idx]
    console.log(`deleted entry ${idx}`)
  }
})

const clearFields = function(book, author, pages, read) {
  book.value = ''
  author.value = ''
  pages.value = ''
  read.checked = true
}
