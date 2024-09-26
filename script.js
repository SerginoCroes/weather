const searchField = document.querySelector('#text');
const searchButton = document.querySelector('#search');
const content = document.querySelector('.content');
const loc = document.querySelector('.loc');
const img = document.querySelector('.img');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
//const form = document.querySelector('form');

async function getWeather(search) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1f17ebf852004d2cb54140322232103&q=${search}`, {mode: 'cors'});
    if (response.ok){
        searchField.value = '';
        const data = await response.json();
        content.style.visibility = 'visible';
        const weather = data.current;
        loc.innerText = `Weather in ${data.location.name}, ${data.location.region}, ${data.location.country}:`;
        img.src = weather.condition.icon;
        temp.innerText = `Temp: ${weather.temp_c}℃`;
        wind.innerText = `Wind: ${weather.wind_kph} km/h ${weather.wind_dir}`;
        humidity.innerText = `Humidity: ${weather.humidity}%`;
    } else console.log('error', response.status);
}

//form.addEventListener('submit', (e) => {e.preventDefault()});

searchField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        e.preventDefault();
        if (searchField.value != '') getWeather(searchField.value);
    }
});

searchButton.addEventListener('click', (e) => {
    e.preventDefault;
    getWeather(searchField.value);
});