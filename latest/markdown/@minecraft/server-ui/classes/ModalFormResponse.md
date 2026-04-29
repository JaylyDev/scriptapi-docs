[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README.md) / ModalFormResponse

# Class: ModalFormResponse

Returns data about player responses to a modal form.

## Example

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

function showBasicModalForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const modalForm = new ModalFormData().title("Example Modal Controls for §o§7ModalFormData§r");

  modalForm.toggle("Toggle w/o default");
  modalForm.toggle("Toggle w/ default", true);

  modalForm.slider("Slider w/o default", 0, 50, 5);
  modalForm.slider("Slider w/ default", 0, 50, 5, 30);

  modalForm.dropdown("Dropdown w/o default", ["option 1", "option 2", "option 3"]);
  modalForm.dropdown("Dropdown w/ default", ["option 1", "option 2", "option 3"], 2);

  modalForm.textField("Input w/o default", "type text here");
  modalForm.textField("Input w/ default", "type text here", "this is default");

  modalForm
    .show(players[0])
    .then((formData) => {
      players[0].sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
```

## Source

```ts
export class ModalFormResponse extends FormResponse {
    private constructor();
    readonly formValues?: (boolean | number | string | undefined)[];
}
```

## Extends

- [`FormResponse`](FormResponse.md)

## Constructors

### Constructor

> `private` **new ModalFormResponse**(): `ModalFormResponse`

#### Returns

`ModalFormResponse`

#### Overrides

[`FormResponse`](FormResponse.md).[`constructor`](FormResponse.md#constructor)

## Properties

### cancelationReason?

> `readonly` `optional` **cancelationReason?**: [`FormCancelationReason`](../enumerations/FormCancelationReason.md)

#### Remarks

Contains additional details as to why a form was canceled.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`FormResponse`](FormResponse.md).[`cancelationReason`](FormResponse.md#cancelationreason)

***

### canceled

> `readonly` **canceled**: `boolean`

#### Remarks

If true, the form was canceled by the player (e.g., they
selected the pop-up X close button).

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`FormResponse`](FormResponse.md).[`canceled`](FormResponse.md#canceled)

***

### formValues?

> `readonly` `optional` **formValues?**: (`string` \| `number` \| `boolean` \| `undefined`)[]

#### Remarks

An ordered set of values based on the order of controls
specified by ModalFormData.

#### World Ready

This property can't be read in early-execution mode.
