# Weather App

A modern, responsive Weather Application built using **HTML, CSS, and JavaScript**, integrated with the OpenWeatherMap API to provide real-time weather data and forecasts.

---

##  Live Demo

https://github.com/Mota-coder/Weather-App

---

##  Overview

This project fetches real-time weather data from the OpenWeatherMap API and displays it in a clean, user-friendly interface. It demonstrates API integration, asynchronous JavaScript, DOM manipulation, and responsive UI design.

---

##  Features

*  Search weather by city name
*  Get weather using current location (Geolocation API)
*  Displays temperature, humidity, wind speed
*  Weather condition with icons
*  5-day weather forecast
*  Modern dark-themed UI (glassmorphism style)
*  Fast and responsive design
*  Error handling for invalid inputs

---

##  Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **API:** OpenWeatherMap API
* **Browser APIs:** Fetch API, Geolocation API
* **Storage:** LocalStorage (for recent searches)

---

##  How It Works

1. User enters a city name or uses current location
2. JavaScript sends a request to the OpenWeatherMap API
3. API returns weather data in JSON format
4. Data is parsed and displayed dynamically on the UI

---

##  Project Structure

```
weather-app/
│── index.html       # Main HTML file
│── style.css        # Styling (dark theme UI)
│── script.js        # Logic and API handling
```

---

##  Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-Mota-coder/weather-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd weather-app
   ```

3. Open `index.html` in your browser

---

# API Configuration

1. Get your API key from OpenWeatherMap
2. Replace the key in `script.js`:

```javascript
const API_KEY = "your_api_key_here";
```

 Note: API key activation may take a few minutes.

---

## 📸 Screenshots

*(Add screenshots here for better presentation)*

---

##  Future Enhancements

*  Dark/Light mode toggle
*  Search auto-suggestions
*  Weather charts (temperature trends)
*  Multi-language support
*  Convert to React for scalability

---

##  Known Limitations

* API key is exposed on frontend (not secure for production)
* Depends on third-party API availability

---

##  Author

**Shubh Shukla**

---

##  License

This project is open-source and available for learning purposes.

---
