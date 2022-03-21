const cityLoc = document.querySelector('#location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const image = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

// Update Ui

const updateUI = data => {
    
    const {cityDets, Weather} = data;

    details.innerHTML = ` 
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${Weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${Weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `

    // for mday/night image

    let day = Weather.IsDayTime ? 'assets/night.svg' : 'assets/night.svg'
    // if(Weather.IsDayTime){
    //     day = 'assets/day.svg';
    // }else{
    //     day = 'assets/night.svg';
    // }
    image.setAttribute('src', day);

    // For icons

    let icons = `assets/icons/${Weather.WeatherIcon}.svg`;
    icon.setAttribute('src', icons)


    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}
// Get Data

const updateData = async city => {

    const cityDets = await searchCity(city);
    const Weather = await getWeather(cityDets.Key);

    return {
        cityDets,
        Weather
    }
};

// On submit

cityLoc.addEventListener('submit', e => {
    e.preventDefault();

    const cityValue = cityLoc.city.value.trim();
    cityLoc.reset();

    // Update form

    updateData(cityValue)
     .then(data => updateUI(data))
     .catch(err => console.log(err))
});