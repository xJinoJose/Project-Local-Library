function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book) => !book.borrows[0].returned);
  let returnedBooks = books.filter((book) => book.borrows[0].returned);
  return [borrowedBooks,returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows;
  const borrower = borrowed.reduce((result,borrow) => {
    const borrowID = borrow.id;
    const accountInfo = accounts.find((account) => account.id == borrowID);
    const { id, ...others } = accountInfo;
    const accountUpdate = { id, returned: borrow.returned, ...others };
    result.push(accountUpdate);
    return result;
  },[])
  return borrower.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
