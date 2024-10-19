document.addEventListener('DOMContentLoaded', function() {
  const carouselInner = document.querySelector('#verticalCarousel .carousel-inner');
  const movieCount = 15; // Numero total de peliculas a mostrar en el carrusel

  function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card mb-3 position-relative';
    card.style.height = '250px'; // ajusta este valor segun necesites
    card.style.width = '100%';
    card.style.borderRadius = '8px';
    card.style.overflow = 'hidden';
    card.style.transition = 'transform 0.3s ease-in-out';
    card.style.cursor = 'pointer'; // añade un cursor de puntero para indicar que es clickeable
    card.innerHTML = `
      <img src="${movie.image}" class="w-100 h-100 object-fit-cover" alt="${movie.title}">
      <div class="position-absolute bottom-0 start-0 w-100 p-2 bg-dark bg-opacity-75">
        <h6 class="text-white mb-0" style="font-size: 0.8rem;">${movie.title}</h6>
        <span class="text-warning" style="font-size: 0.7rem;">
          <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
        </span>
      </div>
    `;
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.zIndex = '1';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.zIndex = 'auto';
    });
    // añade el evento de clic
    card.addEventListener('click', () => {
      filterAndScrollToMovie(movie.title);
    });
    return card;
  }

  function initializeVerticalCarousel() {
    // mezcla aleatoriamente las peliculas y selecciona las primeras 15
    const shuffledMovies = movies.sort(() => 0.5 - Math.random()).slice(0, movieCount);
    
    shuffledMovies.forEach(movie => {
      carouselInner.appendChild(createMovieCard(movie));
    });

    // duplica las tarjetas para crear un efecto de scroll infinito
    const cards = carouselInner.querySelectorAll('.movie-card');
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      carouselInner.appendChild(clone);
    });

    // inicia la animacion de scroll
    startScrollAnimation();
  }

  function startScrollAnimation() {
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // ajusta este valor para cambiar la velocidad de scroll

    function scroll() {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= carouselInner.scrollHeight / 2) {
        scrollPosition = 0;
      }
      carouselInner.style.transform = `translateY(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    }

    scroll();
  }

  initializeVerticalCarousel();
});
