const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

// Get Weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  weather.changeLocation(city, country);
  storage.setLocationData(city, country);
  getWeather();

  document.getElementById("city").value = "";
  document.getElementById("country").value = "";

  // Close Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(data => {
      ui.paint(data);
    })
    .catch(error => {
      console.log(error);
    });
}
