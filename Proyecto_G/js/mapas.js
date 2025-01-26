// Autor: Pablo Rebollo


function mostrarMapa() {
    const mapaElemento = document.querySelector('.visualizador');
    mapaElemento.style.display = 'block';  // Muestra el contenedor del mapa

    resetearMapa();

    // Inicializa el mapa solo después de que se haga visible
    setTimeout(function () {
        //-----------------------------------
        // Cargar archivo .shp en mapa
        //-----------------------------------
        // Initialize the map in rectangle-3
        if (!window.shpMap) {
            // Solo inicializamos el mapa si no existe una instancia activa
            window.shpMap = L.map('rectangle-3').setView([41.6523, -4.7245], 8);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(window.shpMap);

            // Cargar el shapefile.zip
            const shpFile = new L.Shapefile('assets/practicas/4.ZONAS_VALIDAS.zip');
            shpFile.addTo(window.shpMap);

            // Ajustar el mapa al contenido del shapefile
            shpFile.once("data:loaded", function () {
                console.log("finished loaded shapefile");
            });

            // Forzar recalculo del tamaño
            window.shpMap.invalidateSize();  // Ajusta el mapa al nuevo tamaño del contenedor
        }

        //-----------------------------------
        // Cargar archivo .tiff en mapa
        //-----------------------------------
        // Initialize the map in rectangle-7
        if (!window.tiff1) {
            // Solo inicializamos el mapa si no existe una instancia activa
            window.tiff1 = L.map('rectangle-7').setView([0, 0], 2);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(window.tiff1);

            const geotiffUrl1 = 'assets/practicas/9.tif/EVI_post.tif';

            fetch(geotiffUrl1)
                .then(response => response.arrayBuffer())
                .then(async arrayBuffer => {
                    const georaster = await parseGeoraster(arrayBuffer);
                    const layer = new GeoRasterLayer({
                        georaster,
                        opacity: 0.7,
                        resolution: 256 // Optional
                    });

                    window.tiff1.addLayer(layer);
                    window.tiff1.fitBounds(layer.getBounds());
                }).catch(error => {
                    console.error('Error loading GeoTIFF:', error);
                });

            // Forzar recalculo del tamaño
            window.tiff1.invalidateSize();
        }

        //----------------------------------------------------
        // Initialize the map in rectangle-8
        if (!window.tiff2) {
            // Solo inicializamos el mapa si no existe una instancia activa
            window.tiff2 = L.map('rectangle-8').setView([0, 0], 2);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(window.tiff2);

            const geotiffUrl2 = 'assets/practicas/9.tif/SAVI_post.tif';

            fetch(geotiffUrl2)
                .then(response => response.arrayBuffer())
                .then(async arrayBuffer => {
                    const georaster = await parseGeoraster(arrayBuffer);
                    const layer = new GeoRasterLayer({
                        georaster,
                        opacity: 0.7,
                        resolution: 256 // Optional
                    });

                    window.tiff2.addLayer(layer);
                    window.tiff2.fitBounds(layer.getBounds());
                }).catch(error => {
                    console.error('Error loading GeoTIFF:', error);
                });

            // Forzar recalculo del tamaño
            window.tiff2.invalidateSize();
        }
    }, 100);  // Pequeña espera para asegurarse de que la pantalla haya sido actualizada
}

function resetearMapa() {
    // Verifica si los mapas están inicializados y elimina cada mapa por separado
    if (window.shpMap) {
        window.shpMap.remove();  // Elimina el mapa de zonas válidas
        window.shpMap = null;  // Liberamos la referencia
    }
    if (window.tiff1) {
        window.tiff1.remove();  // Elimina el mapa tiff1
        window.tiff1 = null;  // Liberamos la referencia
    }
    if (window.tiff2) {
        window.tiff2.remove();  // Elimina el mapa tiff2
        window.tiff2 = null;  // Liberamos la referencia
    }

    // No borramos el contenido de los contenedores completamente
    document.querySelectorAll('.visualizador').forEach(function (element) {
        // Eliminar solo los mapas del contenedor, preservando la imagen
        const mapaActivo = element.querySelector('.leaflet-container'); // Elemento del mapa

        if (mapaActivo) {
            // Si hay un mapa activo, eliminamos solo ese mapa (sin tocar la imagen)
            mapaActivo.remove();  // Eliminar solo el contenedor del mapa
        }
    });
    /*
    // Elimina las capas de los mapas, pero no los contenedores
    document.querySelectorAll('.visualizador').forEach(function (element) {
        element.innerHTML = '';  // Vacía el contenido de cada contenedor de mapa
        const imagen = element.querySelector('img');
        if (imagen) {
            imagen.style.display = 'block';  // Vuelve a mostrar la imagen cuando se reinicia
        }
    });
    */
}

//-----------------------------------
// Cargar archivo .shp en mapa
//-----------------------------------
/*
    // Initialize the map in rectangle-3
    const shpMap = L.map('rectangle-3').setView([41.6523, -4.7245], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(shpMap);

    // Cargar el shapefile.zip
    const shpFile = new L.Shapefile('assets/practicas/4.ZONAS_VALIDAS.zip');

    shpFile.addTo(shpMap);

    // Ajustar el mapa al contenido del shapefile
    shpFile.once("data:loaded", function () {
        console.log("finished loaded shapefile");
    });
//----------------------------------------------------*/

//-----------------------------------
// Cargar archivo .tiff en mapa
//-----------------------------------
/*
    // Initialize the map in rectangle-7
    const tiff1 = L.map('rectangle-7').setView([0, 0], 2);

    // Add a basemap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(tiff1);

    // URL of the predefined GeoTIFF file
    const geotiffUrl1 = 'assets/practicas/9.tif/EVI_post.tif'; // Replace with the actual URL of your GeoTIFF

    // Fetch and load the GeoTIFF file
    fetch(geotiffUrl1)
        .then(response => response.arrayBuffer())
        .then(async arrayBuffer => {
            const georaster = await parseGeoraster(arrayBuffer);
            const layer = new GeoRasterLayer({
                georaster,
                opacity: 0.7,
                resolution: 256 // Optional
            });

            tiff1.addLayer(layer);
            tiff1.fitBounds(layer.getBounds());
        }).catch(error => {
            console.error('Error loading GeoTIFF:', error);
        });
//----------------------------------------------------
// Initialize the map in rectangle-8
    const tiff2 = L.map('rectangle-8').setView([0, 0], 2);

    // Add a basemap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(tiff2);

    // URL of the predefined GeoTIFF file
    const geotiffUrl2 = 'assets/practicas/9.tif/SAVI_post.tif'; // Replace with the actual URL of your GeoTIFF

    // Fetch and load the GeoTIFF file
    fetch(geotiffUrl2)
        .then(response => response.arrayBuffer())
        .then(async arrayBuffer => {
            const georaster = await parseGeoraster(arrayBuffer);
            const layer = new GeoRasterLayer({
                georaster,
                opacity: 0.7,
                resolution: 256 // Optional
            });

            tiff2.addLayer(layer);
            tiff2.fitBounds(layer.getBounds());
        }).catch(error => {
            console.error('Error loading GeoTIFF:', error);
        });
//----------------------------------------------------*/