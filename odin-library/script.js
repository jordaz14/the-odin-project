const myLibrary = [];

const button = document.querySelector(".submit-button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  console.log("hi");

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;

  console.log(title, author, pages);

  let newBook = new Book(title, author, pages, false);
  console.log(newBook);

  myLibrary.push(newBook);
}
