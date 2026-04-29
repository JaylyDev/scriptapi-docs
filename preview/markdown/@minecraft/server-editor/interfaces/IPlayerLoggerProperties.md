[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IPlayerLoggerProperties

# Interface: IPlayerLoggerProperties

Player Logger Properties.

## Source

```ts
export interface IPlayerLoggerProperties {
    channelMask?: LogChannel;
    subMessage?: LocalizedString;
}
```

## Properties

### channelMask?

> `optional` **channelMask?**: [`LogChannel`](../enumerations/LogChannel.md)

#### Remarks

A log channel mask, default is Message

***

### subMessage?

> `optional` **subMessage?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

A player log sub message for the toast channel
