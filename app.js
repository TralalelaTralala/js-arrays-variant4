const books =
[
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Антиутопія",
        rating: 5
    },

    {
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        genre: "Фантастика",
        rating: 5
    },

    {
        title: "Harry Potter",
        author: "J.K Rowling",
        year: 1997,
        genre: "Фентезі",
        rating: 4
    },

    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        year: 1937,
        genre: "Фентезі",
        rating: 5
    },

    {
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        year: 1892,
        genre: "Детектив",
        rating: 4
    },

    {
        title: "Metro 2033",
        author: "Dmitry Glukhovsky",
        year: 2005,
        genre: "Постапокаліпсис",
        rating: 5
    },

    {
        title: "The Witcher",
        author: "Andrzej Sapkowski",
        year: 1993,
        genre: "Фентезі",
        rating: 5
    }
];

// Додавання нової книги користувачем
function addBook(title, author, year, genre, rating)
{
    books.push(
    {
        title: title,
        author: author,
        year: year,
        genre: genre,
        rating: rating
    });
}

// Користувач додає книгу
addBook(
    "Atomic Habits",
    "James Clear",
    2018,
    "Саморозвиток",
    5
);

// Виведення всіх книг
console.log("Усі книги:");

books.forEach(book =>
{
    console.log(book.title);
});

// Пошук книг по назві та автору
function searchBooks(text)
{
    return books.filter(book =>

        book.title
            .toLowerCase()
            .includes(text.toLowerCase())

        ||

        book.author
            .toLowerCase()
            .includes(text.toLowerCase())
    );
}

console.log("\nПошук:");

const result = searchBooks("har");

result.forEach(book =>
{
    console.log(book.title);
});

// Фільтрація за рейтингом
function filterByRating(minRating)
{
    return books.filter(book =>
        book.rating >= minRating
    );
}

console.log("\nФільтрація за рейтингом:");

const filteredBooks = filterByRating(5);

filteredBooks.forEach(book =>
{
    console.log(book.title);
});

// Фільтрація за жанром
function filterByGenre(genre)
{
    return books.filter(book =>

        book.genre
            .toLowerCase()
            .includes(genre.toLowerCase())
    );
}

console.log("\nФільтрація за жанром:");

const genreBooks = filterByGenre("фентезі");

genreBooks.forEach(book =>
{
    console.log(book.title);
});

// Середній рейтинг
function averageRating()
{
    let sum = 0;

    books.forEach(book =>
    {
        sum += book.rating;
    });

    return sum / books.length;
}

console.log("\nСередній рейтинг:");
console.log(averageRating());

// ТОП-5 книг
function topBooks()
{
    return books
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
}

console.log("\nТОП-5 книг:");

topBooks().forEach(book =>
{
    console.log(book.title + " - Рейтинг: " + book.rating);
});

// Union
function union(a, b)
{
    return [...new Set([...a, ...b])];
}

console.log("\nUnion:");

console.log(
    union([1,2,3], [3,4,5])
);

// Intersection
function intersection(a, b)
{
    return a.filter(x =>
        b.includes(x)
    );
}

console.log("\nIntersection:");

console.log(
    intersection([1,2,3], [2,3,4])
);

// Difference
function difference(a, b)
{
    return a.filter(x =>
        !b.includes(x)
    );
}

console.log("\nDifference:");

console.log(
    difference([1,2,3], [2])
);