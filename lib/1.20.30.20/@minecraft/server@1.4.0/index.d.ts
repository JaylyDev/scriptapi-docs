// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "1.6.0-internal.1.20.30-preview.20"
 * }
 * ```
 *
 */
/**
 * @beta
 * A general purpose relative direction enumeration.
 */
export enum Direction {
    /**
     * @beta
     * @remarks
     * Returns the block beneath (y - 1) of this item.
     *
     */
    Down = 'Down',
    /**
     * @beta
     * @remarks
     * Returns the block to the east (x + 1) of this item.
     *
     */
    East = 'East',
    /**
     * @beta
     * @remarks
     * Returns the block to the east (z + 1) of this item.
     *
     */
    North = 'North',
    /**
     * @beta
     * @remarks
     * Returns the block to the south (z - 1) of this item.
     *
     */
    South = 'South',
    /**
     * @beta
     * @remarks
     * Returns the block above (y + 1) of this item.
     *
     */
    Up = 'Up',
    /**
     * @beta
     * @remarks
     * Returns the block to the west (x - 1) of this item.
     *
     */
    West = 'West',
}

/**
 * @beta
 */
export enum DisplaySlotId {
    BelowName = 'BelowName',
    List = 'List',
    Sidebar = 'Sidebar',
}

/**
 * @beta
 */
export enum EntityDamageCause {
    anvil = 'anvil',
    blockExplosion = 'blockExplosion',
    charging = 'charging',
    contact = 'contact',
    drowning = 'drowning',
    entityAttack = 'entityAttack',
    entityExplosion = 'entityExplosion',
    fall = 'fall',
    fallingBlock = 'fallingBlock',
    fire = 'fire',
    fireTick = 'fireTick',
    fireworks = 'fireworks',
    flyIntoWall = 'flyIntoWall',
    freezing = 'freezing',
    lava = 'lava',
    lightning = 'lightning',
    magic = 'magic',
    magma = 'magma',
    none = 'none',
    override = 'override',
    piston = 'piston',
    projectile = 'projectile',
    stalactite = 'stalactite',
    stalagmite = 'stalagmite',
    starve = 'starve',
    suffocation = 'suffocation',
    suicide = 'suicide',
    temperature = 'temperature',
    thorns = 'thorns',
    'void' = 'void',
    wither = 'wither',
}

/**
 * @beta
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * @beta
     * @remarks
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     *
     */
    adventure = 'adventure',
    /**
     * @beta
     * @remarks
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     *
     */
    creative = 'creative',
    /**
     * @beta
     * @remarks
     * World is in spectator mode. In spectator mode, spectators
     * are always flying and cannot become grounded. Spectators can
     * pass through solid blocks and entities without any
     * collisions, and cannot use items or interact with blocks or
     * mobs. Spectators cannot be seen by mobs or other players,
     * except for other spectators; spectators appear as a
     * transparent floating head.
     *
     */
    spectator = 'spectator',
    /**
     * @beta
     * @remarks
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     *
     */
    survival = 'survival',
}

/**
 * @beta
 * Describes how an an item can be moved within a container.
 */
export enum ItemLockMode {
    /**
     * @beta
     * @remarks
     * The item cannot be dropped or crafted with.
     *
     */
    inventory = 'inventory',
    /**
     * @beta
     * @remarks
     * The item has no container restrictions.
     *
     */
    none = 'none',
    /**
     * @beta
     * @remarks
     * The item cannot be moved from its slot, dropped or crafted
     * with.
     *
     */
    slot = 'slot',
}

/**
 * @beta
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 */
export enum ObjectiveSortOrder {
    /**
     * @beta
     * @remarks
     * Objective participant list is displayed in ascending (e.g.,
     * A-Z) order.
     *
     */
    Ascending = 0,
    /**
     * @beta
     * @remarks
     * Objective participant list is displayed in descending (e.g.,
     * Z-A) order.
     *
     */
    Descending = 1,
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to an entity.
     *
     */
    Entity = 'Entity',
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     *
     */
    FakePlayer = 'FakePlayer',
    /**
     * @beta
     * @remarks
     * This scoreboard participant is tied to a player.
     *
     */
    Player = 'Player',
}

/**
 * @beta
 * Describes where the script event originated from.
 */
export enum ScriptEventSource {
    /**
     * @beta
     * @remarks
     * The script event originated from a Block such as a Command
     * Block.
     *
     */
    Block = 'Block',
    /**
     * @beta
     * @remarks
     * The script event originated from an Entity such as a Player,
     * Command Block Minecart or Animation Controller.
     *
     */
    Entity = 'Entity',
    /**
     * @beta
     * @remarks
     * The script event originated from an NPC dialogue.
     *
     */
    NPCDialogue = 'NPCDialogue',
    /**
     * @beta
     * @remarks
     * The script event originated from the server, such as from a
     * runCommand API call or a dedicated server console.
     *
     */
    Server = 'Server',
}

/**
 * @beta
 * Provides numeric values for common periods in the Minecraft
 * day.
 */
export enum TimeOfDay {
    Day = 1000,
    Noon = 6000,
    Sunset = 12000,
    Night = 13000,
    Midnight = 18000,
    Sunrise = 23000,
}

/**
 * @beta
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
    private constructor();
    /**
     * @remarks
     * Returns the dimension that the block is within.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Coordinates of the specified block.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Additional block configuration data that describes the
     * block.
     *
     * @throws This property can throw when used.
     */
    readonly permutation: BlockPermutation;
    /**
     * @remarks
     * X coordinate of the block.
     *
     */
    readonly x: number;
    /**
     * @remarks
     * Y coordinate of the block.
     *
     */
    readonly y: number;
    /**
     * @remarks
     * Z coordinate of the block.
     *
     */
    readonly z: number;
    /**
     * @beta
     * @remarks
     * Gets additional configuration properties (a component) for
     * specific capabilities of particular blocks - for example, an
     * inventory component of a chest block.
     *
     * @param componentName
     * Identifier of the component. If a namespace is not
     * specified, minecraft: is assumed.
     * @returns
     * Returns the component object if it is present on the
     * particular block.
     * @throws This function can throw errors.
     * @example getBlockInventoryComponent.js
     * ```js
     * const getEntityInventoryComponent = block.getComponent("inventory");
     * const inventoryContainer = getEntityInventoryComponent.container;
     *
     * // Custom function to add an item to the inventory
     * function addItemToInventory(itemStack) {
     *     return inventoryContainer.addItem(itemStack);
     * }
     *
     * // Custom function to move an item within the inventory
     * function moveItemWithinInventory(fromSlot, toSlot) {
     *     inventoryContainer.moveItem(fromSlot, toSlot, inventoryContainer);
     * }
     *
     * // Custom function to transfer an item from inventory to another container
     * function transferItemToContainer(fromSlot, targetContainer) {
     *     return inventoryContainer.transferItem(fromSlot, targetContainer);
     * }
     *
     * // Example usage of the custom functions
     * const newItemStack = new ItemStack("apple", 10); // Assuming "apple" is a valid item
     * const addedItem = addItemToInventory(newItemStack);
     * if (addedItem) {
     *     console.log("Item added to inventory:", addedItem);
     * }
     *
     * const sourceSlot = 2;
     * const destinationSlot = 5;
     * moveItemWithinInventory(sourceSlot, destinationSlot);
     *
     * const targetContainer = someOtherContainer; // Assuming 'someOtherContainer' is an instance of another container
     * const transferredItem = transferItemToContainer(0, targetContainer);
     * if (transferredItem) {
     *     console.log("Item transferred to another container:", transferredItem);
     * }
     * ```
     */
    getComponent(componentName: string): BlockComponent | undefined;
    /**
     * @beta
     * @remarks
     * Returns true if this reference to a block is still valid
     * (for example, if the block is unloaded, references to that
     * block will no longer be valid.)
     *
     * @returns
     * True if this block object is still working and valid.
     */
    isValid(): boolean;
    /**
     * @remarks
     * Sets the block in the dimension to the state of the
     * permutation.
     *
     * This function can't be called in read-only mode.
     *
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @throws This function can throw errors.
     */
    setPermutation(permutation: BlockPermutation): void;
}

/**
 * @beta
 * Base type for components associated with blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @beta
     * @remarks
     * Block instance that this component pertains to.
     *
     */
    readonly block: Block;
}

/**
 * @beta
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * Block impacted by this event.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * Dimension that contains the block that is the subject of
     * this event.
     *
     */
    readonly dimension: Dimension;
}

/**
 * @beta
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * The container which holds an {@link ItemStack}.
     *
     * @throws This property can throw when used.
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * @beta
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}).
 */
export class BlockPermutation {
    private constructor();
    /**
     * @remarks
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * @param blockName
     * An optional set of states to compare against.
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * @param blockName
     * Identifier of the block to check.
     * @throws This function can throw errors.
     * @example addBlockColorCube.ts
     * ```typescript
     *   const allColorNames: string[] = [
     *     "white",
     *     "orange",
     *     "magenta",
     *     "light_blue",
     *     "yellow",
     *     "lime",
     *     "pink",
     *     "gray",
     *     "silver",
     *     "cyan",
     *     "purple",
     *     "blue",
     *     "brown",
     *     "green",
     *     "red",
     *     "black",
     *   ];
     *
     *   const cubeDim = 7;
     *
     *   let colorIndex = 0;
     *
     *   for (let x = 0; x <= cubeDim; x++) {
     *     for (let y = 0; y <= cubeDim; y++) {
     *       for (let z = 0; z <= cubeDim; z++) {
     *         colorIndex++;
     *         overworld
     *           .getBlock({ x: targetLocation.x + x, y: targetLocation.y + y, z: targetLocation.z + z })
     *           ?.setPermutation(
     *             mc.BlockPermutation.resolve("minecraft:wool", {
     *               color: allColorNames[colorIndex % allColorNames.length],
     *             })
     *           );
     *       }
     *     }
     *   }
     * ```
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

/**
 * @beta
 * Contains information related to changes to a button push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Optional source that triggered the button push.
     *
     */
    readonly source: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when a button is
 * pushed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    private constructor();
}

/**
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     *
     */
    readonly successCount: number;
}

/**
 * @beta
 * Base class for downstream Component implementations.
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * Identifier of the component.
     *
     */
    readonly typeId: string;
    /**
     * @beta
     * @remarks
     * Returns whether the component is valid. A component is
     * considered valid if its owner is valid, in addition to any
     * addition to any additional validation required by the
     * component.
     *
     * @returns
     * Whether the component is valid.
     */
    isValid(): boolean;
}

/**
 * @beta
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 */
export class Container {
    private constructor();
    /**
     * @remarks
     * Count of the slots in the container that are empty.
     *
     * @throws
     * Throws if the container is invalid.
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * The number of slots in this container. For example, a
     * standard single-block chest has a size of 27. Note, a
     * player's inventory container contains a total of 36 slots, 9
     * hotbar slots plus 27 inventory slots.
     *
     * @throws
     * Throws if the container is invalid.
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the container. The item is placed in the
     * first available slot(s) and can be stacked with existing
     * items of the same type. Note, use {@link Container.setItem}
     * if you wish to set the item in a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     * @example add_diamond_sword.ts
     * ```ts
     * import {
     *     EntityInventoryComponent,
     *     ItemStack,
     *     MinecraftItemTypes,
     *     world,
     * } from "@minecraft/server";
     * for (const player of world.getAllPlayers()) {
     *     const inventory = player.getComponent(
     *         "inventory"
     *     ) as EntityInventoryComponent;
     *     const item = new ItemStack(MinecraftItemTypes.diamondSword, 10);
     *     inventory.container.addItem(item);
     * }
     * ```
     */
    addItem(itemStack: ItemStack): ItemStack;
    /**
     * @remarks
     * Clears all inventory items in the container.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the container is invalid.
     */
    clearAll(): void;
    /**
     * @remarks
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To
     * get a reference to a particular slot, see {@link
     * Container.getSlot}.
     *
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @example getItem.ts
     * ```typescript
     * // Get a copy of the first item in the player's hotbar
     * const inventory = player.getComponent("inventory") as EntityInventoryComponent;
     * const itemStack = inventory.container.getItem(0);
     * ```
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @beta
     * @remarks
     * Returns whether a container object (or the entity or block
     * that this container is associated with) is still available
     * for use in this context.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toSlot
     * Zero-based index of the slot to transfer an item to, on
     * `toContainer`.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example moveItem.ts
     * ```typescript
     * // Move an item from the first slot of fromPlayer's inventory to the fifth slot of toPlayer's inventory
     * const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     * fromInventory.container.moveItem(0, 4, toInventory.container);
     * ```
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @example set_mainhand.ts
     * ```ts
     * import {
     *     EntityInventoryComponent,
     *     ItemStack,
     *     MinecraftItemTypes,
     *     world,
     * } from "@minecraft/server";
     * for (const player of world.getAllPlayers()) {
     *     const inventory = player.getComponent(
     *         "inventory"
     *     ) as EntityInventoryComponent;
     *     const item = new ItemStack(MinecraftItemTypes.diamondSword, 10);
     *     inventory.container.setItem(0, item);
     * }
     * ```
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws
     * Throws if either this container or `otherContainer` are
     * invalid or if the `slot` or `otherSlot` are out of bounds.
     * @example swapItems.ts
     * ```typescript
     * // Swaps an item between slots 0 and 4 in the player's inventory
     * const inventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * inventory.container.swapItems(0, 4, inventory);
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example transferItem.ts
     * ```typescript
     * // Transfer an item from the first slot of fromPlayer's inventory to toPlayer's inventory
     * const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     * const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     * fromInventory.container.transferItem(0, toInventory.container);
     * ```
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack;
}

