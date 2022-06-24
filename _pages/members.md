---
title: Members
permalink: /members/
toc: false

#layout: category
#taxonomy: members
#--- collection is an alternative to the for-loop below,
#layout: collection 
#collection: members
#entries_layout: grid # list
#sort_by: affiliation
#sort_order: reverse # forward
#show_excerpts: false # true false
---


<link rel="stylesheet" href="/assets/js/leaflet/leaflet.css"/>
<script src="/assets/js/leaflet/leaflet.js"></script>
<script src="/assets/js/members-map.js"></script>

<div id="map" style="width: 100%; height: 400px"></div>

<script >
    // TODO: These could be generate from the member pages. Currently the location/city attribute is missing
    var cities = {
        'Basel': {'coordinates': [47.5616, 7.5831], 'affiliations': ['University of Basel', 'FMI Basel', 'ETHZ Basel']},
        'Bern': {'coordinates': [46.95027, 7.43777], 'affiliations': ['University of Bern', 'Inselgruppe AG']},
        'Fribourg': {'coordinates': [46.79388, 7.15526],'affiliations': ['University of Fribourg']},
        'Geneva': {'coordinates': [46.19904, 6.14456],'affiliations': ['University of Geneva', 'University Hospitals of Geneva / University of Geneva']},
        'Lausanne': {'coordinates': [46.52051, 6.56632],'affiliations': ['EPFL', 'Lausanne University Hospital', 'University of Lausanne']},
        'Martigny': {'coordinates': [46.10923, 7.08447],'affiliations': ['IDIAP Martigny']},
        'Zurich': {'coordinates': [47.37404, 8.55097], 'affiliations': ['ETH Zurich', 'Fenaco', 'University Hospital Zurich', 'University of Zurich']}
    };
    swissbiasmap([46.650, 8.335], cities)
</script>


{% assign groups = site.members |  sort: "affiliation" | group_by: "affiliation" %}

<div> 
{% for group in groups %}
	<h3 id="{{group.name}}"> {{ group.name }} </h3>
			<ol> 
			{% for member in group.items %}
				<li> <a href="{{ member.url }}"> 
				{{ member.first_name }} {{ member.last_name }}</a> </li>
			{% endfor %} 
			</ol>
{% endfor %} 
</div>




