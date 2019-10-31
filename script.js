function displayWeather() {
    var APIKey = "a54553dd97b72c1b2dec4bd309d973cf",
        citySearch = $('#cityInput').val();
        queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&units=imperial&appid=" + APIKey;
        
    var newCard = $('<div>').attr('class','card'),
        newCityBody = $('<div>').attr('class', 'card-body');

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        var newCityCard = $(newCard).append(newCityBody),
            now = moment().format('MM/DD/YY'),
            icon = $("<i>").attr("src", "http://openweathermap.org/img/wn/" + response.weather.icon + ".png");
            
            
        newTitle = $('<h3>').attr('class','card-title').text(response.name + " (" + now + ") " + icon)
        $(newCityCard).append(newTitle);
        $('#weather-data').append(newCityCard);
        
      });
};

// click listener for search button
$('#search').on('click', function(event){
    event.preventDefault();
    displayWeather();
});