/**
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
    private constructor();
    /**
     * @remarks
     * Identifier of the dimension.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Returns a block instance at the given location.
     *
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location, or 'undefined' if asking
     * for a block at an unloaded chunk.
     * @throws
     * PositionInUnloadedChunkError: Exception thrown when trying
     * to interact with a Block object that isn't in a loaded and
     * ticking chunk anymore
     *
     * PositionOutOfWorldBoundariesError: Exception thrown when
     * trying to interact with a position outside of dimension
     * height range
     *
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @beta
     * @remarks
     * Gets the first block that intersects with a vector emanating
     * from a location.
     *
     * @param location
     * Location from where to initiate the ray check.
     * @param direction
     * Vector direction to cast the ray.
     * @param options
     * Additional options for processing this raycast query.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @beta
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * entities returned.
     * @returns
     * An entity array.
     * @throws This function can throw errors.
     * @example bounceSkeletons.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     overworld.spawnEntity(mobs[i % mobs.length], targetLocation);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     type: "skeleton",
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.applyKnockback(0, 0, 0, 1);
     *   }
     * ```
     * @example tagsQuery.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     let mobTypeId = mobs[i % mobs.length];
     *     let entity = overworld.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag("mobparty." + mobTypeId);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     tags: ["mobparty.skeleton"],
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * ```
     * @example testThatEntityIsFeatherItem.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   const items = overworld.getEntities({
     *     location: targetLocation,
     *     maxDistance: 20,
     *   });
     *
     *   for (const item of items) {
     *     const itemComp = item.getComponent("item") as mc.EntityItemComponent;
     *
     *     if (itemComp) {
     *       if (itemComp.itemStack.typeId.endsWith("feather")) {
     *         log("Success! Found a feather", 1);
     *       }
     *     }
     *   }
     * ```
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @beta
     * @remarks
     * Returns a set of entities at a particular location.
     *
     * @param location
     * The location at which to return entities.
     * @returns
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @beta
     * @remarks
     * Gets entities that intersect with a specified vector
     * emanating from a location.
     *
     * @param options
     * Additional options for processing this raycast query.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @beta
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * Runs a command synchronously using the context of the
     * broader dimenion.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * Returns a command result with a count of successful values
     * from the command.
     * @throws
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * the broader dimension.  Note that there is a maximum queue
     * of 128 asynchronous commands that can be run in a given
     * tick.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Creates a new entity (e.g., a mob) at the specified
     * location.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * Identifier of the type of entity to spawn. If no namespace
     * is specified, 'minecraft:' is assumed.
     * @param location
     * The location at which to create the entity.
     * @returns
     * Newly created entity at the specified location.
     * @throws This function can throw errors.
     * @example createOldHorse.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   log("Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult");
     *   overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   const fox = overworld.spawnEntity("minecraft:fox", {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *
     *   fox.addEffect("speed", 10, {
     *     amplifier: 2,
     *   });
     *   log("Created a fox.");
     *
     *   const wolf = overworld.spawnEntity("minecraft:wolf", {
     *     x: targetLocation.x + 4,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *   wolf.addEffect("slowness", 10, {
     *     amplifier: 2,
     *   });
     *   wolf.isSneaking = true;
     *   log("Created a sneaking wolf.", 1);
     * ```
     * @example triggerEvent.ts
     * ```typescript
     *   const creeper = overworld.spawnEntity("minecraft:creeper", targetLocation);
     *
     *   creeper.triggerEvent("minecraft:start_exploding_forced");
     * ```
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to create the item stack.
     * @returns
     * Newly created item stack entity at the specified location.
     * @throws This function can throw errors.
     * @example itemStacks.ts
     * ```typescript
     * const overworld = mc.world.getDimension('overworld');
     *
     * const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
     * const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
     * const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };
     *
     * const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.Emerald, 1);
     * const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.DiamondPickaxe, 1);
     * const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.Emerald, 5);
     *
     * log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
     * overworld.spawnItem(oneEmerald, oneItemLoc);
     *
     * log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
     * overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
     *
     * log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
     * overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
     * ```
     * @example spawnItem.ts
     * ```typescript
     * const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.Feather, 1);
     *
     * overworld.spawnItem(featherItem, targetLocation);
     * log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
     * ```
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
}

/**
 * @beta
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     *
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Gets the player-friendly name of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * Gets the entire specified duration, in ticks, of this
     * effect. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the type id of this effect.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @remarks
     * Returns whether an effect instance is available for use in
     * this context.
     *
     */
    isValid(): boolean;
}

/**
 * @beta
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
    private constructor();
    /**
     * @remarks
     * Identifier name of this effect type.
     *
     * @returns
     * Identifier of the effect type.
     */
    getName(): string;
}

