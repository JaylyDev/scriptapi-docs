[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ISubPanePropertyItem

# Interface: ISubPanePropertyItem

A property item which supports Sub Pane properties

## Source

```ts
export interface ISubPanePropertyItem extends IPropertyItemBase, IPropertyPane {
    setAlignment(alignment: LayoutAlignment): void;
    setDirection(layout: PaneLayoutType): void;
}
```

## Extends

- [`IPropertyItemBase`](IPropertyItemBase.md).[`IPropertyPane`](IPropertyPane.md)

## Properties

### collapsed

> `readonly` **collapsed**: `boolean`

#### Remarks

Pane state for being expanded or collapsed.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`collapsed`](IPropertyPane.md#collapsed)

***

### enable

> **enable**: `boolean`

#### Remarks

If the item is enabled in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`enable`](IPropertyItemBase.md#enable)

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique ID for the property item.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`id`](IPropertyItemBase.md#id)

***

### onPropertyPaneVisibilityUpdated

> **onPropertyPaneVisibilityUpdated**: [`EventSink`](EventSink.md)\<[`PropertyPaneVisibilityUpdate`](../type-aliases/PropertyPaneVisibilityUpdate.md)\>

#### Remarks

Provides visibility change events

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`onPropertyPaneVisibilityUpdated`](IPropertyPane.md#onpropertypanevisibilityupdated)

***

### paneId

> `readonly` **paneId**: `string`

#### Remarks

The parent pane id.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`paneId`](IPropertyItemBase.md#paneid)

***

### typeName

> `readonly` **typeName**: [`PropertyItemType`](../enumerations/PropertyItemType.md)

#### Remarks

The type name of the target property.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`typeName`](IPropertyItemBase.md#typename)

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addBlockList`](IPropertyPane.md#addblocklist)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addBlockTable`](IPropertyPane.md#addblocktable)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addBool`](IPropertyPane.md#addbool)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addButton`](IPropertyPane.md#addbutton)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addButtonPane`](IPropertyPane.md#addbuttonpane)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addCollectionTree`](IPropertyPane.md#addcollectiontree)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addColorPicker`](IPropertyPane.md#addcolorpicker)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addColorTimeline`](IPropertyPane.md#addcolortimeline)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addComboBox`](IPropertyPane.md#addcombobox)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addDataTable`](IPropertyPane.md#adddatatable)

***

### addDivider()

> **addDivider**(): [`IPropertyItemBase`](IPropertyItemBase.md)

#### Returns

[`IPropertyItemBase`](IPropertyItemBase.md)

#### Remarks

Adds an divider item to the pane.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addDivider`](IPropertyPane.md#adddivider)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addDropdown`](IPropertyPane.md#adddropdown)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addImage`](IPropertyPane.md#addimage)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addLink`](IPropertyPane.md#addlink)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addListPane`](IPropertyPane.md#addlistpane)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addMenu`](IPropertyPane.md#addmenu)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addMinimap`](IPropertyPane.md#addminimap)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addNumber`](IPropertyPane.md#addnumber)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addNumberTimeline`](IPropertyPane.md#addnumbertimeline)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addProgressIndicator`](IPropertyPane.md#addprogressindicator)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addProxyPane`](IPropertyPane.md#addproxypane)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addString`](IPropertyPane.md#addstring)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addTagContainer`](IPropertyPane.md#addtagcontainer)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addText`](IPropertyPane.md#addtext)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addToggleGroup`](IPropertyPane.md#addtogglegroup)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addVector2`](IPropertyPane.md#addvector2)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addVector3`](IPropertyPane.md#addvector3)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`addVector3Timeline`](IPropertyPane.md#addvector3timeline)

***

### beginConstruct()

> **beginConstruct**(): `void`

#### Returns

`void`

#### Remarks

Begins pane construction for batching property item
additions

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`beginConstruct`](IPropertyPane.md#beginconstruct)

***

### collapse()

> **collapse**(): `void`

#### Returns

`void`

#### Remarks

Collapse the pane.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`collapse`](IPropertyPane.md#collapse)

***

### createSubPane()

> **createSubPane**(`options`): `ISubPanePropertyItem`

#### Parameters

##### options

[`ISubPanePropertyItemOptions`](ISubPanePropertyItemOptions.md)

#### Returns

`ISubPanePropertyItem`

#### Remarks

Creates an sub pane that can store property items.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`createSubPane`](IPropertyPane.md#createsubpane)

***

### endConstruct()

> **endConstruct**(): `void`

#### Returns

`void`

#### Remarks

Finalizes pane construction and synchronizes item data

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`endConstruct`](IPropertyPane.md#endconstruct)

***

### expand()

> **expand**(): `void`

#### Returns

`void`

#### Remarks

Expand the pane.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`expand`](IPropertyPane.md#expand)

***

### getTitle()

> **getTitle**(): [`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

#### Returns

[`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

#### Remarks

Returns pane title.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`getTitle`](IPropertyPane.md#gettitle)

***

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the pane.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`hide`](IPropertyPane.md#hide)

***

### removeSubPane()

> **removeSubPane**(`paneToRemove`): `boolean`

#### Parameters

##### paneToRemove

[`IPropertyPane`](IPropertyPane.md)

#### Returns

`boolean`

#### Remarks

Removes an existing sub pane.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`removeSubPane`](IPropertyPane.md#removesubpane)

***

### setAlignment()

> **setAlignment**(`alignment`): `void`

#### Parameters

##### alignment

[`LayoutAlignment`](../enumerations/LayoutAlignment.md)

New layout alignment.

#### Returns

`void`

#### Remarks

Updates layout alignment of the sub pane.

***

### setDirection()

> **setDirection**(`layout`): `void`

#### Parameters

##### layout

[`PaneLayoutType`](../enumerations/PaneLayoutType.md)

#### Returns

`void`

#### Remarks

Updates layout direction of the sub pane.

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`setTitle`](IPropertyPane.md#settitle)

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Show the pane and all of its items.

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`show`](IPropertyPane.md#show)

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

#### Inherited from

[`IPropertyPane`](IPropertyPane.md).[`toggleSubPaneVisibility`](IPropertyPane.md#togglesubpanevisibility)
