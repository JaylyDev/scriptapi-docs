[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / BedrockEventSubscriptionCache

# Class: BedrockEventSubscriptionCache

A cache for bedrock event subscriptions. Stores off a
subscription by event key, and upon teardown unregisters all
subscriptions.

## Source

```ts
export declare class BedrockEventSubscriptionCache {
    constructor(mEvents: minecraftserver.WorldAfterEvents);
    subscribeToBedrockEvent<T extends keyof minecraftserver.WorldAfterEvents>(
        event: T,
        ...params: Parameters<minecraftserver.WorldAfterEvents[T]['subscribe']>
    ): ReturnType<minecraftserver.WorldAfterEvents[T]['subscribe']>;
    teardown(): void;
}
```

## Constructors

### Constructor

> **new BedrockEventSubscriptionCache**(`mEvents`): `BedrockEventSubscriptionCache`

#### Parameters

##### mEvents

[`WorldAfterEvents`](../../server/classes/WorldAfterEvents.md)

#### Returns

`BedrockEventSubscriptionCache`

#### Remarks

Constructs a new instance of the
`BedrockEventSubscriptionCache` class

## Methods

### subscribeToBedrockEvent()

> **subscribeToBedrockEvent**\<`T`\>(`event`, ...`params`): `ReturnType`\<[`WorldAfterEvents`](../../server/classes/WorldAfterEvents.md)\[`T`\]\[`"subscribe"`\]\>

#### Type Parameters

##### T

`T` *extends* keyof [`WorldAfterEvents`](../../server/classes/WorldAfterEvents.md)

#### Parameters

##### event

`T`

The event on the bedrock APIs to which to subscribe

##### params

...`Parameters`\<[`WorldAfterEvents`](../../server/classes/WorldAfterEvents.md)\[`T`\]\[`"subscribe"`\]\>

The parameters to the subscription method for the event.
Auto complete will display this for you

#### Returns

`ReturnType`\<[`WorldAfterEvents`](../../server/classes/WorldAfterEvents.md)\[`T`\]\[`"subscribe"`\]\>

#### Remarks

Subcribes to a bedrock event using the key of the desired
event. When subscribed, the event handler is both returned,
but also cached internally for unsubscription. This means
the caller of the subscription does not need to worry about
unsubscription since the cache will automatically
unsubscribe handlers on overall teardown.

#### World Ready

This function can't be called in early-execution mode.

***

### teardown()

> **teardown**(): `void`

#### Returns

`void`

#### Remarks

Cleans up the set of internal registrations and
subscriptions.

#### World Ready

This function can't be called in early-execution mode.
