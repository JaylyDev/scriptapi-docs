[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ContainerRulesErrorReason

# Enumeration: ContainerRulesErrorReason

Reasons that the @minecraft/server.ContainerRulesError was thrown.

## Enumeration Members

### BannedItem

> **BannedItem**: `"BannedItem"`

#### Remarks

Thrown when trying to add item that was defined in [ContainerRules.bannedItems](../interfaces/ContainerRules.md#banneditems).

***

### NestedStorageItem

> **NestedStorageItem**: `"NestedStorageItem"`

#### Remarks

Thrown when trying to add item with `Storage Item` component
to container with [ContainerRules.allowNestedStorageItems](../interfaces/ContainerRules.md#allownestedstorageitems) set to false.

***

### NotAllowedItem

> **NotAllowedItem**: `"NotAllowedItem"`

#### Remarks

Thrown when trying to add item not defined in non-empty
[ContainerRules.allowedItems](../interfaces/ContainerRules.md#alloweditems).

***

### OverWeightLimit

> **OverWeightLimit**: `"OverWeightLimit"`

#### Remarks

Thrown when trying to add item that pushed the containers
weight over the [ContainerRules.weightLimit](../interfaces/ContainerRules.md#weightlimit).

***

### ZeroWeightItem

> **ZeroWeightItem**: `"ZeroWeightItem"`

#### Remarks

Thrown when trying to add item with zero weight defined by
the `Storage Weight Modifier` component to container with a
defined [ContainerRules.weightLimit](../interfaces/ContainerRules.md#weightlimit)
