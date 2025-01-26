// Autor: Pablo Rebollo

//-----------------------------------
// Cargar archivo .shp en mapa
//-----------------------------------
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
//----------------------------------------------------
//-----------------------------------
// Cargar archivo .tiff en mapa
//-----------------------------------
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