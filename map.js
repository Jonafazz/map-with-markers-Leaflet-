var map = L.map('map').setView([42.599282, 21.196721], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let jona = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "Shtepi e kuqe": "Shtepia ime",
                "marker-color": "#5fab9e",
                "marker-size": "medium",
                "marker-symbol": "circle-stroked"
            },
            "geometry": {
                "coordinates": [
                    21.180903968680326,
                    42.674869338214364
                ],
                "type": "Point"
            },
            "id": 0
        },
        {
            "type": "Feature",
            "properties": {
                "Shtepi e kuqe": "Xhavit Ahmeti",
                "marker-color": "#ff0000",
                "marker-size": "medium",
                "marker-symbol": "circle"
            },
            "geometry": {
                "coordinates": [
                    21.180043848613963,
                    42.676877620737855
                ],
                "type": "Point"
            },
            "id": 1
        },
        {
            "type": "Feature",
            "properties": {
                "Shtepi e kuqe": "furra e bukes",
            },
            "geometry": {
                "coordinates": [
                    21.17941675761452,
                    42.67852696390449
                ],
                "type": "Point"
            },
            "id": 2
        },
        {
            "type": "Feature",
            "properties": {
                "Shtepi e kuqe": "stacioni i autobusave",
            },
            "geometry": {
                "coordinates": [
                    21.1819565510867,
                    42.67586028903585
                ],
                "type": "Point"
            },
            "id": 3
        }
    ]
}

for (let i = 0; i < jona.features.length; i++) {
    let logget = jona.features[i];
    let kordinatat = logget.geometry.coordinates.reverse();
    var marker = L.marker(kordinatat).addTo(map).bindPopup(logget.properties["Shtepi e kuqe"])
}