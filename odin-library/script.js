const myLibrary = [];

const button = document.querySelector(".submit-button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const bookSection = document.querySelector("section");

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here

  // clears catalog of books
  bookSection.innerHTML = "";

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;

  let newBook = new Book(title, author, pages, "Unread");

  myLibrary.push(newBook);

  // iterates through books cards and posts to DOM
  for (let book of myLibrary) {
    console.log(book.title);
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookSection.appendChild(bookCard);

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    const bookRead = document.createElement("p");
    bookRead.textContent = book.read;

    const bookPages = document.createElement("p");
    bookPages.textContent = `${book.pages} pages`;

    const bookReadButton = document.createElement("button");
    bookReadButton.className = "read-button";
    bookReadButton.textContent = "Mark as Read";
    bookReadButton.addEventListener("click", () => {
      bookRead.textContent = "Read";
    });

    const bookDeleteButton = document.createElement("button");
    bookDeleteButton.className = "delete-button";
    bookDeleteButton.textContent = "Delete";

    bookCard.append(
      bookTitle,
      bookAuthor,
      bookPages,
      bookRead,
      bookReadButton,
      bookDeleteButton
    );
  }
}
