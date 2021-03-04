---
title: All members
permalink: /members/
---

A list of all members (under construction)  
To become a member, please send an email (link in footer)


<ul>
  {% for member in site.members %}
    <li>
      <a href="{{ member.url }}"> {{ member.first_name }} {{ member.last_name }}</a>, {{ member.affiliation }}
    </li>
  {% endfor %}
</ul>
