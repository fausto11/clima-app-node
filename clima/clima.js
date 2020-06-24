const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06778d6dd1fe69020c5f4c24b0848ff1&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}