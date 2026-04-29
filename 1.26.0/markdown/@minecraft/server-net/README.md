[**Script API - v1.26.0**](../../README.md)

***

[Script API - v1.26.0](../../packages.md) / @minecraft/server-net

### Dependencies
**@minecraft/common** (Optional in Manifest Details)
- Requires **v1.2.0** or above
```json
{
  "module_name": "@minecraft/common",
  "version": "1.2.0"
}
```
**@minecraft/server** (Required one of the following in Manifest Details)
- Requires **v1.17.0** up to, but not including, v2.0.0
```json
{
  "module_name": "@minecraft/server",
  "version": "1.17.0"
}
```
- Requires **v2.0.0** up to, but not including, v3.0.0
```json
{
  "module_name": "@minecraft/server",
  "version": "2.0.0"
}
```
**@minecraft/server-admin** (Required in Manifest Details)
- Requires **v1.0.0-beta** or above
```json
{
  "module_name": "@minecraft/server-admin",
  "version": "1.0.0-beta"
}
```
### Installation
Install type definition for `@minecraft/server-net` module using npm:
```bash
npm i @minecraft/server-net@1.0.0-beta.1.26.0-stable
```

**`Beta`**

The `@minecraft/server-net` module contains types for
executing HTTP-based requests. This module can only be used
on Bedrock Dedicated Server. These APIs do not function
within the Minecraft game client or within Minecraft Realms.

Manifest Details
```json
{
  "module_name": "@minecraft/server-net",
  "version": "1.0.0-beta"
}
```

## Enumerations

- [HttpRequestMethod](enumerations/HttpRequestMethod.md)
- [PacketId](enumerations/PacketId.md)

## Classes

- [HttpClient](classes/HttpClient.md)
- [HttpHeader](classes/HttpHeader.md)
- [HttpRequest](classes/HttpRequest.md)
- [HttpResponse](classes/HttpResponse.md)
- [InternalHttpRequestError](classes/InternalHttpRequestError.md)
- [MalformedHttpRequestError](classes/MalformedHttpRequestError.md)
- [NetworkBeforeEvents](classes/NetworkBeforeEvents.md)
- [PacketReceiveBeforeEventSignal](classes/PacketReceiveBeforeEventSignal.md)
- [PacketReceivedBeforeEvent](classes/PacketReceivedBeforeEvent.md)
- [PacketSendBeforeEvent](classes/PacketSendBeforeEvent.md)
- [PacketSendBeforeEventSignal](classes/PacketSendBeforeEventSignal.md)

## Interfaces

- [PacketEventOptions](interfaces/PacketEventOptions.md)

## Variables

- [beforeEvents](variables/beforeEvents.md)
- [http](variables/http.md)
