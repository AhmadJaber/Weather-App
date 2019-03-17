class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.precipitation = document.getElementById("w-precipitation");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    // Terms
    const fahrenheit = ((weather.main.temp - 273.15) * 9) / 5 + 32;
    const celsius = ((fahrenheit - 32) * 5) / 9;
    const iconcode = weather.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    const humidity = weather.main.humidity;
    const dewpointCelsius =
      Math.pow(humidity / 100, 1 / 8) * (112 + 0.9 * celsius) +
      0.1 * celsius -
      112;
    const dewpointFahrenheit = (dewpointCelsius * 9) / 5 + 32;
    const windSpeed = (weather.wind.speed * 3600) / 1852;

    // UI Inputs
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.desc.style.textTransform = "capitalize";
    this.string.textContent = `${Math.round(fahrenheit)} F (${Math.round(
      celsius
    )} C)`;
    this.icon.setAttribute("src", iconUrl);
    this.humidity.textContent = `Relative Humidity: ${humidity}%`;
    this.dewpoint.textContent = `DewPoint: ${Math.round(
      dewpointFahrenheit
    )} F (${Math.round(dewpointCelsius)} C)`;
    this.wind.textContent = `Wind: ${Math.round(
      weather.wind.deg
    )} Degrees, ${Math.round(windSpeed)} MPH`;

    if (weather.rain === undefined) {
      this.precipitation.textContent = `Rain: 0mm`;
    } else {
      this.precipitation.textContent = `Rain: ${weather.rain["3h"]}`;
    }
  }
}
