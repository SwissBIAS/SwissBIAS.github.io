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
#sort_by: title
#sort_order: reverse # forward
#show_excerpts: true # false
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





