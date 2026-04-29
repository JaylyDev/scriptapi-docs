[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / MessageBoxResult

# Interface: MessageBoxResult

**`Beta`**

The result when a [MessageBox](../classes/MessageBox.md) is closed.

## Source

```ts
export interface MessageBoxResult {
    selection?: number;
    wasShown: boolean;
}
```

## Properties

### selection?

> `optional` **selection?**: `number`

#### Remarks

The button that was selected, undefined if it was closed
without pressing a button.

***

### wasShown

> **wasShown**: `boolean`

#### Remarks

Whether the message box was shown
