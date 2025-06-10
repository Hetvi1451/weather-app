async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "3fa4e92482d0d23d4459be88722b8ddc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
const data = await response.json();
      console.log(data);  // <-- Check this in browser console
if (data.cod === 200) {
        const weather = `
        <p><strong>${data.name}</strong></p>
        <p>${data.weather[0].description}</p>
        <p>🌡️ ${data.main.temp} °C</p>
        `;
        document.getElementById("result").innerHTML = weather;
    } else {
        document.getElementById("result").innerHTML = "City not found.";
    }
    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching weather data.";
        console.error("Fetch error:", error);
    }
}