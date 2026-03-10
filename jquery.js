const apiKey = "38dd27c41c4f4767af853724261003";

$(document).ready(function(){

$("#searchBtn").click(function(){
getWeather();
});

$("#cityInput").keypress(function(e){

if(e.which == 13)
getWeather();

});

});

function getWeather(){

let city = $("#cityInput").val();

if(city === ""){
alert("Enter a city name");
return;
}

$("#loader").show();

let url =
"https://api.weatherapi.com/v1/current.json?key="
+ apiKey +
"&q=" + city +
"&aqi=no";

$.ajax({

url:url,
method:"GET",

success:function(data){

$("#loader").hide();

$("#city").html(data.location.name + ", " + data.location.country);

$("#temp").html(data.current.temp_c + "°C");

$("#desc").html(data.current.condition.text);

$("#humidity").html(data.current.humidity + "%");

$("#wind").html(data.current.wind_kph + " km/h");

$("#feels").html(data.current.feelslike_c + "°C");

$("#pressure").html(data.current.pressure_mb + " mb");

$("#uv").html(data.current.uv);

$("#visibility").html(data.current.vis_km + " km");

$("#icon").attr("src","https:" + data.current.condition.icon);

},

error:function(){

$("#loader").hide();

alert("City not found");

}

});

}