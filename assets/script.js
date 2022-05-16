    const APIKey = "c9a9ed03a355403f4cb9a36e931c0b4a";
//  Click search button tp read the city name typed by the user

    function getWeather(cityName) {
//Request from weather map API
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
        axios.get(queryURL)
        .then(function(response){
            console.log(response);
        }