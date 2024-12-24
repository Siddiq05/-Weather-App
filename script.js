const ApiKey = "ce458f64b3588c2090f1154f6c4bd9cb";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const CityName = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function CheckWeather(city) {
  const response = await fetch(`${ApiUrl}&q=${city}&appid=${ApiKey}`);
  const data = await response.json();
  console.log(data);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".weather-status").innerHTML = data.weather[0].main;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.floor(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

button.addEventListener("click", () => {
  if (CityName.value.trim() == "") {
    alert("Please Enter a city name");
  } else {
    CheckWeather(CityName.value);
  }
});
