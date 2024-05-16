// // Selección de elementos del DOM
// const loginUser = document.querySelector("#loginUser");
// const loginPassword = document.querySelector("#loginPassword");
// const loginBtn = document.querySelector("#loginBtn");
// const logoutBtn = document.querySelector("#logoutBtn");



// const registerUsername = document.querySelector("#registerUserName");
// const registerUserEmail = document.querySelector("#registerUserEmail");
// const registerUserPassword = document.querySelector("#registerUserPassword");
// const registerBtn = document.querySelector("#registerBtn");

// // Función de registro

// let register = async () => {
//     console.log("Register user!");
//     try {
//         let response = await axios.post("http://localhost:1337/api/auth/local/register", {
//             username: registerUsername.value,
//             email: registerUserEmail.value,
//             password: registerUserPassword.value,
//         });
//         console.log(response);
//         // Redirigir a la página de inicio de sesión después del registro exitoso
//         window.location.href = "login.html";
//     } catch (error) {
//         console.error("Error registering user:", error ? error : "Unknown error");
//     }
// };

// // Función de login
// let login = async () => {
//     console.log("Logging in...");
//     try {
//         // Evitar múltiples intentos de inicio de sesión
//         loginBtn.disabled = true; // Deshabilitar el botón de inicio de sesión durante el proceso de inicio de sesión
//         let response = await axios.post("http://localhost:1337/api/auth/local", {
//             identifier: loginUser.value,
//             password: loginPassword.value,
//         });
//         console.log("Login successful. Response data:", response.data);
//         sessionStorage.setItem("token", response.data.jwt);
//         sessionStorage.setItem("user", JSON.stringify(response.data.user));
//         renderPage(true);
//         // Redirigir al usuario a la página de dashboard
//         window.location.href = "dashboard.html";
//     } catch (error) {
//         console.error("Error logging in:", error ? error : "Unknown error");
//     } finally {
//         loginBtn.disabled = false; // Habilitar el botón de inicio de sesión después del intento de inicio de sesión
//     }
// };

// // Función de logout
// let logout = () => {
//     console.log("Logging out...");
//     sessionStorage.clear();
//     // Redirigir al usuario a la página de inicio de sesión
//     window.location.href = "index.html";
// };

// // Verificación si está logueado
// let checkIfLoggedIn = async () => {
//     let status;
//     try {
//         const token = sessionStorage.getItem("token");
//         console.log("Token:", token);
//         await axios.get("http://localhost:1337/api/users/me", {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         status = true;
//     } catch (error) {
//         console.log("Error checking login status:", error);
//         status = false;
//     }
//     return status;
// };

// // Llamada inicial para verificar si está logueado
// document.addEventListener("DOMContentLoaded", async () => {
//     let loggedIn = await checkIfLoggedIn();
//     renderPage(loggedIn);
// });

// // Renderización de la página según el estado de autenticación
// let renderPage = (loggedIn) => {
//     const welcomePage = document.querySelector("#welcome-page");
//     const loginWrapper = document.querySelector("#login-wrapper");

//     if (welcomePage) {
//         welcomePage.style.display = loggedIn ? "block" : "none";
//     }

//     if (loginWrapper) {
//         loginWrapper.style.display = loggedIn ? "none" : "block";
//     }
// };

// // Selección del botón de cierre de sesión y evento de clic
// if (loginBtn) {
//     loginBtn.addEventListener("click", login);
// }

// if (logoutBtn) {
//     logoutBtn.addEventListener("click", logout);
// }






// Selección de elementos del DOM
const loginUser = document.querySelector("#loginUser");
const loginPassword = document.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");

const registerUsername = document.querySelector("#registerUserName");
const registerUserEmail = document.querySelector("#registerUserEmail");
const registerUserPassword = document.querySelector("#registerUserPassword");
const registerBtn = document.querySelector("#registerBtn");

// Función de registro
let register = async () => {
    console.log("Register user!");
    try {
        let response = await axios.post("http://localhost:1337/api/auth/local/register", {
            username: registerUsername.value,
            email: registerUserEmail.value,
            password: registerUserPassword.value,
        });
        console.log(response);
        // Redirigir a la página de inicio de sesión después del registro exitoso
        window.location.href = "login.html";
    } catch (error) {
        console.error("Error registering user:", error ? error : "Unknown error");
    }
};

// Función de login
let login = async () => {
    console.log("Logging in...");
    try {
        // Evitar múltiples intentos de inicio de sesión
        loginBtn.disabled = true; // Deshabilitar el botón de inicio de sesión durante el proceso de inicio de sesión
        let response = await axios.post("http://localhost:1337/api/auth/local", {
            identifier: loginUser.value,
            password: loginPassword.value,
        });
        console.log("Login successful. Response data:", response.data);
        sessionStorage.setItem("token", response.data.jwt);
        sessionStorage.setItem("username", response.data.user.username);
        renderPage(true);
        // Redirigir al usuario a la página de dashboard
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Error logging in:", error ? error : "Unknown error");
    } finally {
        loginBtn.disabled = false; // Habilitar el botón de inicio de sesión después del intento de inicio de sesión
    }
};

// Función de logout
let logout = () => {
    console.log("Logging out...");
    sessionStorage.clear();
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "index.html";
};

