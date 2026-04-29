[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / CompoundBlockVolume

# Class: CompoundBlockVolume

**`Beta`**

The Compound Block Volume is a collection of individual
block volume definitions which, as a collection, define a
larger volume of (sometimes non-contiguous) irregular
shapes.
This class is loosely based on the concept of CSG
(Computational Solid Geometry) and allows a user to create
complex volumes by building a stack of volumes and voids to
make a larger single volume.
For example - normally a creator would create a hollow cube
by creating 6 "wall" surfaces for each face.
With a Compound Block Volume, a creator can define a hollow
cube by creating a single outer solid cube, and then
defining a further single 'void' cube inside the larger one.
Similarly, the Compound Block Volume can represent irregular
shaped volumes (e.g. a tree consists of a trunk and lots of
leaf cubes which are not necessarily contiguously placed).
Each of the volumes added to the CompoundBlockVolume are (by
default) relative to the origin set (either at construction
or via one of the set functions).
However, it is also possible to push volumes to the compound
collection which are absolute in nature and are not affected
by origin changes.

## Example

```ts
import { CompoundBlockVolume, BlockVolume, Vector3, CompoundBlockVolumeItem } from "@minecraft/server";

// Create a compound block volume that combines multiple volumes
const compoundVolume = new CompoundBlockVolume();

// Create some individual block volumes
const volume1 = new BlockVolume({ x: 0, y: 64, z: 0 }, { x: 5, y: 69, z: 5 });
const volume2 = new BlockVolume({ x: 10, y: 64, z: 10 }, { x: 15, y: 69, z: 15 });
const volume3 = new BlockVolume({ x: 2, y: 66, z: 2 }, { x: 7, y: 71, z: 7 });

// Create compound volume items
const item1: CompoundBlockVolumeItem = { volume: volume1 };
const item2: CompoundBlockVolumeItem = { volume: volume2 };
const item3: CompoundBlockVolumeItem = { volume: volume3 };

// Add volumes to the compound volume
compoundVolume.pushVolume(item1);
compoundVolume.pushVolume(item2);
compoundVolume.pushVolume(item3);

// Get the total capacity
const totalCapacity = compoundVolume.capacity;
console.log(`Compound volume total capacity: ${totalCapacity} blocks`);

// Check if the compound volume is empty
const isEmpty = compoundVolume.isEmpty;
console.log(`Compound volume is ${isEmpty ? "empty" : "not empty"}`);

// Get the maximum bounding box
const boundingBox = compoundVolume.getBoundingBox();
console.log(
   `Bounding box from (${boundingBox.min.x}, ${boundingBox.min.y}, ${boundingBox.min.z}) to (${boundingBox.max.x}, ${boundingBox.max.y}, ${boundingBox.max.z})`
);

// Iterate through all block locations
const iterator = compoundVolume.getBlockLocationIterator();
let count = 0;
for (const location of iterator) {
   count++;
   if (count <= 3) {
       console.log(`Block ${count}: (${location.x}, ${location.y}, ${location.z})`);
   }
}
```

## Source

```ts
export class CompoundBlockVolume {
    readonly capacity: number;
    readonly items: CompoundBlockVolumeItem[];
    readonly itemsAbsolute: CompoundBlockVolumeItem[];
    readonly volumeCount: number;
    constructor(origin?: Vector3);
    clear(): void;
    getBlockLocationIterator(): BlockLocationIterator;
    getBoundingBox(): BlockBoundingBox;
    getMax(): Vector3;
    getMin(): Vector3;
    getOrigin(): Vector3;
    isEmpty(): boolean;
    isInside(worldLocation: Vector3): boolean;
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    popVolume(): boolean;
    pushVolume(item: CompoundBlockVolumeItem): void;
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}
```

## Constructors

### Constructor

> **new CompoundBlockVolume**(`origin?`): `CompoundBlockVolume`

#### Parameters

##### origin?

[`Vector3`](../interfaces/Vector3-1.md)

An optional world space origin on which to center the
compound volume.
If not specified, the origin is set to (0,0,0)

#### Returns

`CompoundBlockVolume`

#### Remarks

Create a CompoundBlockVolume object

## Properties

### capacity

> `readonly` **capacity**: `number`

#### Remarks

Return the 'capacity' of the bounding rectangle which
represents the collection of volumes in the stack

#### World Ready

This property can't be read in early-execution mode.

***

### items

> `readonly` **items**: [`CompoundBlockVolumeItem`](../interfaces/CompoundBlockVolumeItem.md)[]

***

### itemsAbsolute

> `readonly` **itemsAbsolute**: [`CompoundBlockVolumeItem`](../interfaces/CompoundBlockVolumeItem.md)[]

***

### volumeCount

> `readonly` **volumeCount**: `number`

#### Remarks

Return the number of volumes (positive and negative) in the
volume stack

#### World Ready

This property can't be read in early-execution mode.

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Remarks

Clear the contents of the volume stack

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockLocationIterator()

> **getBlockLocationIterator**(): [`BlockLocationIterator`](BlockLocationIterator-1.md)

#### Returns

[`BlockLocationIterator`](BlockLocationIterator-1.md)

#### Remarks

Fetch a Block Location Iterator for the Compound Block
Volume.  This iterator will allow a creator to iterate
across all of the selected volumes within the larger
bounding area.
Areas of a volume which have been overridden by a
subtractive volume will not be included in the iterator
step.
(i.e. if you push a cube to the stack, and then push a
subtractive volume to the same location, then the iterator
will step over the initial volume because it is considered
negative space)
Note that the Block Locations returned by this iterator are
in absolute world space (irrespective of whether the
compound volume items pushed are absolute or relative)

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getBoundingBox()

> **getBoundingBox**(): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Remarks

Get the largest bounding box that represents a container for
all of the volumes on the stack
Note that the bounding box returned is represented in
absolute world space  (irrespective of whether the compound
volume items pushed are absolute or relative)

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getMax()

> **getMax**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Get the max block location of the outermost bounding
rectangle which represents the volumes on the stack.
Note that the max location returned is in absolute world
space (irrespective of whether the compound volume items
pushed are absolute or relative)

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getMin()

> **getMin**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Get the min block location of the outermost bounding
rectangle which represents the volumes on the stack.
Note that the min location returned is in absolute world
space (irrespective of whether the compound volume items
pushed are absolute or relative)

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getOrigin()

> **getOrigin**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Fetch the origin in world space of the compound volume

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### isEmpty()

> **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Remarks

Return a boolean which signals if there are any volume items
pushed to the volume

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### isInside()

> **isInside**(`worldLocation`): `boolean`

#### Parameters

##### worldLocation

[`Vector3`](../interfaces/Vector3-1.md)

#### Returns

`boolean`

#### Remarks

Return a boolean representing whether or not a given
absolute world space block location is inside a positive
block volume.
E.g. if the stack contains a large cube followed by a
slightly smaller negative cube, and the test location is
within the negative cube - the function will return false
because it's not 'inside' a volume (it IS inside the
bounding rectangle, but it is not inside a positively
defined location)

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### peekLastVolume()

