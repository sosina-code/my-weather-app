function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");


    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    temperatureElement.innerHTML = Math.round(temperature);
    windElement.innerHTML=`${response.data.temperature.wind}km/hr`;
}


function searchCity(city) {
let apiKey = "b2a5adcct04b33178913oc335f405433";
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}





let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit" , handleSearchSubmit);
searchCity("paris");