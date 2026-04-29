[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / TickingAreaErrorReason

# Enumeration: TickingAreaErrorReason

The reason that the @minecraft/server.TickingAreaError was thrown.

## Enumeration Members

### IdentifierAlreadyExists

> **IdentifierAlreadyExists**: `"IdentifierAlreadyExists"`

#### Remarks

Added a ticking area with an identifier that already exists.

***

### OverChunkLimit

> **OverChunkLimit**: `"OverChunkLimit"`

#### Remarks

Adding this ticking area pushed the ticking areas over the
limit specified by [TickingAreaManager.maxChunkCount](../classes/TickingAreaManager.md#maxchunkcount).

***

### SideLengthExceeded

> **SideLengthExceeded**: `"SideLengthExceeded"`

#### Remarks

Exceeded the 255 chunk limit for the length or width of the
ticking area.

***

### UnknownIdentifier

> **UnknownIdentifier**: `"UnknownIdentifier"`

#### Remarks

Tried to remove ticking area with identifier not registered
in the [TickingAreaManager](../classes/TickingAreaManager.md).
