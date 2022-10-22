let weather = {
    apiKey: "fceea5195da2f817913b53cba37bb112",
    fetchWeather: function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+this.apiKey+"&units=metric"
            )
        .then(response => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { description, icon } = data.weather[0];
        const { speed } = data.wind;
        console.log(name, temp, humidity, description, icon, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.querySelector(".weatherDescr").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Windspeed: " + speed + "km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
        document.querySelector(".weatherInfo").style.display = "block";
    },
    search: function() {
        var location = document.querySelector(".searchField").value;
       this.fetchWeather(location);
    }
};

document.querySelector(".searchButton").addEventListener("click", function() 
{
    weather.search();
}
);
document.querySelector(".searchField").addEventListener("keyup", function (event)
{
    if (event.key == "Enter") {
        weather.search();
    }
}
);

