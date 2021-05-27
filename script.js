// API Key Setup
const apiKey = 'pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7AA';
const apiGreyKey = 'pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7A';
const apiWatershedsKey = 'pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7A';
const apiJurisdictionsKey = 'pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7A';

// Base Layer
const mymap = L.map('map').setView([32.76,-117.212], 11);
const base = L.tileLayer('https://api.mapbox.com/styles/v1/isaacgcrosthwaite/ckp2zja7g49rg17pk0cd9vfjd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7A', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

// Watersheds
const watersheds =  L.tileLayer('https://api.mapbox.com/styles/v1/isaacgcrosthwaite/ckp6h8poy27nl17ny8d97w33p/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7A', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiWatershedsKey
});

// Layer Group: Waterbodies
const watershedslayer = L.layerGroup([watersheds]);

// Jurisdictions
const jurisdictions =  L.tileLayer('https://api.mapbox.com/styles/v1/isaacgcrosthwaite/ckp6i3e64229i17o770l5u8qb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaXNhYWNnY3Jvc3Rod2FpdGUiLCJhIjoiY2tveHJoMHpkMGJqNTJvcjlkMjkwdWVyMSJ9.sKzywThwKm0SgIqc7IxV7A', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiJurisdictionsKey
});

const jurisdictionLayer = L.layerGroup([jurisdictions]);


/* IMPACT MAP LAYER */

// Colored Marker Icons
var LeafIcon = L.Icon.extend({
    options: {
        //shadowUrl: 'leaf-shadow.png',
        iconSize:     [25, 60]
        //shadowSize:   [50, 64],
        //iconAnchor:   [22, 94],
        //shadowAnchor: [4, 62],
        //popupAnchor:  [-3, -76]
    }
});
var green = new LeafIcon({iconUrl: 'Colored Markers/mapbox-marker-icon-20px-green.png'}),
    blue = new LeafIcon({iconUrl: 'Colored Markers/mapbox-marker-icon-20px-blue.png'}),
    red = new LeafIcon({iconUrl: 'Colored Markers/mapbox-marker-icon-20px-red.png'}),
    orange = new LeafIcon({iconUrl: 'Colored Markers/mapbox-marker-icon-20px-orange.png'}),
    yellow = new LeafIcon({iconUrl: 'Colored Markers/mapbox-marker-icon-20px-yellow.png'}),
    purple = new LeafIcon({iconUrl: 'Colored Markers/mapbox-marker-icon-20px-purple.png'});

// Litigation Win

