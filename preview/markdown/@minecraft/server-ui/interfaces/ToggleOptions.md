[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / ToggleOptions

# Interface: ToggleOptions

**`Beta`**

The options for including a toggle in [CustomForm](../classes/CustomForm.md).

## Source

```ts
export interface ToggleOptions {
    description?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage;
    disabled?: Observable<boolean> | boolean;
    visible?: Observable<boolean> | boolean;
}
```

## Properties

### description?

> `optional` **description?**: `string` \| [`Observable`](../classes/Observable.md)\<`string`\> \| [`UIRawMessage`](UIRawMessage.md) \| [`Observable`](../classes/Observable.md)\<[`UIRawMessage`](UIRawMessage.md)\>

#### Remarks

The description for this toggle, shown in the UI.

***

### disabled?

> `optional` **disabled?**: `boolean` \| [`Observable`](../classes/Observable.md)\<`boolean`\>

#### Remarks

Whether or not this toggle is disabled.

***

### visible?

> `optional` **visible?**: `boolean` \| [`Observable`](../classes/Observable.md)\<`boolean`\>

#### Remarks

Whether or not this toggle is visible.
