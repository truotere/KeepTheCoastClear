// API Key Setup
const apiKey = 'pk.eyJ1IjoidHJ1b3RlcmUiLCJhIjoiY2tvbWhobDdwMDFnbTJucGR6bXc1NmliYiJ9.kGq6AG81Bp3I3Xw03qCKZw';

const mymap = L.map('map').setView([32.76,-117.212], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

/* Impact Map Markers */

// Litigation Win
const lit1 = L.marker([32.631616, -117.100192]).addTo(mymap);
lit1.bindPopup('Rohr/UTC Aerospace Bayfront');

const lit2 = L.marker([32.976837, -117.264086]).addTo(mymap);
lit2.bindPopup('Del Mar Fairgrounds');

const lit3 = L.marker([32.689676, -117.145969]).addTo(mymap);
lit3.bindPopup('San Diego Bay Shipyards Sediment Removal');

const lit4 = L.marker([32.679069, -117.2467]).addTo(mymap);
lit4.bindPopup('Pure Water San Diego - Point Loma Wastewater Treatment Plant Cleanup');

const lit5 = L.marker([32.854507, -117.165629]).addTo(mymap);
lit5.bindPopup('Miramar Landfill');

// Beach Cleanup
const beach1 = L.marker([32.79629, -117.25667]).addTo(mymap);
beach1.bindPopup('Crystal Pier Beach Cleanup');

const beach2 = L.marker([32.961473, -117.268098]).addTo(mymap);
beach2.bindPopup('15th Street/Powerhouse Park Beach Cleanup');

const beach3 = L.marker([32.7825908, -117.2524943]).addTo(mymap);
beach3.bindPopup('Bank of America Beach Cleanup');

const beach4 = L.marker([32.8573693, -117.2535406]).addTo(mymap);
beach4.bindPopup('GKN Aerospace Beach Cleanup');

// Restoration Effort
const restore1 = L.marker([32.5880126953125, -117.072227478027]).addTo(mymap);
restore1.bindPopup('Otay Valley Regional Park');

// Advocacy Win
const advocacy1 = L.marker([32.8801756322311, -117.19894066569]).addTo(mymap);
advocacy1.bindPopup('Pure Water San Diego - North City Water Reclamation Plant');

// Water Quality Monitoring
const monitor1 = L.marker([32.687481, -117.1276321]).addTo(mymap);
monitor1.bindPopup('Sampling Site');

const monitor2 = L.marker([32.69569, -117.1223602]).addTo(mymap);
monitor2.bindPopup('Sampling Site');

const monitor3 = L.marker([32.71196, -117.1202316]).addTo(mymap);
monitor3.bindPopup('Sampling Site');

const monitor4 = L.marker([32.72715, -117.0699463]).addTo(mymap);
monitor4.bindPopup('Sampling Site');

const monitor5 = L.marker([32.691921, -117.1126404]).addTo(mymap);
monitor5.bindPopup('Sampling Site');;

// Education
const education1 = L.marker([32.92599187, -117.1496417]).addTo(mymap);
education1.bindPopup('Walking Field Trip - Sandberg Elementary');

const education2 = L.marker([32.77573049, -117.1711135]).addTo(mymap);
education2.bindPopup('Guided Lesson - Carson Elementary');

const education3 = L.marker([32.90662956, -117.1569916]).addTo(mymap);
education3.bindPopup('Guided Lesson - Salk Elementary');

const education4 = L.marker([32.69188411, -117.109097]).addTo(mymap);
education4.bindPopup('Science Talk - Chavez Elementary');

const education5 = L.marker([32.80795605, -117.1996296]).addTo(mymap);
education5.bindPopup('Science Talk - Marston Middle School');

/* Marker Popup
let markerPopup = `
    <h1>San Diego River</h1>
    <img width="500" height="400" src="current_data.png"/>
`
marker.bindPopup(markerPopup);

// Polygon Popup
let template = `
    <div style="text-align:center">
        <h1>San Diego River</h1>
        <img width="600" height="450" src="current_data.png"/>
    </div>
`
*/

// River Polygon
const polygon = L.polygon([

    // Left Most Point
    [32.756333, -117.253590],

    // top of polygon (left to right)
    [32.761189, -117.212484],
    [32.762658, -117.207714],
    [32.762355, -117.203243],
    [32.763366, -117.192636],
    [32.762732, -117.190967],
    [32.762835, -117.183377],
    [32.762763, -117.181686],
    [32.765334, -117.175528],
    [32.765334, -117.173127],
    [32.764999, -117.161028],
    [32.772567, -117.149571],
    [32.774341, -117.139968],
    [32.775971, -117.131506],
    [32.781587, -117.116885],
    [32.782202, -117.112643],
    [32.781387, -117.110727],
    [32.781263, -117.106905],
    [32.782610, -117.104901],
    [32.784369, -117.104073],
    [32.787556, -117.103525],
    [32.790067, -117.103626],
    [32.792333, -117.102261],
    [32.795433, -117.097984],
    [32.796363, -117.097839],

    // Right Most Point
    [32.802096, -117.095154],
  
    // bottom of polygon (right to left)
    [32.795363, -117.097839],
    [32.795363, -117.097839],
    [32.794433, -117.097984],
    [32.791333, -117.102261],
    [32.789067, -117.103626],
    [32.786556, -117.103525],
    [32.783369, -117.104073],
    [32.781610, -117.104901],
    [32.780263, -117.106905],
    [32.780387, -117.110727],
    [32.781202, -117.112643],
    [32.780587, -117.116885],
    [32.774971, -117.131506],
    [32.773341, -117.139968],
    [32.771567, -117.149571],
    [32.763999, -117.161028],
    [32.764334, -117.173127],
    [32.764334, -117.175528],
    [32.761763, -117.181686],
    [32.761835, -117.183377],
    [32.761732, -117.190967],
    [32.762366, -117.192636],
    [32.761355, -117.203243],
    [32.761658, -117.207714],
    [32.759520, -117.212484],
], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity:0.2
}).addTo(mymap)

//polygon.bindPopup('San Diego River')
polygon.bindPopup(template);



// Old Setup
/*
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    console.log(position);
    setupMap([-117.212,32.76]);
}

function errorLocation() {
    setupMap([-117.212,32.76]);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
}
*/