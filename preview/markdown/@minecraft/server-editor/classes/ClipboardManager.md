[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ClipboardManager

# Class: ClipboardManager

The ClipboardManager (accessible from the [ExtensionContext](ExtensionContext.md)) is responsible for the management of all
[ClipboardItem](ClipboardItem.md) objects, and provides the user the
ability to create new [ClipboardItem](ClipboardItem.md) objects for use
within an extension.

## Source

```ts
export class ClipboardManager {
    private constructor();
    readonly clipboard: ClipboardItem;
    create(): ClipboardItem;
}
```

## Constructors

### Constructor

> `private` **new ClipboardManager**(): `ClipboardManager`

#### Returns

`ClipboardManager`

## Properties

### clipboard

> `readonly` **clipboard**: [`ClipboardItem`](ClipboardItem.md)

#### Remarks

The primary [ClipboardItem](ClipboardItem.md) object is always present
(even if it's empty) and cannot be deleted.  This object
represents the main ClipboardItem object which is always
accessible through the UI for cut/paste operations

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### create()

> **create**(): [`ClipboardItem`](ClipboardItem.md)

#### Returns

[`ClipboardItem`](ClipboardItem.md)

#### Remarks

Create a new  [ClipboardItem](ClipboardItem.md) object

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
