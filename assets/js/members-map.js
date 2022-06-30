function swissbiasmap(center, locations) {
    let map = L.map('map').setView(center, 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const markers = [];
    for (const [cityname, attributes] of Object.entries(locations)) {
        if (cityname === "Unknown") { // Put a note in the caption about the cities not marked on the map
            document.getElementById("caption").innerHTML +=
                linkCollection(attributes['affiliations'], ', ', true) + ".";
        } else {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let links = linkCollection(attributes['affiliations'], '<br/>', false)
            let marker = L.circle(attributes['coordinates'], {
                color: 'black',
                weight: 1,
                fillColor: randomColor,
                fillOpacity: 0.6,
                radius: 8000
            }).addTo(map).bindPopup('<b> ' + cityname + ' </b>' + links);
            markers.push(marker);
        }
    }
    markers[getRandomInt(0, markers.length)].openPopup();
}

function linkCollection(arr, sep, rmfirst) {
    let links = ''
    for (const item of arr) {
        links += `${sep}<a href=#${encodeURI(item)}>${item}</a>`;
    }
    if (rmfirst) {
        return links.substring(sep.length, links.length - 1);
    } else {
        return links;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}