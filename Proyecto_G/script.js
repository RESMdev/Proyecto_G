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
        const arrastrables = document.querySelectorAll('.arrastrable');
        const contenedor = document.querySelector('.div-2derecha'); // O el contenedor donde se sueltan las cajas
    
        arrastrables.forEach(function(cajita) {
            // Manejar el evento 'dragstart'
            cajita.addEventListener('dragstart', function(e) {
                e.target.classList.add('arrastrando');
                e.dataTransfer.setData('text/plain', e.target.id);
            });
    
            // Manejar el evento 'dragend'
            cajita.addEventListener('dragend', function(e) {
                e.target.classList.remove('arrastrando');
            });
        });
    
        // Hacer que las zonas donde se puede soltar los elementos respondan al 'dragover'
        contenedor.addEventListener('dragover', function(e) {
            e.preventDefault(); // Permitir el 'drop'
        });
    
        // Manejar el evento 'drop' para soltar el elemento
        contenedor.addEventListener('drop', function(e) {
            e.preventDefault();
    
            // Obtener el ID del elemento arrastrado
            const id = e.dataTransfer.getData('text/plain');
            const elementoArrastrado = document.getElementById(id);
            
            // Obtener el ID del visualizador asociado (desde data-visualizador)
            const visualizadorId = elementoArrastrado.getAttribute('data-visualizador');
            const visualizador = document.getElementById(visualizadorId);
    
            // Obtener la posición en donde se soltó el elemento
            const rect = contenedor.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
    
            // Colocar el elemento en la nueva posición
            elementoArrastrado.style.position = 'absolute';
            elementoArrastrado.style.left = `${x - (elementoArrastrado.offsetWidth / 2)}px`;
            elementoArrastrado.style.top = `${y - (elementoArrastrado.offsetHeight / 2)}px`;
    
            // Mostrar el visualizador correspondiente
            mostrarVisualizador(visualizador);
    
            // Opcional: Ocultar otros visualizadores si no los necesitas visibles
            ocultarOtrosVisualizadores(visualizadorId);
        });
    });
    
    // Función para mostrar el visualizador
    function mostrarVisualizador(visualizador) {
        // Asegúrate de que solo el visualizador relevante esté visible
        visualizador.style.display = 'block'; // Mostrar el visualizador
    }
    
    // Función para ocultar otros visualizadores
    function ocultarOtrosVisualizadores(visualizadorId) {
        // Seleccionamos todos los visualizadores
        const visualizadores = document.querySelectorAll('.visualizador');
        
        // Ocultamos todos los visualizadores excepto el que corresponde
        visualizadores.forEach(function(visu) {
            if (visu.id !== visualizadorId) {
                visu.style.display = 'none';
            }
        });
    }
            