/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    private constructor();
    /**
     * @beta
     * @remarks
     * Dimension that the entity is currently within.
     *
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it. This
     * property is accessible even if {@link Entity.isValid} is
     * false.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Current location of the entity.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @beta
     * @remarks
     * Given name of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    nameTag: string;
    /**
     * @beta
     * @remarks
     * Returns a scoreboard identity that represents this entity.
     *
     * @throws This property can throw when used.
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @remarks
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @beta
     * @remarks
     * Adds or updates an effect, like poison, to the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply. There are
     * 20 ticks per second. Use {@link TicksPerSecond} constant to
     * convert between ticks and seconds. The value must be within
     * the range [0, 20000000].
     * @param options
     * Additional options for the effect.
     * @returns
     * Returns nothing if the effect was added or updated
     * successfully. This can throw an error if the duration or
     * amplifier are outside of the valid ranges, or if the effect
     * does not exist.
     * @throws This function can throw errors.
     * @example addEffect.js
     * ```typescript
     * const villagerId = 'minecraft:villager_v2<minecraft:ageable_grow_up>';
     * const villagerLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     * const villager = test.spawn(villagerId, villagerLoc);
     * const duration = 20;
     *
     * villager.addEffect(EffectTypes.get('poison'), duration, { amplifier: 1 });
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   const fox = overworld.spawnEntity("minecraft:fox", {
     *     x: targetLocation.x + 1,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *
     *   fox.addEffect("speed", 10, {
     *     amplifier: 2,
     *   });
     *   log("Created a fox.");
     *
     *   const wolf = overworld.spawnEntity("minecraft:wolf", {
     *     x: targetLocation.x + 4,
     *     y: targetLocation.y + 2,
     *     z: targetLocation.z + 3,
     *   });
     *   wolf.addEffect("slowness", 10, {
     *     amplifier: 2,
     *   });
     *   wolf.isSneaking = true;
     *   log("Created a sneaking wolf.", 1);
     * ```
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void;
    /**
     * @beta
     * @remarks
     * Adds a specified tag to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to add. The tag must be less than 256
     * characters.
     * @returns
     * Returns true if the tag was added successfully. This can
     * fail if the tag already exists on the entity.
     * @throws This function can throw errors.
     * @example tagsQuery.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     let mobTypeId = mobs[i % mobs.length];
     *     let entity = overworld.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag("mobparty." + mobTypeId);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     tags: ["mobparty.skeleton"],
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * ```
     */
    addTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Applies a set of damage to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount of damage to apply.
     * @param options
     * Additional options about the source of damage, which may add
     * additional effects or spur additional behaviors on this
     * entity.
     * @returns
     * Whether the entity takes any damage. This can return false
     * if the entity is invulnerable or if the damage applied is
     * less than or equal to 0.
     * @throws This function can throw errors.
     * @example applyDamageThenHeal.ts
     * ```typescript
     *   const skelly = overworld.spawnEntity("minecraft:skeleton", targetLocation);
     *
     *   skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton
     *
     *   mc.system.runTimeout(() => {
     *     let health = skelly.getComponent("health") as mc.EntityHealthComponent;
     *     log("Skeleton health before heal: " + health.currentValue);
     *     health.resetToMaxValue();
     *     log("Skeleton health after heal: " + health.currentValue);
     *   }, 20);
     * ```
     * @example damageEntity.js
     * ```js
     * const damageApplied = entity.applyDamage(10);
     * console.log(`Damage applied: ${damageApplied}`);
     * ```
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @beta
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param vector
     * Impulse vector.
     * @throws This function can throw errors.
     * @example applyImpulse.ts
     * ```typescript
     *   const zombie = overworld.spawnEntity("minecraft:zombie", targetLocation);
     *
     *   zombie.clearVelocity();
     *
     *   // throw the zombie up in the air
     *   zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * ```
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @beta
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param directionX
     * X direction in horizontal plane.
     * @param directionZ
     * Z direction in horizontal plane.
     * @param horizontalStrength
     * Knockback strength for the horizontal vector.
     * @param verticalStrength
     * Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     * @example bounceSkeletons.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     overworld.spawnEntity(mobs[i % mobs.length], targetLocation);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     type: "skeleton",
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.applyKnockback(0, 0, 0, 1);
     *   }
     * ```
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /**
     * @beta
     * @remarks
     * Sets the current velocity of the Entity to zero. Note that
     * this method may not have an impact on Players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example applyImpulse.ts
     * ```typescript
     *   const zombie = overworld.spawnEntity("minecraft:zombie", targetLocation);
     *
     *   zombie.clearVelocity();
     *
     *   // throw the zombie up in the air
     *   zombie.applyImpulse({ x: 0, y: 0.5, z: 0 });
     * ```
     */
    clearVelocity(): void;
    /**
     * @beta
     * @remarks
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     * @throws This function can throw errors.
     * @example facingBlock.js
     * ```js
     * const blockHit = entity.getBlockFromViewDirection();
     *
     * if (blockHit) {
     *     console.log("Block Hit:");
     *     console.log("Block:", blockHit.block);
     *     console.log("Face:", blockHit.face);
     *     console.log("Face Location:", JSON.stringify(blockHit.faceLocation));
     * } else {
     *     console.log("No block in view direction.");
     * }
     * ```
     * @example setBedrock.js
     * ```js
     * import { BlockPermutation, world } from "@minecraft/server";
     *
     * const entity = world
     *     .getDimension("overworld")
     *     .spawnEntity("minecraft:fox", { x: 0, y: 0, z: 0 });
     * const blockHit = entity.getBlockFromViewDirection();
     *
     * if (blockHit) {
     *     blockHit.block.setPermutation(
     *         BlockPermutation.resolve("minecraft:bedrock")
     *     );
     * } else {
     *     console.log("No block in view direction.");
     * }
     * ```
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @beta
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     * @returns
     * Returns the component if it exists on the entity, otherwise
     * undefined.
     * @example getAddRiderComponent.js
     * ```js
     * const getAddRiderComponent = entity.getComponent("addrider");
     * getAddRiderComponent.entityType;
     * getAddRiderComponent.spawnEvent;
     * ```
     * @example getAgeableComponent.js
     * ```js
     * const getAgeableComponent = entity.getComponent("ageable");
     * getAgeableComponent.duration;
     * const growUp = getAgeableComponent.growUp;
     * getAgeableComponent.getDropItems();
     * getAgeableComponent.getFeedItems();
     * ```
     * @example getBreathableComponent.js
     * ```js
     * const getBreathableComponent = entity.getComponent("breathable");
     * getBreathableComponent.breathesAir;
     * getBreathableComponent.breathesLava;
     * getBreathableComponent.breathesSolids;
     * getBreathableComponent.breathesWater;
     * getBreathableComponent.generatesBubbles;
     * getBreathableComponent.inhaleTime;
     * getBreathableComponent.suffocateTime;
     * getBreathableComponent.totalSupply;
     * getBreathableComponent.getBreatheBlocks();
     * getBreathableComponent.getNonBreatheBlocks();
     * getBreathableComponent.setAirSupply(100); // Assuming 100 as an example value
     * ```
     * @example getEntityColorComponent.js
     * ```js
     * const getEntityColorComponent = entity.getComponent("color");
     * getEntityColorComponent.value;
     * ```
     * @example getEntityEquipmentInventoryComponent.js
     * ```js
     * const getEntityEquipmentInventoryComponent = entity.getComponent(
     *     "equipment_inventory"
     * );
     * getEntityEquipmentInventoryComponent.getEquipment(EquipmentSlot.MainHand);
     * const equipmentSlot = EquipmentSlot.Head;
     * getEntityEquipmentInventoryComponent.getEquipmentSlot(equipmentSlot);
     * getEntityEquipmentInventoryComponent.setEquipment(EquipmentSlot.OffHand); // Assuming undefined (empty slot) as an example
     * ```
     * @example getEntityFlyingSpeedComponent.js
     * ```js
     * const getEntityFlyingSpeedComponent = entity.getComponent("flying_speed");
     * getEntityFlyingSpeedComponent.value;
     * ```
     * @example getEntityHealableComponent.js
     * ```js
     * const getEntityHealableComponent = entity.getComponent("healable");
     * getEntityHealableComponent.filters;
     * getEntityHealableComponent.forceUse;
     * getEntityHealableComponent.getFeedItems();
     * getEntityHealableComponent.isValid();
     * ```
     * @example getEntityHealthComponent.js
     * ```js
     * const getEntityHealthComponent = entity.getComponent("health");
     * getEntityHealthComponent.currentValue;
     * getEntityHealthComponent.defaultValue;
     * getEntityHealthComponent.effectiveMax;
     * getEntityHealthComponent.effectiveMin;
     * getEntityHealthComponent.resetToDefaultValue();
     * getEntityHealthComponent.resetToMaxValue();
     * getEntityHealthComponent.resetToMinValue();
     * getEntityHealthComponent.setCurrentValue(100); // Assuming 100 as an example value
     *
     * // Custom function to check if the health attribute is within a valid range
     * function isValidHealthValue(value) {
     *     return (
     *         value >= getEntityHealthComponent.effectiveMin &&
     *         value <= getEntityHealthComponent.effectiveMax
     *     );
     * }
     *
     * // Example usage of the custom isValidHealthValue function
     * const newHealthValue = 80;
     * if (isValidHealthValue(newHealthValue)) {
     *     getEntityHealthComponent.setCurrentValue(newHealthValue);
     * }
     * ```
     * @example getEntityInventoryComponent.js
     * ```js
     * const getEntityInventoryComponent = entity.getComponent("inventory");
     * getEntityInventoryComponent.additionalSlotsPerStrength;
     * getEntityInventoryComponent.canBeSiphonedFrom;
     * const inventoryContainer = getEntityInventoryComponent.container;
     * getEntityInventoryComponent.containerType;
     * getEntityInventoryComponent.inventorySize;
     * getEntityInventoryComponent.private;
     * getEntityInventoryComponent.restrictToOwner;
     * getEntityInventoryComponent.isValid();
     *
     * // Custom function to add an item to the inventory
     * function addItemToInventory(itemStack) {
     *     return inventoryContainer.addItem(itemStack);
     * }
     *
     * // Custom function to move an item within the inventory
     * function moveItemWithinInventory(fromSlot, toSlot) {
     *     inventoryContainer.moveItem(fromSlot, toSlot, inventoryContainer);
     * }
     *
     * // Custom function to transfer an item from inventory to another container
     * function transferItemToContainer(fromSlot, targetContainer) {
     *     return inventoryContainer.transferItem(fromSlot, targetContainer);
     * }
     *
     * // Example usage of the custom functions
     * const newItemStack = new ItemStack("apple", 10); // Assuming "apple" is a valid item
     * const addedItem = addItemToInventory(newItemStack);
     * if (addedItem) {
     *     console.log("Item added to inventory:", addedItem);
     * }
     *
     * const sourceSlot = 2;
     * const destinationSlot = 5;
     * moveItemWithinInventory(sourceSlot, destinationSlot);
     *
     * const targetContainer = someOtherContainer; // Assuming 'someOtherContainer' is an instance of another container
     * const transferredItem = transferItemToContainer(0, targetContainer);
     * if (transferredItem) {
     *     console.log("Item transferred to another container:", transferredItem);
     * }
     * ```
     * @example getEntityItemComponent.js
     * ```js
     * const getEntityItemComponent = itemEntity.getComponent("item");
     * getEntityItemComponent.itemStack;
     * getEntityItemComponent.isValid();
     * ```
     * @example getEntityLeashableComponent.js
     * ```js
     * const getEntityLeashableComponent = entity.getComponent("leashable");
     * getEntityLeashableComponent.softDistance;
     * getEntityLeashableComponent.leash(leashHolderEntity); // Assuming you have an 'leashHolderEntity' instance
     * getEntityLeashableComponent.unleash();
     * getEntityLeashableComponent.isValid();
     * ```
     * @example getEntityMarkVariantComponent.js
     * ```js
     * const getEntityMarkVariantComponent = entity.getComponent("mark_variant");
     * getEntityMarkVariantComponent.value;
     * getEntityMarkVariantComponent.isValid();
     * ```
     * @example getEntityMovementGlideComponent.js
     * ```js
     * const getEntityMovementGlideComponent = entity.getComponent("movement.glide");
     * getEntityMovementGlideComponent.speedWhenTurning;
     * getEntityMovementGlideComponent.startSpeed;
     * getEntityMovementGlideComponent.isValid();
     * ```
     * @example getEntityMovementSwayComponent.js
     * ```js
     * const getEntityMovementSwayComponent = entity.getComponent("movement.sway");
     * getEntityMovementSwayComponent.swayAmplitude;
     * getEntityMovementSwayComponent.swayFrequency;
     * getEntityMovementSwayComponent.isValid();
     * ```
     * @example getEntityNavigationComponent.js
     * ```js
     * const getEntityNavigationComponent = entity.getComponent("navigation");
     * getEntityNavigationComponent.avoidDamageBlocks;
     * getEntityNavigationComponent.avoidPortals;
     * getEntityNavigationComponent.avoidSun;
     * getEntityNavigationComponent.avoidWater;
     * getEntityNavigationComponent.canBreach;
     * getEntityNavigationComponent.canBreakDoors;
     * getEntityNavigationComponent.canFloat;
     * getEntityNavigationComponent.canJump;
     * getEntityNavigationComponent.canOpenDoors;
     * getEntityNavigationComponent.canOpenIronDoors;
     * getEntityNavigationComponent.canPassDoors;
     * getEntityNavigationComponent.canPathFromAir;
     * getEntityNavigationComponent.canPathOverLava;
     * getEntityNavigationComponent.canPathOverWater;
     * getEntityNavigationComponent.canSink;
     * getEntityNavigationComponent.canSwim;
     * getEntityNavigationComponent.canWalk;
     * getEntityNavigationComponent.canWalkInLava;
     * getEntityNavigationComponent.isAmphibious;
     * getEntityNavigationComponent.isValid();
     * ```
     * @example getEntityRideableComponent.js
     * ```js
     * const getEntityRideableComponent = entity.getComponent("rideable");
     * getEntityRideableComponent.controllingSeat;
     * getEntityRideableComponent.crouchingSkipInteract;
     * getEntityRideableComponent.interactText;
     * getEntityRideableComponent.pullInEntities;
     * getEntityRideableComponent.riderCanInteract;
     * getEntityRideableComponent.seatCount;
     * getEntityRideableComponent.addRider(riderEntity); // Assuming you have an 'riderEntity' instance
     * getEntityRideableComponent.ejectRider(riderEntity); // Assuming you have an 'riderEntity' instance
     * getEntityRideableComponent.ejectRiders();
     * getEntityRideableComponent.getFamilyTypes();
     * getEntityRideableComponent.getRiders();
     * getEntityRideableComponent.getSeats();
     * getEntityRideableComponent.isValid();
     * ```
     * @example getEntityRidingComponent.js
     * ```js
     * const getEntityRidingComponent = entity.getComponent("riding");
     * getEntityRidingComponent.entityRidingOn;
     * getEntityRidingComponent.isValid();
     * ```
     * @example getEntityTameableComponent.js
     * ```js
     * ```
     * @example getEntityVariantComponent.js
     * ```js
     * const getEntityVariantComponent = entity.getComponent("variant");
     * getEntityVariantComponent.value;
     * getEntityVariantComponent.isValid();
     * ```
     */
    getComponent(componentId: string): EntityComponent | undefined;
    /**
     * @beta
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     *
     * @returns
     * Returns all components that are both present on this entity
     * and supported by the API.
     * @example getComponents.js
     * ```js
     * const components = entity.getComponents();
     * console.log(
     *     `Number of components: ${components.length}: ${components.map(
     *         (component) => component.typeId
     *     )}`
     * );
     * ```
     */
    getComponents(): EntityComponent[];
    /**
     * @beta
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, undefined if the effect is not present, or throws an
     * error if the effect does not exist.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Effect object for the specified effect, undefined if the
     * effect is not present, or throws an error if the effect does
     * not exist.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @beta
     * @remarks
     * Returns a set of effects applied to this entity.
     *
     * @returns
     * List of effects.
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    /**
     * @beta
     * @remarks
     * Gets the entities that this entity is looking at by
     * performing a ray cast from the view of this entity.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns a set of entities from the direction that this
     * entity is looking at.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @beta
     * @remarks
     * Returns the current location of the head component of this
     * entity.
     *
     * @returns
     * Returns the current location of the head component of this
     * entity.
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns all tags associated with an entity.
     *
     * @returns
     * Returns the current rotation component of this entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Returns the current velocity vector of the entity.
     *
     * @returns
     * Returns the current velocity vector of the entity.
     * @throws This function can throw errors.
     * @example getFireworkVelocity.ts
     * ```typescript
     *   const fireworkRocket = overworld.spawnEntity("minecraft:fireworks_rocket", targetLocation);
     *
     *   mc.system.runTimeout(() => {
     *     let velocity = fireworkRocket.getVelocity();
     *
     *     log("Velocity of firework is: (x: " + velocity.x + ", y:" + velocity.y + ", z:" + velocity.z + ")");
     *   }, 5);
     * ```
     */
    getVelocity(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns the current view direction of the entity.
     *
     * @returns
     * Returns the current view direction of the entity.
     * @throws This function can throw errors.
     */
    getViewDirection(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     * @returns
     * Returns true if the specified component is present on this
     * entity.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @beta
     * @remarks
     * Returns whether an entity has a particular tag.
     *
     * @param tag
     * Identifier of the tag to test for.
     * @returns
     * Returns whether an entity has a particular tag.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Returns whether the entity can be manipulated by script. A
     * Player is considered valid when it's EntityLifetimeState is
     * set to Loaded.
     *
     * @returns
     * Whether the entity is valid.
     */
    isValid(): boolean;
    /**
     * @beta
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns true if entity can be killed (even if it is already
     * dead), otherwise it returns false.
     * @throws This function can throw errors.
     * @example tagsQuery.ts
     * ```typescript
     *   let mobs = ["creeper", "skeleton", "sheep"];
     *
     *   // create some sample mob data
     *   for (let i = 0; i < 10; i++) {
     *     let mobTypeId = mobs[i % mobs.length];
     *     let entity = overworld.spawnEntity(mobTypeId, targetLocation);
     *     entity.addTag("mobparty." + mobTypeId);
     *   }
     *
     *   let eqo: mc.EntityQueryOptions = {
     *     tags: ["mobparty.skeleton"],
     *   };
     *
     *   for (let entity of overworld.getEntities(eqo)) {
     *     entity.kill();
     *   }
     * ```
     */
    kill(): boolean;
    /**
     * @beta
     * @remarks
     * Removes the specified EffectType on the entity, or returns
     * false if the effect is not present.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Returns true if the effect has been removed. Returns false
     * if the effect is not found or does not exist.
     * @throws This function can throw errors.
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @beta
     * @remarks
     * Removes a specified tag from an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to remove.
     * @returns
     * Returns whether the tag existed on the entity.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Runs a synchronous command on the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * The command string. Note: This should not include a leading
     * forward slash.
     * @returns
     * A command result containing whether the command was
     * successful.
     * @throws This function can throw errors.
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Teleports the selected entity to a new location
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * New location for the entity.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @throws This function can throw errors.
     * @example teleportMovement.ts
     * ```typescript
     *   const pig = overworld.spawnEntity("minecraft:pig", targetLocation);
     *
     *   let inc = 1;
     *   let runId = mc.system.runInterval(() => {
     *     pig.teleport(
     *       { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
     *       {
     *         facingLocation: targetLocation,
     *       }
     *     );
     *
     *     if (inc > 100) {
     *       mc.system.clearRun(runId);
     *     }
     *     inc++;
     *   }, 4);
     * ```
     * @example teleport.js
     * ```js
     * player.teleport(
     *     { x: 0, y: 0, z: 0 },
     *     { dimension: world.getDimension("nether") }
     * );
     * ```
     * @example teleportFacing.js
     * ```js
     * player.teleport(
     *     { x: 0, y: 0, z: 0 },
     *     {
     *         dimension: world.getDimension("nether"),
     *         teleportFacing: { x: 100, y: 100, z: 100 },
     *     }
     * );
     * ```
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @beta
     * @remarks
     * Attempts to try a teleport, but may not complete the
     * teleport operation (for example, if there are blocks at the
     * destination.)
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * Location to teleport the entity to.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @returns
     * Returns whether the teleport succeeded. This can fail if the
     * destination chunk is unloaded or if the teleport would
     * result in intersecting with blocks.
     * @throws This function can throw errors.
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

/**
 * @beta
 * This is a base abstract class for any entity component that
 * centers around a number and can have a minimum, maximum, and
 * default defined value.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of this attribute for this instance.
     *
     * @throws This property can throw when used.
     */
    readonly currentValue: number;
    /**
     * @remarks
     * Returns the default defined value for this attribute.
     *
     * @throws This property can throw when used.
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * Returns the effective max of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * Returns the effective min of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * Resets the current value of this attribute to the defined
     * default value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the current value of this attribute to the maximum
     * defined value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the current value of this attribute to the minimum
     * defined value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of this attribute.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCurrentValue(value: number): boolean;
}

/**
 * @beta
 * Base class for a family of entity movement events.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Maximum turn rate for this movement modality of the mob.
     *
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_climb';
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}

/**
 * @beta
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}

/**
 * @beta
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular color.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}

/**
 * @beta
 * Base class for downstream entity components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
}

/**
 * @beta
 * Contains data related to the death of an entity in the game.
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * If specified, provides more information on the source of
     * damage that caused the death of this entity.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * Now-dead entity object.
     *
     */
    readonly deadEntity: Entity;
}

/**
 * @beta
 * Supports registering for an event that fires after an entity
 * has died.
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to an event that fires when an entity dies.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function to call when an entity dies.
     * @param options
     * Additional filtering options for when the subscription
     * fires.
     * @returns
     * Returns the closure that can be used in future downstream
     * calls to unsubscribe.
     */
    subscribe(
        callback: (arg: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * Stops this event from calling your function when an entity
     * dies.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}

/**
 * @beta
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:fire_immune';
}

/**
 * @beta
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:floats_in_liquid';
}

/**
 * @beta
 * Represents the flying speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the flying speed of the associated entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:flying_speed';
}

/**
 * @beta
 * Defines how much friction affects this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the friction modifier of the associated
     * entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}

/**
 * @beta
 * Sets the offset from the ground that the entity is actually
 * at.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular ground offset.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:ground_offset';
}

/**
 * @beta
 * Defines the interactions with this entity for healing it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Determines if an item can be used regardless of the entity
     * being at full health.
     *
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * A set of items that can specifically heal this entity.
     *
     * @returns
     * Entity that this component is associated with.
     * @throws This function can throw errors.
     */
    getFeedItems(): FeedItem[];
}

/**
 * @beta
 * Contains information related to an entity when its health
 * changes. Warning: don't change the health of an entity in
 * this event, or it will cause an infinite loop!
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity whose health changed.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * New health value of the entity.
     *
     */
    readonly newValue: number;
    /**
     * @remarks
     * Old health value of the entity.
     *
     */
    readonly oldValue: number;
}

/**
 * @beta
 * Manages callbacks that are connected to when the health of
 * an entity changes.
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the health of an
     * entity changes.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when the health of an
     * entity changes.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}

/**
 * @beta
 * Defines the health properties of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:health';
}

/**
 * @beta
 * Contains information related to an entity hitting a block.
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Entity that made the attack.
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * Block that was hit by the attack.
     *
     */
    readonly hitBlock: Block;
}

/**
 * @beta
 * Manages callbacks that are connected to when an entity hits
 * a block.
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity hits a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that made a hit/melee attack.
     *
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * Entity that was hit by the attack.
     *
     */
    readonly hitEntity: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits
     * another entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an entity getting hurt.
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * Describes the amount of damage caused.
     *
     */
    readonly damage: number;
    /**
     * @remarks
     * Source information on the entity that may have applied this
     * damage.
     *
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * Entity that was hurt.
     *
     */
    readonly hurtEntity: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity is hurt.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void;
}

/**
 * @beta
 * Defines this entity's inventory properties.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Number of slots that this entity can gain per extra
     * strength.
     *
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * If true, the contents of this inventory can be removed by a
     * hopper.
     *
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * Defines the container for this entity.
     *
     * @throws This property can throw when used.
     */
    readonly container: Container;
    /**
     * @remarks
     * Type of container this entity has.
     *
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * @remarks
     * Number of slots the container has.
     *
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * If true, the entity will not drop it's inventory on death.
     *
     * @throws This property can throw when used.
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     *
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}

/**
 * @beta
 * When added, this component signifies that this entity is a
 * baby.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_baby';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * charged.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_charged';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_chested';
}

/**
 * @beta
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}

/**
 * @beta
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}

/**
 * @beta
 * When added, this component signifies that this entity this
 * currently on fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_ignited';
}

/**
 * @beta
 * When added, this component signifies that this entity is an
 * illager captain.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently saddled.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_saddled';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently shaking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_shaking';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently sheared.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_sheared';
}

/**
 * @beta
 * When added, this component signifies that this entity can be
 * stacked.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stackable';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently stunned.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stunned';
}

/**
 * @beta
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_tamed';
}

/**
 * @beta
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Item stack represented by this entity in the world.
     *
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}

/**
 * @beta
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the mark variant value for this entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:mark_variant';
}

/**
 * @beta
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}

/**
 * @beta
 * This component accents the movement of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.basic';
}

/**
 * @beta
 * When added, this move control causes the mob to fly.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.fly';
}

/**
 * @beta
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.generic';
}

/**
 * @beta
 * When added, this move control causes the mob to hover.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.hover';
}

/**
 * @beta
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.jump';
}

/**
 * @beta
 * When added, this move control causes the mob to hop as it
 * moves.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.skip';
}

/**
 * @beta
 * Sets the distance through which the entity can push through.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the push through distances of this entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:push_through';
}

/**
 * @beta
 * Sets the entity's visual size.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for the scale property set on entities.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:scale';
}

/**
 * @beta
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns the value of the skin Id identifier of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: number;
    static readonly componentId = 'minecraft:skin_id';
}

/**
 * @beta
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for variant for this entity, as specified via
     * components.
     *
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}

/**
 * @beta
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}

/**
 * @beta
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     *
     */
    readonly healAmount: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     *
     */
    readonly item: string;
    /**
     * @remarks
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     *
     */
    getEffects(): FeedItemEffect[];
}

/**
 * @beta
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     *
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     *
     */
    readonly chance: number;
    /**
     * @remarks
     * Gets the duration, in ticks, of this effect.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     *
     */
    readonly name: string;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires when a button is pushed.
 */
export class IButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a lever is used.
 */
export class ILeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player joins a world.
 */
export class IPlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player leaves a world.
 */
export class IPlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}

/**
 * @beta
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player spawns.
 */
export class IPlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that has completed charging.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * @beta
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}

/**
 * @beta
 * Base class for item components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
    private constructor();
}

/**
 * @beta
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that triggered this item event.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * @beta
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void;
}

/**
 * @beta
 * Defines a collection of items.
 */
export class ItemStack {
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * The type of the item.
     *
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     *
     * @param itemType
     * Type of item to create. See the {@link
     * @minecraft/vanilla-data.MinecraftItemTypes} enumeration for
     * a list of standard item types in Minecraft experiences.
     * @param amount
     * Number of items to place in the stack, between 1-255. The
     * provided value will be clamped to the item's maximum stack
     * size. Note that certain items can only have one item in the
     * stack.
     * @throws
     * Throws if `itemType` is invalid, or if `amount` is outside
     * the range of 1-255.
     */
    constructor(itemType: ItemType | string, amount?: number);
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed. If the component is not present on the item
     * stack, undefined is returned.
     * @example durability.ts
     * ```typescript
     * // Get the maximum durability of a custom sword item
     * const itemStack = new ItemStack("custom:sword");
     * const durability = itemStack.getComponent("minecraft:durability") as ItemDurabilityComponent;
     * const maxDurability = durability.maxDurability;
     * ```
     * @example maxDurability.js
     * ```js
     * let durabilityComp = itemStack.getComponent("durability");
     * durabilityComp.damage;
     * durabilityComp.maxDurability;
     * ```
     */
    getComponent(componentId: string): ItemComponent | undefined;
    /**
     * @remarks
     * Returns all components that are both present on this item
     * stack and supported by the API.
     *
     */
    getComponents(): ItemComponent[];
    /**
     * @beta
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @beta
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example diamondAwesomeSword.ts
     * ```typescript
     *   const diamondAwesomeSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
     *   let players = mc.world.getAllPlayers();
     *
     *   diamondAwesomeSword.setLore(["§c§lDiamond Sword of Awesome§r", "+10 coolness", "§p+4 shiny§r"]);
     *
     *   // hover over/select the item in your inventory to see the lore.
     *   const inventory = players[0].getComponent("inventory") as mc.EntityInventoryComponent;
     *   inventory.container.setItem(0, diamondAwesomeSword);
     *
     *   let item = inventory.container.getItem(0);
     *
     *   if (item) {
     *     let enchants = item.getComponent("minecraft:enchantments") as mc.ItemEnchantsComponent;
     *     let knockbackEnchant = new mc.Enchantment("knockback", 3);
     *     enchants.enchantments.addEnchantment(knockbackEnchant);
     *   }
     * ```
     * @example multilineLore.ts
     * ```typescript
     * // Set the lore of an item to multiple lines of text
     * const itemStack = new ItemStack("minecraft:diamond_sword");
     * itemStack.setLore(["Line 1", "Line 2", "Line 3"]);
     * ```
     */
    setLore(loreList?: string[]): void;
}

/**
 * @beta
 * Contains information related to a chargeable item starting
 * to be charged.
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is starting to be charged.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * @beta
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * starts charging.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item being used on a
 * block. This event fires when a player presses the the Use
 * Item / Place Block button to successfully use an item or
 * place a block. Fires for the first block that is interacted
 * with when performing a build action. Note: This event cannot
 * be used with Hoe or Axe items.
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * The impacted item stack that is starting to be used.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is stopping being charged.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}

/**
 * @beta
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * stops charging.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item that has stopped
 * being used on a block. This event fires when a player
 * successfully uses an item or places a block by pressing the
 * Use Item / Place Block button. If multiple blocks are
 * placed, this event will only occur once at the beginning of
 * the block placement. Note: This event cannot be used with
 * Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
}

/**
 * @beta
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     *
     */
    readonly id: string;
}

/**
 * @beta
 * Contains information related to an item being used. This
 * event fires when an item is successfully used by a player.
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is being used.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item being used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     *
     */
    cancel: boolean;
}

/**
 * @beta
 * Manages callbacks that fire before an item is used.
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item being used on a
 * block. This event fires when an item is successfully used on
 * a block by a player.
 */
export class ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to an item being used
 * on a block event.
 */
export class ItemUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to an item being used on a
 * block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     *
     */
    cancel: boolean;
}

/**
 * @beta
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class ItemUseOnBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes to a lever
 * activating or deactivating.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * True if the lever is activated (that is, transmitting
     * power).
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * Optional player that triggered the lever activation.
     *
     */
    readonly player: Player;
}

/**
 * @beta
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
    private constructor();
}

/**
 * DEPRECATED
 * Use @minecraft/vanilla-data.MinecraftDimensionTypes
 * A collection of default Minecraft dimension types.
 */
export class MinecraftDimensionTypes {
    private constructor();
    /**
     * @remarks
     * The Nether is a collection of biomes separate from the
     * Overworld, including Soul Sand Valleys and Crimson forests.
     * Nether fortresses contain exclusive resources. Mobs such as
     * Blaze, Hoglins, Piglins, and Ghasts congregate here.
     *
     */
    static readonly nether = 'minecraft:nether';
    /**
     * @remarks
     * The overworld is a collection of biomes, including forests,
     * plains, jungles, mountains, deserts, taiga, and more. This
     * is the default starter dimension for Minecraft. Mobs such as
     * Axolotl, Cows, Creepers, and Zombies congregate here.
     *
     */
    static readonly overworld = 'minecraft:overworld';
    /**
     * @remarks
     * The End is separate from the Overworld and the Nether and is
     * generated whenever you create an End portal. Here, a giant
     * center island is surrounded by several smaller areas and
     * islands. You can find Endermen here. End midlands are larger
     * areas that transition you from the center to the outer edges
     * of the End. They contain Shulkers, Endermen, End gateway
     * portals, and End cities. End gateway portals are commonly
     * found at the outermost edge of the void. You usually find
     * End barrens toward the edges of the main areas or land in
     * the End.
     *
     */
    static readonly theEnd = 'minecraft:the_end';
}

/**
 * Represents a player within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @remarks
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @beta
     * @remarks
     * Contains methods for manipulating the on-screen display of a
     * Player.
     *
     * @throws This property can throw when used.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * @remarks
     * Gets the current spawn point of the player.
     *
     * @throws This function can throw errors.
     * @example getSpawnPoint.js
     * ```js
     * const spawnPoint = player.getSpawnPoint();
     * if (spawnPoint) {
     *     console.log(
     *         `Spawn point location: ${spawnPoint.x} ${spawnPoint.y} ${spawnPoint.z} at ${spawnPoint.dimension.id}`
     *     );
     * } else {
     *     console.log(`No spawn point set.`);
     * }
     * ```
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @beta
     * @remarks
     * Plays a sound that only this particular player can hear.
     *
     * This function can't be called in read-only mode.
     *
     * @param soundID
     * Identifier of the sound to play.
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     * @example playMusicAndSound.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   const musicOptions: mc.MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   mc.world.playMusic("music.menu", musicOptions);
     *
     *   const worldSoundOptions: mc.WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: mc.PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playSound(soundID: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @beta
     * @remarks
     * Sends a message to the player.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *   translate: "accessibility.list.or.two",
     *   with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     * };
     * player.sendMessage(rawMessage);
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * world.sendMessage(rawMessage);
     * ```
     * @example sendBasicMessage.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].sendMessage("Hello World!");
     * ```
     * @example sendTranslatedMessage.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
     * ```
     * @example simpleString.ts
     * ```typescript
     * // Displays "Hello, world!"
     * world.sendMessage("Hello, world!");
     * ```
     * @example translation.ts
     * ```typescript
     * // Displays "First or Second"
     * const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     * player.sendMessage(rawMessage);
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @beta
     * @remarks
     * Sets the current starting spawn point for this particular
     * player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
}

/**
 * @beta
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that
 * could be returned after the first time a player has spawned
 * within the game.
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * Opaque string identifier of the player that joined the game.
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * Name of the player that has joined.
     *
     */
    readonly playerName: string;
}

/**
 * @beta
 * Manages callbacks that are connected to a player joining the
 * world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal {
    private constructor();
}

/**
 * @beta
 * Contains information regarding a player that has left the
 * world.
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * Opaque string identifier of the player that has left the
     * event.
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * Player that has left the world.
     *
     */
    readonly playerName: string;
}

/**
 * @beta
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
    private constructor();
}

/**
 * @beta
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If true, this is the initial spawn of a player after joining
     * the game.
     *
     * This property can't be edited in read-only mode.
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * Object that represents the player that joined the game.
     *
     * This property can't be edited in read-only mode.
     *
     */
    player: Player;
}

/**
 * @beta
 * Registers an event when a player is spawned (or re-spawned
 * after death) and fully ready within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal {
    private constructor();
}

/**
 * @beta
 * Contains information related to changes to a pressure plate
 * pop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone power of the pressure plate before it was
     * popped.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * pop.
     *
     */
    readonly redstonePower: number;
}

/**
 * @beta
 * Manages callbacks that are connected to when a pressure
 * plate is popped.
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * popped.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is popped.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes to a pressure plate
 * push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone power of the pressure plate before it was
     * pushed.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * push.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Source that triggered the pressure plate push.
     *
     */
    readonly source: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when a pressure
 * plate is pushed.
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * pushed.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is pushed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * Adds a new objective to the scoreboard.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
    /**
     * @remarks
     * Clears the objective that occupies a display slot.
     *
     * This function can't be called in read-only mode.
     *
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * Returns a specific objective (by id).
     *
     * @param objectiveId
     * Identifier of the objective.
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * Returns an objective that occupies the specified display
     * slot.
     *
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * Returns all defined objectives.
     *
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * Returns all defined scoreboard identities.
     *
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Removes an objective from the scoreboard.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective;
}

/**
 * @beta
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    private constructor();
    /**
     * @remarks
     * Returns the player-visible name of this identity.
     *
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard identity.
     *
     */
    readonly id: number;
    /**
     * @remarks
     * Type of the scoreboard identity.
     *
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     *
     * @throws This function can throw errors.
     */
    getEntity(): Entity;
    isValid(): boolean;
}

/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    private constructor();
    /**
     * @remarks
     * Returns the player-visible name of this scoreboard
     * objective.
     *
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @remarks
     * Identifier of the scoreboard objective.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @remarks
     * Adds a score to the given participant and objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Participant to apply the scoreboard value addition to.
     * @throws This function can throw errors.
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @remarks
     * Returns all objective participant identities.
     *
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Returns a specific score for a participant.
     *
     * @param participant
     * Identifier of the participant to retrieve a score for.
     * @throws This function can throw errors.
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @remarks
     * Returns specific scores for this objective for all
     * participants.
     *
     * @throws This function can throw errors.
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * Returns if the specified identity is a participant of the
     * scoreboard objective.
     *
     * @throws This function can throw errors.
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    isValid(): boolean;
    /**
     * @remarks
     * Removes a participant from this scoreboard objective.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Participant to remove from being tracked with this
     * objective.
     * @throws This function can throw errors.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks
     * Sets a score for a participant.
     *
     * This function can't be called in read-only mode.
     *
     * @param participant
     * Identity of the participant.
     * @param score
     * New value of the score.
     * @throws This function can throw errors.
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

/**
 * @beta
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    private constructor();
    /**
     * @remarks
     * This scoreboard participant for this score.
     *
     */
    readonly participant: ScoreboardIdentity;
    /**
     * @remarks
     * Score value of the identity for this objective.
     *
     */
    readonly score: number;
}

/**
 * @beta
 * Contains information about user interface elements that are
 * showing up on the screen.
 */
export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * Returns true if the current reference to this screen display
     * manager object is valid and functional.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     *
     * This function can't be called in read-only mode.
     *
     * @param text
     * New value for the action bar text.
     * @throws This function can throw errors.
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. Will clear the title if set to empty string. You
     * can optionally specify an additional subtitle as well as
     * fade in, stay and fade out times.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example countdown.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("Get ready!", {
     *     stayDuration: 220,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: "10",
     *   });
     *
     *   let countdown = 10;
     *
     *   let intervalId = mc.system.runInterval(() => {
     *     countdown--;
     *     players[0].onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *     if (countdown == 0) {
     *       mc.system.clearRun(intervalId);
     *     }
     *   }, 20);
     * ```
     * @example setTitle.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   players[0].onScreenDisplay.setTitle("Chapter 1", {
     *     stayDuration: 100,
     *     fadeInDuration: 2,
     *     fadeOutDuration: 4,
     *     subtitle: "Trouble in Block Town",
     *   });
     * ```
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

/**
 * @beta
 * Returns additional data about a /scriptevent command
 * invocation.
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * Identifier of this ScriptEvent command message.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     *
     */
    readonly initiator: Entity;
    /**
     * @remarks
     * Optional additional data passed in with the script event
     * command.
     *
     */
    readonly message: string;
    /**
     * @remarks
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     *
     */
    readonly sourceBlock: Block;
    /**
     * @remarks
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     *
     */
    readonly sourceEntity: Entity;
    /**
     * @remarks
     * Returns the type of source that fired this command.
     *
     */
    readonly sourceType: ScriptEventSource;
}

/**
 * @beta
 * Allows for registering an event handler that responds to
 * inbound /scriptevent commands.
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Registers a new ScriptEvent handler.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes a particular handler for a ScriptEvent event.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void;
}

/**
 * A class that provides system-level events and functions.
 */
export class System {
    private constructor();
    /**
     * @beta
     * @remarks
     * Returns a collection of after-events for system-level
     * operations.
     *
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @beta
     * @remarks
     * Represents the current world tick of the server.
     *
     */
    readonly currentTick: number;
    /**
     * @beta
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via the `run` function.
     * @example clearRun.js
     * ```js
     * const runId = system.run(() => {
     *     console.log("Running callback function...");
     * });
     *
     * // Clear the run, so it will not run again.
     * system.clearRun(runId);
     * ```
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at a future time. This is
     * frequently used to implement delayed behaviors and game
     * loops.
     *
     * @param callback
     * Function callback to run when the tickDelay time criteria is
     * met.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     * @example trapTick.ts
     * ```typescript
     *   const overworld = mc.world.getDimension("overworld");
     *
     *   try {
     *     // Minecraft runs at 20 ticks per second.
     *     if (mc.system.currentTick % 1200 === 0) {
     *       mc.world.sendMessage("Another minute passes...");
     *     }
     *   } catch (e) {
     *     console.warn("Error: " + e);
     *   }
     *
     *   mc.system.run(trapTick);
     * ```
     * @example run.js
     * ```js
     * const runId = system.run(() => {
     *     console.log("Running callback function...");
     * });
     * ```
     */
    run(callback: () => void): number;
    /**
     * @beta
     * @remarks
     * Runs a set of code on an interval.
     *
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be
     * called upon.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * @example every30Seconds.ts
     * ```typescript
     *   let intervalRunIdentifier = Math.floor(Math.random() * 10000);
     *
     *   mc.system.runInterval(() => {
     *     mc.world.sendMessage("This is an interval run " + intervalRunIdentifier + " sending a message every 30 seconds.");
     *   }, 600);
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @beta
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
     *
     * @param callback
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be
     * called.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * @example runTimeout.js
     * ```js
     * import { TicksPerSecond } from "@minecraft/server";
     *
     * system.runTimeout(() => {
     *     console.log("Running callback function after delay...");
     * }, TicksPerSecond * 5); // Tick delay of 5 seconds
     * ```
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
}

