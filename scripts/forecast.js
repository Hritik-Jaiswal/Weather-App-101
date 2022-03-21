const key = "cY6FUWbJaZGjB12vGwniqwiDKsSljCbG";

// Getting weather data
const getWeather = async info => {
    const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const q = `${info}?apikey=${key}`;

    const response = await fetch(url + q);
    const data = await response.json();

    return data[0];
};
// Getting city

const searchCity = async city => {

    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const q = `?apikey=${key}&q=${city}`;

    const response = await fetch(url + q);
    const data = await response.json();

    return data[0];
};

searchCity('surat')
 .then(data => getWeather(data.Key))
 .then(data => console.log(data))
 .catch(err => console.log(err))