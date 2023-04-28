function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1:-1));
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  let total = 0;
  for (let i=0;i<books.length;i++){
      for(let j=0;j<books[i].borrows.length;j++) {
          if (id === books[i].borrows[j].id) total++
      }
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksOut = [];
  books.forEach((book)=>{
      let borrows = book.borrows;
      borrows.forEach((borrow)=>{
          if(borrow.id === account.id && borrow.returned === false){
              let author = authors.find((author)=> author.id === book.authorId)
              const content = {...book,author:author,borrows:[{id:account.id,returned:false}]};
              booksOut.push(content);
          }
      });
  })
  return booksOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
