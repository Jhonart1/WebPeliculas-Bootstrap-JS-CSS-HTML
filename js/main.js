// Este array de peliculas se utiliza para:
// 1. proporcionar datos para mostrar en la interfaz de usuario de la aplicacion web
// 2. permitir la busqueda y filtrado de peliculas basado en varios criterios (titulo, año, genero, etc.)
// 3. mostrar detalles de cada pelicula cuando el usuario interactua con la interfaz
// array global 'movies' que contiene objetos representando películas
window.movies = [
  { title: "Deadpool 3", year: 2024, director: "Shawn Levy", genre: "Action", image: "https://cdnb.artstation.com/p/assets/images/images/050/326/635/large/rahal-nejraoui-deapdool-3-poster-4-by-rahalarts.jpg?1654601588", rating: 9, synopsis: "El mercenario bocazas Deadpool se une al austero Wolverine en una nueva aventura que promete ser explosiva y llena de humor." },
  { title: "Inside Out 2", year: 2024, director: "Kelsey Mann", genre: "Animation", image: "https://lumiere-a.akamaihd.net/v1/images/p_insideout2_798_0e9b544c.jpeg", rating: 9, synopsis: "Riley entra en la adolescencia y nuevas emociones se unen al equipo en la Sede Central, causando algo de agitación." },
  { title: "The Wild Robot", year: 2024, director: "Chris Sanders", genre: "Animation", image: "https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", rating: 9.5, synopsis: "Un robot llamado Roz se despierta por primera vez en una isla remota y debe adaptarse y aprender de los animales que la habitan." },
  { title: "Dune: Part Two", year: 2024, director: "Denis Villeneuve", genre: "Sci-Fi", image: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg", rating: 8.8, synopsis: "Paul Atreides se une a los Fremen y comienza un viaje espiritual y marcial para convertirse en Muad'Dib, mientras intenta evitar el terrible futuro que solo él puede prever." },
  { title: "Poor Things", year: 2023, director: "Yorgos Lanthimos", genre: "Comedy", image: "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg", rating: 8.0, synopsis: "La historia de Bella Baxter, una joven revivida por el brillante y poco ortodoxo científico Dr. Godwin Baxter." },
  { title: "Oppenheimer", year: 2023, director: "Christopher Nolan", genre: "Biography", image: "https://es.web.img3.acsta.net/pictures/23/05/25/13/41/1835431.jpg", rating: 8.4, synopsis: "La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica." },
  { title: "Barbie", year: 2023, director: "Greta Gerwig", genre: "Comedy", image: "https://es.web.img2.acsta.net/pictures/23/07/20/11/29/5479684.jpg", rating: 7.0, synopsis: "Barbie sufre una crisis existencial en su mundo perfecto de plástico y se embarca en una aventura en el mundo real." },
  { title: "Killers of the Flower Moon", year: 2023, director: "Martin Scorsese", genre: "Crime", image: "https://pics.filmaffinity.com/Los_asesinos_de_la_luna-364025498-large.jpg", rating: 7.7, synopsis: "Miembros de la tribu Osage en Oklahoma son asesinados bajo misteriosas circunstancias en la década de 1920, desencadenando una importante investigación del FBI." },
  { title: "The Whale", year: 2022, director: "Darren Aronofsky", genre: "Drama", image: "https://es.web.img3.acsta.net/pictures/22/12/07/14/00/3913150.jpg", rating: 7.7, synopsis: "Un profesor de inglés recluso y con obesidad mórbida intenta reconectar con su hija adolescente distanciada." },
  { title: "The Banshees of Inisherin", year: 2022, director: "Martin McDonagh", genre: "Comedy", image: "https://m.media-amazon.com/images/I/61oF3urhOsL._AC_UF894,1000_QL80_.jpg", rating: 7.7, synopsis: "Dos amigos de toda la vida se encuentran en un callejón sin salida cuando uno de ellos decide abruptamente poner fin a su amistad." },
  { title: "The Batman", year: 2022, director: "Matt Reeves", genre: "Action", image: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg", rating: 7.8, synopsis: "Cuando un asesino en serie tiene como objetivo la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas envía al Caballero Oscuro a una investigación en el inframundo." },
  { title: "Terrifier", year: 2016, director: "Damien Leone", genre: "Horror", image: "https://m.media-amazon.com/images/M/MV5BYmMxNzA0OTUtOTJiOS00NTc4LWJmNTItMGM3OWE0N2Y0NjhjXkEyXkFqcGdeQXVyMTg5NjU4NjE@._V1_SX300.jpg", rating: 6.2, synopsis: "En la noche de Halloween, Tara Heyes se encuentra siendo acosada por un payaso asesino maniático conocido como Art. ¿Podrá sobrevivir a los juegos retorcidos de este psicópata?" },  
  { title: "Terrifier 3", year: 2024, director: "Damien Leone", genre: "Horror", image: "https://pics.filmaffinity.com/Terrifier_3-521866501-large.jpg", rating: 8.5, synopsis: "Después de ser resucitado por una entidad siniestra, Art the Clown regresa al condado de Miles, donde debe cazar y destruir a una adolescente y a su hermano menor en la noche de Halloween." },

];

// constantes
// moviegrid elemento del dom para mostrar las peliculas
// searchinput campo de busqueda
// genrefilter selector de genero
// yearfilter selector de año
// noresultsmessage mensaje cuando no hay resultados
const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const yearFilter = document.getElementById('yearFilter');
const noResultsMessage = document.getElementById('noResultsMessage');

// variables para la paginacion
let currentPage = 1;
const moviesPerPage = 10;
let filteredMovies = [];

// funcion para mostrar peliculas con paginacion
function displayMovies(moviesToShow) {
  console.log("Displaying movies:", moviesToShow);
  movieGrid.innerHTML = '';
  
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const moviesToDisplay = moviesToShow.slice(startIndex, endIndex);
  
  moviesToDisplay.forEach((movie) => {
    const card = document.createElement('div');
    card.className = 'col-6 col-md-4 col-lg-2.4 mb-4';
    card.innerHTML = `
      <div class="card h-100 bg-dark text-white">
        <img src="${movie.image}" class="card-img-top img-fluid" alt="${movie.title}" style="height: 300px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title" style="font-size: 1rem;">${movie.title}</h5>
          <p class="card-text" style="font-size: 0.8rem;">
            ${movie.year} - ${movie.genre}
            <br>
            <span class="text-warning">
              <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
            </span>
          </p>
        </div>
      </div>
    `;
    card.addEventListener('click', () => showMovieDetails(movie));
    movieGrid.appendChild(card);
  });

  if (moviesToDisplay.length === 0) {
    movieGrid.innerHTML = '<p class="text-center w-100">No se encontraron películas que coincidan con tu búsqueda.</p>';
  }

  updateNavigationButtons(moviesToShow.length);
}

// funcion para actualizar los botones de navegacion y la informacion de la pagina
function updateNavigationButtons(totalMovies) {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const currentPageNum = document.getElementById('currentPageNum');
  const totalPagesElement = document.getElementById('totalPages');

  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage >= totalPages;

  currentPageNum.textContent = currentPage;
  totalPagesElement.textContent = totalPages;
}

// funcion para manejar la navegacion
function handleNavigation(direction) {
  if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  } else if (direction === 'next' && currentPage * moviesPerPage < filteredMovies.length) {
    currentPage++;
  }
  displayMovies(filteredMovies);
}

// event listeners para los botones de navegacion
document.getElementById('prevButton').addEventListener('click', () => handleNavigation('prev'));
document.getElementById('nextButton').addEventListener('click', () => handleNavigation('next'));

// funcion showmoviedetails
// muestra detalles de una pelicula en un modal
// incluye titulo año director genero y una descripcion generica con imagen
function showMovieDetails(movie) {
  const modalTitle = document.getElementById('movieModalLabel');
  const modalBody = document.getElementById('movieModalBody');
  const commentsList = document.getElementById('commentsList');
  const commentForm = document.getElementById('commentForm');
  
  modalTitle.textContent = movie.title;
  modalBody.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${movie.image}" class="img-fluid rounded" alt="${movie.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body p-3">
          <p class="card-text mb-1"><strong>Año:</strong> ${movie.year}</p>
          <p class="card-text mb-1"><strong>Director:</strong> ${movie.director}</p>
          <p class="card-text mb-1"><strong>Género:</strong> ${movie.genre}</p>
          <p class="card-text mb-1">
            <strong>Calificación:</strong> 
            <span class="text-warning">
              <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
            </span>
          </p>
          <p class="card-text mt-2"><strong>Sinopsis:</strong> ${movie.synopsis}</p>
        </div>
      </div>
    </div>
  `;
  
  // cargar comentarios
  loadComments(movie.id);
  
  // manejar el envio de nuevos comentarios
  commentForm.onsubmit = function(e) {
    e.preventDefault();
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== '') {
      addComment(movie.id, commentText);
      document.getElementById('commentText').value = '';
    }
  };
  
  const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
  movieModal.show();
}

//manejar la carga de comentarios
function loadComments(movieId) {
  const commentsList = document.getElementById('commentsList');
  commentsList.innerHTML = '';
  
  // Por ahora uso localStorage para ejemplo
  const comments = JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
  
  comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.className = 'card mb-2';
    commentElement.innerHTML = `
      <div class="card-body">
        <p class="card-text">${comment.text}</p>
        <small class="text-muted">${new Date(comment.date).toLocaleString()}</small>
      </div>
    `;
    commentsList.appendChild(commentElement);
  });
}

//manejar la adicion de comentarios
function addComment(movieId, text) {
  const comment = {
    text: text,
    date: new Date().toISOString()
  };
  
  // Por ahora uso localStorage para ejemplo
  const comments = JSON.parse(localStorage.getItem(`comments_${movieId}`)) || [];
  comments.push(comment);
  localStorage.setItem(`comments_${movieId}`, JSON.stringify(comments));
  
  // Recargar los comentarios
  loadComments(movieId);
}

// funcion filtermovies
// este codigo implementa un buscador y filtro de peliculas con visualizacion 
// en tarjetas y un modal para detalles sin usar apis externas
// filtra las peliculas basado en la busqueda genero y año seleccionados
// aplica los filtros y muestra las peliculas filtradas
function filterMovies() {
  console.log("Filtering movies...");
  const searchTerm = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;
  const selectedYear = yearFilter.value;

  console.log("Search term:", searchTerm);
  console.log("Selected genre:", selectedGenre);
  console.log("Selected year:", selectedYear);

  filteredMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(searchTerm);
    const genreMatch = selectedGenre === '' || movie.genre === selectedGenre;
    const yearMatch = selectedYear === '' || movie.year.toString() === selectedYear;
    
    return titleMatch && genreMatch && yearMatch;
  });

  console.log("Filtered movies:", filteredMovies);
  currentPage = 1; // resetear a la primera pagina cuando se aplica un nuevo filtro
  displayMovies(filteredMovies);
}

// funcion generateyearoptions
// genera opciones para el selector de año basado en los años de las peliculas guardadas en el array global 'movies'
function generateYearOptions() {
  const years = [...new Set(movies.map(movie => movie.year))].sort((a, b) => b - a);
  years.forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
  });
}

// funcion generategenreoptions
// genera opciones para el selector de genero basado en los generos de las peliculas guardadas en el array global 'movies'
function generateGenreOptions() {
  const genres = [...new Set(movies.map(movie => movie.genre))].sort();
  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
  });
}

// event listeners
// se agregan para busqueda cambio de genero y cambio de año
searchInput.addEventListener('input', filterMovies);
genreFilter.addEventListener('change', filterMovies);
yearFilter.addEventListener('change', filterMovies);

// inicializacion
// muestra todas las peliculas
// genera opciones de año y genero
// imprime todas las peliculas en la consola para verificacion
filteredMovies = [...movies]; // Inicialmente, todas las peliculas estan filtradas
displayMovies(filteredMovies);
generateYearOptions();
generateGenreOptions();
console.log("All movies:", movies);

// DOM (Document Object Model) es una representacion en memoria de la estructura del documento HTML.
// Proporciona una forma de acceder y manipular el contenido, estructura y estilos de una página web.

// Espera a que el DOM este completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
  // el evento 'DOMContentLoaded' se dispara cuando el documento HTML ha sido completamente cargado y parseado,
  // sin esperar a que se carguen hojas de estilo, imágenes y subframes.

  // selecciona el boton del menu hamburguesa
  const navbarToggler = document.querySelector('.navbar-toggler');
  // selecciona el carrusel vertical
  const verticalCarousel = document.getElementById('verticalCarousel');

  // añade un evento de clic al botón del menú hamburguesa
  navbarToggler.addEventListener('click', function() {
    // comprueba si la ventana tiene un ancho menor a 992px 
    if (window.innerWidth < 992) {
      // alterna la clase 'd-none' en el carrusel vertical para mostrarlo u ocultarlo
      verticalCarousel.classList.toggle('d-none');
    }
  });

  // añade un evento de redimensionamiento de ventana
  window.addEventListener('resize', function() {
    // si la ventana es mas grande o igual a 992px 
    if (window.innerWidth >= 992) {
      // asegura que el carrusel vertical sea visible removiendo la clase 'd-none'
      verticalCarousel.classList.remove('d-none');
    } else if (document.querySelector('.navbar-collapse.show')) {
      // si la ventana es menor a 992px y el menu está expandido
      // oculta el carrusel vertical añadiendo la clase 'd-none'
      verticalCarousel.classList.add('d-none');
    }
  });
});
