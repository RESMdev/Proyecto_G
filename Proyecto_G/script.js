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
    document.querySelectorAll('.overlap-group-wrapper').forEach(function(cajita) {
        cajita.addEventListener('click', function() {
            const id = cajita.getAttribute('data-id');

            document.querySelectorAll('.visualizador').forEach(function(visualizador) {
                visualizador.style.display = 'none';
            });

            const visualizador = document.getElementById(id);
            if (visualizador) {
                visualizador.style.display = 'block';
            }
        });
    });
});

