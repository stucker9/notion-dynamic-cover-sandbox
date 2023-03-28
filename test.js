// Retrieve weather data from API
const apiKey = 'a6f65b75c0f7529f4fc1321f2bf0c794';
const city = 'Providence,US';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const { main, weather } = data;

    if (weather && weather.length > 0) {
        const { description, icon } = weather[0];
        // Extract relevant weather data
        const { temp, feels_like, humidity } = main;
        // Generate SVG for weather widget
        const svg = SVG('svg-container').size(500, 200);
        svg.rect(500, 200).fill('#FFF');
        svg.text(`Current temperature: ${temp}°F`).move(20, 50);
        svg.text(`Feels like: ${feels_like}°F`).move(20, 80);
        svg.text(`Humidity: ${humidity}%`).move(20, 110);
        svg.text(description).move(20, 140);
        svg.image(`https://openweathermap.org/img/wn/${icon}.png`, 100, 140, 50, 50);
    } else {
        console.error("Weather data not found");
    }
  })
  .catch(error => console.error(error));
