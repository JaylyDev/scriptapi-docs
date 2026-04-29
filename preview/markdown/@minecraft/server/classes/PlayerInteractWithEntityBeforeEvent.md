[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / PlayerInteractWithEntityBeforeEvent

# Class: PlayerInteractWithEntityBeforeEvent

Contains information regarding an event before a player
interacts with an entity.

## Source

```ts
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly target: Entity;
}
```

## Constructors

### Constructor

> `private` **new PlayerInteractWithEntityBeforeEvent**(): `PlayerInteractWithEntityBeforeEvent`

#### Returns

`PlayerInteractWithEntityBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true the interaction will be cancelled.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack.md)

#### Remarks

The item stack that is being used in the interaction, or
undefined if empty hand.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.

***

### target

> `readonly` **target**: [`Entity`](Entity.md)

#### Remarks

The entity that will be interacted with.

#### World Ready

This property can't be read in early-execution mode.
