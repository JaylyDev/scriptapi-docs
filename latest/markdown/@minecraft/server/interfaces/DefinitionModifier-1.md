[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / DefinitionModifier

# Interface: DefinitionModifier

Contains a set of updates to the component definition state
of an entity.

## Source

```ts
export interface DefinitionModifier {
    addedComponentGroups: string[];
    removedComponentGroups: string[];
    triggers: Trigger[];
}
```

## Properties

### addedComponentGroups

> **addedComponentGroups**: `string`[]

#### Remarks

Retrieves the list of component groups that will be added
via this definition modification.

***

### removedComponentGroups

> **removedComponentGroups**: `string`[]

#### Remarks

The list of component groups that will be removed via this
definition modification.

***

### triggers

> **triggers**: [`Trigger`](../classes/Trigger-1.md)[]

**`Beta`**

#### Remarks

The list of entity definition events that will be fired via
this update.
