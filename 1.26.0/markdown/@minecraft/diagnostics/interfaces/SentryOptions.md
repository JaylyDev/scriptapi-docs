[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/diagnostics](../README.md) / SentryOptions

# Interface: SentryOptions

Describes options for configuring Sentry for this scripting
module.

## Properties

### debug?

> `optional` **debug?**: `boolean`

#### Remarks

When set to true, additional content logging from the Sentry
system will be enabled.  Defaults to false.

***

### dsn

> **dsn**: `string` \| [`SecretString`](../../server-admin/classes/SecretString.md)

#### Remarks

The fully qualified DSN for a Sentry project.  See Sentry
documentation for more information:
https://docs.sentry.io/concepts/key-terms/dsn-explainer/

***

### maxBreadcrumbs?

> `optional` **maxBreadcrumbs?**: `number`

#### Remarks

The maximum number of breadcrumbs (submitted via [Sentry.addBreadcrumb](../classes/Sentry.md#addbreadcrumb)) to store and report per error event
to Sentry. Default is 20, supported values range from 0 (no
breadcrumbs) to 100.

***

### sampleRate?

> `optional` **sampleRate?**: `number`

#### Remarks

A number between 0 and 1 that indicates the percentage of
events that should be sent to Sentry. For example, a value
of 0.5 means that 50% of events will be sent. Default is 1
(100% of events). 0 means no events will be sent.
