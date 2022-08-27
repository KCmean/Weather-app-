let weather = {
    "apikey" : "b38aa40d272937d260239159e1450709",
    fetchWeather : function(cityName){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + cityName
            + "&units=metric&appid="
            + this.apikey
        )
            .then(response => response.json())
            // .catch(error => alert(error))
            .then(data => this.displayWeather(data))
            .catch(error => alert(error))

    },
    displayWeather : function(data){
        const {name} = data;
        const {icon , description} = data.weather[0];
        const {temp , humidity} = data.main;
        const {speed} = data.wind;

        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.Humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.descreption').innerText = description;
        document.querySelector('.Wind-speed').innerText = "Wind Speed: " +speed + " km/hr";
        document.querySelector('.icon').src = 
                "http://openweathermap.org/img/wn/" + icon + ".png";

        document.querySelector('.weather').classList.remove("loading")

        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?' + name + '')"
        document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${name})`
    },
    search : function() {
       this.fetchWeather(document.querySelector('.search-form').value)
    }

}

document
    .querySelector('.search-button')
    .addEventListener('click',function(){
        weather.search();
    });

document.querySelector('.search-form').addEventListener('keyup' , function(event){
    if(event.key === 'Enter'){
        weather.search();
    };
})
