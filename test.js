// Retrieve weather data from API
const apiKey = 'a6f65b75c0f7529f4fc1321f2bf0c794';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Providence&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract relevant weather data
    const { temp, feels_like, humidity, weather } = data.main;
    const { description, icon } = weather[0];

    // Generate SVG for weather widget
    const svg = SVG('svg-container').size(500, 200);
    svg.rect(500, 200).fill('#FFF');
    svg.text(`Current temperature: ${temp}°C`).move(20, 50);
    svg.text(`Feels like: ${feels_like}°C`).move(20, 80);
    svg.text(`Humidity: ${humidity}%`).move(20, 110);
    svg.text(description).move(20, 140);
    svg.image(`https://openweathermap.org/img/wn/${icon}.png`, 100, 140, 50, 50);
  })
  .catch(error => console.error(error));