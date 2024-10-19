// espera a que el dom este completamente cargado antes de ejecutar el codigo
document.addEventListener('domcontentloaded', function() {
    // selecciona el boton de busqueda usando el atributo data-bs-target
    var searchbutton = document.querySelector('[data-bs-target="#searchbar"]')
    // selecciona la barra de busqueda por su id
    var searchbar = document.getElementById('searchbar')
    
    // añade un evento para cuando la barra de busqueda se muestra
    searchbar.addEventListener('show.bs.collapse', function () {
      // oculta el boton de busqueda cuando la barra se muestra
      searchbutton.style.display = 'none'
    })
    
    // añade un evento para cuando la barra de busqueda se oculta
    searchbar.addEventListener('hidden.bs.collapse', function () {
      // muestra el boton de busqueda cuando la barra se oculta
      searchbutton.style.display = 'block'
    })
  })
