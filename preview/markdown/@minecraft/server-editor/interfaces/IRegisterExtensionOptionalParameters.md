[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IRegisterExtensionOptionalParameters

# Interface: IRegisterExtensionOptionalParameters

Optional parameter definition for RegisterEditorExtension
function Allows the extension registrar to specify optional
textual description and notes which would be visible through
the extension manager

## Source

```ts
export interface IRegisterExtensionOptionalParameters {
    description?: string;
    notes?: string;
    toolGroupId?: string;
}
```

## Properties

### description?

> `optional` **description?**: `string`

#### Remarks

Description of the extension.

***

### notes?

> `optional` **notes?**: `string`

#### Remarks

Additional notes and description of the extension.

***

### toolGroupId?

> `optional` **toolGroupId?**: `string`

#### Remarks

An optional custom group identifier that will be used for
all Modal Tools created from the registered extension.
