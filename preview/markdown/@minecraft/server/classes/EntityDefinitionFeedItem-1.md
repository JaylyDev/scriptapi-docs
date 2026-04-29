[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityDefinitionFeedItem

# Class: EntityDefinitionFeedItem

As part of the Ageable component, represents a set of items
that can be fed to an entity and the rate at which that
causes them to grow.

## Source

```ts
export class EntityDefinitionFeedItem {
    private constructor();
    readonly growth: number;
    readonly item: string;
    readonly resultItem?: string;
}
```

## Constructors

### Constructor

> `private` **new EntityDefinitionFeedItem**(): `EntityDefinitionFeedItem`

#### Returns

`EntityDefinitionFeedItem`

## Properties

### growth

> `readonly` **growth**: `number`

#### Remarks

The amount by which an entity's age will increase when fed
this item. Values usually range between 0 and 1.

#### World Ready

This property can't be read in early-execution mode.

***

### item

> `readonly` **item**: `string`

#### Remarks

Identifier of type of item that can be fed. If a namespace
is not specified, 'minecraft:' is assumed. Example values
include 'wheat' or 'golden_apple'.

#### World Ready

This property can't be read in early-execution mode.

***

### resultItem?

> `readonly` `optional` **resultItem?**: `string`

#### Remarks

Type ID of the resulting item after feeding has occurred.
This will usually be empty but is used for scenarios such as
feeding a Nautilus with a bucket of fish, where the result
item will be an empty bucket.

#### World Ready

This property can't be read in early-execution mode.
