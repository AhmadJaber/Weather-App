class Weather {
  constructor(city, country) {
    this.apiKey = "de4d45f380db5ffa1ae72729b33dc024";
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
