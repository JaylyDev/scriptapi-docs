[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / KeyProcessingState

# Enumeration: KeyProcessingState

Determines how key binding should be processed to fire
actions

## Enumeration Members

### Consume

> **Consume**: `0`

#### Remarks

Consume key input event and prevent propagation

***

### Disabled

> **Disabled**: `2`

#### Remarks

Skip key input event processing

***

### Passthrough

> **Passthrough**: `1`

#### Remarks

Pass key input event to parent context after processing it