> **peekLastVolume**(`forceRelativity?`): [`CompoundBlockVolumeItem`](../interfaces/CompoundBlockVolumeItem.md) \| `undefined`

#### Parameters

##### forceRelativity?

[`CompoundBlockVolumePositionRelativity`](../enumerations/CompoundBlockVolumePositionRelativity.md)

Determine whether the function returns a
CompoundBlockVolumeItem which is forced into either relative
or absolute coordinate system.
`true` = force returned item to be relative to volume origin
`false` = force returned item to be absolute world space
location

If no flag is specified, the item returned retains whatever
relativity it had when it was pushed

#### Returns

[`CompoundBlockVolumeItem`](../interfaces/CompoundBlockVolumeItem.md) \| `undefined`

Returns undefined if the stack is empty

#### Remarks

Inspect the last entry pushed to the volume stack without
affecting the stack contents.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### popVolume()

> **popVolume**(): `boolean`

#### Returns

`boolean`

#### Remarks

Remove the last entry from the volume stack.  This will
reduce the stack size by one

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### pushVolume()

> **pushVolume**(`item`): `void`

#### Parameters

##### item

[`CompoundBlockVolumeItem`](../interfaces/CompoundBlockVolumeItem.md)

Item to push to the end of the stack

#### Returns

`void`

#### Remarks

Push a volume item to the stack.  The volume item contains
an 'action' parameter which determines whether this volume
is a positive or negative space.
The item also contains a `locationRelativity` which
determines whether it is relative or absolute to the
compound volume origin

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### replaceOrAddLastVolume()

> **replaceOrAddLastVolume**(`item`): `boolean`

#### Parameters

##### item

[`CompoundBlockVolumeItem`](../interfaces/CompoundBlockVolumeItem.md)

Item to add or replace

#### Returns

`boolean`

#### Remarks

If the volume stack is empty, this function will push the
specified item to the stack.
If the volume stack is NOT empty, this function will replace
the last item on the stack with the new item.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setOrigin()

> **setOrigin**(`position`, `preserveExistingVolumes?`): `void`

#### Parameters

##### position

[`Vector3`](../interfaces/Vector3-1.md)

##### preserveExistingVolumes?

`boolean`

This optional boolean flag determines whether the relative
`CompoundBlockVolumeItem`'s are frozen in place, or are
affected by the new origin.
Imagine a scenario where you have a series of relative
locations around an origin which make up a sphere; all of
these locations are in the range of -2 to 2.
Push each of these locations to the compound volume as
relative items.
Now, move the origin and all of the locations representing
the sphere move accordingly.
However, let's say you want to add a 2nd sphere next to the
1st.
In this case, set the new origin a few locations over, but
'preserveExistingVolumes' = true.
This will set a new origin, but the existing sphere
locations will remain relative to the original origin.
Now, you can push the relative sphere locations again (this
time they will be relative to the new origin) - resulting in
2 spheres next to each other.

#### Returns

`void`

#### Remarks

Set the origin of the compound volume to an absolute world
space location

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### translateOrigin()

> **translateOrigin**(`delta`, `preserveExistingVolumes?`): `void`

#### Parameters

##### delta

[`Vector3`](../interfaces/Vector3-1.md)

##### preserveExistingVolumes?

`boolean`

See the description for the arguments to [CompoundBlockVolume.setOrigin](#setorigin)

#### Returns

`void`

#### Remarks

Similar to [CompoundBlockVolume.setOrigin](#setorigin) - this
function will translate the origin by a given delta to a new
position

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
