[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/diagnostics](../README.md) / SentryCaptureContext

# Interface: SentryCaptureContext

Context relating to a captured exception that should be sent
to Sentry.

## Source

```ts
export interface SentryCaptureContext {
    extraData?: Record<string, boolean | number | string>;
    level?: SentryEventLevel;
    tags?: Record<string, string>;
}
```

## Properties

### extraData?

> `optional` **extraData?**: `Record`\<`string`, `string` \| `number` \| `boolean`\>

#### Remarks

Additional data that should be sent with the exception.

***

### level?

> `optional` **level?**: [`SentryEventLevel`](../enumerations/SentryEventLevel.md)

#### Remarks

The indicated level of severity of the captured exception.

***

### tags?

> `optional` **tags?**: `Record`\<`string`, `string`\>

#### Remarks

Additional tags that should be sent with the exception.
