// Autor: Pablo Rebollo

// Crear el mapa
    const map = L.map('rectangle-3').setView([41.6523, -4.7245], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Cargar el shapefile.zip
    const shpFile = new L.Shapefile('assets/practicas/4.ZONAS_VALIDAS.zip');

    shpFile.addTo(map);

    // Ajustar el mapa al contenido del shapefile
    shpFile.once("data:loaded", function () {
        console.log("finished loaded shapefile");
    });

