[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / PlayerSoundOptions

# Interface: PlayerSoundOptions

Additional options for how a sound plays for a player.

## Source

```ts
export interface PlayerSoundOptions {
    location?: Vector3;
    pitch?: number;
    volume?: number;
}
```

## Properties

### location?

> `optional` **location?**: [`Vector3`](Vector3.md)

#### Remarks

Location of the sound; if not specified, the sound is played
near a player.

***

### pitch?

> `optional` **pitch?**: `number`

#### Remarks

Optional pitch of the sound.

***

### volume?

> `optional` **volume?**: `number`

#### Remarks

Optional volume of the sound.
