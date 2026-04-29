[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-bindings](../README.md) / LogProperties

# Interface: LogProperties

A properties class for the global instance of the logger
object.
While the logger object is available through the [ExtensionContext](../classes/ExtensionContext.md) - using the global instance allows the
creator to use this properties class to perform direct
server->client messaging and broadcasts.

## Properties

### channelMask?

> `optional` **channelMask?**: [`LogChannel`](../enumerations/LogChannel.md)

#### Remarks

Display the log message to a log channel. If no channel is
specified, default channel is regular message.

***

### player?

> `optional` **player?**: [`Player`](../../server/classes/Player.md)

#### Remarks

Direct a log message to a specific player.  If no player is
specified, then all players will receive the message

***

### subMessage?

> `optional` **subMessage?**: `string` \| [`LocalizationEntry`](LocalizationEntry.md)

#### Remarks

Message to be shown under the message when toast channel is
selected.

***

### tags?

> `optional` **tags?**: `string`[]

#### Remarks

Add additional tags to the log message which can be used by
the client session to filter/search in the log window
