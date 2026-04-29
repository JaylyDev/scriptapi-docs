[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityInitializationCause

# Enumeration: EntityInitializationCause

An enumeration describing initialization cause of an entity.

## Enumeration Members

### Born

> **Born**: `"Born"`

#### Remarks

Case when an entity is created as child of other entity or
entities, e.g., cows making a cow or slimes making smaller
slimes after dying.

***

### Event

> **Event**: `"Event"`

#### Remarks

Case when an entity is created by an event, e.g., a
Wandering trader spawning llamas.

***

### Loaded

> **Loaded**: `"Loaded"`

#### Remarks

Case when an entity is loaded into the world.

***

### Spawned

> **Spawned**: `"Spawned"`

#### Remarks

Case when an entity is naturally spawned in the world.

***

### Transformed

> **Transformed**: `"Transformed"`

#### Remarks

Case when an entity is transformed into another entity.
