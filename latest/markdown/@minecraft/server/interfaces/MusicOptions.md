[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / MusicOptions

# Interface: MusicOptions

Additional configuration options for [World.playMusic](../classes/World.md#playmusic)/[World.queueMusic](../classes/World.md#queuemusic) methods.

## Source

```ts
export interface MusicOptions {
    fade?: number;
    loop?: boolean;
    volume?: number;
}
```

## Properties

### fade?

> `optional` **fade?**: `number`

#### Remarks

Specifies a fade overlap for music at the end of play.

***

### loop?

> `optional` **loop?**: `boolean`

#### Remarks

If set to true, this music track will play repeatedly.

***

### volume?

> `optional` **volume?**: `number`

#### Remarks

Relative volume level of the music.
