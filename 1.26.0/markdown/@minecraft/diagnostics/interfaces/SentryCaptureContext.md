[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/diagnostics](../README.md) / SentryCaptureContext

# Interface: SentryCaptureContext

Context relating to a captured exception that should be sent
to Sentry.

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