/**
 * @beta
 * Provides a set of events that fire within the broader
 * scripting system within Minecraft.
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * An event that fires when a /scriptevent command is set. This
     * provides a way for commands and other systems to trigger
     * behavior within script.
     * @example entity.js
     * ```js
     * import { system, world } from "@minecraft/server";
     *
     * system.afterEvents.scriptEventReceive.subscribe((event) => {
     *     const { id, message, sourceEntity, sourceType } = event;
     *
     *     console.log(id); // wiki:test
     *     console.log(message); // Hello World
     *     console.log(sourceEntity); // Player object
     *     console.log(sourceType); // Entity
     * });
     *
     * world.getPlayers().forEach((player) => {
     *     player.runCommand("scriptevent wiki:test Hello World");
     * });
     * ```
     * @example server.js
     * ```js
     * import { system, world } from "@minecraft/server";
     *
     * system.afterEvents.scriptEventReceive.subscribe((event) => {
     *     const { id, message, sourceType } = event;
     *
     *     console.log(id); // wiki:test
     *     console.log(message); // Hello World
     *     console.log(sourceType); // Server
     * });
     *
     * world.getDimension("overworld").runCommand("scriptevent wiki:test Hello World");
     * ```
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

/**
 * @beta
 * Contains information related to changes to a target block
 * hit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The position where the source hit the block.
     *
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * The redstone power before the block is hit.
     *
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power at the time the block is hit.
     *
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Optional source that hit the target block.
     *
     */
    readonly source: Entity;
}

