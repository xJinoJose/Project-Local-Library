function findAccountById(accounts, id) {
    // returns the account that matches the provided id
    return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
    // creates a new array of all accounts.name
    const accountsName = accounts.map(({name}) => {
        return { name:name };
    });

    // return accountsName after sorting by accountsName.name.last
    return accountsName.sort((accountsNameA, accountsNameB) => (accountsNameA.name.last.toLowerCase() > accountsNameB.name.last.toLowerCase() ? 1:-1));
}

function getTotalNumberOfBorrows(account, books) {
    // return the number of times an account.id matches the books.borrows.id
    const id = account.id;
    let total = 0;
    // goes through the book
    books.forEach((book) => {
        // goes through the borrows in books
        book.borrows.forEach((borrow) => {
            if (id === borrow.id) total++
        });
    });
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
