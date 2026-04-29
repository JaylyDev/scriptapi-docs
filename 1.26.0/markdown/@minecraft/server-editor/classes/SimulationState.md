[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / SimulationState

# Class: SimulationState

Responsible for querying and modifying various properties of
the simulation.

## Constructors

### Constructor

> `private` **new SimulationState**(): `SimulationState`

#### Returns

`SimulationState`

## Methods

### isPaused()

> **isPaused**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns `true` if mob simulation is paused.

#### World Ready

This function can't be called in early-execution mode.

***

### setPaused()

> **setPaused**(`isPaused`): `void`

#### Parameters

##### isPaused

`boolean`

#### Returns

`void`

#### Remarks

Sets the state of mob simulation.  If set to `true`, mobs
are paused.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