/**
 * @beta
 * Manages callbacks that are connected to when a target block
 * is hit.
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a target block is
     * hit.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a target block is
     * hit.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void;
}

/**
 * @beta
 * Contains information related to changes to a trip wire trip.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Whether or not the block has redstone power.
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * The sources that triggered the trip wire to trip.
     *
     */
    readonly sources: Entity[];
}

/**
 * @beta
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}

/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    private constructor();
    /**
     * @beta
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world.  Event callbacks are called in a deferred
     * manner. Event callbacks are executed in read-write mode.
     *
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @beta
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world. Event callbacks are called immediately. Event
     * callbacks are executed in read-only mode.
     *
     */
    readonly beforeEvents: WorldBeforeEvents;
    /**
     * @beta
     * @remarks
     * Returns the general global scoreboard that applies to the
     * world.
     *
     */
    readonly scoreboard: Scoreboard;
    /**
     * @beta
     * @remarks
     * Returns the absolute time since the start of the world.
     *
     */
    getAbsoluteTime(): number;
    /**
     * @remarks
     * Returns an array of all active players within the world.
     *
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    /**
     * @beta
     * @remarks
     * Returns the current day.
     *
     * @returns
     * The current day, determined by the world time divided by the
     * number of ticks per day. New worlds start at day 0.
     */
    getDay(): number;
    /**
     * @beta
     * @remarks
     * Returns the default Overworld spawn location.
     *
     * @returns
     * The default Overworld spawn location. By default, the Y
     * coordinate is 32767, indicating a player's spawn height is
     * not fixed and will be determined by surrounding blocks.
     */
    getDefaultSpawnLocation(): Vector3;
    /**
     * @remarks
     * Returns a dimension object.
     *
     * @param dimensionId
     * The name of the dimension. For example, "overworld",
     * "nether" or "the_end".
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @beta
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws
     * Throws if the provided EntityQueryOptions are invalid.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * Returns the time of day.
     *
     * @returns
     * The time of day, in ticks, between 0 and 24000.
     */
    getTimeOfDay(): number;
    /**
     * @beta
     * @remarks
     * Plays a particular music track for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example playMusicAndSound.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   const musicOptions: mc.MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   mc.world.playMusic("music.menu", musicOptions);
     *
     *   const worldSoundOptions: mc.WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: mc.PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Plays a sound for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     * @example playMusicAndSound.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   const musicOptions: mc.MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   mc.world.playMusic("music.menu", musicOptions);
     *
     *   const worldSoundOptions: mc.WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: mc.PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playSound(soundID: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @beta
     * @remarks
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     */
    queueMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Sends a message to all players.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *   translate: "accessibility.list.or.two",
     *   with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     * };
     * world.sendMessage(rawMessage);
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * world.sendMessage(rawMessage);
     * ```
     * @example simpleString.ts
     * ```typescript
     * // Displays "Hello, world!"
     * world.sendMessage("Hello, world!");
     * ```
     * @example translation.ts
     * ```typescript
     * // Displays "First or Second"
     * const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     * world.sendMessage(rawMessage);
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @beta
     * @remarks
     * Sets the world time.
     *
     * This function can't be called in read-only mode.
     *
     * @param absoluteTime
     * The world time, in ticks.
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @beta
     * @remarks
     * Sets a default spawn location for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @param spawnLocation
     * Location of the spawn point. Note that this is assumed to be
     * within the overworld dimension.
     * @throws
     * Throws if the provided spawn location is out of bounds.
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @beta
     * @remarks
     * Sets the time of day.
     *
     * This function can't be called in read-only mode.
     *
     * @param timeOfDay
     * The time of day, in ticks, between 0 and 24000.
     * @throws
     * Throws if the provided time of day is not within the valid
     * range.
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /**
     * @beta
     * @remarks
     * Stops any music tracks from playing.
     *
     * This function can't be called in read-only mode.
     *
     */
    stopMusic(): void;
}

