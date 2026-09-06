---
title: "CDC & Near-Real-Time Integration"
summary: "Decoupling analytical consumers from operational systems using change data capture and streaming patterns."
tags:
  - Streaming & Integration
  - CDC
  - Kafka
date: "2025-07-01T00:00:00Z"
draft: false
---

## Problem

Direct extracts and point-to-point integrations make analytical consumers dependent on operational databases, duplicate source-specific logic, and become harder to manage as more consumers are added.

The goal was to improve freshness without moving that coupling into a faster transport layer.

## My role

I design and review integration patterns across the data platform, including CDC ingestion, streaming boundaries, downstream processing, and the operational behaviour expected around replay and recovery.

## Integration pattern

```text
Operational database
       |
       | change log
       v
      CDC
       |
       v
Kafka / event layer
   |           |
   |           +--> near-real-time consumer
   |
   +--> transformation / persistence
                |
                v
          EDWH / data marts
                |
                v
          reporting / analytics
```

## Design questions that mattered

| Concern | Design response |
| --- | --- |
| Source load | Capture changes rather than repeatedly scanning full source tables where feasible. |
| Consumer coupling | Consumers read from the integration layer rather than operational databases. |
| Duplicate delivery | Processing must be idempotent where the transport can redeliver events. |
| Recovery | Retention and replay behaviour are designed before production rollout. |
| Schema change | Source changes are treated as contract changes, not silent implementation details. |
| Latency | Streaming is used only when the business requirement justifies its operational cost. |

## Result

The pattern creates a cleaner boundary between operational systems and analytical consumers. New consumers can be introduced without creating another direct dependency on the source, while batch and streaming can coexist according to the actual freshness requirement.

## Technologies & practices

CDC · Kafka · Streaming · SQL · Event-Driven Integration · Idempotency · Replay & Recovery

*Company-specific implementation details are intentionally omitted.*
