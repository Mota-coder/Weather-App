const API_KEY = "7e2a3b4d51463080dbae144f319502bd"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// ================= FETCH FUNCTION =================
async function fetchData(url) {
  showLoader();

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("API RESPONSE:", data); 

    // 🔥 FIX: cod can be string or number
    if (data.cod != 200) {
      throw new Error(data.message || "Something went wrong");
    }

    hideLoader();
    return data;

  } catch (err) {
    hideLoader();
    alert("Error: " + err.message);
    return null;
  }
}

// ================= WEATHER =================
async function fetchWeather(city) {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return await fetchData(url);
}

// ================= FORECAST =================
async function fetchForecast(city) {
  const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  return await fetchData(url);
}

// ================= UI UPDATE =================
function updateWeatherUI(data) {
  document.getElementById("weatherCard").classList.remove("hidden");

  document.getElementById("cityName").innerText = data.name;
  document.getElementById("temp").innerText = `🌡 ${data.main.temp} °C`;
  document.getElementById("desc").innerText = data.weather[0].description;
  document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").innerText = `🌬 Wind: ${data.wind.speed} km/h`;

  const icon = data.weather[0].icon;
  document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

// ================= FORECAST UI =================
function updateForecastUI(data) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "";

  const dailyData = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  dailyData.slice(0, 5).forEach(item => {
    const div = document.createElement("div");

    const date = new Date(item.dt_txt).toLocaleDateString("en-US", {
      weekday: "short"
    });

    div.innerHTML = `
      <p>${date}</p>
      <p>${item.main.temp}°C</p>
    `;

    forecastDiv.appendChild(div);
  });
}

// ================= GEOLOCATION =================
function getLocationWeather() {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;

    const url = `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const data = await fetchData(url);
    if (data) updateWeatherUI(data);
  });
}

// ================= STORAGE =================
function saveToLocalStorage(city) {
  let history = JSON.parse(localStorage.getItem("cities")) || [];

  if (!history.includes(city)) {
    history.push(city);
    localStorage.setItem("cities", JSON.stringify(history));
  }
}

// ================= LOADER =================
function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
}

function hideLoader() {
  document.getElementById("loader").classList.add("hidden");
}

// ================= EVENTS =================
document.getElementById("searchBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const weather = await fetchWeather(city);
  const forecast = await fetchForecast(city);

  if (weather && forecast) {
    updateWeatherUI(weather);
    updateForecastUI(forecast);
    saveToLocalStorage(city);
  }
});

document.getElementById("locationBtn").addEventListener("click", getLocationWeather);