[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / UIRawMessage

# Interface: UIRawMessage

**`Beta`**

A message that can be sent to the client. This is a subset
of the RawMessage type, and is used for UI messages.

## Source

```ts
export interface UIRawMessage {
    rawtext?: UIRawMessage[];
    text?: string;
    translate?: string;
    with?: string[] | UIRawMessage;
}
```

## Properties

### rawtext?

> `optional` **rawtext?**: `UIRawMessage`[]

#### Remarks

Provides a raw-text equivalent of the current message.

***

### text?

> `optional` **text?**: `string`

#### Remarks

Provides a string literal value to use.

***

### translate?

> `optional` **translate?**: `string`

#### Remarks

Provides a translation token where, if the client has an
available resource in the players' language which matches
the token, will get translated on the client.

***

### with?

> `optional` **with?**: `string`[] \| `UIRawMessage`

#### Remarks

Arguments for the translation token. Can be either an array
of strings or UIRawMessage containing an array of raw text
objects.
