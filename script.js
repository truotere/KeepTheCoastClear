const apiKey = 'pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7AA';

const mymap = L.map('map').setView([32.76,-117.212], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/isaacgcrosthwaite/ckp2zja7g49rg17pk0cd9vfjd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7A', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey,
}).addTo(mymap);

// // Marker
// const marker = L.marker([32.76,-117.212]).addTo(mymap);

// Polygon Popup
let template = `
    <div style="text-align:center">
        <h1>San Diego River</h1>
        <img width="600" height="450" src="current_data.png"/>
    </div>
`
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