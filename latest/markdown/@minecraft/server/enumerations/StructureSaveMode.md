[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / StructureSaveMode

# Enumeration: StructureSaveMode

Specifies how a structure should be saved.

## Enumeration Members

### Memory

> **Memory**: `"Memory"`

#### Remarks

The structure will be temporarily saved to memory. The
structure will persist until the world is shut down.

***

### World

> **World**: `"World"`

#### Remarks

The structure will be saved to the world file and persist
between world loads. A saved structure can be removed from
the world via @minecraft/server.StructureManager.delete.
