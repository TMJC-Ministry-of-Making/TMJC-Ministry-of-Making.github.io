---
title: Hello World
layout: "base.njk"
---

Hello World

<ul>
{%- for post in collections.posts -%}
  <li>{{ post.data.title }}</li>
{%- endfor -%}
</ul>