---
title: List of tools
permalink: /tools/
toc: false
---

{% assign membertools = "" %}
{% assign fullmembers = site.members | where: "membership","true" %}
{% for member in fullmembers %}
    {% assign membertools = membertools | concat: member.tools | uniq | sort %}
{% endfor %}


{% for tool in membertools %}
   {% if tool != "" %}
<h3 id="{{ tool | slugify | downcase  }}"> {{ tool }} </h3>
<ul>
       {% for member in fullmembers %}
           {% if member.tools contains tool %}
<li><a href="/members/{{ member.first_name | slugify | downcase }}.{{ member.last_name | slugify | downcase }}"> {{ member.first_name }} {{ member.last_name }}</a></li>
           {% endif %}
       {% endfor %}
</ul>
   {% endif %}
{% endfor %}