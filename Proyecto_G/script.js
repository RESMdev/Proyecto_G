document.querySelectorAll('.overlap-group-wrapper').forEach(function(cajita) {
    cajita.addEventListener('click', function() {
      // Obtiene el id correspondiente desde el atributo 'data-id' del clickeado
      const id = cajita.getAttribute('data-id');
      
      // Oculta todos los visualizadores
      document.querySelectorAll('.visualizador').forEach(function(visualizador) {
        visualizador.style.display = 'none';
      });
  
      // Muestra el visualizador correspondiente
      const visualizador = document.getElementById(id);
      if (visualizador) {
        visualizador.style.display = 'block';
      }
    });
  });
  