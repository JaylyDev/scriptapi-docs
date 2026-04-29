[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / TitleDisplayOptions

# Interface: TitleDisplayOptions

Contains additional options for displaying a title and
optional subtitle.

## Source

```ts
export interface TitleDisplayOptions {
    fadeInDuration: number;
    fadeOutDuration: number;
    stayDuration: number;
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}
```

## Properties

### fadeInDuration

> **fadeInDuration**: `number`

#### Remarks

Fade-in duration for the title and subtitle, in ticks. There
are 20 ticks per second. Use [TicksPerSecond](../variables/TicksPerSecond.md) constant
to convert between ticks and seconds.

***

### fadeOutDuration

> **fadeOutDuration**: `number`

#### Remarks

Fade-out time for the title and subtitle, in ticks. There
are 20 ticks per second. Use [TicksPerSecond](../variables/TicksPerSecond.md) constant
to convert between ticks and seconds.

***

### stayDuration

> **stayDuration**: `number`

#### Remarks

Amount of time for the title and subtitle to stay in place,
in ticks. There are 20 ticks per second. Use [TicksPerSecond](../variables/TicksPerSecond.md) constant to convert between ticks and
seconds.

***

### subtitle?

> `optional` **subtitle?**: `string` \| [`RawMessage`](RawMessage.md) \| (`string` \| [`RawMessage`](RawMessage.md))[]

#### Remarks

Optional subtitle text.
