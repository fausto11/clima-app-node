const argv = require('yargs').option({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}