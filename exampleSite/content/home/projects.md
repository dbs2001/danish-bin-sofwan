+++
widget = "portfolio"
headless = true
active = true
weight = 50

title = "Selected Work"
subtitle = "A small set of architecture and engineering problems I have worked on."

[content]
  page_type = "project"
  count = 0
  offset = 0
  order = "desc"
  filter_default = 0

  [[content.filter_button]]
    name = "All"
    tag = "*"

  [[content.filter_button]]
    name = "Cloud"
    tag = "Cloud Transformation"

  [[content.filter_button]]
    name = "Data Architecture"
    tag = "Data Architecture"

  [[content.filter_button]]
    name = "Streaming"
    tag = "Streaming & Integration"

  [[content.filter_button]]
    name = "Analytics"
    tag = "Analytics Platform"

[design]
  columns = "2"
  view = 3
  flip_alt_rows = false

[advanced]
  css_style = ""
  css_class = ""
+++
