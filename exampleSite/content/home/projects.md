+++
widget = "portfolio"
headless = true
active = true
weight = 50

title = "Architecture Case Studies"
subtitle = "Selected transformations and architecture decisions, generalized to protect confidential details"

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
    name = "Cloud Transformation"
    tag = "Cloud Transformation"

  [[content.filter_button]]
    name = "Data Architecture"
    tag = "Data Architecture"

  [[content.filter_button]]
    name = "Streaming & Integration"
    tag = "Streaming & Integration"

  [[content.filter_button]]
    name = "Analytics Platform"
    tag = "Analytics Platform"

[design]
  columns = "2"
  view = 3
  flip_alt_rows = false

[advanced]
  css_style = ""
  css_class = ""
+++
