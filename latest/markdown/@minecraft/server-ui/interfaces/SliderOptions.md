[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / SliderOptions

# Interface: SliderOptions

**`Beta`**

The options for including a slider in [CustomForm](../classes/CustomForm.md).

## Source

```ts
export interface SliderOptions {
    description?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage;
    disabled?: Observable<boolean> | boolean;
    step?: Observable<number> | number;
    visible?: Observable<boolean> | boolean;
}
```

## Properties

### description?

> `optional` **description?**: `string` \| [`Observable`](../classes/Observable.md)\<`string`\> \| [`UIRawMessage`](UIRawMessage.md) \| [`Observable`](../classes/Observable.md)\<[`UIRawMessage`](UIRawMessage.md)\>

#### Remarks

The description of the slider, shown in the UI.

***

### disabled?

> `optional` **disabled?**: `boolean` \| [`Observable`](../classes/Observable.md)\<`boolean`\>

#### Remarks

Whether or not this slider is disabled.

***

### step?

> `optional` **step?**: `number` \| [`Observable`](../classes/Observable.md)\<`number`\>

#### Remarks

The step size of the slider. For example, if this is 2 and
the min is 0 and the max is 10, the only selectable values
will be 0, 2, 4, 6, 8, 10.

***

### visible?

> `optional` **visible?**: `boolean` \| [`Observable`](../classes/Observable.md)\<`boolean`\>

#### Remarks

Whether or not this slider is visible.
