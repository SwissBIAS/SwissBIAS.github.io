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
{% assign toollist = "" %}
{% for member in site.members %}
    {% assign toollist = toollist | concat: member.tools %}
{% endfor %}
{% assign membertools = toollist | uniq | sort_natural %}

A tool cloud illustrates the popularity of all tools used by our members. A click on the tool name scrolls down to the list of members using it.

<p>
{%- for tool in membertools -%}
    {% if tool != "" %}
        {% assign count = 0 %}
        {% for item in toollist %}
            {% if item == tool %}
                {% assign count = count  | plus: 1 %}
            {% endif %}
        {% endfor %}
&ensp;<a href="{{ tool | slugify | prepend: path_type | prepend: site.tool_archive.path | relative_url }}" style="font-size: {{ count | plus: 14 }}px">{{ tool }}</a>   
    {% endif %}
{%- endfor -%}
</p>

{% assign members_by_lastname = site.members | sort: "last_name" %}
{% for tool in membertools %}
   {% if tool != "" %}
<h3 id="{{ tool | slugify | downcase  }}"> {{ tool }} </h3>
<ul>
       {% for member in members_by_lastname %}
           {% if member.tools contains tool %}
<li><a href="{{ member.url }}"> {{ member.first_name }} {{ member.last_name }}</a></li>
           {% endif %}
       {% endfor %}
</ul>
   {% endif %}
{% endfor %}