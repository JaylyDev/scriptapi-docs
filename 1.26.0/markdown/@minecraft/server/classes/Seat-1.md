[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / Seat

# Class: Seat

Describes a particular seating position on this rideable
entity.

## Constructors

### Constructor

> `private` **new Seat**(): `Seat`

#### Returns

`Seat`

## Properties

### lockRiderRotation

> `readonly` **lockRiderRotation**: `number`

#### Remarks

Angle in degrees that a rider is allowed to rotate while
riding this entity.

#### World Ready

This property can't be read in early-execution mode.

***

### maxRiderCount

> `readonly` **maxRiderCount**: `number`

#### Remarks

A maximum number of riders that this seat can support.

#### World Ready

This property can't be read in early-execution mode.

***

### minRiderCount

> `readonly` **minRiderCount**: `number`

#### Remarks

A minimum number of riders that can be placed in this seat
position, if this seat is to be filled.

#### World Ready

This property can't be read in early-execution mode.

***

### position

> `readonly` **position**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Physical location of this seat, relative to the entity's
location.

#### World Ready

This property can't be read in early-execution mode.

***

### seatRotation

> `readonly` **seatRotation**: `number`

#### Remarks

Angle in degrees to rotate riders by.

#### World Ready

This property can't be read in early-execution mode.
