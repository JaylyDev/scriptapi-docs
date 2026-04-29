[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ChatSendAfterEventSignal

# Class: ChatSendAfterEventSignal

**`Beta`**

Manages callbacks that are connected to chat messages being
sent.

## Example

```ts
import { world, ChatSendAfterEvent } from "@minecraft/server";

// Subscribe to the blockExplode event
world.afterEvents.chatSend.subscribe((event: ChatSendAfterEvent) => {
   const { sender, message } = event;
   console.log(`${sender.name}: ${message}`);
});
```

## Source

```ts
export class ChatSendAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ChatSendAfterEventSignal**(): `ChatSendAfterEventSignal`

#### Returns

`ChatSendAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when new chat messages
are sent.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

Removes a callback from being called when new chat messages
are sent.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
