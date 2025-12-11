---
title: Tools
permalink: /tools/
toc: false
---
List of members, grouped by the tools they are using.

{% assign membertools = "" %}
{% assign fullmembers = site.members | sort: "last_name" %}
{% for member in fullmembers %}
    {% assign membertools = membertools | concat: member.tools | uniq | sort %}
{% endfor %}


{% for tool in membertools %}
   {% if tool != "" %}
<h3 id="{{ tool | slugify | downcase  }}"> {{ tool }} </h3>
<ul>
       {% for member in fullmembers %}
           {% if member.tools contains tool %}
<li><a href="{{ member.url }}"> {{ member.first_name }} {{ member.last_name }}</a></li>
           {% endif %}
       {% endfor %}
</ul>
   {% endif %}
{% endfor %}