//L.marker([32.631616, -117.100192], {icon: green}).addTo(mymap).bindPopup("Rohr/UTC Aerospace Bayfront");
//const lit1 = L.marker([32.631616, -117.100192]).addTo(mymap);
//lit1.bindPopup('Rohr/UTC Aerospace Bayfront');
const lit1 = L.polygon([
    [32.631616, -117.100192],
    [32.630329, -117.107339],
    [32.626061, -117.105275],
    [32.627484, -117.098519]
], {
    color: 'green',
    fillColor: 'green',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('<strong>Rohr/UTC Aerospace Bayfront</strong><p>Along with CERF, reached agreement with Rohr/UTC Aerospace to cease industrial operations on 2/3 of their 83 acre bayfront property and install advanced treatment BMPs on remaining industrial site to ensure discharges into Bay meet Clean Water Act standards.</p>');

//L.marker([32.976837, -117.264086], {icon: green}).addTo(mymap).bindPopup("Del Mar Fairgrounds");
//const lit2 = L.marker([32.976837, -117.264086]).addTo(mymap);
//lit2.bindPopup('Del Mar Fairgrounds');
const lit2 = L.polygon([
    [32.978891, -117.267565],
    [32.973347, -117.266407],
    [32.970673, -117.260272],
    [32.973188, -117.253842],
    [32.975807, -117.254120]
], {
    color: 'green',
    fillColor: 'green',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('<strong>Del Mar Fairgrounds</strong><p>In partnersip with CERF, worked with 22nd District Agricultural Association (Del Mar Fairgrounds) to ensure discharges meet Clean Water Act standards, resulting in investment of nearly $20 million in infrastructure, advanced treatment best management practices, and recycling infrastructure to protect neighboring MPA, beach, and ecosystem.</p>');

//L.marker([32.689676, -117.145969], {icon: green}).addTo(mymap).bindPopup("San Diego Bay Shipyards Sediment Removal");
//const lit3 = L.marker([32.689676, -117.145969]).addTo(mymap);
//lit3.bindPopup('San Diego Bay Shipyards Sediment Removal');
const lit3 = L.polygon([
    [32.689676, -117.145969],
    [32.680804, -117.157006],
    [32.651105, -117.143723],
    [32.661808, -117.119585]
], {
    color: 'green',
    fillColor: 'green',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('<strong>San Diego Bay Shipyards Sediment Removal</strong><p>Along with allies including EHC, succesfully advocated for removal of over 140,000 cubic yards of contaminated sediment in the bay from long-time boatyard pollution, replacing contaminated sediment with clean sediment to improve SD Bay ecosystem health.  This was a major victory for Coastkeeper, our allies, Bay wildlife, and our communities.</p>');

//L.marker([32.679069, -117.2467], {icon: green}).addTo(mymap).bindPopup("Pure Water San Diego - Point Loma Wastewater Treatment Plant Cleanup");
//const lit4 = L.marker([32.679069, -117.2467]).addTo(mymap);
//lit4.bindPopup('Pure Water San Diego - Point Loma Wastewater Treatment Plant Cleanup');
const lit4 = L.polygon([
    [32.679474, -117.248150],
    [32.677657, -117.247451],
    [32.677964, -117.245931],
    [32.679602, -117.245961]
], {
    color: 'green',
    fillColor: 'green',
    fillOpacity:0.2
}).addTo(mymap).bindPopup("<strong>Pure Water San Diego - Point Loma Wastewater Treatment Plant Cleanup</strong><p>Reached Cooperative Agreement with City of SD, Audubon, Surfrider, CERF where City will reduce polluted ocean wastewater discharges and recycling into at least 83 MGD of potable water, an estimated 50% of the City's needs, by 2035, with Phase 1 of  30 MGD slated to be complete by 2022.</p>");

//L.marker([32.854507, -117.165629], {icon: green}).addTo(mymap).bindPopup("Miramar Landfill");
//const lit5 = L.marker([32.854507, -117.165629]).addTo(mymap);
//lit5.bindPopup('Miramar Landfill');
const lit5 = L.polygon([
    [32.858127, -117.182738],
    [32.848975, -117.177492],
    [32.848297, -117.148440],
    [32.859992, -117.148171]
], {
    color: 'green',
    fillColor: 'green',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('<strong>Miramar Landfill</strong><p>Settlement with City of SD Miramar Landfill to make major infrastructure improvements over $10million requiring discharges to meet Clean Water Act standards https://www.10news.com/news/san-diego-reaches-agreement-with-nonprofits-to-improve-stormwater-infrastructure</p>');


// Beach Cleanup
const beach1 = L.marker([32.79629, -117.25667], {icon: blue}).addTo(mymap).bindPopup('<strong>Crystal Pier Beach Cleanup</strong><p>On January 26, 2019, Coastkeeper help a community beach cleanup at Crystal Pier in Pacific Beach. We engaged 147 volunteers who removed 4,151 items of trash, totalling 256 pounds.</p>');
//const beach1 = L.marker([32.79629, -117.25667]).addTo(mymap);
//beach1.bindPopup('Crystal Pier Beach Cleanup');

const beach2 = L.marker([32.961473, -117.268098], {icon: blue}).addTo(mymap).bindPopup('<strong>15th Street/Powerhouse Park Beach Cleanup</strong><p>On March 9, 2019, Coastkeeper help a community beach cleanup at Powerhouse Park in Del Mar. We engaged 193 volunteers who removed 2,763 items of trash, totalling 132.50 pounds.</p>');
//const beach2 = L.marker([32.961473, -117.268098]).addTo(mymap);
//beach2.bindPopup('15th Street/Powerhouse Park Beach Cleanup');

const beach3 = L.marker([32.7825908, -117.2524943], {icon: blue}).addTo(mymap).bindPopup('<strong>Bank of America Beach Cleanup</strong><p>On April 5, 2019, Coastkeeper partnered with Bank of America through our beach cleanup in-a-box program. Four volunteers removed 128 items of trash, totalling five pounds, from Mission Beach.</p>');
//const beach3 = L.marker([32.7825908, -117.2524943]).addTo(mymap);
//beach3.bindPopup('Bank of America Beach Cleanup');

const beach4 = L.marker([32.8573693, -117.2535406], {icon: blue}).addTo(mymap).bindPopup('<strong>GKN Aerospace Beach Cleanup</strong><p>On April 18, 2019, Coastkeeper partnered with GKN Aerospace to co-host a beach cleanup at La Jolla Shores. Ten volunteers removed 235 items of trash, totalling 23 pounds of trash.</p>');
//const beach4 = L.marker([32.8573693, -117.2535406]).addTo(mymap);
//beach4.bindPopup('GKN Aerospace Beach Cleanup');


// Restoration Effort
const restore1 = L.marker([32.5880126953125, -117.072227478027], {icon: yellow}).addTo(mymap).bindPopup('<strong>Otay Valley Regional Park</strong><p>On October 16, 2019, Coastkeeper and the park rangers at Otay Valley Regional Park hosted a resotration and cleanup event. Sixty-one volunteers removed 40 cubic yards of invasive plants and trash from the Otay Valley Regional Park.</p>');
//const restore1 = L.marker([32.5880126953125, -117.072227478027]).addTo(mymap);
//restore1.bindPopup('Otay Valley Regional Park');


// Advocacy Win
const advocacy1 = L.marker([32.8801756322311, -117.19894066569], {icon: orange}).addTo(mymap).bindPopup('<strong>Pure Water San Diego - North City Water Reclamation Plant</strong>');
//const advocacy1 = L.marker([32.8801756322311, -117.19894066569]).addTo(mymap);
//advocacy1.bindPopup('Pure Water San Diego - North City Water Reclamation Plant');


// Water Quality Monitoring
const monitor1 = L.marker([32.687481, -117.1276321], {icon: red}).addTo(mymap).bindPopup('<strong>Sampling Site</strong><p>Chollas Creek runs through the historically disenfranchised community which shares its namesake, and is one of the most polluted waterbodies in San Diego. From 2009-2018, Coastkeeper ran the largest volunteer-driven ambient water quality monitoring program in the region, collecting monthly data reflecting the health of our waterways, including Chollas Creek, throughout San Diego County. The data collected from this project is currently being considered by California state officials to determine pollutant impairments for each waterbody.</p>');
//const monitor1 = L.marker([32.687481, -117.1276321]).addTo(mymap);
//monitor1.bindPopup('Sampling Site');

const monitor2 = L.marker([32.69569, -117.1223602], {icon: red}).addTo(mymap).bindPopup('<strong>Sampling Site</strong>');
//const monitor2 = L.marker([32.69569, -117.1223602]).addTo(mymap);
//monitor2.bindPopup('Sampling Site');

const monitor3 = L.marker([32.71196, -117.1202316], {icon: red}).addTo(mymap).bindPopup('<strong>Sampling Site</strong>');
//const monitor3 = L.marker([32.71196, -117.1202316]).addTo(mymap);
//monitor3.bindPopup('Sampling Site');

const monitor4 = L.marker([32.72715, -117.0699463], {icon: red}).addTo(mymap).bindPopup('<strong>Sampling Site</strong>');
//const monitor4 = L.marker([32.72715, -117.0699463]).addTo(mymap);
//monitor4.bindPopup('Sampling Site');

const monitor5 = L.marker([32.691921, -117.1126404], {icon: red}).addTo(mymap).bindPopup('<strong>Sampling Site</strong>');
//const monitor5 = L.marker([32.691921, -117.1126404]).addTo(mymap);
//monitor5.bindPopup('Sampling Site');;


// Education
const education1 = L.marker([32.92599187, -117.1496417], {icon: purple}).addTo(mymap).bindPopup('<strong>Walking Field Trip - Sandberg Elementary</strong>');
//const education1 = L.marker([32.92599187, -117.1496417]).addTo(mymap);
//education1.bindPopup('Walking Field Trip - Sandberg Elementary');

const education2 = L.marker([32.77573049, -117.1711135], {icon: purple}).addTo(mymap).bindPopup('<strong>Guided Lesson - Carson Elementary</strong>');
//const education2 = L.marker([32.77573049, -117.1711135]).addTo(mymap);
//education2.bindPopup('Guided Lesson - Carson Elementary');

const education3 = L.marker([32.90662956, -117.1569916], {icon: purple}).addTo(mymap).bindPopup('<strong>Guided Lesson - Salk Elementary</strong>');
//const education3 = L.marker([32.90662956, -117.1569916]).addTo(mymap);
//education3.bindPopup('Guided Lesson - Salk Elementary');

const education4 = L.marker([32.69188411, -117.109097], {icon: purple}).addTo(mymap).bindPopup('<strong>Science Talk - Chavez Elementary</strong>');
//const education4 = L.marker([32.69188411, -117.109097]).addTo(mymap);
//education4.bindPopup('Science Talk - Chavez Elementary');

const education5 = L.marker([32.80795605, -117.1996296], {icon: purple}).addTo(mymap).bindPopup('<strong>Science Talk - Marston Middle School</strong>');
//const education5 = L.marker([32.80795605, -117.1996296]).addTo(mymap);
//education5.bindPopup('Science Talk - Marston Middle School');

// Layer Group: Impact Map
const impactMap = L.layerGroup([lit1,lit2,lit3,lit4,lit5,beach1,beach2,beach3,beach4,restore1,advocacy1,monitor1,monitor2,monitor3,monitor4,monitor5,education1,education2,education3,education4,education5]);




/* WATERBODIES LAYER */

// River Polygon Popup
let template = `
    <div style="text-align:center">
        <h1>San Diego River</h1>
        <img width="600" height="450" src="current_data.png"/>
    </div>
`
// San Diego River Polygon
const sdr = L.polygon([

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
}).addTo(mymap).bindPopup(template);

// Layer Group: Waterbodies
const waterbodies = L.layerGroup([sdr]);


// Layers Control
const baseMaps = {
    "Base Layer": base,
    "Watersheds": watershedslayer,
    "Municipality Jurisdiction": jurisdictions
};

const overlayMaps = {
    "Impact Map": impactMap,
    "Waterbodies": waterbodies,
};

L.control.layers(baseMaps, overlayMaps).addTo(mymap);