// Botón GitHub
document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/RESMdev/Proyecto_G.git', '_blank');
});

// Botón Figma
document.getElementById('figma').addEventListener('click', function() {
    window.open('https://www.figma.com/design/egSAvd4kXvuLLsOLi9w7s3/Geo?node-id=0-1&t=RszUST16ujqir54R-1', '_blank');
});

// Botón Pablo
document.getElementById('pablo').addEventListener('click', function() {
    window.open('https://github.com/pRebollo02', '_blank');
});

// Botón RESM
document.getElementById('resm').addEventListener('click', function() {
    window.open('https://www.instagram.com/___resm_/?next=%2F', '_blank');
});

// Mecánica clickeable
document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton'); // Botón de Home
    const homeImage = document.getElementById('homeImage'); // Imagen de la página principal
    
    // Función para mostrar la visualización y cambiar la imagen
    document.querySelectorAll('.clicleable').forEach(function(cajita) {
      cajita.addEventListener('click', function() {
        const id = cajita.getAttribute('data-id'); // Obtener el data-id de la caja clickeada
        console.log('Elemento clickeado:', id);
  
        // Cambiar la imagen del Home a una imagen de visualización (puedes cambiarla según lo desees)
        homeImage.src = '/assets/icono/home-d.svg'; // Cambia esta ruta por la imagen que desees para la visualización
  
        // Ocultar todos los visualizadores
        document.querySelectorAll('.visualizador').forEach(function(visualizador) {
          visualizador.style.display = 'none';
        });
  
        // Mostrar el visualizador correspondiente
        const visualizador = document.querySelector(`#${id}`);
        if (visualizador) {
          visualizador.style.display = 'block';
        }
      });
    });
  
    // Función para volver a la página principal
    homeButton.addEventListener('click', function() {
      // Cambiar la imagen de vuelta a la de la página principal
      homeImage.src = '/assets/icono/home.svg'; // Cambia esta ruta por la imagen que usas para la página principal
      
      // Ocultar todos los visualizadores y mostrar todas las prácticas nuevamente
      document.querySelectorAll('.visualizador').forEach(function(visualizador) {
        visualizador.style.display = 'none'; // Oculta todas las visualizaciones
      });
  
      // Mostrar todas las cajas de prácticas de nuevo
      document.querySelectorAll('.clicleable').forEach(function(cajita) {
        cajita.style.display = 'block'; // Muestra todas las cajas de prácticas
      });
    });
  });
  

    //Funciión para arrastrar y dropear
    document.addEventListener('DOMContentLoaded', function() {
        // Función para hacer los elementos arrastrables
        document.querySelectorAll('.arrastrable').forEach(function(cajita) {
          cajita.addEventListener('dragstart', function(event) {
            // Guardamos el id de la caja que se está arrastrando en el dataTransfer del evento
            event.dataTransfer.setData('text', cajita.getAttribute('data-id'));
          });
        });
      
        // Función para permitir que el contenedor acepte el drop
        const groupContainer = document.querySelector('.group');
        groupContainer.addEventListener('dragover', function(event) {
          // Prevenir el comportamiento por defecto para permitir el drop
          event.preventDefault();
        });
      
        // Función para manejar el evento de "soltar"
        groupContainer.addEventListener('drop', function(event) {
          // Prevenir el comportamiento por defecto (como abrir enlaces)
          event.preventDefault();
      
          // Obtener el id de la caja que fue arrastrada
          const id = event.dataTransfer.getData('text');
      
          // Mostrar la práctica correspondiente
          document.querySelectorAll('.visualizador').forEach(function(visualizador) {
            visualizador.style.display = 'none'; // Ocultamos todas las prácticas
          });
          
          // Cambiar la imagen del Home a una imagen de visualización (puedes cambiarla según lo desees)
        homeImage.src = '/assets/icono/home-d.svg'; // Cambia esta ruta por la imagen que desees para la visualización

          // Mostrar el visualizador correspondiente basado en el id
          const visualizador = document.querySelector(`#${id}`);
          if (visualizador) {
            visualizador.style.display = 'block'; // Hacemos visible la práctica correspondiente
          }
        });
      
        // Función para manejar la lógica del botón "Home"
        const homeButton = document.getElementById('homeButton');
        const homeImage = document.getElementById('homeImage');
        
        homeButton.addEventListener('click', function() {
          // Volver a la imagen inicial y ocultar todas las visualizaciones
          homeImage.src = '/assets/icono/home.svg';
          document.querySelectorAll('.visualizador').forEach(function(visualizador) {
            visualizador.style.display = 'none';
          });
      
          // Mostrar todas las cajas de prácticas
          document.querySelectorAll('.clicleable').forEach(function(cajita) {
            cajita.style.display = 'block';
          });
        });
      });
      
            

