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

A list of all members (under construction)  
_To become a member, please send an email (link in footer)_


{% comment %}

<ul>
  {% for member in site.members %}
    <li>
      <a href="{{ member.url }}"> {{ member.first_name }} {{ member.last_name }}</a>, {{ member.affiliation }}
    </li>
  {% endfor %}
</ul>


---
	
# TESTZONE

## `Collections`

Sorted by affiliation.
Is always output after all other content.
How is formatting controlled?

## manual `liquid`
Controlling output directly through `liquid` with `tags` and `filters`.

### Raw `liquid`:
{% for dummy in site.members %}
	{{ dummy.short_name }}
{% endfor %}

### HTML embedded `liquid`
<ol> 
	{% for dummy in site.members %}
		<li> {{ dummy.short_name }} </li>
	{% endfor %}
</ol>

### grouping by `affiliation`


{% endcomment %}

{% assign groups = site.members | group_by: "affiliation" | sort: "first_name" %}


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