// Verificación si está logueado
let checkIfLoggedIn = async () => {
    let status;
    try {
        const token = sessionStorage.getItem("token");
        console.log("Token:", token);
        await axios.get("http://localhost:1337/api/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        status = true;
    } catch (error) {
        console.log("Error checking login status:", error);
        status = false;
    }
    return status;
};

// Llamada inicial para verificar si está logueado
document.addEventListener("DOMContentLoaded", async () => {
    let loggedIn = await checkIfLoggedIn();
    renderPage(loggedIn);
});

// Renderización de la página según el estado de autenticación
let renderPage = (loggedIn) => {
    const welcomePage = document.querySelector("#welcome-page");
    const loginWrapper = document.querySelector("#login-wrapper");

    if (welcomePage) {
        welcomePage.style.display = loggedIn ? "block" : "none";
    }

    if (loginWrapper) {
        loginWrapper.style.display = loggedIn ? "none" : "block";
    }

    // Si está logueado, muestra el nombre de usuario en el mensaje de bienvenida
    if (loggedIn) {
        const username = sessionStorage.getItem("username");
        const usernameSpan = document.querySelector("#username");
        if (username && usernameSpan) {
            usernameSpan.textContent = username;
        }
    }
};

// Selección del botón de cierre de sesión y evento de clic
if (loginBtn) {
    loginBtn.addEventListener("click", login);
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
}

// Función para obtener libros de la API
async function fetchBooks() {
    try {
        const response = await fetch('http://localhost:1337/api/books');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return [];
    }
}

// Función para obtener libros favoritos del usuario
async function fetchFavoriteBooks() {
    try {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('User not logged in');
            return [];
        }

        const response = await axios.get(
            `http://localhost:1337/api/users/me/favorites`,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        return response.data;
    } catch (error) {
        console.error('Error fetching favorite books:', error);
        return [];
    }
}

// Función para ordenar libros
function sortBooks(books, criteria, order) {
    return books.sort((a, b) => {
        let valueA, valueB;

        switch (criteria) {
            case 'title':
            case 'author':
                valueA = a.attributes[criteria].toLowerCase();
                valueB = b.attributes[criteria].toLowerCase();
                break;
            case 'calification':
            case 'date':
            case 'pages':
                valueA = a.attributes[criteria] || 0;
                valueB = b.attributes[criteria] || 0;
                break;
            default:
                return 0;
        }

        if (order === 'asc') {
            return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
            return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
    });
}

// Función para mostrar libros ordenados
async function sortAndDisplayBooks() {
    const criteria = document.getElementById('filterCriteria').value;
    const order = document.getElementById('filterOrder').value;
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';

    const books = await fetchBooks();
    const sortedBooks = sortBooks(books, criteria, order);

    sortedBooks.forEach(book => {
        const bookCard = createBookCard(book, false);
        booksContainer.appendChild(bookCard);
    });
}

// Función para crear una tarjeta de libro
function createBookCard(book, isFavorite) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const img = document.createElement('img');
    img.src = book.attributes.portada;
    img.alt = book.attributes.title;
    img.classList.add('book-image');
    bookCard.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = book.attributes.title;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${book.attributes.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.attributes.pages}`;
    bookCard.appendChild(pages);

    const published = document.createElement('p');
    published.textContent = `Published: ${book.attributes.published}`;
    bookCard.appendChild(published);

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${book.attributes.calification || 'Not available'}`;
    bookCard.appendChild(rating);

    const button = document.createElement('button');
    button.textContent = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';
    button.classList.add(isFavorite ? 'remove-from-favorites-btn' : 'add-to-favorites-btn');
    button.addEventListener('click', () => isFavorite ? removeFromFavorites(book.id) : addToFavorites(book.id));
    bookCard.appendChild(button);

    return bookCard;
}

// Función para agregar un libro a favoritos
async function addToFavorites(bookId) {
    try {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('User not logged in');
            return;
        }

        const response = await axios.post(
            `http://localhost:1337/api/users/me/favorites`,
            { book: bookId },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log('Book added to favorites:', response.data);
        // Actualizar la lista de libros favoritos
        await displayFavoriteBooks();
    } catch (error) {
        console.error('Error adding book to favorites:', error);
        // Manejar el error, si es necesario
    }
}

// Función para eliminar un libro de favoritos
async function removeFromFavorites(bookId) {
    try {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('User not logged in');
            return;
        }

        const response = await axios.delete(
            `http://localhost:1337/api/users/me/favorites/${bookId}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log('Book removed from favorites:', response.data);
        // Actualizar la lista de libros favoritos
        await displayFavoriteBooks();
    } catch (error) {
        console.error('Error removing book from favorites:', error);
        // Manejar el error, si es necesario
    }
}

// Función para mostrar los libros favoritos del usuario
async function displayFavoriteBooks() {
    const favoriteBooksContainer = document.getElementById('favorite-books-container');
    favoriteBooksContainer.innerHTML = '';

    const favoriteBooks = await fetchFavoriteBooks();

    favoriteBooks.forEach(book => {
        const bookCard = createBookCard(book, true);
        favoriteBooksContainer.appendChild(bookCard);
    });
}

// Función para mostrar los libros inicialmente
async function displayBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';
    const books = await fetchBooks();

    books.forEach(book => {
        const bookCard = createBookCard(book, false);
        booksContainer.appendChild(bookCard);
    });
}

// Llamada inicial para mostrar los libros y los favoritos
document.addEventListener('DOMContentLoaded', async () => {
    // Mostrar libros al cargar la página
    await displayBooks();
    // Mostrar libros favoritos si el usuario está autenticado
    const token = sessionStorage.getItem('token');
    if (token) {
        await displayFavoriteBooks();
    }
});

