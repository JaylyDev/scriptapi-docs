[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ContainerRules

# Interface: ContainerRules

Rules that if broken on container operations will throw an
error.

## Properties

### allowedItems

> **allowedItems**: `string`[]

#### Remarks

Defines the items that are exclusively allowed in the
container. If empty all items are allowed in the container.

***

### allowNestedStorageItems

> **allowNestedStorageItems**: `boolean`

#### Remarks

Determines whether other storage items can be placed into
the container.

***

### bannedItems

> **bannedItems**: `string`[]

#### Remarks

Defines the items that are not allowed in the container.

***

### weightLimit?

> `optional` **weightLimit?**: `number`

#### Remarks

Defines the maximum allowed total weight of all items in the
storage item container. If undefined container has no weight
limit.
