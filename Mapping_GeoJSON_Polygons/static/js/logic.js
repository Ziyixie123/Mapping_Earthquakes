
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Pass our map layers into our layers control and add the layers control to the map.


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.


// We create the dark view tile layer that will be an option for our map.-double map with street-13.5.4
let satellitesStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Streets: streets,
  SatelliteStreets:satellitesStreets
};


// another way to alter the map object 
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satellitesStreets]//the layers is a list 
})

L.control.layers(baseMaps).addTo(map);


// Accessing the Toronto airline routes GeoJSON URL--13.5.5
let torontoHoods = "https://raw.githubusercontent.com/Ziyixie123/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});




