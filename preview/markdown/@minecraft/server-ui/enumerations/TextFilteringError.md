[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / TextFilteringError

# Enumeration: TextFilteringError

**`Beta`**

An enum representing the errors that can occur during text
filtering. This is used to provide more context about the
filtering process.

## Enumeration Members

### DisabledByPlayer

> **DisabledByPlayer**: `"DisabledByPlayer"`

#### Remarks

The text was not filtered because the player disabled text
filtering in their settings.

***

### TextProcessorServiceUnreachable

> **TextProcessorServiceUnreachable**: `"TextProcessorServiceUnreachable"`

#### Remarks

The text was not filtered because the service is
unreachable. This can occur if there are network issues or
if the service is down for maintenance.

***

### Unknown

> **Unknown**: `"Unknown"`

#### Remarks

An unknown error occurred during text filtering. This can
occur if there is an unexpected issue with the text
filtering service or if the service returns an error that is
not categorized under the other error types.
