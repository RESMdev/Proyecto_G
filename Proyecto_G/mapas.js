// Autor: Pablo Rebollo

// Crear el mapa
const map = L.map('map').setView([40.4168, -3.7038], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    // Cargar el shapefile
    fetch('practicas/4.ZONAS_VALIDAS.shp')
            .then(response => response.arrayBuffer())
            .then(buffer => shapefile.open(buffer))
            .then(source => source.read()
    .then(function log(result) {
                    if (result.done) return;
    L.geoJSON(result.value).addTo(map);
    return source.read().then(log);
                }))
            .catch(err => console.error(err));