/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @remarks
     * This event fires when a button is pushed.
     * @example subscribe.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.afterEvents.buttonPush.subscribe((event) => {
     *     console.log("Button: ", event.block.typeId);
     *     console.log("Dimension: ", event.dimension.id);
     *     console.log("Source: ", event.source.typeId);
     * });
     * ```
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity dies.
     * @example subscribe.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.afterEvents.entityDie.subscribe((event) => {
     *     world.sendMessage(
     *         `${event.deadEntity.typeId} died from ${event.damageSource}!`
     *     );
     * });
     * ```
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when entity health changes in any degree.
     *
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     *
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     *
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     *
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item completes charging.
     *
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     *
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item starts charging.
     *
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a chargeable item stops charging.
     *
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     *
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     *
     */
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     *
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     * @example subscribe.js
     * ```js
     * import { world } from "@minecraft/server";
     * world.afterEvents.playerJoin.subscribe(({ playerId, playerName }) => {
     *     world.sendMessage(
     *         `Player ${playerName} (${playerId}) has just joined the world.`
     *     );
     * });
     * ```
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player leaves a world.
     * @example subscribe.js
     * ```js
     * import { world } from "@minecraft/server";
     * world.afterEvents.playerLeave.subscribe(({ playerId, playerName }) => {
     *     world.sendMessage(
     *         `Player ${playerName} (${playerId}) has just left the world.`
     *     );
     * });
     * ```
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     * @example initialSpawn.js
     * ```js
     * import { world } from "@minecraft/server";
     *
     * world.afterEvents.playerSpawn.subscribe((eventData) => {
     *     let { player, initialSpawn } = eventData;
     *     if (!initialSpawn) return;
     *
     *     // This runs when the player joins the game for the first time!
     * });
     * ```
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A pressure plate has popped back up (i.e., there are no
     * entities on the pressure plate.)
     *
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A pressure plate has pushed (at least one entity has moved
     * onto a pressure plate.)
     *
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A target block was hit.
     *
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @beta
     * @remarks
     * A trip wire was tripped.
     *
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
}

