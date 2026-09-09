# 🌦️ Anime Weather App

A simple and interactive weather application built with **HTML, CSS, and JavaScript**. Search for any city to view its current weather conditions with a dynamic anime-inspired background video based on the weather and time of day.

## 🚀 Live Demo

[Anime Weather App](https://anime-weather-app-alpha.vercel.app/)

## 📌 Features

* 🔍 Search weather by city name
* 🌡️ Displays current temperature
* 🤝 Shows "feels like" temperature
* 💧 Displays humidity
* 💨 Displays wind speed
* 🌦️ Dynamic weather backgrounds
* 🌙 Day and night weather variations
* 🌓 Dark mode
* ⚡ Real-time weather data using OpenWeatherMap API
* 📱 Responsive design for desktop and mobile devices
* ❌ Error messages for invalid or empty city searches

## 🛠️ Technologies Used

* **HTML5** – Application structure
* **CSS3** – Styling, responsive layout and animations
* **JavaScript (ES6+)** – Application logic and API handling
* **OpenWeatherMap API** – Real-time weather data
* **Ionicons** – UI icons
* **Google Fonts (Poppins)** – Typography
* **Vercel** – Deployment

## 📂 Project Structure

```text
anime-weather-app/
│
├── Assets/
│   ├── ClearSky.mp4
│   ├── clearNight.mp4
│   ├── cloudyDay.mp4
│   ├── NightCloudy.mp4
│   ├── RainyDay.mp4
│   ├── ThunderStorm.mp4
│   ├── snowDay.mp4
│   ├── snowNight.mp4
│   └── ...
│
├── index.html
├── script.js
├── style.css
└── README.md
```

## ⚙️ How It Works

1. Enter a city name in the search field.
2. JavaScript sends a request to the OpenWeatherMap API.
3. The API returns the current weather information.
4. The application extracts:

   * Temperature
   * Feels-like temperature
   * Humidity
   * Wind speed
   * Weather condition
5. The interface updates with the retrieved information.
6. A background video is selected according to the weather condition and time of day.

For example:

```text
Clear + Day       → ClearSky.mp4
Clear + Night     → clearNight.mp4

Clouds + Day      → cloudyDay.mp4
Clouds + Night    → NightCloudy.mp4

Rain + Day        → RainyDay.mp4
Rain + Night      → ThunderStorm.mp4

Snow + Day        → snowDay.mp4
Snow + Night      → snowNight.mp4
```

The application also handles invalid city names and empty searches with user-friendly error messages.

## 🔑 API

This project uses the **OpenWeatherMap Current Weather API**.

To run your own version, create an API key from OpenWeatherMap and update the API request in `script.js`.

```javascript
const key = "YOUR_API_KEY";
```

> **Security Note:** Since this is a frontend-only project, an API key placed directly in JavaScript can be exposed to users. For a production application, the API request should be handled through a backend or serverless function.

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/hrefabdullah/anime-weather-app.git
```

### 2. Navigate to the project

```bash
cd anime-weather-app
```

### 3. Open the project

You can open `index.html` directly in your browser, or use a local development server such as **VS Code Live Server**.

## 🎨 UI

The application uses a minimal interface focused on the weather information. Weather videos are displayed dynamically to create a more immersive experience.

The styling is built with regular CSS and includes responsive layouts for smaller screens.
## 👨‍💻 Author

**Abdullah**

GitHub: [@hrefabdullah](https://github.com/hrefabdullah)

## 📄 License

This project is open-source and available for learning and personal use.
