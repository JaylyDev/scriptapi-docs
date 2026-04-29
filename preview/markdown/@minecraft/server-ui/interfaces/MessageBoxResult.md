[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / MessageBoxResult

# Interface: MessageBoxResult

**`Beta`**

The result when a [MessageBox](../classes/MessageBox.md) is closed.

## Source

```ts
export interface MessageBoxResult {
    closeReason: DataDrivenScreenClosedReason;
    selection?: number;
}
```

## Properties

### closeReason

> **closeReason**: [`DataDrivenScreenClosedReason`](../enumerations/DataDrivenScreenClosedReason.md)

#### Remarks

The reason the message box was closed.

***

### selection?

> `optional` **selection?**: `number`

#### Remarks

The button that was selected, undefined if it was closed
without pressing a button.
