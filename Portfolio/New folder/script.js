const input = document.querySelector("input");
const details = document.querySelector(".detail");
const button = document.querySelector("button");

async function getWeather(city) {
  const apiKey = "3045dd712ffe6e702e3245525ac7fa38"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      details.innerHTML = `<p>City not found ❌</p>`;
      return;
    }

    details.innerHTML = `
      <p class="pd">City: ${data.name}</p>
      <p class="pd">Temp: ${data.main.temp} °C</p>
      <p class="pd">Wind: ${data.wind.speed} m/s</p>
      <p class="pd">Clouds: ${data.clouds.all}%</p>
    `;
  } catch (error) {
    details.innerHTML = `<p>Error fetching data ⚠️</p>`;
  }
}


button.addEventListener("click", () => {
  const city = input.value.trim();
  if (city) {
    getWeather(city);
  }
});


input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click();
    input.value = ""
  }
});


getWeather(input.value);
