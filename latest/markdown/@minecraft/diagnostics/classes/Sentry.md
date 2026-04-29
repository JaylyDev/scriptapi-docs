[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/diagnostics](../README.md) / Sentry

# Class: Sentry

A class that allows hooking up reporting to Sentry.  See
https://sentry.io/ for more information.

## Source

```ts
export class Sentry {
    private constructor();
    addBreadcrumb(level: SentryEventLevel, message: string, category?: string): void;
    addTag(name: string, value: string): void;
    captureException(exception: unknown, captureContext?: SentryCaptureContext): void;
    getTags(): Record<string, string>;
    init(options: SentryOptions): void;
    removeTag(name: string): void;
}
```

## Constructors

### Constructor

> `private` **new Sentry**(): `Sentry`

#### Returns

`Sentry`

## Methods

### addBreadcrumb()

> **addBreadcrumb**(`level`, `message`, `category?`): `void`

#### Parameters

##### level

[`SentryEventLevel`](../enumerations/SentryEventLevel.md)

##### message

`string`

The message to add to the breadcrumb.

##### category?

`string`

The category of the breadcrumb.

#### Returns

`void`

#### Remarks

Adds a breadcrumb to the next Sentry error reported.  This
can be useful for understanding a "trail" of events leading
up to an error.  See Sentry documentation for more details:
https://docs.sentry.io/product/issues/issue-details/breadcrumbs/

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[SentryUninitializedError](SentryUninitializedError.md)

***

### addTag()

> **addTag**(`name`, `value`): `void`

#### Parameters

##### name

`string`

##### value

`string`

#### Returns

`void`

#### Remarks

Adds a tag to the Sentry session.  See Sentry documentation
for more details:
https://docs.sentry.io/platforms/javascript/enriching-events/tags/

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[SentryUninitializedError](SentryUninitializedError.md)

***

### captureException()

> **captureException**(`exception`, `captureContext?`): `void`

#### Parameters

##### exception

`unknown`

##### captureContext?

[`SentryCaptureContext`](../interfaces/SentryCaptureContext.md)

#### Returns

`void`

#### Remarks

Captures an exception event and send it to Sentry. Note that
you can pass not only `Error` objects, but also other types
of thrown objects - in that case, an attempt will be made to
serialize the object for you, and stack traces are likely to
be missing.  See Sentry documentation for more details:
https://docs.sentry.io/platforms/javascript/apis/#capturing-events

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[SentryUninitializedError](SentryUninitializedError.md)

***

### getTags()

> **getTags**(): `Record`\<`string`, `string`\>

#### Returns

`Record`\<`string`, `string`\>

#### Remarks

Gets the list of all session tags.  See Sentry documentation
for more details:
https://docs.sentry.io/platforms/javascript/enriching-events/tags/

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[SentryUninitializedError](SentryUninitializedError.md)

***

### init()

> **init**(`options`): `void`

#### Parameters

##### options

[`SentryOptions`](../interfaces/SentryOptions.md)

#### Returns

`void`

#### Remarks

Initializes Sentry for use.  This must be successfully
called before any other Sentry functions are called.

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[SentryAlreadyInitializedError](SentryAlreadyInitializedError.md)

***

### removeTag()

> **removeTag**(`name`): `void`

#### Parameters

##### name

`string`

#### Returns

`void`

#### Remarks

Removes a tag to the Sentry session.  See Sentry
documentation for more details:
https://docs.sentry.io/platforms/javascript/enriching-events/tags/

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[SentryUninitializedError](SentryUninitializedError.md)
