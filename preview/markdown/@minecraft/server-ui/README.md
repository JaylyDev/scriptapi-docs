[**Script API - v1.26.20.28**](../../README.md)

***

[Script API - v1.26.20.28](../../packages.md) / @minecraft/server-ui

### Dependencies
**@minecraft/common** (Optional in Manifest Details)
- Requires **v1.2.0** or above
```json
{
  "module_name": "@minecraft/common",
  "version": "1.2.0"
}
```
**@minecraft/server** (Required in Manifest Details)
- Requires **v2.0.0** or above
```json
{
  "module_name": "@minecraft/server",
  "version": "2.0.0"
}
```
### Installation
Install type definition for `@minecraft/server-ui` module using npm:
```bash
npm i @minecraft/server-ui@2.0.0
```

The `@minecraft/server-ui` module contains types for
expressing simple dialog-based user experiences.

  * [ActionFormData](classes/ActionFormData.md) contain a list of buttons with
captions and images that can be used for presenting a set of
options to a player.
  * [MessageFormData](classes/MessageFormData.md) are simple two-button message
experiences that are functional for Yes/No or OK/Cancel
questions.
  * [ModalFormData](classes/ModalFormData.md) allow for a more flexible
"questionnaire-style" list of controls that can be used to
take input.

Manifest Details
```json
{
  "module_name": "@minecraft/server-ui",
  "version": "2.0.0"
}
```

## Enumerations

- [FormCancelationReason](enumerations/FormCancelationReason.md)
- [FormRejectReason](enumerations/FormRejectReason.md)

## Classes

- [ActionFormData](classes/ActionFormData.md)
- [ActionFormResponse](classes/ActionFormResponse.md)
- [FormRejectError](classes/FormRejectError.md)
- [FormResponse](classes/FormResponse.md)
- [MessageFormData](classes/MessageFormData.md)
- [MessageFormResponse](classes/MessageFormResponse.md)
- [ModalFormData](classes/ModalFormData.md)
- [ModalFormResponse](classes/ModalFormResponse.md)
- [UIManager](classes/UIManager.md)

## Interfaces

- [ModalFormDataDropdownOptions](interfaces/ModalFormDataDropdownOptions.md)
- [ModalFormDataSliderOptions](interfaces/ModalFormDataSliderOptions.md)
- [ModalFormDataTextFieldOptions](interfaces/ModalFormDataTextFieldOptions.md)
- [ModalFormDataToggleOptions](interfaces/ModalFormDataToggleOptions.md)

## Variables

- [uiManager](variables/uiManager.md)