/**
 * @beta
 * A set of events that fire before an actual action occurs. In
 * most cases, you can potentially cancel or modify the
 * impending event. Note that in before events any APIs that
 * modify gameplay state will not function and will throw an
 * error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
    private constructor();
    /**
     * @remarks
     * This event fires when an item is successfully used by a
     * player.
     *
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks
     * This event fires when an item is used on a block by a
     * player.
     * @example subscribe.ts
     * ```ts
     * import {
     *     world,
     *     MinecraftBlockTypes,
     *     MinecraftItemTypes,
     *     Player,
     * } from "@minecraft/server";
     *
     * // Subscribe to the itemUseOn event before it happens
     * world.beforeEvents.itemUseOn.subscribe((event) => {
     *     const { source, block, itemStack } = event;
     *     if (!(source instanceof Player)) return;
     *
     *     source.sendMessage("You used " + itemStack.typeId + " on " + block.typeId);
     *
     *     // If the item is a diamond, set the block to be a diamond block
     *     if (itemStack.typeId === MinecraftItemTypes.diamond.id) {
     *         block.setType(MinecraftBlockTypes.diamondBlock);
     *     }
     * });
     * ```
     */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
}

/**
 * @beta
 * Contains information for block raycast hit results.
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * Block that was hit.
     *
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     *
     */
    face: Direction;
    /**
     * @remarks
     * Hit location relative to the bottom north-west corner of the
     * block.
     *
     */
    faceLocation: Vector3;
}

