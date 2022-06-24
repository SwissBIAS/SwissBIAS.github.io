function swissbiasmap(center, locations) {
    var map = L.map('map').setView(center, 7);

    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var markers = [];
    for (const [cityname, attributes] of Object.entries(locations)) {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        var links = ''
        for (const affiliation of attributes['affiliations']) {
            links += `<br/><a href=#${encodeURI(affiliation)}>${affiliation}</a>`
        }

        var marker = L.circle(attributes['coordinates'], {
            color: 'black',
            weight: 1,
            fillColor: randomColor,
            fillOpacity: 0.6,
            radius: 8000
        }).addTo(map).bindPopup('<b> ' + cityname + ' </b>' + links);
        markers.push(marker);
    }

    markers[getRandomInt(0, markers.length)].openPopup();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}