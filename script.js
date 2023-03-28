const searchField = document.querySelector('#text');
const searchButton = document.querySelector('#search');
const content = document.querySelector('.content');
const img = document.querySelector('.img');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather(search) {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1f17ebf852004d2cb54140322232103&q=${search}`, {mode: 'cors'});
    let data = await response.json();
    let weather = data.current;

    console.log(data);

    img.src = weather.condition.icon;
    temp.innerText = `Temp: ${weather.temp_c}℃`;
    wind.innerText = `Wind: ${weather.wind_kph} km/h ${weather.wind_dir}`;
    humidity.innerText = `Humidity: ${weather.humidity}%`;
}

searchButton.addEventListener('click', (e) => {
    e.preventDefault;
    getWeather(searchField.value);
});


