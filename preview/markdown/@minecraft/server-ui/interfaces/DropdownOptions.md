[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / DropdownOptions

# Interface: DropdownOptions

**`Beta`**

The options for including a dropdown in [CustomForm](../classes/CustomForm.md).

## Source

```ts
export interface DropdownOptions {
    description?: Observable<string> | string | UIRawMessage;
    disabled?: Observable<boolean> | boolean;
    visible?: Observable<boolean> | boolean;
}
```

## Properties

### description?

> `optional` **description?**: `string` \| [`Observable`](../classes/Observable.md)\<`string`\> \| [`UIRawMessage`](UIRawMessage.md)

#### Remarks

The description of the dropdown, shown in the UI.

***

### disabled?

> `optional` **disabled?**: `boolean` \| [`Observable`](../classes/Observable.md)\<`boolean`\>

#### Remarks

Whether or not this dropdown is disabled.

***

### visible?

> `optional` **visible?**: `boolean` \| [`Observable`](../classes/Observable.md)\<`boolean`\>

#### Remarks

Whether or not this dropdown is visible.
