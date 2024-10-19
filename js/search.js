document.addEventListener('DOMContentLoaded', function() {
  const navSearchInput = document.getElementById('navSearchInput');
  const navSearchButton = document.getElementById('navSearchButton');
  const descubreSection = document.getElementById('descubre');
  const searchInput = document.getElementById('searchInput');

  function performSearch(searchTerm) {
    const movieCards = document.querySelectorAll('#movieList .col-md-4');
    let found = false;

    movieCards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchTerm.toLowerCase())) {
        card.style.display = 'block';
        found = true;
      } else {
        card.style.display = 'none';
      }
    });

    if (!found) {
      descubreSection.scrollIntoView({ behavior: 'smooth' });
      searchInput.value = searchTerm;
      searchInput.focus();
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    const searchTerm = this.value.trim();
    if (searchTerm) {
      performSearch(searchTerm);
    }
  }

  navSearchButton.addEventListener('click', function(e) {
    e.preventDefault();
    handleSearch.call(navSearchInput, e);
  });

  navSearchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleSearch.call(this, e);
    }
  });

  // añade la funcionalidad de busqueda tambien al input de la secciin "Descubre"
  searchInput.addEventListener('input', function() {
    performSearch(this.value.trim());
  });

  function filterAndScrollToMovie(movieTitle) {
    const searchInput = document.getElementById('searchInput');
    const descubreSection = document.getElementById('descubre');

    // establece el valor del input de busqueda
    searchInput.value = movieTitle;

    // realiza la busqueda
    performSearch(movieTitle);

    // desplaza la página hasta la sección "Descubre"
    descubreSection.scrollIntoView({ behavior: 'smooth' });
  }

  function filterAndShowMovie(movieTitle) {
    console.log('Filtrando película:', movieTitle); // Añade este log
    const movieCards = document.querySelectorAll('#movieList .col-md-4');
    let targetCard = null;

    movieCards.forEach(card => {
      const title = card.querySelector('.card-title').textContent;
      if (title.toLowerCase() === movieTitle.toLowerCase()) {
        card.style.display = 'block';
        targetCard = card;
      } else {
        card.style.display = 'none';
      }
    });

    if (targetCard) {
      console.log('Película encontrada, desplazando...'); // Añade este log
      descubreSection.scrollIntoView({ behavior: 'smooth' });
      //  resalta la tarjeta seleccionada
      targetCard.classList.add('selected-movie');
      setTimeout(() => targetCard.classList.remove('selected-movie'), 2000);
    } else {
      console.log('Película no encontrada'); // Añade este log
    }
  }

  // expone la funcion globalmente para que pueda ser llamada desde verticalCarousel.js
  window.filterAndScrollToMovie = filterAndScrollToMovie;
  window.filterAndShowMovie = filterAndShowMovie;
});
