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
      
            
//Función descarga
document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el drag and drop
    const downloadArea = document.querySelector('.descargar');

    downloadArea.addEventListener('dragover', function(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado
        // Aquí podrías cambiar el estilo del área de descarga para indicar que se puede soltar
        downloadArea.classList.add('drag-over');
    });

    downloadArea.addEventListener('dragleave', function() {
        // Eliminar el estilo de "drag-over" cuando el elemento deje el área
        downloadArea.classList.remove('drag-over');
    });

    downloadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        // Obtener el data-id de la caja que se soltó
        const id = e.dataTransfer.getData('text/plain'); 

        // Aquí puedes hacer que se descargue el archivo correspondiente
        // Vamos a suponer que cada práctica tiene un archivo relacionado, por ejemplo, un PDF o archivo .zip
        const archivo = obtenerArchivoDePractica(id);  // Esta función debe devolver la URL del archivo a descargar
        
        if (archivo) {
            // Crear un link para descargar el archivo
            const link = document.createElement('a');
            link.href = archivo;  // URL del archivo de la práctica
            link.download = id + ".pdf";  // Nombre del archivo a descargar (puedes modificar la extensión según sea necesario)
            link.click();  // Simula un click en el enlace para descargar
        }

        // Eliminar el estilo de "drag-over"
        downloadArea.classList.remove('drag-over');
    });

    // Función que devuelve la URL del archivo correspondiente basado en el ID
    function obtenerArchivoDePractica(id) {
        // Aquí puedes tener una lógica para asociar cada ID de práctica con su archivo
        // Ejemplo:
        const archivos = {
            'rectangle-1': '/assets/archivos/pdf01.pdf',
            'rectangle-3': '/assets/archivos/pdf02.pdf',
            'rectangle-2': '/assets/archivos/pdf03.pdf',
            'rectangle-4': '/assets/archivos/pdf04.pdf',
            'rectangle-5': '/assets/archivos/pdf05.pdf',
            'rectangle-6': '/assets/archivos/pdf06.pdf',
            'rectangle-7': '/assets/archivos/pdf07.pdf',
            'rectangle-8': '/assets/archivos/pdf08.pdf',
            'rectangle-9': '/assets/archivos/pdf09.pdf',
            // Agregar más prácticas según sea necesario
        };

        return archivos[id];
    }
});

//Modo día-noche
// Obtener el botón y el contenedor del fondo
const modoDiaBtn = document.getElementById('modoDiaBtn');
const body = document.body;

// Verificar si el usuario tiene una preferencia guardada
if (localStorage.getItem('modo') === 'dia') {
    body.classList.add('modo-dia');
} else {
    body.classList.add('modo-noche');
}

// Cambiar entre los modos y guardar la preferencia
modoDiaBtn.addEventListener('click', () => {
    if (body.classList.contains('modo-dia')) {
        body.classList.remove('modo-dia');
        body.classList.add('modo-noche');
        localStorage.setItem('modo', 'noche');  // Guardar preferencia de modo noche
    } else {
        body.classList.remove('modo-noche');
        body.classList.add('modo-dia');
        localStorage.setItem('modo', 'dia');  // Guardar preferencia de modo día
    }
});
