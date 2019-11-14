function displayWeather() {
    var APIKey = "a54553dd97b72c1b2dec4bd309d973cf",
        citySearch = $('#cityInput').val(),
        queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=" + APIKey;
        
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        
        var newCard = $('<div class="card px-4 mb-2">'),
        newCityBody = $('<div class="card-body py-2">'),
        newCityCard = $(newCard).append(newCityBody),
        now = moment().format('MM/DD/YY'),
        icon = $("<img src='http://openweathermap.org/img/wn/"+ response.weather[0].icon +".png' > ");
        
        // creating new element, add Bootstrap class attr, append info properly from API response
        newTitle = $('<h3>').attr('class','card-title').append(response.name + " (" + now + ") "  ).append(icon);
        newTemp = $('<p>').attr('class', 'card-text').append("Current Temp: " + response.main.temp + " °F");
        newHumidity = $('<p>').attr('class', 'card-text').append("Humidity: " + response.main.humidity + "%");
        newWind = $('<p>').attr('class', 'card-text').append("Wind Speed: " + response.wind.speed + " mph")
        
        // append the information to the card
        $(newCityCard).append(newTitle, newTemp, newHumidity, newWind);

        // append the card to the page for display
        $('.weather-data').append(newCityCard);
        
      });
      // clear input field once card gets appended
      $("#cityInput").val("");
};

// click listener for search button
$('#search').on('click', function(event){
    event.preventDefault();
    displayWeather();
});

