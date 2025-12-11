---
title: Tools
permalink: /tools/
toc: false
---

{% case site.tool_archive.type %}
  {% when "liquid" %}
    {% assign path_type = "tools/#" %}
  {% when "jekyll-archives" %}
    {% assign path_type = nil %}
{% endcase %}

{% assign membertools = "" %}
{% assign fullmembers = site.members | sort: "last_name" %}
{% for member in fullmembers %}
    {% assign membertools = membertools | concat: member.tools | uniq | sort_natural %}
{% endfor %}

<p>
List of tools used by our members:
{%- for tool in membertools -%}
&ensp;<a href="{{ tool | slugify | prepend: path_type | prepend: site.tool_archive.path | relative_url }}">{{ tool }}</a>
{%- endfor -%}
</p>

List of members, grouped by the tools they are using

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