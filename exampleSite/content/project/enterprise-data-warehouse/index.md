---
title: "Enterprise Data Warehouse Architecture"
summary: "Separating durable enterprise history from business-facing analytical models using Data Vault 2.0 and data marts."
tags:
  - Data Architecture
  - Data Vault 2.0
  - EDWH
date: "2025-10-01T00:00:00Z"
draft: false
---

## Problem

Enterprise reporting needed historical traceability and stable analytical structures while source systems and reporting requirements continued to change. Using the same model for ingestion, historization, and business consumption would have coupled those concerns too tightly.

## My role

I guide warehouse and data-mart architecture, modelling standards, integration boundaries, and technical reviews across the analytical platform.

## Architecture

```text
Source systems
     |
     v
Ingestion / staging
     |
     v
Data Vault 2.0 core
(Hubs · Links · Satellites)
     |
     +-------------------+
     |                   |
     v                   v
Business rules       Historical / audit view
     |
     v
Dimensional data marts
     |
     v
BI / reporting / analytical consumers
```

The Data Vault layer is responsible for integrated history and traceability. Business-facing marts are deliberately separate so they can optimize for usability, reporting semantics, and query performance without weakening the historical core.

## Key design decisions

- Keep source-aligned history separate from consumption-oriented business models.
- Preserve source changes and historization rather than overwriting them in place.
- Use marts as explicit analytical contracts instead of exposing raw warehouse structures directly.
- Apply CDC and near-real-time loading only where freshness requirements justify the additional operational complexity.
- Make lineage and transformation responsibility visible across layers so changes can be reviewed and traced.

## Why this matters

The separation allows the warehouse to absorb source-system change without forcing the same change immediately into every report. It also gives reporting teams simpler models while maintaining a durable and auditable enterprise history underneath.

## Technologies & practices

Data Vault 2.0 · EDWH · Data Marts · Dimensional Modelling · CDC · SQL · Data Governance · Lineage

*Company-specific implementation details are intentionally omitted.*
