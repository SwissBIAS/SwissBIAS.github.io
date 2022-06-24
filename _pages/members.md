---
title: All members
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



![map of member locations](/assets/images/map.png)




{% assign groups = site.members |  sort: "affiliation" | group_by: "affiliation" %}

<ul> 
{% for group in groups %}
	<li> <h3> {{ group.name }} </h3> </li>
			<ol> 
			{% for member in group.items %}
				<li> <a href="{{ member.url }}"> 
				{{ member.first_name }} {{ member.last_name }}</a> </li>
			{% endfor %} 
			</ol>
{% endfor %} 
</ul>




