// Creating map object
var myMap = L.map("map", {
  center: [19.4284700, -99.1276600],
  zoom: 6
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);
// Store API query variables
var baseURL = "https://smn.conagua.gob.mx/webservices/?method=1";
var state = "Aguascalientes";
var date = "$where=ValidDateUtc between'20200223T000000Z' and '20200424T000000Z'";
var temperature = "HiTempC";
var urldata = (state, date, temperature)

// Grab the data with d3
d3.json(baseURL, function(response); 

