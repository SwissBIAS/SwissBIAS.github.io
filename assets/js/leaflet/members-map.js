function members_map(center, locations) {
    // let map = L.map('map').setView(center, 7);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a target="_blank" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);
    const map = L.map('map', {crs: L.CRS.EPSG2056});
    L.tileLayer.swiss({layer: 'ch.swisstopo.pixelkarte-grau'}).addTo(map);
    map.fitSwitzerland();

    const markers = [];
    for (const [cityname, attributes] of Object.entries(locations)) {
        if (cityname === "Unknown") { // Put a note in the caption about the cities not marked on the map
            document.getElementById("caption").innerHTML +=
                linkCollection(attributes['affiliations'], ', ', true) + ".";
        } else {
            let links = linkCollection(attributes['affiliations'], '<br/>', false)
            let marker = L.circle(attributes['coordinates'], {
                color: "",
                weight: 1,
                fillColor: "#c1272d",
                fillOpacity: 0.6,
                radius: 6000
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