[**Script API - v1.26.10**](../../README.md)

***

[Script API - v1.26.10](../../packages.md) / @minecraft/server-ui

### Dependencies
**@minecraft/common** (Optional in Manifest Details)
- Requires **v1.2.0** or above
```json
{
  "module_name": "@minecraft/common",
  "version": "1.2.0"
}
```
**@minecraft/server** (Required one of the following in Manifest Details)
- Requires **v2.0.0** up to, but not including, v3.0.0
```json
{
  "module_name": "@minecraft/server",
  "version": "2.0.0"
}
```
- Requires **v2.7.0-beta** up to, but not including, v3.0.0
```json
{
  "module_name": "@minecraft/server",
  "version": "2.7.0-beta"
}
```
### Installation
Install type definition for `@minecraft/server-ui` module using npm:
```bash
npm i @minecraft/server-ui@2.1.0-beta.1.26.10-stable
```

**`Beta`**

The `@minecraft/server-ui` module contains types for
expressing simple dialog-based user experiences.

  * [ActionFormData](classes/ActionFormData-1.md) contain a list of buttons with
captions and images that can be used for presenting a set of
options to a player.
  * [MessageFormData](classes/MessageFormData-1.md) are simple two-button message
experiences that are functional for Yes/No or OK/Cancel
questions.
  * [ModalFormData](classes/ModalFormData-1.md) allow for a more flexible
"questionnaire-style" list of controls that can be used to
take input.

Manifest Details
```json
{
  "module_name": "@minecraft/server-ui",
  "version": "2.1.0-beta"
}
```

## Enumerations

- [FormCancelationReason](enumerations/FormCancelationReason-1.md)
- [FormRejectReason](enumerations/FormRejectReason-1.md)

## Classes

- [ActionFormData](classes/ActionFormData-1.md)
- [ActionFormResponse](classes/ActionFormResponse-1.md)
- [CustomForm](classes/CustomForm.md)
- [FormRejectError](classes/FormRejectError-1.md)
- [FormResponse](classes/FormResponse-1.md)
- [MessageBox](classes/MessageBox.md)
- [MessageFormData](classes/MessageFormData-1.md)
- [MessageFormResponse](classes/MessageFormResponse-1.md)
- [ModalFormData](classes/ModalFormData-1.md)
- [ModalFormResponse](classes/ModalFormResponse-1.md)
- [Observable](classes/Observable.md)
- [UIManager](classes/UIManager-1.md)

## Interfaces

- [ButtonOptions](interfaces/ButtonOptions.md)
- [DividerOptions](interfaces/DividerOptions.md)
- [DropdownItem](interfaces/DropdownItem.md)
- [DropdownOptions](interfaces/DropdownOptions.md)
- [MessageBoxResult](interfaces/MessageBoxResult.md)
- [ModalFormDataDropdownOptions](interfaces/ModalFormDataDropdownOptions-1.md)
- [ModalFormDataSliderOptions](interfaces/ModalFormDataSliderOptions-1.md)
- [ModalFormDataTextFieldOptions](interfaces/ModalFormDataTextFieldOptions-1.md)
- [ModalFormDataToggleOptions](interfaces/ModalFormDataToggleOptions-1.md)
- [ObservableOptions](interfaces/ObservableOptions.md)
- [SliderOptions](interfaces/SliderOptions.md)
- [SpacingOptions](interfaces/SpacingOptions.md)
- [TextFieldOptions](interfaces/TextFieldOptions.md)
- [TextOptions](interfaces/TextOptions.md)
- [ToggleOptions](interfaces/ToggleOptions.md)
- [UIRawMessage](interfaces/UIRawMessage.md)

## Variables

- [uiManager](variables/uiManager-1.md)
