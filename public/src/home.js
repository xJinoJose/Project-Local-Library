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

    // goes through books
    books.forEach((book) => {
        // goes through borrows in book
        book.borrows.forEach((borrow) => {
            // add 1 if returned is not true
            if (borrow.returned === false) total++
        })
    })
    return total
}

function getMostCommonGenres(books) {
    let commonGenres = [];
    // goes through books
    books.forEach((book) => {
        let genre = book.genre;
        // find the book genre
        const genreExist = commonGenres.find((book) => book.name === genre);
        // if there was already a genre counter then add 1, if not create genre with 1 count
        if(genreExist) {
            genreExist.count++;
        } else {
            const name = genre;
            const count = 1;
            const content = {name,count};
            commonGenres.push(content);
        }
    })
    // sort the list of genres and its count then return the first 5 values in the array
    commonGenres.sort((genreA,genreB) => genreB.count-genreA.count);
    return commonGenres.slice(0,5);
}

function getMostPopularBooks(books) {
    let popularBooks = [];
    // goes through books and pushes the name and count to an array
    for (let i=0;i<books.length;i++) {
        const name = books[i].title;
        const count = books[i].borrows.length;
        const content = {name,count};
        popularBooks.push(content);
    }

    // sorts and return the first 5 values in the array
    popularBooks.sort((bookA,bookB) => bookB.count-bookA.count);
    return popularBooks.slice(0,5);
}

function getMostPopularBooksAuthor(books, authors) {
  let popularBooks = [];

  // goes through books then pushes the name, count, and author into an array
  for (let i=0;i<books.length;i++) {
      const name = books[i].title;
      const count = books[i].borrows.length;
      const author = authors.find((author) => author.id === books[i].authorId);      
      const content = {name,count,author};
      popularBooks.push(content);
  }
  // sorts and return the first 5 values in the array
  popularBooks.sort((bookA,bookB) => bookB.count-bookA.count);
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
