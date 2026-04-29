[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/gameplay-utilities](../README.md) / MinecraftAfterEventSignals

# Type Alias: MinecraftAfterEventSignals\<K\>

> **MinecraftAfterEventSignals**\<`K`\> = `K` *extends* keyof [`WorldAfterEvents`](../../server/classes/WorldAfterEvents.md) ? [`WorldAfterEvents`](../../server/classes/WorldAfterEvents.md)\[`K`\] : `K` *extends* keyof [`SystemAfterEvents`](../../server/classes/SystemAfterEvents.md) ? [`SystemAfterEvents`](../../server/classes/SystemAfterEvents.md)\[`K`\] : `never`

The types of after event signals that exist in Minecraft's API that EventPromise can use.

## Type Parameters

### K

`K` *extends* [`MinecraftAfterEventSignalKeys`](MinecraftAfterEventSignalKeys.md)
