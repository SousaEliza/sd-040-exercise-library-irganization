const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => {
  const result = books
    .filter(({ genre }) => genre === 'Ficção Científica' || genre === 'Fantasia');
  return result;
};

// Requisito 2
const oldBooksOrdered = (year) => books
  .filter(({ releaseYear }) => year - releaseYear > 60)
  .sort((a, b) => {
    if (a > b) {
      return 1;
    }
    return -1;
  });

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
};

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
};

// Requisito 5
const oldBooks = (year) => {
  // escreva seu código aqui
};

// Requisito 6
const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
