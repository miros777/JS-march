let books: {title: string, pageCount: number, genre: string[]}[] = [
    {
        title: 'TomasSoer54656',
        pageCount: 1190,
        genre: ['artistic', 'ffff', 'three'],
        // authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
    {
        title: 'HarryPotter and cup of whisky',
        pageCount: 80,
        genre: ['fantasy', 'comedy'],
        // authors: [{name: 'Author name1', age: 29}, {name: 'Author name2', age: 30}]
    },
    {
        title: 'Astral',
        pageCount: 250,
        genre: ['horror', 'fantasy', 'NEWWWW'],
        // authors: [{name: 'Author name1', age: 32}]
    },
    {
        title: 'Astral',
        pageCount: 250,
        genre: ['horror', 'NEWWWW'],
        // authors: [{name: 'Author name1', age: 32}]
    },
    {
        title: 'Astral',
        pageCount: 250,
        genre: ['horror', 'fantasy', 'NEWWWW'],
        // authors: [{name: 'Author name1', age: 32}]
    },
    {
        title: 'TomasSoer',
        pageCount: 1190,
        genre: ['artistic', 'ffff', 'three'],
        // authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
    {
        title: 'TTT',
        pageCount: 1190,
        genre: ['artistic', 'ffff', 'three'],
        // authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
    {
        title: 'TTT',
        pageCount: 1190,
        genre: ['artistic', 'ffff', 'three'],
        // authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
    {
        title: 'TTT',
        pageCount: 1190,
        genre: ['artistic', 'ffff', 'three'],
        // authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
];
//
// let bigBook = books[0]
// // console.log(books)
// console.log('******')
//
// for (const book of books) {
//     if (book.pageCount > bigBook.pageCount) {
//         bigBook = book;
//     }
// }
//
// console.log(bigBook)
console.log('**555****')
let genres: any[] = [];
let bigGenre: {title: string, pageCount: number, genre: string[] } = books[0];
// console.log(bigGenre)

// for (const book of books) {
//     // console.log(book.genre.length);
//     if (book.genre.length > bigGenre.genre.length) {
//         bigGenre = book;
//     } else if (book.genre.length === bigGenre.genre.length) {
//         genres[genres.length] = book;
//     }
// }
// debugger;
for (let i: number = 1; i < books.length; i++) {

    if (books[i].genre.length === bigGenre.genre.length) {
        genres[genres.length] = books[i];
    } else if (books[i].genre.length > bigGenre.genre.length) {
        bigGenre = books[i];
    }

    if (books.length - 1 === i && genres[0]) {
        if (bigGenre.genre.length === genres[0].genre.length) {
            genres[genres.length] = bigGenre;
        }
    }
}

console.log(bigGenre)
console.log(genres)