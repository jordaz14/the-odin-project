const myLibrary = [];

const button = document.querySelector(".submit-button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const bookSection = document.querySelector("section");

function Book(title, author, pages, read) {
  // construct book object
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // clears catalog of books
  bookSection.innerHTML = "";

  // gather form input
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;

  // create new book from input
  let newBook = new Book(title, author, pages, "Unread");

  // push book to Arr
  myLibrary.push(newBook);

  // iterate through books cards and post to DOM
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

    // create 'mark as read' button functionality
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
