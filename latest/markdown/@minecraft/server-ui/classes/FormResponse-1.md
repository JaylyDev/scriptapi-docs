[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / FormResponse

# Class: FormResponse

Base type for a form response.

## Source

```ts
export class FormResponse {
    private constructor();
    readonly cancelationReason?: FormCancelationReason;
    readonly canceled: boolean;
}
```

## Extended by

- [`ActionFormResponse`](ActionFormResponse-1.md)
- [`MessageFormResponse`](MessageFormResponse-1.md)
- [`ModalFormResponse`](ModalFormResponse-1.md)

## Constructors

### Constructor

> `private` **new FormResponse**(): `FormResponse`

#### Returns

`FormResponse`

## Properties

### cancelationReason?

> `readonly` `optional` **cancelationReason?**: [`FormCancelationReason`](../enumerations/FormCancelationReason-1.md)

#### Remarks

Contains additional details as to why a form was canceled.

#### World Ready

This property can't be read in early-execution mode.

***

### canceled

> `readonly` **canceled**: `boolean`

#### Remarks

If true, the form was canceled by the player (e.g., they
selected the pop-up X close button).

#### World Ready

This property can't be read in early-execution mode.
