const apikey = "27c5db35c69be757e1422998524eae50";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // corrected "unit" to "units"
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const  weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        console.log(data);
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").textContent = data.wind.speed + " kmp";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        if(data.weather[0].main=="Clouds")
            {
                weatherIcon.src="images/clouds.png";
            }
            if(data.weather[0].main=="Clear")
                {
                    weatherIcon.src="images/clear.png";
                }
                if(data.weather[0].main=="Rain")
                    {
                        weatherIcon.src="images/rain.png";
                    }
                    if(data.weather[0].main=="Mist")
                        {
                            weatherIcon.src="images/mist.png";
                        }
                        if(data.weather[0].main=="Snow")
                            {
                                weatherIcon.src="images/snow.png";
                            }
                        
        document.querySelector(".weather").style.display="block";
        
        
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});
document.querySelector(".weather").style.display="none";
