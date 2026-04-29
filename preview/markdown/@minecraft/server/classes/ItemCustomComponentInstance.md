[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ItemCustomComponentInstance

# Class: ItemCustomComponentInstance

An instance of a custom component on an item.

## Source

```ts
export class ItemCustomComponentInstance extends ItemComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}
```

## Extends

- [`ItemComponent`](ItemComponent.md)

## Constructors

### Constructor

> `private` **new ItemCustomComponentInstance**(): `ItemCustomComponentInstance`

#### Returns

`ItemCustomComponentInstance`

#### Overrides

[`ItemComponent`](ItemComponent.md).[`constructor`](ItemComponent.md#constructor)

## Properties

### customComponentParameters

> `readonly` **customComponentParameters**: [`CustomComponentParameters`](CustomComponentParameters.md)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent.md).[`isValid`](ItemComponent.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`ItemComponent`](ItemComponent.md).[`typeId`](ItemComponent.md#typeid)
