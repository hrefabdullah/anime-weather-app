const video = document.querySelector('.video')
let temp = document.querySelector('.temp')
let feelsLike = document.querySelector('.feels-like')
let humidity = document.querySelector('.humidity')
let speed = document.querySelector('.wSpeed')
let search = document.querySelector('.search')
let title = document.querySelector('.title')
let info = document.querySelector('.info')
let input = document.querySelector('.input')
let tempReads = document.querySelector('.temp-reading')
let flReads = document.querySelector('.FL-reading')
let humidityReads = document.querySelector('.humidity-reading')
let speedReads = document.querySelector('.speed-reading')
let srcs = document.querySelector('.vSrc')
let cityName = document.querySelector('.city')
let msg = document.querySelector('.msg')
let moon = document.querySelector('.moon')



const date = new Date()
let hours = date.getHours()

if (hours >= 10 || hours <= 7){
    console.log("Hi")
    tempReads.classList.toggle('night')
}

const darkMode = () => {
    moon.classList.toggle('darkmoon')
    document.body.classList.toggle('darkMode')
    title.classList.toggle('darkMode')
}

const change = async () => {

    let city = input.value
    let key = '5fade74d37bf8b3a1e6dc8af0a4ebff7'
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
    let weatherData = await weather.json()
    console.log(weatherData)

    if (weatherData.cod == 404) {

        msg.style.display = 'flex'
        msg.innerHTML = "Invalid city name!"
        setTimeout(() => {
            msg.style.display = 'none'
        }, 1100);

    } else if (weatherData.cod == 400) {

        msg.style.display = 'flex'
        msg.innerHTML = "Please enter a city name"
        setTimeout(() => {
            msg.style.display = 'none'
        }, 1100);

    } else {


        cityName.innerHTML = city
        tempReads.innerHTML = Math.floor(weatherData.main.temp) + "°c"
        flReads.innerHTML = Math.floor(weatherData.main.feels_like) + '°c'
        speedReads.innerHTML = Math.floor(weatherData.wind.speed) + 'Km/h'
        humidityReads.innerHTML = Math.floor(weatherData.main.humidity) + '%'

        if (weatherData.weather[0].main == 'Clear') {
            if (hours >= 18 || hours <= 6) {
                video.src = 'Assets/clearNight.mp4'
            } else {
                video.src = 'Assets/ClearSky.mp4'
            }
        } else if (weatherData.weather[0].main == 'Clouds') {
            if (hours >= 18 || hours <= 6) {
                video.src = 'Assets/NightCloudy.mp4'
            } else {
                video.src = 'Assets/cloudyDay.mp4'
            }
        } else if (weatherData.weather[0].main == 'Rain' || weatherData.weather[0].main == 'Drizzle') {
            if (hours >= 18 || hours <= 6) {
                video.src = 'Assets/ThunderStorm.mp4'
            } else {
                video.src = 'Assets/RainyDay.mp4'
            }
        } else if (weatherData.weather[0].main == 'Thunderstorm') {
            video.src = 'Assets/thundderstorm.mp4'
        } else if (weatherData.weather[0].main == 'Snow') {
            if (hours >= 18 || hours <= 6) {
                video.src = 'Assets/snowNight.mp4'
            } else {
                video.src = 'Assets/snowDay.mp4'
            }
        }

        cityName.style.display = 'block'
        video.style.display = 'block'
        info.style.display = 'flex'
        search.style.display = "none"
        title.style.display = 'none'
        temp.style.display = 'flex'
        feelsLike.style.display = 'flex'
        humidity.style.display = 'flex'
        speed.style.display = 'flex'
        moon.style.display = 'none'

        setTimeout(() => {
            video.style.display = 'none'
            temp.style.display = 'none'
            feelsLike.style.display = 'none'
            humidity.style.display = 'none'
            speed.style.display = 'none'
            search.style.display = "flex"
            title.style.display = 'block'
            info.style.display = 'none'
            cityName.style.display = 'none'
            moon.style.display = 'block'
        }, 10000);
    }
}

