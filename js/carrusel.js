// espera a que el DOM este completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
  // selecciona el contenedor interno del carrusel
  const carouselInner = document.querySelector('#carouselTarjetas .carousel-inner');
  // variable para almacenar el número de tarjetas por slide
  let tarjetasPorSlide = 5;

  /**
   * crea el HTML para una tarjeta individual
   * @param {Object} pelicula - objeto con la informacion de la pelicula
   * @return {string} HTML de la tarjeta
   */
  function crearTarjeta(pelicula) {
    return `
      <div class="card h-100 bg-dark text-white">
        <img src="${pelicula.image}" class="card-img-top" alt="${pelicula.title}" style="height: 300px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title" style="font-size: 1rem;">${pelicula.title}</h5>
          <p class="card-text" style="font-size: 0.8rem;">
            ${pelicula.year} - ${pelicula.genre}
            <br>
            <span class="text-warning">
              <i class="fas fa-star"></i> ${pelicula.rating.toFixed(1)}
            </span>
          </p>
        </div>
      </div>
    `;
  }

  /**
   * crea un item del carrusel con un grupo de peliculas
   * @param {Array} peliculas - array de objetos de peliculas para este slide
   * @param {boolean} esActivo - indica si este item debe ser el activo inicialmente
   * @return {HTMLElement} El elemento div del item del carrusel
   */
  function crearCarouselItem(peliculas, esActivo = false) {
    const item = document.createElement('div');
    item.className = `carousel-item${esActivo ? ' active' : ''}`;
    const row = document.createElement('div');
    row.className = 'row g-4';
    
    for (let i = 0; i < tarjetasPorSlide; i++) {
      const col = document.createElement('div');
      col.className = `col-12 col-sm-6 col-md-4 col-lg-3 col-xl`;
      if (peliculas[i]) {
        col.innerHTML = crearTarjeta(peliculas[i]);
        col.querySelector('.card').addEventListener('click', () => showMovieDetails(peliculas[i]));
      } else {
        col.innerHTML = '<div class="card h-100 invisible"></div>';
      }
      row.appendChild(col);
    }
    
    item.appendChild(row);
    return item;
  }

  /**
   * inicializa el carrusel creando todos los items necesarios
   */
  function inicializarCarousel() {
    carouselInner.innerHTML = '';
    for (let i = 0; i < movies.length; i += tarjetasPorSlide) {
      const grupoPeliculas = movies.slice(i, i + tarjetasPorSlide);
      carouselInner.appendChild(crearCarouselItem(grupoPeliculas, i === 0));
    }

    // inicializar el carrusel de Bootstrap con rotacion automatica
    new bootstrap.Carousel(document.getElementById('carouselTarjetas'), {
      interval: 3000, // cambia de slide cada 3 segundos
      wrap: true // permite que el carrusel vuelva al principio cuando llega al final
    });
  }

  /**
   * ajusta el numero de tarjetas por slide basado en el ancho de la ventana
   * y reinicializa el carrusel
   */
  function ajustarTarjetasPorSlide() {
    const width = window.innerWidth;
    if (width < 576) {
      tarjetasPorSlide = 1;
    } else if (width < 768) {
      tarjetasPorSlide = 2;
    } else if (width < 992) {
      tarjetasPorSlide = 3;
    } else if (width < 1200) {
      tarjetasPorSlide = 4;
    } else {
      tarjetasPorSlide = 5;
    }
    inicializarCarousel();
  }

  // ajusta las tarjetas por slide inicialmente
  ajustarTarjetasPorSlide();

  // agrega un listener para ajustar el carrusel cuando cambia el tamaño de la ventana
  window.addEventListener('resize', ajustarTarjetasPorSlide);
});
