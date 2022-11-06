const weather = document.querySelector(".js-weather");
const weatherIconImg = document.querySelector("#weather-icon");
const API_KEY = "77d091ef051ed3743faffe74a5d3e006";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            const weathers = json.weather[json.weather.length-1];
            const weatherIcon = json.weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            weather.innerText = `장소: ${place}\n온도: ${temperature}\n날씨: ${weathers.main}`;
            weatherIconImg.setAttribute("src", weatherIconAdrs);
        })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // 유저의 현재 위치 정보를 요청하고, 성공하면 첫 번째 함수를, 실패하면 두 번째 함수를 실행.
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS); 
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();