

// // Función para obtener libros de la API
// async function fetchBooks() {
//     try {
//         const response = await fetch('http://localhost:1337/api/books');
//         const data = await response.json();
//         return data.data;
//     } catch (error) {
//         console.error('Error fetching data from API:', error);
//         return [];
//     }
// }

// // Función para ordenar libros
// function sortBooks(books, criteria, order) {
//     return books.sort((a, b) => {
//         let valueA, valueB;

//         switch (criteria) {
//             case 'title':
//             case 'author':
//                 valueA = a.attributes[criteria].toLowerCase();
//                 valueB = b.attributes[criteria].toLowerCase();
//                 break;
//             case 'calification':
//             case 'date':
//             case 'pages':
//                 valueA = a.attributes[criteria] || 0;
//                 valueB = b.attributes[criteria] || 0;
//                 break;
//             default:
//                 return 0;
//         }

//         if (order === 'asc') {
//             return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
//         } else {
//             return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
//         }
//     });
// }

// // Función para mostrar libros ordenados
// async function sortAndDisplayBooks() {
//     const criteria = document.getElementById('filterCriteria').value;
//     const order = document.getElementById('filterOrder').value;
//     const booksContainer = document.getElementById('books-container');
//     booksContainer.innerHTML = '';

//     const books = await fetchBooks();
//     const sortedBooks = sortBooks(books, criteria, order);

//     sortedBooks.forEach(book => {
//         const bookCard = createBookCard(book);
//         booksContainer.appendChild(bookCard);
//     });
// }

// // Función para crear una tarjeta de libro
// function createBookCard(book) {
//     const bookCard = document.createElement('div');
//     bookCard.classList.add('book-card');

//     const img = document.createElement('img');
//     img.src = book.attributes.portada;
//     img.alt = book.attributes.title;
//     img.classList.add('book-image');
//     bookCard.appendChild(img);

//     const title = document.createElement('h2');
//     title.textContent = book.attributes.title;
//     bookCard.appendChild(title);

//     const author = document.createElement('p');
//     author.textContent = `Author: ${book.attributes.author}`;
//     bookCard.appendChild(author);

//     const pages = document.createElement('p');
//     pages.textContent = `Pages: ${book.attributes.pages}`;
//     bookCard.appendChild(pages);

//     const published = document.createElement('p');
//     published.textContent = `Published: ${book.attributes.published}`;
//     bookCard.appendChild(published);

//     const rating = document.createElement('p');
//     rating.textContent = `Rating: ${book.attributes.calification || 'Not available'}`;
//     bookCard.appendChild(rating);

//     const addToFavoritesBtn = document.createElement('button');
//     addToFavoritesBtn.textContent = 'Add to Favorites';
//     addToFavoritesBtn.classList.add('add-to-favorites-btn');
//     addToFavoritesBtn.addEventListener('click', () => addToFavorites(book.id));
//     bookCard.appendChild(addToFavoritesBtn);

//     return bookCard;
// }

// // Función para agregar un libro a favoritos
// async function addToFavorites(bookId) {
//     try {
//         const token = sessionStorage.getItem('token');
//         if (!token) {
//             console.error('User not logged in');
//             return;
//         }

//         const response = await axios.post(
//             `http://localhost:1337/api/users/${userId}/favorites`,
//             { book: bookId },
//             { headers: { Authorization: `Bearer ${token}` } }
//         );

//         console.log('Book added to favorites:', response.data);
//         // Puedes realizar alguna acción adicional si es necesario, como mostrar un mensaje de éxito al usuario.
//     } catch (error) {
//         console.error('Error adding book to favorites:', error);
//         // Puedes manejar el error de alguna manera, por ejemplo, mostrando un mensaje de error al usuario.
//     }
// }

// // Función para mostrar los libros inicialmente
// async function displayBooks() {
//     const booksContainer = document.getElementById('books-container');
//     booksContainer.innerHTML = '';
//     const books = await fetchBooks();

//     books.forEach(book => {
//         const bookCard = createBookCard(book);
//         booksContainer.appendChild(bookCard);
//     });
// }

// // Llamada inicial para mostrar los libros
// displayBooks();