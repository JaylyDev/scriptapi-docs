[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IPlayerLogger

# Interface: IPlayerLogger

Log helper interface for Player.

## Methods

### debug()

> **debug**(`message`, `props?`): `void`

#### Parameters

##### message

[`LocalizedString`](../type-aliases/LocalizedString.md)

Message content

##### props?

[`IPlayerLoggerProperties`](IPlayerLoggerProperties.md)

Optional player log properties

#### Returns

`void`

#### Remarks

Dispatch a player log message with Debug log level

***

### error()

> **error**(`message`, `props?`): `void`

#### Parameters

##### message

[`LocalizedString`](../type-aliases/LocalizedString.md)

Message content

##### props?

[`IPlayerLoggerProperties`](IPlayerLoggerProperties.md)

Optional player log properties

#### Returns

`void`

#### Remarks

Dispatch a player log message with Error log level

***

### info()

> **info**(`message`, `props?`): `void`

#### Parameters

##### message

[`LocalizedString`](../type-aliases/LocalizedString.md)

Message content

##### props?

[`IPlayerLoggerProperties`](IPlayerLoggerProperties.md)

Optional player log properties

#### Returns

`void`

#### Remarks

Dispatch a player log message with Info log level

***

### warning()

> **warning**(`message`, `props?`): `void`

#### Parameters

##### message

[`LocalizedString`](../type-aliases/LocalizedString.md)

Message content

##### props?

[`IPlayerLoggerProperties`](IPlayerLoggerProperties.md)

Optional player log properties

#### Returns

`void`

#### Remarks

Dispatch a player log message with Warning log level
