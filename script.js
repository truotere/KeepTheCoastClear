mapboxgl.accessToken = 'pk.eyJ1IjoidHJ1b3RlcmUiLCJhIjoiY2tvbWhobDdwMDFnbTJucGR6bXc1NmliYiJ9.kGq6AG81Bp3I3Xw03qCKZw';

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
