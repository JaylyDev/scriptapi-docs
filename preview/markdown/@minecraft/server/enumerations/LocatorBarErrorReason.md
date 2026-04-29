[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / LocatorBarErrorReason

# Enumeration: LocatorBarErrorReason

**`Beta`**

Enum representing the different reasons why a locator bar
operation may fail.

## Enumeration Members

### WaypointAlreadyExists

> **WaypointAlreadyExists**: `"WaypointAlreadyExists"`

#### Remarks

The waypoint already exists in the locator bar and cannot be
added again.

***

### WaypointLimitExceeded

> **WaypointLimitExceeded**: `"WaypointLimitExceeded"`

#### Remarks

The maximum number of waypoints has been reached and no more
can be added.

***

### WaypointNotFound

> **WaypointNotFound**: `"WaypointNotFound"`

#### Remarks

The specified waypoint does not exist in the locator bar.
