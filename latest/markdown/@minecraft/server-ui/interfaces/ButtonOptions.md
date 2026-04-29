[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / ButtonOptions

# Interface: ButtonOptions

**`Beta`**

The options for including a button in [CustomForm](../classes/CustomForm.md).

## Source

```ts
export interface ButtonOptions {
    disabled?: Observable<boolean> | boolean;
    tooltip?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage;
    visible?: Observable<boolean> | boolean;
}
```

## Properties

### disabled?

> `optional` **disabled?**: `boolean` \| [`Observable`](../classes/Observable.md)\<`boolean`\>

#### Remarks

Whether or not this button is disabled.

***

### tooltip?

> `optional` **tooltip?**: `string` \| [`Observable`](../classes/Observable.md)\<`string`\> \| [`UIRawMessage`](UIRawMessage.md) \| [`Observable`](../classes/Observable.md)\<[`UIRawMessage`](UIRawMessage.md)\>

#### Remarks

The tooltip for this button, shown when hovering the button.

***

### visible?

> `optional` **visible?**: `boolean` \| [`Observable`](../classes/Observable.md)\<`boolean`\>

#### Remarks

Whether or not this button is visible.
