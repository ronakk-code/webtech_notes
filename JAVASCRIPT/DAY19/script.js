const apikey = "111b25544bc93a2db6905133a424ac41"

const cityInput = document.getElementById("city-input")
const getweatherbtn = document.getElementById("get-weather-btn")
const weatherinfo = document.getElementById("weather-info")
const cityName = document.getElementById("city-name")
const temperature = document.getElementById("temperature")
const humidity = document.getElementById("humidity")
const description = document.getElementById("description")
const forecastInfo = document.getElementById("forecast-info")
const forecaseList = document.getElementById("forecast-list")

getweatherbtn.addEventListener("click", getweather);

function getweather() {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("please enter city name")
        return;
    }

    fetchweatherday(city)
}

function fetchweatherday(city) {
    const currentweatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`;


    fetch(currentweatherurl)
        .then((Response) => Response.json())
        .then((data) => {
            cityName.textContent = `Weather in ${data.name}`;
            temperature.textContent = `Temperature : ${data.main.temp}°C`;
            humidity.textContent = `Humidity : ${data.main.humidity}%`;
            description.textContent = `Description : ${data.weather[0].description}`
        })


    fetch(forecasturl)
        .then((res) => res.json())
        .then((forecastdata) => {
            displayforecaast(forecastdata)
        }).catch((error) => {
            alert("error fetching data", error)
        })
}

function displayforecaast(forecastdata) {

    forecaseList.innerHTML = "";

    for (i = 0; i < forecastdata.list.length; i += 8) {

        //data is refresh in 3 hours interval , so it refreshes total 8 times in a day.

        const dayforecast = forecastdata.list[i];
        const listItem = document.createElement("li");
        listItem.textContent = `${new Date(dayforecast.dt * 1000).toLocaleString()}  - ${dayforecast.main.temp}°C  - ${dayforecast.main.humidity}%   - ${dayforecast.weather[0].description}`

        forecaseList.appendChild(listItem)
    }
}
