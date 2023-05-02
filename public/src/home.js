function getTotalBooksCount(books) {
    // return the total number of books
    return books.length;
}

function getTotalAccountsCount(accounts) {
    // return the total number of accounts
    return accounts.length;
}

function getBooksBorrowedCount(books) {
    let total = 0;
    for (let i=0;i<books.length;i++) {
        for(let j=0;j<books[i].borrows.length;j++) {
            if (books[i].borrows[j].returned === false) total++
        }
    }
    return total
}

function getMostCommonGenres(books) {
    let commonGenres = [];
    for (let i=0;i<books.length;i++) {
        let genre = books[i].genre;
        const genreExist = commonGenres.find((book) => book.name === genre);
        if(genreExist) {
            genreExist.count++;
        } else {
            const name = genre;
            const count = 1;
            const content = {name,count};
            commonGenres.push(content);
        }
    }
    commonGenres.sort((genreA,genreB) => genreB.count-genreA.count);
    return commonGenres.slice(0,5);
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  for (let i=0;i<books.length;i++) {
      const name = books[i].title;
      const count = books[i].borrows.length;
      const content = {name,count};
      popularBooks.push(content);
  }
  popularBooks.sort((bookA,bookB) => bookB.count-bookA.count);
  return popularBooks.slice(0,5);
}

function getMostPopularBooksAuthor(books, authors) {
  let popularBooks = [];
  for (let i=0;i<books.length;i++) {
      const name = books[i].title;
      const count = books[i].borrows.length;
      const author = authors.find((author) => author.id === books[i].authorId);      
      const content = {name,count,author};
      popularBooks.push(content);
  }
  popularBooks.sort((bookA,bookB) => bookB.count-bookA.count);
  console.log("test")
  return popularBooks.slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const topAuthorsByBooks = getMostPopularBooksAuthor(books, authors);
  let topAuthors = [];
  for(let i=0;i<topAuthorsByBooks.length;i++){
      let name = authors.find((author) => author.id === topAuthorsByBooks[i].author.id);
      let firstname = name.name.first;
      let lastname = name.name.last;
      let authorsString = `${firstname} ${lastname}`
      name= authorsString;
      let count = topAuthorsByBooks[i].count;
      let pushString = {name,count}
      topAuthors.push(pushString);
  }
  return topAuthors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