/**
 * @beta
 * Contains additional options for configuring a block raycast
 * query.
 */
export interface BlockRaycastOptions {
    /**
     * @remarks
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     *
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     *
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * An exact coordinate within the world, including its
 * dimension and location.
 */
export interface DimensionLocation {
    /**
     * @remarks
     * Dimension that this coordinate is associated with.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * X component of this dimension-location.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this dimension-location.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this dimension-location.
     *
     */
    z: number;
}

/**
 * @beta
 * Additional options for when damage has been applied via a
 * projectile.
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * Optional entity that fired the projectile.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * Projectile that caused damage.
     *
     */
    damagingProjectile: Entity;
}

/**
 * @beta
 * Additional descriptions and metadata for a damage event.
 */
export interface EntityApplyDamageOptions {
    /**
     * @remarks
     * Underlying cause of the damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
}

/**
 * @beta
 * Provides information about how damage has been applied to an
 * entity.
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * Cause enumeration of damage.
     *
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * Optional entity that caused the damage.
     *
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * Optional projectile that may have caused damage.
     *
     */
    damagingProjectile?: Entity;
}

/**
 * @beta
 * Contains additional options for entity effects.
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * The strength of the effect.
     *
     */
    amplifier?: number;
    /**
     * @remarks
     * If true, will show particles when effect is on the entity.
     *
     */
    showParticles?: boolean;
}

/**
 * @beta
 * Contains optional parameters for registering an entity
 * event.
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
}

/**
 * @beta
 * Contains options for selecting entities within an area.
 */
export interface EntityQueryOptions {
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    closest?: number;
    /**
     * @remarks
     * Excludes entities that match one or more of the specified
     * families.
     *
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     *
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * Excludes entities that have a name that match one of the
     * specified values.
     *
     */
    excludeNames?: string[];
    /**
     * @remarks
     * Excludes entities with a tag that matches one of the
     * specified values.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Excludes entities if they are one of the specified types.
     *
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * If specified, includes entities that match all of the
     * specified families.
     *
     */
    families?: string[];
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     */
    farthest?: number;
    /**
     * @remarks
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     *
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     *
     */
    maxDistance?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     *
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at most this level are
     * returned.
     *
     */
    maxLevel?: number;
    /**
     * @remarks
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     *
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     */
    minDistance?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     *
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at least this level are
     * returned.
     *
     */
    minLevel?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at least
     * this vertical rotation.
     *
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * Includes entities with the specified name.
     *
     */
    name?: string;
    /**
     * @remarks
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     *
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * Includes entities that match all of the specified tags.
     *
     */
    tags?: string[];
    /**
     * @remarks
     * If defined, entities that match this type are included.
     *
     */
    type?: string;
}

/**
 * @beta
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * If set to true, entities and players within this score range
     * are excluded from query results.
     *
     */
    exclude?: boolean;
    /**
     * @remarks
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     *
     */
    maxScore?: number;
    /**
     * @remarks
     * If defined, only players that have a score equal to or over
     * minScore are included.
     *
     */
    minScore?: number;
    /**
     * @remarks
     * Identifier of the scoreboard objective to filter on.
     *
     */
    objective?: string;
}

/**
 * @beta
 * Contains information for entity raycast hit results.
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * Distance from ray origin to entity bounds.
     *
     */
    distance: number;
    /**
     * @remarks
     * Entity that was hit.
     *
     */
    entity: Entity;
}

/**
 * @beta
 * Contains additional options for an entity raycast operation.
 */
export interface EntityRaycastOptions {
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     *
     */
    maxDistance?: number;
}

/**
 * @beta
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * @remarks
     * Specifies a fade overlap for music at the end of play.
     *
     */
    fade?: number;
    /**
     * @remarks
     * If set to true, this music track will play repeatedly.
     *
     */
    loop?: boolean;
    /**
     * @remarks
     * Relative volume level of the music.
     *
     */
    volume?: number;
}

/**
 * @beta
 * Additional options for how a sound plays for a player.
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * Location of the sound; if not specified, the sound is played
     * near a player.
     *
     */
    location?: Vector3;
    /**
     * @remarks
     * Optional pitch of the sound.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Optional volume of the sound.
     *
     */
    volume?: number;
}

/**
 * @beta
 * Defines a JSON structure that is used for more flexible.
 */
export interface RawMessage {
    /**
     * @remarks
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * Provides a token that will get replaced with the value of a
     * score.
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * Provides a translation token where, if the client has an
     * available resource in the players' language which matches
     * the token, will get translated on the client.
     *
     */
    translate?: string;
    with?: string[] | RawMessage;
}

/**
 * @beta
 * Provides a description of a score token to use within a raw
 * message.
 */
export interface RawMessageScore {
    /**
     * @remarks
     * Name of the score value to match.
     *
     */
    name?: string;
    /**
     * @remarks
     * Name of the score value to match.
     *
     */
    objective?: string;
}

/**
 * @beta
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * Objective to be displayed.
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * The sort order to display the objective items within.
     *
     */
    sortOrder?: ObjectiveSortOrder;
}

/**
 * @beta
 * Contains additional options for registering a script event
 * event callback.
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * Optional list of namespaces to filter inbound script event
     * messages.
     *
     */
    namespaces: string[];
}

/**
 * @beta
 * Contains additional options for teleporting an entity.
 */
export interface TeleportOptions {
    /**
     * @remarks
     * Whether to check whether blocks will block the entity after
     * teleport.
     *
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * Dimension to potentially move the entity to.  If not
     * specified, the entity is teleported within the dimension
     * that they reside.
     *
     */
    dimension?: Dimension;
    /**
     * @remarks
     * Location that the entity should be facing after teleport.
     *
     */
    facingLocation?: Vector3;
    /**
     * @remarks
     * Whether to retain the entities velocity after teleport.
     *
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * Rotation of the entity after teleport.
     *
     */
    rotation?: Vector2;
}

/**
 * @beta
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * Fade-in duration for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeInDuration: number;
    /**
     * @remarks
     * Fade-out time for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     *
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * Amount of time for the title and subtitle to stay in place,
     * in ticks. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     *
     */
    stayDuration: number;
    /**
     * @remarks
     * Optional subtitle text.
     *
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

/**
 * @beta
 * Represents a two-directional vector.
 */
export interface Vector2 {
    /**
     * @remarks
     * X component of the two-dimensional vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of the two-dimensional vector.
     *
     */
    y: number;
}

/**
 * @beta
 * Contains a description of a vector.
 */
export interface Vector3 {
    /**
     * @remarks
     * X component of this vector.
     *
     */
    x: number;
    /**
     * @remarks
     * Y component of this vector.
     *
     */
    y: number;
    /**
     * @remarks
     * Z component of this vector.
     *
     */
    z: number;
}

/**
 * @beta
 * Contains additional options for a world-level playSound
 * occurrence.
 */
export interface WorldSoundOptions {
    /**
     * @remarks
     * Pitch of the sound played at the world level.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Relative volume and space by which this sound is heard.
     *
     */
    volume?: number;
}

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CommandError extends Error {
    private constructor();
}

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

/**
 * @remarks
 * A class that provides system-level events and functions.
 *
 */
export const system: System;
/**
 * @remarks
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 *
 */
export const world: World;
