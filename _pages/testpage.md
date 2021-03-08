---
title: Test Page
permalink: /testpage/
toc: false
layout: categories
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
*2021-03-08, SFN:*  
Test-page for internal development.
Used for trying out different layouts and learning to use `liquid`

## Filtering over array
Because keys may hold multiple values, e.g. `tools: [fiji, matlab, ilastik]` and we just want to find if a member has e.g. "fiji" listed

### Filtering on association ("ETH Zurich")
{%- for member in site.members -%}
	{%- if  member.affiliation == "ETH Zurich" -%}
		{{ member.short_name }}
	{% endif %}		
{% endfor %}

### Filtering on tools ("fiji")
{%- for member in site.members -%}
	{%- if  member.tools contains "fiji" -%}
		{{ member.short_name }} {{ member.tools | split: "," }}
	{% endif %}		
{% endfor %}


### Filtering on tools, algorithmically
Now combine this with algorithmic loop over individual tool values!!

10. Extract, into a variable/list/array/string,  names of all individual tools given by all members  
   11. use `concat` (arrays) or `append` (strings) or `prepend` to build the variable
20. Loop over that variable
30. For each value of tool, print member name who contains it
40. utilize the `uniq` filter in liquid

#### Learn to filter out users with no tools listed:  
{%- for member in site.members -%}
	{% comment %} inspect tools: {{ member.tools | inspect }} {% endcomment %}
	{%- assign dummy = member.tools | split: ", "  -%}
	{%- if dummy != empty -%}
		{{ member.short_name }} has value of dummy-tool variable: {{ dummy }}
	{% endif %}
{% endfor %}



#### Build array of all tools:  
%	comment %}

{% assign alltools = "fiji, fiji" | split: ", " %} 
Value of alltools initialy: {{ alltools | inspect }}

{%- for member in site.members -%}
	{%- assign dummy = member.tools | split: ","  -%}
	{%- if dummy != empty -%}
		{%- assign alltools = alltools | concat: dummy -%}
		Value of alltools in loop: {{ alltools | inspect }}
	{% endif %}
{% endfor %}

remove "\\": {{ alltools | remove: "\"  }}  
remove "\\", "[": {{ alltools | remove: "\" | remove: "["  }}  
remove "\\", "[", "]": {{ alltools | remove: "\" | remove: "[" | remove: "]" }}  

 
Unique list: {{ alltools | uniq }}  
Unique list, inspected: {{ alltools | uniq | inspect }}  

This doens't really work: the combination of yaml and liquid is not a happy one. 

%	endcomment %}
	
	
## `map` filter on `categories`
{% assign all_categories = site.members | map: "categories" %}

{% for item in all_categories %}
	{%- if item != empty -%}
		- {{ item  | split: ","}}
	{% endif %}
{% endfor %}
  
Doesn't work that well, since members is a `collection` and `map` seems built to work on a single page


## `map` filter on "tools" keyword
{% assign all_tools = site.members | map: "tools" %}
{% assign concat_tools = "fiji, fiji" | split: ", " %}
{% for item in all_tools %}
		- {{ item }} 
		{% assign dummy = item | split: ", " %}
		- dummy: {{ dummy }}
		{% assign concat_tools = concat_tools | concat: dummy %}
{% endfor %}

inspect final item: {{ item | inspect }}  
inspect final concat_tools: {{ concat_tools | inspect }}
  
Doesn't work well at all - again the issue of format of arrays - yaml and liquid not the same thing.




##  List of tools (new keyword)

{% assign groups = site.members |  sort: "tools" | group_by: "tools" %}

<ul> 
{% for group in groups %}
	<li> {{ group.name }} </li>
{% endfor %} 
</ul>


##  List of categories

{% assign groups = site.members |  sort: "categories" | group_by: "categories" %}

<ul> 
{% for group in groups %}
	<li> {{ group.name }} </li>
{% endfor %} 
</ul>


##  List of affiliations

{% assign groups = site.members |  sort: "affiliation" | group_by: "affiliation" %}

<ul> 
{% for group in groups %}
	<li> {{ group.name }} </li>
{% endfor %} 
</ul>


##  List of tags

{% assign groups = site.members |  sort: "tags" | group_by: "tags" %}

<ul> 
{% for group in groups %}
	<li> {{ group.name }} </li>
{% endfor %} 
</ul>









{% comment %}
# Manual `liquid`
Controlling output directly through `liquid` with `tags` and `filters`.

## Raw `liquid`:
{% for dummy in site.members %}
	{{ dummy.short_name }}
{% endfor %}
{% endcomment %}


{% comment %}
## HTML embedded `liquid`
<ol> 
	{% for dummy in site.members %}
		<li> {{ dummy.short_name }} </li>
	{% endfor %}
</ol>
{% endcomment %}



{% comment %}
# `Collections`

Sorted by affiliation.
Is always output after all other content.
How is formatting controlled?
{% endcomment %}
