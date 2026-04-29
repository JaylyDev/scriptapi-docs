[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / Logger

# Class: Logger

The logger class is a utility class which allows editor
extensions to communicate with the player from the server to
the client log window.
The logger class presents 4 different output channels which
can be used to send information to the client/player,
depending on the context of the information.

## Source

```ts
export class Logger {
    private constructor();
    debug(message: LocalizationEntry | string, properties?: LogProperties): void;
    error(message: LocalizationEntry | string, properties?: LogProperties): void;
    info(message: LocalizationEntry | string, properties?: LogProperties): void;
    warning(message: LocalizationEntry | string, properties?: LogProperties): void;
}
```

## Constructors

### Constructor

> `private` **new Logger**(): `Logger`

#### Returns

`Logger`

## Methods

### debug()

> **debug**(`message`, `properties?`): `void`

#### Parameters

##### message

`string` \| [`LocalizationEntry`](../interfaces/LocalizationEntry.md)

The message string to send to the log window

##### properties?

[`LogProperties`](../interfaces/LogProperties.md)

#### Returns

`void`

#### Remarks

A `debug` output channel generally used during the
development process of editor extensions.  This channel
defaults to `hidden` in the log window (unless explicitly
enabled).
Once your editor extension development process is complete,
and you're ready to ship/share your extension - we generally
recommend that you remove any references to this log channel
to avoid a noisy experience for other users

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### error()

> **error**(`message`, `properties?`): `void`

#### Parameters

##### message

`string` \| [`LocalizationEntry`](../interfaces/LocalizationEntry.md)

The message string to send to the log window

##### properties?

[`LogProperties`](../interfaces/LogProperties.md)

#### Returns

`void`

#### Remarks

The error channel is generally used when the editor
extension experiences an error (either a program error in
executing logic unexpectedly, or an error in the input or
output to/from a player).  Use this channel sparingly - it's
meant to communicate important problems to the player

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### info()

> **info**(`message`, `properties?`): `void`

#### Parameters

##### message

`string` \| [`LocalizationEntry`](../interfaces/LocalizationEntry.md)

The message string to send to the log window

##### properties?

[`LogProperties`](../interfaces/LogProperties.md)

#### Returns

`void`

#### Remarks

The info channel is intended to communicate general,
non-fatal or non-erroneous information to the player that
can generally be safely ignored if they choose to do so.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### warning()

> **warning**(`message`, `properties?`): `void`

#### Parameters

##### message

`string` \| [`LocalizationEntry`](../interfaces/LocalizationEntry.md)

The message string to send to the log window

##### properties?

[`LogProperties`](../interfaces/LogProperties.md)

#### Returns

`void`

#### Remarks

The warning channel is intended to inform the user of
"potential" issues (missing inputs, values out of range,
things that cannot be found) but are not fatal and execution
can still be completed.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
