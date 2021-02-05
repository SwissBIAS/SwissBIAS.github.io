---
title: All members
permalink: /members/
---

A list of all members (under construction)


<ul>
  {% for member in site.members %}
    <li>
      <a href="{{ member.url }}"> {{ member.first_name }} {{ member.last_name }}</a>, {{ member.affiliation }}
    </li>
  {% endfor %}
</ul>
