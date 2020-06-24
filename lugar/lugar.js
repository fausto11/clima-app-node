const axios = require('axios');

const getLugarLatLng = async(dir) => {

    //preparamos la direccion
    const encodeUlr = encodeURI(dir);


    //instancia de la api
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '2ef60aa056msh7b5662e88b1c21bp1df489jsnb5d0cb3a18e8' }
    });

    const resp = await instance.get();

    if (resp.data.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    //ejecuto la instacia
    // instance.get()
    //     .then(resp => {
    //         const lugar = [resp.data.weather[0], resp.data.coord];
    //         console.log(lugar);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!!!', err);
    //     })

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}