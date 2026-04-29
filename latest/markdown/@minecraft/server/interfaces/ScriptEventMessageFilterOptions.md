[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ScriptEventMessageFilterOptions

# Interface: ScriptEventMessageFilterOptions

Contains additional options for registering a script event
event callback.

## Source

```ts
export interface ScriptEventMessageFilterOptions {
    namespaces: string[];
}
```

## Properties

### namespaces

> **namespaces**: `string`[]

#### Remarks

Optional list of namespaces to filter inbound script event
messages.
