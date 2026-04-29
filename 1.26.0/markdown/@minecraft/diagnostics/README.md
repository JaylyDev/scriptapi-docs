[**Script API - v1.26.0**](../../README.md)

***

[Script API - v1.26.0](../../packages.md) / @minecraft/diagnostics

### Dependencies
**@minecraft/common** (Optional in Manifest Details)
- Requires **v1.2.0** or above
```json
{
  "module_name": "@minecraft/common",
  "version": "1.2.0"
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
### Installation
Install type definition for `@minecraft/diagnostics` module using npm:
```bash
npm i @minecraft/diagnostics@1.0.0-beta.1.26.0-stable
```

**`Beta`**

Contains diagnostics functionality for discovering and
diagnosing issues with content.

Manifest Details
```json
{
  "module_name": "@minecraft/diagnostics",
  "version": "1.0.0-beta"
}
```

## Enumerations

- [SentryEventLevel](enumerations/SentryEventLevel.md)

## Classes

- [Sentry](classes/Sentry.md)
- [SentryAlreadyInitializedError](classes/SentryAlreadyInitializedError.md)
- [SentryUninitializedError](classes/SentryUninitializedError.md)

## Interfaces

- [SentryCaptureContext](interfaces/SentryCaptureContext.md)
- [SentryOptions](interfaces/SentryOptions.md)

## Variables

- [sentry](variables/sentry.md)
