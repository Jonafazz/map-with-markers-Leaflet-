// var map = L.map('map').setView([42.599282, 21.196721], 13);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


// var greenIcon = L.icon({
//     iconUrl: 'https://assets.stickpng.com/thumbs/584fcc806a5ae41a83ddee8c.png',
//     shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

//     iconSize: [60, 95], // size of the icon
//     shadowSize: [50, 64], // size of the shadow
//     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var redIcon = L.icon({
//     iconUrl: 'https://www.freeiconspng.com/thumbs/coca-cola-png/bottle-coca-cola-png-transparent-2.png',

//     iconSize: [70, 95], // size of the icon
//     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// var blueIcon = L.icon({
//     iconUrl: 'https://www.freeiconspng.com/uploads/pepsi-box-png-transparent--3.png',

//     iconSize: [46, 95], // size of the icon
//     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });


// var marker = L.marker([42.599282, 21.196721], { icon: greenIcon }).addTo(map);

// var marker1 = L.marker([42.607393, 21.243928], { icon: redIcon }).addTo(map);
// var marker2 = L.marker([42.632656, 21.190333], { icon: blueIcon }).addTo(map);

// L.control.scale().addTo(map);


// // Control 3: This add a Search bar
// var searchControl = new L.esri.Controls.Geosearch().addTo(map);

// var results = new L.LayerGroup().addTo(map);

// searchControl.on('results', function (data) {
//     results.clearLayers();
//     for (var i = data.results.length - 1; i >= 0; i--) {
//         results.addLayer(L.marker(data.results[i].latlng));
//     }
// });