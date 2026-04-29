[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IPropertyPane

# Interface: IPropertyPane

Property pane present dynamic content. It can be associated
with an object and presented with different kind of
controls.

## Source

```ts
export interface IPropertyPane extends IPane {
    readonly collapsed: boolean;
    onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;
    addBlockList(value: IObservableProp<string[]>, options?: IBlockListPropertyItemOptions): IBlockListPropertyItem;
    addBlockTable(options?: IBlockTablePropertyItemOptions): IBlockTablePropertyItem;
    addBool(value: IObservableProp<boolean>, options?: IBoolPropertyItemOptions): IBoolPropertyItem;
    addButton(
        action: ButtonPropertyItemSupportedActionTypes,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;
    addButtonPane(options?: IButtonPanePropertyItemOptions): IButtonPanePropertyItem;
    addCollectionTree(options: ICollectionTreePropertyItemOptions): ICollectionTreePropertyItem;
    addColorPicker(
        value: IObservableProp<minecraftserver.RGBA>,
        options?: IColorPickerPropertyItemOptions,
    ): IColorPickerPropertyItem;
    addColorTimeline(
        value: IObservableProp<number>,
        options?: IColorTimelinePropertyItemOptions,
    ): IColorTimelinePropertyItem;
    addComboBox(value: IObservableProp<string>, options?: IComboBoxPropertyItemOptions): IComboBoxPropertyItem;
    addDataTable(options?: IDataTablePropertyItemOptions): IDataTablePropertyItem;
    addDivider(): IPropertyItemBase;
    addDropdown(value: IObservableProp<number>, options?: IDropdownPropertyItemOptions): IDropdownPropertyItem;
    addImage(
        value: IObservableProp<string | ImageResourceData>,
        options?: IImagePropertyItemOptions,
    ): IImagePropertyItem;
    addLink(value: IObservableProp<string>, options?: ILinkPropertyItemOptions): ILinkPropertyItem;
    addListPane(options: IListPanePropertyItemOptions): IListPanePropertyItem;
    addMenu(
        defaultEntries: {
            params: IMenuCreationParams;
            action?: RegisteredAction<NoArgsAction>;
        }[],
        options?: IMenuPropertyItemOptions,
    ): IMenuPropertyItem;
    addMinimap(mapId: string, options?: IMinimapPropertyItemOptions): IMinimapPropertyItem;
    addNumber(value: IObservableProp<number>, options?: INumberPropertyItemOptions): INumberPropertyItem;
    addNumberTimeline(
        value: IObservableProp<number>,
        options?: INumberTimelinePropertyItemOptions,
    ): INumberTimelinePropertyItem;
    addProgressIndicator(options?: IProgressIndicatorPropertyItemOptions): IProgressIndicatorPropertyItem;
    addProxyPane(paneId: string): void;
    addString(value: IObservableProp<string>, options?: IStringPropertyItemOptions): IStringPropertyItem;
    addTagContainer(options?: ITagContainerPropertyItemOptions): ITagContainerPropertyItem;
    addText(value: IObservableProp<LocalizedString>, options?: ITextPropertyItemOptions): ITextPropertyItem;
    addToggleGroup(value: IObservableProp<number>, options?: IToggleGroupPropertyItemOptions): IToggleGroupPropertyItem;
    addVector2(
        value: IObservableProp<minecraftserver.Vector2>,
        options?: IVector2PropertyItemOptions,
    ): IVector2PropertyItem;
    addVector3(
        value: IObservableProp<minecraftserver.Vector3>,
        options?: IVector3PropertyItemOptions,
    ): IVector3PropertyItem;
    addVector3Timeline(
        value: IObservableProp<number>,
        options?: IVector3TimelinePropertyItemOptions,
    ): IVector3TimelinePropertyItem;
    beginConstruct(): void;
    collapse(): void;
    createSubPane(options: ISubPanePropertyItemOptions): ISubPanePropertyItem;
    endConstruct(): void;
    expand(): void;
    getTitle(): LocalizedString | undefined;
    removeSubPane(paneToRemove: IPropertyPane): boolean;
    setTitle(newTitle: LocalizedString | undefined): void;
    toggleSubPaneVisibility(subPaneId: string | undefined): void;
}
```

## Extends

- [`IPane`](IPane.md)

## Extended by

- [`IRootPropertyPane`](IRootPropertyPane.md)
- [`ISubPanePropertyItem`](ISubPanePropertyItem.md)

## Properties

### collapsed

> `readonly` **collapsed**: `boolean`

#### Remarks

Pane state for being expanded or collapsed.

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the pane.

#### Inherited from

[`IPane`](IPane.md).[`id`](IPane.md#id)

***

### onPropertyPaneVisibilityUpdated

> **onPropertyPaneVisibilityUpdated**: [`EventSink`](EventSink.md)\<[`PropertyPaneVisibilityUpdate`](../type-aliases/PropertyPaneVisibilityUpdate.md)\>

#### Remarks

Provides visibility change events

***

### visible

> **visible**: `boolean`

#### Remarks

Check visibility of the pane

#### Inherited from

[`IPane`](IPane.md).[`visible`](IPane.md#visible)

## Methods

### addBlockList()

> **addBlockList**(`value`, `options?`): [`IBlockListPropertyItem`](IBlockListPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`string`[]\>

##### options?

[`IBlockListPropertyItemOptions`](IBlockListPropertyItemOptions.md)

#### Returns

[`IBlockListPropertyItem`](IBlockListPropertyItem.md)

#### Remarks

Adds a block list to the pane.

***

### addBlockTable()

> **addBlockTable**(`options?`): [`IBlockTablePropertyItem`](IBlockTablePropertyItem.md)

#### Parameters

##### options?

[`IBlockTablePropertyItemOptions`](IBlockTablePropertyItemOptions.md)

#### Returns

[`IBlockTablePropertyItem`](IBlockTablePropertyItem.md)

#### Remarks

Adds a block table to the pane.

***

### addBool()

> **addBool**(`value`, `options?`): [`IBoolPropertyItem`](IBoolPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`boolean`\>

##### options?

[`IBoolPropertyItemOptions`](IBoolPropertyItemOptions.md)

#### Returns

[`IBoolPropertyItem`](IBoolPropertyItem.md)

#### Remarks

Adds a togglable boolean item to the pane.

***

### addButton()

> **addButton**(`action`, `options?`): [`IButtonPropertyItem`](IButtonPropertyItem.md)

#### Parameters

##### action

[`ButtonPropertyItemSupportedActionTypes`](../type-aliases/ButtonPropertyItemSupportedActionTypes.md)

##### options?

[`IButtonPropertyItemOptions`](IButtonPropertyItemOptions.md)

#### Returns

[`IButtonPropertyItem`](IButtonPropertyItem.md)

#### Remarks

Adds a button to the pane and binds the specified action to
the button interaction.

***

### addButtonPane()

> **addButtonPane**(`options?`): [`IButtonPanePropertyItem`](IButtonPanePropertyItem.md)

#### Parameters

##### options?

[`IButtonPanePropertyItemOptions`](IButtonPanePropertyItemOptions.md)

#### Returns

[`IButtonPanePropertyItem`](IButtonPanePropertyItem.md)

#### Remarks

Adds a pane for grouped button layout.

***

### addCollectionTree()

> **addCollectionTree**(`options`): [`ICollectionTreePropertyItem`](ICollectionTreePropertyItem.md)

#### Parameters

##### options

[`ICollectionTreePropertyItemOptions`](ICollectionTreePropertyItemOptions.md)

#### Returns

[`ICollectionTreePropertyItem`](ICollectionTreePropertyItem.md)

#### Remarks

Adds a tree view for collections with folders and entries.

***

### addColorPicker()

> **addColorPicker**(`value`, `options?`): [`IColorPickerPropertyItem`](IColorPickerPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<[`RGBA`](../../server/interfaces/RGBA.md)\>

##### options?

[`IColorPickerPropertyItemOptions`](IColorPickerPropertyItemOptions.md)

#### Returns

[`IColorPickerPropertyItem`](IColorPickerPropertyItem.md)

#### Remarks

Adds a color picker item to the pane.

***

### addColorTimeline()

> **addColorTimeline**(`value`, `options?`): [`IColorTimelinePropertyItem`](IColorTimelinePropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`number`\>

##### options?

[`IColorTimelinePropertyItemOptions`](IColorTimelinePropertyItemOptions.md)

#### Returns

[`IColorTimelinePropertyItem`](IColorTimelinePropertyItem.md)

#### Remarks

Adds a Color Timeline item to the pane.

***

### addComboBox()

> **addComboBox**(`value`, `options?`): [`IComboBoxPropertyItem`](IComboBoxPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`string`\>

##### options?

[`IComboBoxPropertyItemOptions`](IComboBoxPropertyItemOptions.md)

#### Returns

[`IComboBoxPropertyItem`](IComboBoxPropertyItem.md)

#### Remarks

Adds a combo box item to the pane.

***

### addDataTable()

> **addDataTable**(`options?`): [`IDataTablePropertyItem`](IDataTablePropertyItem.md)

#### Parameters

##### options?

[`IDataTablePropertyItemOptions`](IDataTablePropertyItemOptions.md)

#### Returns

[`IDataTablePropertyItem`](IDataTablePropertyItem.md)

#### Remarks

Adds a data table to the pane.

***

### addDivider()

> **addDivider**(): [`IPropertyItemBase`](IPropertyItemBase.md)

#### Returns

[`IPropertyItemBase`](IPropertyItemBase.md)

#### Remarks

Adds an divider item to the pane.

***

### addDropdown()

> **addDropdown**(`value`, `options?`): [`IDropdownPropertyItem`](IDropdownPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`number`\>

##### options?

[`IDropdownPropertyItemOptions`](IDropdownPropertyItemOptions.md)

#### Returns

[`IDropdownPropertyItem`](IDropdownPropertyItem.md)

#### Remarks

Adds an Dropdown item to the pane.

***

### addImage()

> **addImage**(`value`, `options?`): [`IImagePropertyItem`](IImagePropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`string` \| [`ImageResourceData`](../type-aliases/ImageResourceData.md)\>

##### options?

[`IImagePropertyItemOptions`](IImagePropertyItemOptions.md)

#### Returns

[`IImagePropertyItem`](IImagePropertyItem.md)

#### Remarks

Adds an image item to the pane.

***

### addLink()

> **addLink**(`value`, `options?`): [`ILinkPropertyItem`](ILinkPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`string`\>

##### options?

[`ILinkPropertyItemOptions`](ILinkPropertyItemOptions.md)

#### Returns

[`ILinkPropertyItem`](ILinkPropertyItem.md)

#### Remarks

Adds a Link item to the pane.

***

### addListPane()

> **addListPane**(`options`): [`IListPanePropertyItem`](IListPanePropertyItem.md)

#### Parameters

##### options

[`IListPanePropertyItemOptions`](IListPanePropertyItemOptions.md)

#### Returns

[`IListPanePropertyItem`](IListPanePropertyItem.md)

#### Remarks

Adds a pane for displaying list of items in a predefined
layout.

***

### addMenu()

> **addMenu**(`defaultEntries`, `options?`): [`IMenuPropertyItem`](IMenuPropertyItem.md)

#### Parameters

##### defaultEntries

`object`[]

##### options?

[`IMenuPropertyItemOptions`](IMenuPropertyItemOptions.md)

#### Returns

[`IMenuPropertyItem`](IMenuPropertyItem.md)

#### Remarks

Adds a menu button property item to the pane.

***

### addMinimap()

> **addMinimap**(`mapId`, `options?`): [`IMinimapPropertyItem`](IMinimapPropertyItem.md)

#### Parameters

##### mapId

`string`

##### options?

[`IMinimapPropertyItemOptions`](IMinimapPropertyItemOptions.md)

#### Returns

[`IMinimapPropertyItem`](IMinimapPropertyItem.md)

#### Remarks

Adds Map item to the pane.

***

### addNumber()

> **addNumber**(`value`, `options?`): [`INumberPropertyItem`](INumberPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`number`\>

##### options?

[`INumberPropertyItemOptions`](INumberPropertyItemOptions.md)

#### Returns

[`INumberPropertyItem`](INumberPropertyItem.md)

#### Remarks

Adds a number item to the pane.

***

### addNumberTimeline()

> **addNumberTimeline**(`value`, `options?`): [`INumberTimelinePropertyItem`](INumberTimelinePropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`number`\>

##### options?

[`INumberTimelinePropertyItemOptions`](INumberTimelinePropertyItemOptions.md)

#### Returns

[`INumberTimelinePropertyItem`](INumberTimelinePropertyItem.md)

#### Remarks

Adds a Number Timeline item to the pane.

***

### addProgressIndicator()

> **addProgressIndicator**(`options?`): [`IProgressIndicatorPropertyItem`](IProgressIndicatorPropertyItem.md)

#### Parameters

##### options?

[`IProgressIndicatorPropertyItemOptions`](IProgressIndicatorPropertyItemOptions.md)

#### Returns

[`IProgressIndicatorPropertyItem`](IProgressIndicatorPropertyItem.md)

#### Remarks

Adds a Progress Indicator item to the pane.

***

### addProxyPane()

> **addProxyPane**(`paneId`): `void`

#### Parameters

##### paneId

`string`

#### Returns

`void`

#### Remarks

Adds a proxy view of another supported pane

***

### addString()

> **addString**(`value`, `options?`): [`IStringPropertyItem`](IStringPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`string`\>

##### options?

[`IStringPropertyItemOptions`](IStringPropertyItemOptions.md)

#### Returns

[`IStringPropertyItem`](IStringPropertyItem.md)

#### Remarks

Adds an editable string item to the pane

***

### addTagContainer()

> **addTagContainer**(`options?`): [`ITagContainerPropertyItem`](ITagContainerPropertyItem.md)

#### Parameters

##### options?

[`ITagContainerPropertyItemOptions`](ITagContainerPropertyItemOptions.md)

#### Returns

[`ITagContainerPropertyItem`](ITagContainerPropertyItem.md)

#### Remarks

Adds a tag container to the pane.

***

### addText()

> **addText**(`value`, `options?`): [`ITextPropertyItem`](ITextPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<[`LocalizedString`](../type-aliases/LocalizedString.md)\>

##### options?

[`ITextPropertyItemOptions`](ITextPropertyItemOptions.md)

#### Returns

[`ITextPropertyItem`](ITextPropertyItem.md)

#### Remarks

Adds a multiline Text item to the pane.

***

### addToggleGroup()

> **addToggleGroup**(`value`, `options?`): [`IToggleGroupPropertyItem`](IToggleGroupPropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`number`\>

##### options?

[`IToggleGroupPropertyItemOptions`](IToggleGroupPropertyItemOptions.md)

#### Returns

[`IToggleGroupPropertyItem`](IToggleGroupPropertyItem.md)

#### Remarks

Adds a toggle button group to the pane.

***

### addVector2()

> **addVector2**(`value`, `options?`): [`IVector2PropertyItem`](IVector2PropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<[`Vector2`](../../server/interfaces/Vector2.md)\>

##### options?

[`IVector2PropertyItemOptions`](IVector2PropertyItemOptions.md)

#### Returns

[`IVector2PropertyItem`](IVector2PropertyItem.md)

#### Remarks

Adds a Vector2 item to the pane.

***

### addVector3()

> **addVector3**(`value`, `options?`): [`IVector3PropertyItem`](IVector3PropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<[`Vector3`](../../server/interfaces/Vector3.md)\>

##### options?

[`IVector3PropertyItemOptions`](IVector3PropertyItemOptions.md)

#### Returns

[`IVector3PropertyItem`](IVector3PropertyItem.md)

#### Remarks

Adds a Vector3 item to the pane.

***

### addVector3Timeline()

> **addVector3Timeline**(`value`, `options?`): [`IVector3TimelinePropertyItem`](IVector3TimelinePropertyItem.md)

#### Parameters

##### value

[`IObservableProp`](../type-aliases/IObservableProp.md)\<`number`\>

##### options?

[`IVector3TimelinePropertyItemOptions`](IVector3TimelinePropertyItemOptions.md)

#### Returns

[`IVector3TimelinePropertyItem`](IVector3TimelinePropertyItem.md)

#### Remarks

Adds a Vector3 Timeline item to the pane.

***

### beginConstruct()

> **beginConstruct**(): `void`

#### Returns

`void`

#### Remarks

Begins pane construction for batching property item
additions

***

### collapse()

> **collapse**(): `void`

#### Returns

`void`

#### Remarks

Collapse the pane.

***

### createSubPane()

> **createSubPane**(`options`): [`ISubPanePropertyItem`](ISubPanePropertyItem.md)

#### Parameters

##### options

[`ISubPanePropertyItemOptions`](ISubPanePropertyItemOptions.md)

#### Returns

[`ISubPanePropertyItem`](ISubPanePropertyItem.md)

#### Remarks

Creates an sub pane that can store property items.

***

### endConstruct()

> **endConstruct**(): `void`

#### Returns

`void`

#### Remarks

Finalizes pane construction and synchronizes item data

***

### expand()

> **expand**(): `void`

#### Returns

`void`

#### Remarks

Expand the pane.

***

### getTitle()

> **getTitle**(): [`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

#### Returns

[`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

#### Remarks

Returns pane title.

***

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the pane.

#### Inherited from

[`IPane`](IPane.md).[`hide`](IPane.md#hide)

***

### removeSubPane()

> **removeSubPane**(`paneToRemove`): `boolean`

#### Parameters

##### paneToRemove

`IPropertyPane`

#### Returns

`boolean`

#### Remarks

Removes an existing sub pane.

***

### setTitle()

> **setTitle**(`newTitle`): `void`

#### Parameters

##### newTitle

[`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

New title

#### Returns

`void`

#### Remarks

Updates title of pane.

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Show the pane and all of its items.

#### Inherited from

[`IPane`](IPane.md).[`show`](IPane.md#show)

***

### toggleSubPaneVisibility()

> **toggleSubPaneVisibility**(`subPaneId`): `void`

#### Parameters

##### subPaneId

`string` \| `undefined`

Identifier of the sub pane to display.

#### Returns

`void`

#### Remarks

Shows only the specified sub-pane, hiding all others
