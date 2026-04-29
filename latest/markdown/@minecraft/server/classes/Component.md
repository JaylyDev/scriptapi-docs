[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / Component

# Class: Component

Base class for downstream Component implementations.

## Source

```ts
export class Component {
    private constructor();
    readonly isValid: boolean;
    readonly typeId: string;
}
```

## Extended by

- [`BlockComponent`](BlockComponent.md)
- [`EntityComponent`](EntityComponent.md)
- [`ItemComponent`](ItemComponent.md)

## Constructors

### Constructor

> `private` **new Component**(): `Component`

#### Returns

`Component`

## Properties

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.
