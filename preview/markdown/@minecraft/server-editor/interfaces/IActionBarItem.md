[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IActionBarItem

# Interface: IActionBarItem

Registered item handle in the Action Bar collection.

## Source

```ts
export interface IActionBarItem {
    getEnabled: () => boolean;
    readonly id: string;
    readonly label: string;
    setEnabled: (enabled: boolean) => void;
}
```

## Properties

### getEnabled

> **getEnabled**: () => `boolean`

#### Returns

`boolean`

#### Remarks

Returns the current enabled state of the item.

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier of the item.

***

### label

> `readonly` **label**: `string`

#### Remarks

Text label of the item.

***

### setEnabled

> **setEnabled**: (`enabled`) => `void`

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

#### Remarks

Modify enabled state of the item.
