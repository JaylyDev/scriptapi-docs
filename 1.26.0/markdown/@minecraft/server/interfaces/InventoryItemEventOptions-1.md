[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / InventoryItemEventOptions

# Interface: InventoryItemEventOptions

Contains additional filtering options for inventory item
events.

## Properties

### allowedSlots?

> `optional` **allowedSlots?**: `number`[]

#### Remarks

The slot indexes to consider. Values should be positive
numbers. If not specified, all slots are considered.

***

### excludeItems?

> `optional` **excludeItems?**: `string`[]

#### Remarks

The names for the items to exclude.

***

### excludeTags?

> `optional` **excludeTags?**: `string`[]

#### Remarks

The item tags to exclude.

***

### ignoreQuantityChange?

> `optional` **ignoreQuantityChange?**: `boolean`

#### Remarks

Flag to specify to ignore quantity changes only. True to
ignore quantity changes, false to not ignore quantity
changes.

***

### includeItems?

> `optional` **includeItems?**: `string`[]

#### Remarks

The item names to consider.

***

### includeTags?

> `optional` **includeTags?**: `string`[]

#### Remarks

The item tags to consider.

***

### inventoryType?

> `optional` **inventoryType?**: [`PlayerInventoryType`](../enumerations/PlayerInventoryType-1.md)

#### Remarks

The player inventory type to consider.
