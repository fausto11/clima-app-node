const lugar = require('./lugar/lugar');
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(-0.23, -78.52)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp} grados`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);