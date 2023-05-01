function findAuthorById(authors, id) {
  // return the author object when a successful match of the author id is found.
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  // return the book object when a successful match of the book id is found.
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // add all books to borrowedBooks[] if the returned value is false
  let borrowedBooks = books.filter((book) => !book.borrows[0].returned);
  // add all books to borrowedBooks[] if the returned value is true
  let returnedBooks = books.filter((book) => book.borrows[0].returned);
  return [borrowedBooks,returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows;
  // go through book borrow
  const borrower = borrowed.reduce((result,borrow) => {
    const borrowID = borrow.id;
    // find the account information based on the borrow id.
    const accountInfo = accounts.find((account) => account.id === borrowID);
    const { id, ...others } = accountInfo;
    // parse the result to the variable
    const accountUpdate = { id, returned: borrow.returned, ...others };
    // add the parsed result to the result array
    result.push(accountUpdate);
    return result;
  },[])
  // displays the first 10 values of the array
  return borrower.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
