[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerAimAssistSettings

# Interface: PlayerAimAssistSettings

**`Beta`**

Settings relating to a player's aim-assist targeting.

## Source

```ts
export interface PlayerAimAssistSettings {
    distance?: number;
    presetId: string;
    targetMode?: AimAssistTargetMode;
    viewAngle?: Vector2;
}
```

## Properties

### distance?

> `optional` **distance?**: `number`

#### Remarks

The view distance limit to use for aim-assist targeting.

***

### presetId

> **presetId**: `string`

#### Remarks

The Id of the aim-assist preset to activate. Must have a
namespace.

***

### targetMode?

> `optional` **targetMode?**: [`AimAssistTargetMode`](../enumerations/AimAssistTargetMode.md)

#### Remarks

The mode to use for aim-assist targeting.

***

### viewAngle?

> `optional` **viewAngle?**: [`Vector2`](Vector2-1.md)

#### Remarks

The view angle limit to use for aim-assist targeting.
