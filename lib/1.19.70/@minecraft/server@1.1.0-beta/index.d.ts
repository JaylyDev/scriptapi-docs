// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @packageDocumentation
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "1.0.0"
 * }
 * ```
 *
 */
/**
 * @beta
 * Represents a direction for expressing relative position or
 * facing.
 */
export enum Direction {
    /**
     * @beta
     * Represents an object located or facing in the down (z - 1)
     * direction.
     */
    down = 'down',
    /**
     * @beta
     * Represents an object located or facing in the east (x + 1)
     * direction.
     */
    east = 'east',
    /**
     * @beta
     * Represents an object located or facing in the north (z - 1)
     * direction.
     */
    north = 'north',
    /**
     * @beta
     * Represents an object located or facing in the south (z + 1)
     * direction.
     */
    south = 'south',
    /**
     * @beta
     * Represents an object located or facing in the up (z + 1)
     * direction.
     */
    up = 'up',
    /**
     * @beta
     * Represents an object located or facing in the west (x - 1)
     * direction.
     */
    west = 'west',
}
/**
 * @beta
 * An enumeration for the locations where scoreboard objectives
 * can be displayed.
 */
export enum DisplaySlotId {
    /**
     * @beta
     * Score for an objective is displayed below a player's
     * nametag.
     */
    belowname = 'belowname',
    /**
     * @beta
     * This objective and respective list of players is shown on
     * the Pause menu.
     */
    list = 'list',
    /**
     * @beta
     * The objective is shown on the right-hand side of the screen.
     */
    sidebar = 'sidebar',
}
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
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 */
export enum FluidType {
    /**
     * @beta
     * Represents lava as a type of fluid.
     */
    lava = 'lava',
    /**
     * @beta
     * Represents a potion as a type of fluid.
     */
    potion = 'potion',
    /**
     * @beta
     * Represents powder snow as a type of fluid.
     */
    powderSnow = 'powderSnow',
    /**
     * @beta
     * Represents water as a type of fluida.
     */
    water = 'water',
}
/**
 * @beta
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * @beta
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     */
    adventure = 'adventure',
    /**
     * @beta
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     */
    creative = 'creative',
    spectator = 'spectator',
    /**
     * @beta
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     */
    survival = 'survival',
}
export enum ItemLockMode {
    inventory = 'inventory',
    none = 'none',
    slot = 'slot',
}
export enum MessageSourceType {
    clientScript = 'clientScript',
    commandBlock = 'commandBlock',
    dialogueCommand = 'dialogueCommand',
    entityCommand = 'entityCommand',
    serverCommand = 'serverCommand',
    serverScript = 'serverScript',
}
/**
 * @beta
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 */
export enum ObjectiveSortOrder {
    /**
     * @beta
     * Objective participant list is displayed in ascending (e.g.,
     * A-Z) order.
     */
    ascending = 0,
    /**
     * @beta
     * Objective participant list is displayed in descending (e.g.,
     * Z-A) order.
     */
    descending = 1,
}
/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @beta
     * This scoreboard participant is tied to an entity.
     */
    entity = 'entity',
    /**
     * @beta
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     */
    fakePlayer = 'fakePlayer',
    /**
     * @beta
     * This scoreboard participant is tied to a player.
     */
    player = 'player',
}
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
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 */
export enum WatchdogTerminateReason {
    /**
     * @beta
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     */
    hang = 'hang',
    /**
     * @beta
     * Script runtime for a behavior pack is terminated due to a
     * stack overflow (a long, and potentially infinite) chain of
     * function calls.
     */
    stackOverflow = 'stackOverflow',
}
/**
 * @beta
 * An event that fires as players enter chat messages.
 */
export class BeforeChatEvent {
    protected constructor();
    /**
     * If set to true in a beforeChat event handler, this message
     * is not broadcast out.
     */
    cancel: boolean;
    /**
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     */
    message: string;
    /**
     * Player that sent the chat message.
     */
    sender: Player;
    /**
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     */
    sendToTargets: boolean;
    getTargets(): Player[];
    setTargets(players: Player[]): void;
}
/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 */
export class BeforeChatEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before new chat messages
     * are sent.
     * @param callback
     */
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
}
/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class BeforeDataDrivenEntityTriggerEvent {
    protected constructor();
    /**
     * If set to true, this entity event is not triggered.
     */
    cancel: boolean;
    /**
     * Entity that the event triggered on.
     */
    readonly entity: Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly id: string;
    getModifiers(): DefinitionModifier[];
    setModifiers(modifiers: DefinitionModifier[]): void;
}
/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class BeforeDataDrivenEntityTriggerEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a data driven
     * entity event is triggered.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called before a data driven
     * entity event is triggered.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void;
}
/**
 * @beta
 * Contains information regarding an explosion that has
 * happened.
 */
export class BeforeExplosionEvent {
    protected constructor();
    /**
     * If set to true, cancels the explosion event.
     */
    cancel: boolean;
    /**
     * Dimension where the explosion has occurred.
     */
    readonly dimension: Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly source: Entity;
    getImpactedBlocks(): Vector3[];
    setImpactedBlocks(blocks: Vector3[]): void;
}
/**
 * @beta
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class BeforeExplosionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called from before when an
     * explosion would occur.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
}
/**
 * @beta
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class BeforeItemDefinitionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     * @param callback
     */
    subscribe(
        callback: (arg: BeforeItemDefinitionTriggeredEvent) => void,
    ): (arg: BeforeItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a triggering of a custom
 * item definition change.
 */
export class BeforeItemDefinitionTriggeredEvent {
    protected constructor();
    /**
     * If set to true, will cancel the application of this item
     * definition change.
     */
    cancel: boolean;
    /**
     * Name of the data-driven item event that is triggering this
     * change.
     */
    readonly eventName: string;
    /**
     * The impacted item stack that is being used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Contains information related to an item being used.
 */
export class BeforeItemUseEvent {
    protected constructor();
    /**
     * If set to true, this will cancel the item use behavior.
     */
    cancel: boolean;
    /**
     * The impacted item stack that is being used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Manages callbacks that fire before an item is used.
 */
export class BeforeItemUseEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     * @param callback
     */
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an item being used on a
 * block.
 */
export class BeforeItemUseOnEvent {
    protected constructor();
    /**
     * The face of the block that an item is being used on.
     */
    readonly blockFace: Direction;
    /**
     * If set to true, this will cancel the item use behavior.
     */
    cancel: boolean;
    /**
     * X coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly faceLocationX: number;
    /**
     * Y coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly faceLocationY: number;
    /**
     * The impacted item stack that is being used on a block.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    getBlockLocation(): Vector3;
}
/**
 * @beta
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class BeforeItemUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     * @param callback
     */
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
}
/**
 * @beta
 * Contains information related to changes before a piston
 * expands or retracts.
 */
export class BeforePistonActivateEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * If this is set to true within an event handler, the piston
     * activation is canceled.
     */
    cancel: boolean;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * True if the piston is the process of expanding.
     */
    readonly isExpanding: boolean;
    /**
     * Contains additional properties and details of the piston.
     */
    readonly piston: BlockPistonComponent;
}
/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before a piston is activated.
 */
export class BeforePistonActivateEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a piston expands
     * or retracts.
     * @param callback
     */
    subscribe(callback: (arg: BeforePistonActivateEvent) => void): (arg: BeforePistonActivateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a piston expands
     * or retracts.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforePistonActivateEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a script watchdog
 * termination.
 */
export class BeforeWatchdogTerminateEvent {
    protected constructor();
    /**
     * If set to true, cancels the termination of the script
     * runtime. Note that depending on server configuration
     * settings, cancellation of the termination may not be
     * allowed.
     */
    cancel: boolean;
    /**
     * Contains the reason why a script runtime is to be
     * terminated.
     */
    readonly terminateReason: WatchdogTerminateReason;
}
/**
 * @beta
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 */
export class BeforeWatchdogTerminateEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is
     * being terminated due to a violation of the performance
     * watchdog system.
     * @param callback
     */
    subscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): (arg: BeforeWatchdogTerminateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime
     * is being terminated due to a violation of the performance
     * watchdog system.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): void;
}
/**
 * @beta
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
    protected constructor();
    /**
     * Returns the dimension that the block is within.
     */
    readonly dimension: Dimension;
    /**
     * Returns or sets whether this block has a liquid on it.
     */
    isWaterlogged: boolean;
    /**
     * Coordinates of the specified block.
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * Additional block configuration data that describes the
     * block.
     * @throws This property can throw when used.
     */
    readonly permutation: BlockPermutation;
    /**
     * Gets the type of block.
     * @throws This property can throw when used.
     */
    readonly 'type': BlockType;
    /**
     * Identifier of the type of block for this block.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * X coordinate of the block.
     */
    readonly x: number;
    /**
     * Y coordinate of the block.
     */
    readonly y: number;
    /**
     * Z coordinate of the block.
     */
    readonly z: number;
    /**
     * @remarks
     * Checks to see whether it is valid to place the specified
     * block type or block permutation, on a specified face on this
     * block
     * @param blockToPlace
     * Block type or block permutation to check placement for.
     * @param faceToPlaceOn
     * Optional specific face of this block to check placement
     * against.
     * @returns
     * Returns `true` if the block type or permutation can be
     * placed on this block, else `false`.
     * @throws This function can throw errors.
     */
    canPlace(blockToPlace: BlockPermutation | BlockType, faceToPlaceOn?: Direction): boolean;
    /**
     * @remarks
     * Gets additional configuration properties (a component) for
     * specific capabilities of particular blocks - for example, an
     * inventory component of a chest block.
     * @param componentName
     * Identifier of the component. If a namespace is not
     * specified, minecraft: is assumed.
     * @returns
     * Returns the component object if it is present on the
     * particular block.
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): any;
    /**
     * @remarks
     * Returns the net redstone power of this block.
     * @returns
     * Returns undefined if redstone power is not applicable to
     * this block.
     * @throws This function can throw errors.
     */
    getRedstonePower(): number | undefined;
    /**
     * @remarks
     * Returns a set of tags for a block.
     * @returns
     * The list of tags that the block has.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Checks to see if the permutation of this block has a
     * specific tag.
     * @param tag
     * Tag to check for.
     * @returns
     * Returns `true` if the permutation of this block has the tag,
     * else `false`.
     * @throws This function can throw errors.
     * @example check_block_tags.js
     * ```typescript
     *        import { world } from "@minecraft/server";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *
     *        console.log(`Block is dirt: ${block.hasTag("dirt")}`);
     *        console.log(`Block is wood: ${block.hasTag("wood")}`);
     *        console.log(`Block is stone: ${block.hasTag("stone")}`);
     *
     * ```
     */
    hasTag(tag: string): boolean;
    isAir(): boolean;
    isLiquid(): boolean;
    isSolid(): boolean;
    /**
     * @remarks
     * Sets the block in the dimension to the state of the
     * permutation.
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @throws This function can throw errors.
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @remarks
     * Sets the type of block.
     * @param blockType
     * Identifier of the type of block to apply - for example,
     * minecraft:powered_repeater.
     * @throws This function can throw errors.
     */
    setType(blockType: BlockType): void;
    /**
     * @remarks
     * Tries to set the block in the dimension to the state of the
     * permutation by first checking if the placement is valid.
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @returns
     * Returns `true` if the block permutation data was
     * successfully set, else `false`.
     * @throws This function can throw errors.
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
}
/**
 * @beta
 * Holds information for expressing the net size of a volume of
 * blocks.
 */
export class BlockAreaSize {
    /**
     * X size (west to east) component of this block area.
     */
    x: number;
    /**
     * Y size (down to up) of this block area size.
     */
    y: number;
    /**
     * Z size (south to north) of this block area size.
     */
    z: number;
    /**
     * @remarks
     * Creates a new BlockAreaSize object.
     * @param x
     * @param y
     * @param z
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Tests whether this block area size is equal to another
     * BlockAreaSize object.
     * @param other
     */
    equals(other: BlockAreaSize): boolean;
}
/**
 * @beta
 * Contains information regarding an event where a player
 * breaks a block.
 */
export class BlockBreakEvent extends BlockEvent {
    protected constructor();
    /**
     * Block broken in this event. Note that because this event
     * fires right after a block is broken, the block you will
     * receive will likely be of type 'minecraft:air'. See the
     * .brokenBlockPermutation property for information on this
     * block before it was broken.
     */
    readonly block: Block;
    /**
     * Returns permutation information about this block before it
     * was broken.
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * Dimension that contains the block that has been broken in
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * Player that broke the block for this event.
     */
    readonly player: Player;
}
/**
 * @beta
 * Manages callbacks that are connected to when a block is
 * broken.
 */
export class BlockBreakEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     * @param callback
     */
    subscribe(callback: (arg: BlockBreakEvent) => void): (arg: BlockBreakEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is
     * broken.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockBreakEvent) => void): void;
}
/**
 * @beta
 * Base type for components associated with blocks.
 */
// tslint:disable-next-line:no-unnecessary-class
export class BlockComponent {
    protected constructor();
}
/**
 * @beta
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
}
/**
 * @beta
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
export class BlockExplodeEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this explosion event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this explosion event.
     */
    readonly dimension: Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs, as it impacts individual blocks.
     * @param callback
     */
    subscribe(callback: (arg: BlockExplodeEvent) => void): (arg: BlockExplodeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockExplodeEvent) => void): void;
}
/**
 * @beta
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
export class BlockInventoryComponent extends BlockComponent {
    protected constructor();
    /**
     * The container which holds an {@link ItemStack}.
     * @throws This property can throw when used.
     */
    readonly container: BlockInventoryComponentContainer;
    /**
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    static readonly componentId = 'minecraft:inventory';
}
export class BlockInventoryComponentContainer extends Container {
    protected constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    clearAll(): void;
    clearItem(slot: number): void;
    getItem(slot: number): ItemStack;
    getSlot(slot: number): ContainerSlot;
    setItem(slot: number, itemStack?: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}
/**
 * @beta
 * Represents a fluid container block that currently contains
 * lava.
 */
export class BlockLavaContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative level of lava within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    fillLevel: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:lavaContainer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:lavaContainer.
     */
    static readonly componentId = 'minecraft:lavaContainer';
}
/**
 * @beta
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}). This type was introduced as of version 1.17.10.21.
 */
export class BlockPermutation {
    protected constructor();
    /**
     * The {@link BlockType} that the permutation has.
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * Creates a copy of this permutation.
     * @returns
     * A copy of the permutation.
     */
    clone(): BlockPermutation;
    /**
     * @remarks
     * Returns all available properties associated with this block.
     * @returns
     * Returns the list of all of the properties that the
     * permutation has.
     */
    getAllProperties(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * Gets a property for the permutation.
     * @param propertyName
     * @returns
     * Returns the property if the permutation has it, else `null`.
     */
    getProperty(propertyName: string): boolean | number | string | undefined;
    /**
     * @remarks
     * Creates a copy of the permutation.
     */
    getTags(): string[];
    /**
     * @remarks
     * Checks to see if the permutation has a specific tag.
     * @param tag
     * @returns
     * Returns `true` if the permutation has the tag, else `false`.
     * @example check_block_tags.js
     * ```typescript
     *        import { world } from "@minecraft/server";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *        const blockPerm = block.getPermutation();
     *
     *        console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
     *        console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
     *        console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
     *
     * ```
     */
    hasTag(tag: string): boolean;
    matches(blockName: string, properties?: Record<string, boolean | number | string>): boolean;
    withProperty(name: string, value: boolean | number | string): BlockPermutation;
    static resolve(blockName: string, properties?: Record<string, boolean | number | string>): BlockPermutation;
}
/**
 * @beta
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
export class BlockPistonComponent extends BlockComponent {
    protected constructor();
    /**
     * Whether the piston is fully expanded.
     * @throws This property can throw when used.
     */
    readonly isExpanded: boolean;
    /**
     * Whether the piston is in the process of expanding.
     * @throws This property can throw when used.
     */
    readonly isExpanding: boolean;
    /**
     * Whether the piston is in the process of expanding or
     * retracting.
     * @throws This property can throw when used.
     */
    readonly isMoving: boolean;
    /**
     * Whether the piston is fully retracted.
     * @throws This property can throw when used.
     */
    readonly isRetracted: boolean;
    /**
     * Whether the piston is in the process of retracting.
     * @throws This property can throw when used.
     */
    readonly isRetracting: boolean;
    /**
     * Identifier of this component.
     */
    readonly typeId: string;
    /**
     * Identifier of this component.
     */
    static readonly componentId = 'minecraft:piston';
    getAttachedBlocks(): Vector3[];
}
/**
 * @beta
 * Contains information regarding an event where a player
 * places a block.
 */
export class BlockPlaceEvent extends BlockEvent {
    protected constructor();
    /**
     * Block placed in this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that has been placed in
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * Player that placed the block for this event.
     */
    readonly player: Player;
}
/**
 * @beta
 * Manages callbacks that are connected to when a block is
 * placed.
 */
export class BlockPlaceEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     * @param callback
     */
    subscribe(callback: (arg: BlockPlaceEvent) => void): (arg: BlockPlaceEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is
     * placed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockPlaceEvent) => void): void;
}
/**
 * @beta
 * Represents a fluid container block that currently contains a
 * potion.
 */
export class BlockPotionContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative level of potion liquid within this block. Valid
     * values are between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    fillLevel: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:potionContainer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:potionContainer.
     */
    static readonly componentId = 'minecraft:potionContainer';
    /**
     * @remarks
     * Sets the potion type based on an item stack.
     * @param item
     * Potion to use as the type of potion for this potion
     * container.
     * @throws This function can throw errors.
     */
    setPotionType(item: ItemStack): void;
}
/**
 * @beta
 * Returns an enumeration of available block properties.
 */
// tslint:disable-next-line:no-unnecessary-class
export class BlockProperties {
    protected constructor();
    static get(propertyName: string): BlockPropertyType;
    static getAll(): BlockPropertyType[];
}
export class BlockPropertyType {
    protected constructor();
    readonly id: string;
    readonly validValues: (boolean | number | string)[];
}
/**
 * @beta
 * Represents a block that can play a record.
 */
export class BlockRecordPlayerComponent extends BlockComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:recordPlayer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:recordPlayer.
     */
    static readonly componentId = 'minecraft:recordPlayer';
    /**
     * @remarks
     * Clears the currently playing record of this record-playing
     * block.
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /**
     * @remarks
     * Returns true if the record-playing block is currently
     * playing a record.
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * Sets and plays a record based on an item type.
     * @param recordItemType
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType): void;
}
/**
 * @beta
 * Represents a block that can display text on it.
 */
export class BlockSignComponent extends BlockComponent {
    protected constructor();
    readonly text: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:sign.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:sign.
     */
    static readonly componentId = 'minecraft:sign';
}
/**
 * @beta
 * Represents a fluid container block that currently contains
 * snow.
 */
export class BlockSnowContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative level of snow within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    fillLevel: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:snowContainer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:snowContainer.
     */
    static readonly componentId = 'minecraft:snowContainer';
}
/**
 * @beta
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    protected constructor();
    /**
     * Represents whether this type of block can be waterlogged.
     */
    readonly canBeWaterlogged: boolean;
    /**
     * Block type name - for example, `minecraft:acacia_stairs`.
     */
    readonly id: string;
}
/**
 * @beta
 * Represents a fluid container block that currently contains
 * water.
 */
export class BlockWaterContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative level of water within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    fillLevel: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:waterContainer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:waterContainer.
     */
    static readonly componentId = 'minecraft:waterContainer';
    /**
     * @remarks
     * Adds an item and colors the water based on a dye item type.
     * @param itemType
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
    getCustomColor(): Color;
    setCustomColor(color: Color): void;
}
/**
 * @beta
 * Contains information related to changes to a button push.
 */
export class ButtonPushEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * Optional source that triggered the button push.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when a button is
 * pushed.
 */
export class ButtonPushEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a button is pushed.
     * @param callback
     */
    subscribe(callback: (arg: ButtonPushEvent) => void): (arg: ButtonPushEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a button is
     * pushed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ButtonPushEvent) => void): void;
}
/**
 * @beta
 * An event that fires as players enter chat messages.
 */
export class ChatEvent {
    protected constructor();
    /**
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     */
    message: string;
    /**
     * Player that sent the chat message.
     */
    sender: Player;
    /**
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     */
    sendToTargets: boolean;
    getTargets(): Player[];
}
/**
 * @beta
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when new chat messages
     * are sent.
     * @param callback
     * @example custom_command.js
     * ```typescript
     *        const chatCallback = World.events.beforeChat.subscribe((eventData) => {
     *          if (eventData.message.includes("cancel")) {
     *            // Cancel event if the message contains "cancel"
     *            eventData.canceled = true;
     *          } else {
     *            // Modify chat message being sent
     *            eventData.message = `Modified '${eventData.message}'`;
     *          }
     *        });
     *
     * ```
     */
    subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when new chat messages
     * are sent.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatEvent) => void): void;
}
/**
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    protected constructor();
    /**
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     */
    readonly successCount: number;
}
/**
 * @beta
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 */
export class Container {
    protected constructor();
    /**
     * Count of the slots in the container that are empty.
     * @throws
     * Throws if the container is invalid.
     */
    readonly emptySlotsCount: number;
    /**
     * The number of slots in this container. For example, a
     * standard single-block chest has a size of 27. Note, a
     * player's inventory container contains a total of 36 slots, 9
     * hotbar slots plus 27 inventory slots.
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
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Clears all inventory items in the container.
     * @throws
     * Throws if the container is invalid.
     */
    clearAll(): void;
    /**
     * @remarks
     * Clears a specific item at a slot within the container.
     * @param slot
     * @throws
     * Throws if the container is invalid.
     */
    clearItem(slot: number): void;
    /**
     * @remarks
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To
     * get a reference to a particular slot, see {@link
     * Container.getSlot}.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @example getItem.ts
     * ```typescript
     *        // Get a copy of the first item in the player's hotbar
     *        const inventory = player.getComponent("inventory") as EntityInventoryComponent;
     *        const itemStack = inventory.container.getItem(0);
     *
     * ```
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Returns a container slot. This acts as a reference to a slot
     * at the given index for this container.
     * @param slot
     * The index of the slot to return. This index must be within
     * the bounds of the container.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
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
     *        // Swaps an item between slots 0 and 4 in the player's inventory
     *        const inventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     *        inventory.container.swapItems(0, 4, inventory);
     *
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toSlot
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example transferItem.ts
     * ```typescript
     *        // Transfer an item from the first slot of fromPlayer's inventory to toPlayer's inventory
     *        const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent;
     *        const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent;
     *        fromInventory.container.transferItem(0, toInventory.container);
     *
     * ```
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}
/**
 * @beta
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
    protected constructor();
    /**
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    data: number;
    /**
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly isStackable: boolean;
    readonly isValid: boolean;
    /**
     * Gets or sets whether the item is kept on death.
     * @throws
     * Throws if the slot's container is invalid.
     */
    keepOnDeath: boolean;
    /**
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     * @throws
     * Throws if the slot's container is invalid.
     */
    lockMode: ItemLockMode;
    /**
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly maxAmount: number;
    /**
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * The type of the item.
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly 'type': ItemType;
    /**
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     * @throws
     * Throws if the slot's container is invalid.
     */
    readonly typeId?: string;
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     * @throws
     * Throws if the slot's container is invalid.
     */
    clone(): ItemStack;
    getItem(): ItemStack;
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     * @returns
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     * @throws
     * Throws if the slot's container is invalid.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     * @param itemStack
     * @throws
     * Throws if the slot's container is invalid.
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     * @param blockIdentifiers
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     * @param blockIdentifiers
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     * @param loreList
     * @throws
     * Throws if the slot's container is invalid.
     */
    setLore(loreList?: string[]): void;
}
/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerEvent {
    protected constructor();
    /**
     * Entity that the event triggered on.
     */
    readonly entity: Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly id: string;
    getModifiers(): DefinitionModifier[];
}
/**
 * @beta
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
export class DataDrivenEntityTriggerEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a data driven
     * entity event is triggered.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called after a data driven
     * entity event is triggered.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void;
}
/**
 * @beta
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export class DefinitionModifier {
    getComponentGroupsToAdd(): string[];
    getComponentGroupsToRemove(): string[];
    getTriggers(): Trigger[];
    setComponentGroupsToAdd(newGroups: string[]): void;
    setComponentGroupsToRemove(removedGroups: string[]): void;
    setTriggers(newTriggers: Trigger[]): void;
}
/**
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
    protected constructor();
    /**
     * Identifier of the dimension.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Creates an explosion at the specified location.
     * @param location
     * The location of the explosion.
     * @param radius
     * Radius, in blocks, of the explosion to create.
     * @param explosionOptions
     * Additional configurable options for the explosion.
     * @throws This function can throw errors.
     * @example createExplosion.ts
     * ```typescript
     *          overworld.createExplosion(targetLocation, 10, new mc.ExplosionOptions());
     * ```
     * @example createFireAndWaterExplosions.ts
     * ```typescript
     *        const explosionLoc: mc.Vector3 = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5 };
     *
     *        const fireExplosionOptions = new mc.ExplosionOptions();
     *
     *        // Explode with fire
     *        fireExplosionOptions.causesFire = true;
     *
     *        overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);
     *        const waterExplosionOptions = new mc.ExplosionOptions();
     *
     *        // Explode in water
     *        waterExplosionOptions.allowUnderwater = true;
     *
     *        const belowWaterLoc: mc.Vector3 = { x: targetLocation.x + 3, y: targetLocation.y + 1, z: targetLocation.z + 3 };
     *
     *        overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);
     *
     * ```
     * @example createNoBlockExplosion.ts
     * ```typescript
     *        const explosionOptions = new mc.ExplosionOptions();
     *
     *        // Start by exploding without breaking blocks
     *        explosionOptions.breaksBlocks = false;
     *
     *        const explodeNoBlocksLoc: mc.Vector3 = {
     *          x: Math.floor(targetLocation.x + 1),
     *          y: Math.floor(targetLocation.y + 2),
     *          z: Math.floor(targetLocation.z + 1),
     *        };
     *
     *        overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);
     *
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): void;
    /**
     * @beta
     * @remarks
     * Fills an area between begin and end with block of type
     * block.
     * @param begin
     * The lower northwest starting corner of the area.
     * @param end
     * The upper southeast ending corner of the area.
     * @param block
     * Type of block to fill the volume with.
     * @param options
     * A set of additional options, such as a matching block to
     * potentially replace this fill block with.
     * @returns
     *  Returns number of blocks placed.
     * @throws This function can throw errors.
     */
    fillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType, options?: BlockFillOptions): number;
    /**
     * @beta
     * @remarks
     * Returns a block instance at the given location. This method
     * was introduced as of version 1.17.10.21.
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location.
     * @throws This function can throw errors.
     */
    getBlock(location: Vector3): Block;
    /**
     * @beta
     * @remarks
     * Gets the first block that intersects with a vector emanating
     * from a location.
     * @param location
     * @param direction
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): Block;
    /**
     * @beta
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * @param getEntities
     * @returns
     * An entity array.
     * @throws This function can throw errors.
     * @example testThatEntityIsFeatherItem.ts
     * ```typescript
     *        const query = {
     *          type: "item",
     *          location: targetLocation,
     *        };
     *        const items = overworld.getEntities(query);
     *
     *        for (const item of items) {
     *          const itemComp = item.getComponent("item") as any;
     *
     *          if (itemComp) {
     *            if (itemComp.itemStack.id.endsWith("feather")) {
     *              console.log("Success! Found a feather", 1);
     *            }
     *          }
     *        }
     *
     * ```
     */
    getEntities(getEntities?: EntityQueryOptions): EntityIterator;
    /**
     * @beta
     * @remarks
     * Returns a set of entities at a particular location.
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
     * @param location
     * @param direction
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): Entity[];
    /**
     * @beta
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * @param getPlayers
     * @returns
     * A player array.
     * @throws This function can throw errors.
     */
    getPlayers(getPlayers?: EntityQueryOptions): PlayerIterator;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * the broader dimension.  Note that there is a maximum queue
     * of 128 asynchronous commands that can be run in a given
     * tick.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Creates a new entity (e.g., a mob) at the specified
     * location.
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
     *          // create a horse and trigger the 'ageable_grow_up' event, ensuring the horse is created as an adult
     *          overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *        const fox = overworld.spawnEntity("minecraft:fox", {
     *          x: targetLocation.x + 1,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
     *        log("Created a fox.");
     *
     *        const wolf = overworld.spawnEntity("minecraft:wolf", {
     *          x: targetLocation.x + 4,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
     *        wolf.isSneaking = true;
     *        log("Created a sneaking wolf.", 1);
     *
     * ```
     * @example trapTick.ts
     * ```typescript
     *          let ticks = 0;
     *
     *          mc.world.events.tick.subscribe((event: mc.TickEvent) => {
     *            ticks++;
     *
     *            // Minecraft runs at 20 ticks per second
     *            if (ticks % 1200 === 0) {
     *              overworld.runCommand("say Another minute passes...");
     *            }
     *          });
     * ```
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     * @param item
     * @param location
     * The location at which to create the item stack.
     * @returns
     * Newly created item stack entity at the specified location.
     * @throws This function can throw errors.
     * @example itemStacks.ts
     * ```typescript
     *        const oneItemLoc: mc.Vector3 = { x: 3, y: 2, z: 1 };
     *        const fiveItemsLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     *        const diamondPickaxeLoc: mc.Vector3 = { x: 2, y: 2, z: 4 };
     *
     *        const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);
     *        const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);
     *        const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);
     *
     *        overworld.spawnItem(oneEmerald, oneItemLoc);
     *        overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
     *        overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
     *
     * ```
     * @example spawnItem.ts
     * ```typescript
     *          const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1, 0);
     *
     *          overworld.spawnItem(featherItem, targetLocation);
     *          log("New feather created!");
     * ```
     */
    spawnItem(item: ItemStack, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of additional, customizable variables that can be
     * adjusted for this particle emitter.
     * @returns
     * Newly created entity at the specified location.
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables: MolangVariableMap): void;
}
/**
 * @beta
 * For block properties that take a direction, provides a
 * structured way to specify the direction of a block property.
 */
export class DirectionBlockProperty {
    protected constructor();
    /**
     * Name of the property.
     */
    readonly name: string;
    /**
     * Value of the block property.
     */
    value: Direction;
    getValidValues(): Direction[];
}
/**
 * @beta
 * Class used in conjunction with {@link PropertyRegistry} to
 * define dynamic properties that can be used on entities of a
 * specified type or at the global World- level.
 */
export class DynamicPropertiesDefinition {
    /**
     * @remarks
     * Defines a boolean dynamic property.
     * @param identifier
     * @throws This function can throw errors.
     */
    defineBoolean(identifier: string): void;
    /**
     * @remarks
     * Defines a number dynamic property.
     * @param identifier
     * @throws This function can throw errors.
     */
    defineNumber(identifier: string): void;
    /**
     * @remarks
     * Defines a string dynamic property.
     * @param identifier
     * @param maxLength
     * @throws This function can throw errors.
     */
    defineString(identifier: string, maxLength: number): void;
}
/**
 * @beta
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    protected constructor();
    /**
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * Gets the player-friendly name of this effect.
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * Gets the entire specified duration, in ticks, of this
     * effect.
     * @throws This property can throw when used.
     */
    readonly duration: number;
}
/**
 * @beta
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddEvent {
    protected constructor();
    /**
     * Additional properties and details of the effect.
     */
    effect: Effect;
    /**
     * Additional variant number for the effect.
     */
    effectState: number;
    /**
     * Entity that the effect is being added to.
     */
    entity: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EffectAddEvent) => void, options?: EntityEventOptions): (arg: EffectAddEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddEvent) => void): void;
}
/**
 * @beta
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
    protected constructor();
    /**
     * @remarks
     * Identifier name of this effect type.
     * @returns
     * Identifier of the effect type.
     */
    getName(): string;
}
/**
 * @beta
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
export class Enchantment {
    /**
     * The level of this enchantment instance.
     */
    level: number;
    /**
     * The enchantment type of this instance.
     */
    readonly 'type': EnchantmentType;
    /**
     * @remarks
     * Creates a new particular type of enchantment configuration.
     * @param enchantmentType
     * Type of the enchantment.
     * @param level
     * Level of the enchantment.
     */
    constructor(enchantmentType: EnchantmentType, level?: number);
}
/**
 * @beta
 * This class represents a collection of enchantments that can
 * be applied to an item.
 */
export class EnchantmentList implements Iterable<Enchantment> {
    /**
     * The item slot/type that this collection is applied to.
     */
    readonly slot: number;
    /**
     * @remarks
     * Creates a new EnchantmentList.
     * @param enchantmentSlot
     */
    constructor(enchantmentSlot: number);
    [Symbol.iterator](): Iterator<Enchantment>;
    /**
     * @remarks
     * Attempts to add the enchantment to this collection. Returns
     * true if successful.
     * @param enchantment
     */
    addEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns whether or not the provided EnchantmentInstance can
     * be added to this collection.
     * @param enchantment
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns an enchantment associated with a type.
     * @param enchantmentType
     */
    getEnchantment(enchantmentType: EnchantmentType): Enchantment;
    /**
     * @remarks
     * If this collection has an EnchantmentInstance with type,
     * returns the level of the enchantment. Returns 0 if not
     * present.
     * @param enchantmentType
     */
    hasEnchantment(enchantmentType: EnchantmentType): number;
    next(): IteratorResult<Enchantment>;
    /**
     * @remarks
     * Removes an EnchantmentInstance with type from this
     * collection if present.
     * @param enchantmentType
     */
    removeEnchantment(enchantmentType: EnchantmentType): void;
}
/**
 * @beta
 * This enum represents the item slot or type that an
 * enchantment can be applied to.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EnchantmentSlot {
    protected constructor();
    static readonly all = -1;
    static readonly armorFeet = 4;
    static readonly armorHead = 1;
    static readonly armorLegs = 8;
    static readonly armorTorso = 2;
    static readonly axe = 512;
    static readonly bow = 32;
    static readonly carrotStick = 8192;
    static readonly cosmeticHead = 262144;
    static readonly crossbow = 65536;
    static readonly elytra = 16384;
    static readonly fishingRod = 4096;
    static readonly flintsteel = 256;
    static readonly gArmor = 15;
    static readonly gDigging = 3648;
    static readonly gTool = 131520;
    static readonly hoe = 64;
    static readonly none = 0;
    static readonly pickaxe = 1024;
    static readonly shears = 128;
    static readonly shield = 131072;
    static readonly shovel = 2048;
    static readonly spear = 32768;
    static readonly sword = 16;
}
/**
 * @beta
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    protected constructor();
    /**
     * The name of the enchantment type.
     */
    readonly id: string;
    /**
     * The maximum level this type of enchantment can have.
     */
    readonly maxLevel: number;
}
/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    protected constructor();
    /**
     * @beta
     * Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     */
    isSneaking: boolean;
    /**
     * @beta
     * Current location of the entity.
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @beta
     * Given name of the entity.
     */
    nameTag: string;
    /**
     * @beta
     * Returns a scoreboard identity that represents this entity.
     * @throws This property can throw when used.
     */
    readonly scoreboard: ScoreboardIdentity;
    /**
     * @beta
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking.
     * @throws This property can throw when used.
     */
    readonly target: Entity;
    /**
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:skeleton'.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @beta
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @param showParticles
     * @throws This function can throw errors.
     * @example addEffect.js
     * ```typescript
     *        const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
     *        const villagerLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     *        const villager = test.spawn(villagerId, villagerLoc);
     *        const duration = 20;
     *
     *        villager.addEffect(MinecraftEffectTypes.poison, duration, 1);
     *
     *
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *        const fox = overworld.spawnEntity("minecraft:fox", {
     *          x: targetLocation.x + 1,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
     *        log("Created a fox.");
     *
     *        const wolf = overworld.spawnEntity("minecraft:wolf", {
     *          x: targetLocation.x + 4,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
     *        wolf.isSneaking = true;
     *        log("Created a sneaking wolf.", 1);
     *
     *
     * ```
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @beta
     * @remarks
     * Adds a specified tag to an entity.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Applies a set of damage to an entity.
     * @param amount
     * Amount of damage to apply.
     * @param source
     * Additional option about the source of damage, which may add
     * additional effects or spur additional behaviors on this
     * entity.
     * @throws This function can throw errors.
     */
    applyDamage(amount: number, source?: EntityDamageSource): boolean;
    applyImpulse(vector: Vector3): void;
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    clearVelocity(): void;
    /**
     * @beta
     * @remarks
     * Extinguishes the fire if the entity is on fire. Note that
     * you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     * @param useEffects
     * Whether to show any visual effects connected to the
     * extinguishing.
     * @throws This function can throw errors.
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     * @param options
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): Block;
    /**
     * @beta
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): IEntityComponent;
    /**
     * @beta
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): IEntityComponent[];
    /**
     * @beta
     * @remarks
     * Returns a property value.
     * @param identifier
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect;
    /**
     * @beta
     * @remarks
     * Returns a set of effects applied to this item.
     * @returns
     * List of effects.
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    /**
     * @beta
     * @remarks
     * Returns a potential set of entities from the direction that
     * this entity is looking at.
     * @param options
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[];
    getHeadLocation(): Vector3;
    getRotation(): XYRotation;
    /**
     * @beta
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    getVelocity(): Vector3;
    getViewDirection(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @beta
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @beta
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @beta
     * @remarks
     * Removes a specified tag from an entity.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
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
     * Sets a specified property to a value.
     * @param identifier
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @beta
     * @remarks
     * Sets an entity on fire (if it is not in water or rain). Note
     * that you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     * @param seconds
     * Length of time to set the entity on fire.
     * @param useEffects
     * @throws This function can throw errors.
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Sets the main rotation of the entity.
     * @param degreesX
     * @param degreesY
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected entity to a new location
     * @param location
     * New location for the entity.
     * @param dimension
     * Dimension to move the selected entity to.
     * @param xRotation
     * X rotation of the entity after teleportation.
     * @param yRotation
     * Y rotation of the entity after teleportation.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleport(
        location: Vector3,
        dimension: Dimension,
        xRotation: number,
        yRotation: number,
        keepVelocity?: boolean,
    ): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected entity to a new location, and will
     * have the entity facing a specified location.
     * @param location
     * New location for the entity.
     * @param dimension
     * Dimension to move the selected entity to.
     * @param facingLocation
     * Location that this entity will be facing.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleportFacing(location: Vector3, dimension: Dimension, facingLocation: Vector3, keepVelocity?: boolean): void;
    /**
     * @beta
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
}
/**
 * @beta
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
export class EntityAddRiderComponent extends IEntityComponent {
    protected constructor();
    /**
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:addrider.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:addrider.
     */
    static readonly componentId = 'minecraft:addrider';
}
/**
 * @beta
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
export class EntityAgeableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * Event to run when this entity grows up.
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * Identifier of this component. Should always be
     * minecraft:ageable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:ageable.
     */
    static readonly componentId = 'minecraft:ageable';
    getDropItems(): string[];
    getFeedItems(): EntityDefinitionFeedItem[];
}
/**
 * @beta
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
export class EntityBreathableComponent extends IEntityComponent {
    protected constructor();
    /**
     * If true, this entity can breathe in air.
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /**
     * If true, this entity can breathe in lava.
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /**
     * If true, this entity can breathe in solid blocks.
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /**
     * If true, this entity can breathe in water.
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /**
     * If true, this entity will have visible bubbles while in
     * water.
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /**
     * Time in seconds to recover breath to maximum.
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /**
     * Time in seconds between suffocation damage.
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /**
     * Time in seconds the entity can hold its breath.
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:breathable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:breathable.
     */
    static readonly componentId = 'minecraft:breathable';
    getBreatheBlocks(): BlockPermutation[];
    getNonBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * Sets the current air supply of the entity.
     * @param value
     * New air supply for the entity.
     * @throws This function can throw errors.
     */
    setAirSupply(value: number): void;
}
/**
 * @beta
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
export class EntityCanClimbComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:can_climb.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:can_climb.
     */
    static readonly componentId = 'minecraft:can_climb';
}
/**
 * @beta
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
export class EntityCanFlyComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:can_fly.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:can_fly.
     */
    static readonly componentId = 'minecraft:can_fly';
}
/**
 * @beta
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
export class EntityCanPowerJumpComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:can_power_jump.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:can_power_jump.
     */
    static readonly componentId = 'minecraft:can_power_jump';
}
/**
 * @beta
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (sheep, llama, shulker).
 */
export class EntityColorComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:color.
     */
    readonly typeId: string;
    /**
     * The palette color value of the entity.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:color.
     */
    static readonly componentId = 'minecraft:color';
}
/**
 * @beta
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
    protected constructor();
    /**
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     */
    readonly growth: number;
    /**
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     */
    readonly item: string;
}
export class EntityDieEvent {
    protected constructor();
    readonly damageSource: EntityDamageSource;
    readonly deadEntity: Entity;
}
export class EntityDieEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityDieEvent) => void, options?: EntityEventOptions): (arg: EntityDieEvent) => void;
    unsubscribe(callback: (arg: EntityDieEvent) => void): void;
}
/**
 * @beta
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
export class EntityFireImmuneComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:fire_immune.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:fire_immune.
     */
    static readonly componentId = 'minecraft:fire_immune';
}
/**
 * @beta
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
export class EntityFloatsInLiquidComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:floats_in_liquid.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:floats_in_liquid.
     */
    static readonly componentId = 'minecraft:floats_in_liquid';
}
/**
 * @beta
 * Represents the flying speed of an entity.
 */
export class EntityFlyingSpeedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:flying_speed.
     */
    readonly typeId: string;
    /**
     * Speed while flying value of the entity.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:flying_speed.
     */
    static readonly componentId = 'minecraft:flying_speed';
}
/**
 * @beta
 * Defines how much friction affects this entity.
 */
export class EntityFrictionModifierComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:friction_modifier.
     */
    readonly typeId: string;
    /**
     * The higher the number, the more the friction affects this
     * entity. A value of 1.0 means regular friction, while 2.0
     * means twice as much.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:friction_modifier.
     */
    static readonly componentId = 'minecraft:friction_modifier';
}
/**
 * @beta
 * Sets the offset from the ground that the entity is actually
 * at.
 */
export class EntityGroundOffsetComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:ground_offset.
     */
    readonly typeId: string;
    /**
     * The value of the entity's offset from the terrain, in
     * blocks.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:ground_offset.
     */
    static readonly componentId = 'minecraft:ground_offset';
}
/**
 * @beta
 * Defines the interactions with this entity for healing it.
 */
export class EntityHealableComponent extends IEntityComponent {
    protected constructor();
    /**
     * A set of filters for when these Healable items would apply.
     * @throws This property can throw when used.
     */
    readonly filters: FilterGroup;
    /**
     * Determines if an item can be used regardless of the entity
     * being at full health.
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:healable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:healable.
     */
    static readonly componentId = 'minecraft:healable';
    getFeedItems(): FeedItem[];
}
/**
 * @beta
 * Defines the health properties of an entity.
 */
export class EntityHealthComponent extends IEntityComponent {
    protected constructor();
    /**
     * Read-only. Returns the current value of health for the
     * entity.
     * @throws This property can throw when used.
     */
    readonly current: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:health.
     */
    readonly typeId: string;
    /**
     * Value for health as defined through entity components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:health.
     */
    static readonly componentId = 'minecraft:health';
    /**
     * @remarks
     * Resets the current health value of the entity to its default
     * value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the current health of the entity to its maximum
     * value.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the current health to the minimum value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current health of the entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}
/**
 * @beta
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
export class EntityHitEvent {
    protected constructor();
    /**
     * Entity that made a hit/melee attack.
     */
    readonly entity: Entity;
    /**
     * Block that was hit by the attack, or undefined if the hit
     * attack did not hit a block. If both hitEntity and hitBlock
     * are undefined, then the entity basically swiped into the
     * air.
     */
    readonly hitBlock?: Block;
    /**
     * Entity that was hit by the attack, or undefined if the hit
     * attack did not hit an entity. If both hitEntity and hitBlock
     * are undefined, then the entity basically swiped into the
     * air.
     */
    readonly hitEntity?: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
export class EntityHitEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits
     * another entity.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an entity getting hurt by
 * another entity.
 */
export class EntityHurtEvent {
    protected constructor();
    /**
     * Describes the amount of damage caused.
     */
    readonly damage: number;
    /**
     * Source information on the entity that may have applied this
     * damage.
     */
    readonly damageSource: EntityDamageSource;
    /**
     * Entity that was hurt.
     */
    readonly hurtEntity: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity is hurt.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
}
/**
 * @beta
 * Defines this entity's inventory properties.
 */
export class EntityInventoryComponent extends IEntityComponent {
    protected constructor();
    /**
     * Number of slots that this entity can gain per extra
     * strength.
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * If true, the contents of this inventory can be removed by a
     * hopper.
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * Defines the container for this entity.
     * @throws This property can throw when used.
     */
    readonly container: InventoryComponentContainer;
    /**
     * Type of container this entity has.
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * Number of slots the container has.
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * If true, the entity will not drop it's inventory on death.
     * @throws This property can throw when used.
     */
    readonly 'private': boolean;
    /**
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    static readonly componentId = 'minecraft:inventory';
}
/**
 * @beta
 * When added, this component signifies that this entity is a
 * baby.
 */
export class EntityIsBabyComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_baby.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_baby.
     */
    static readonly componentId = 'minecraft:is_baby';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * charged.
 */
export class EntityIsChargedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_charged.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_charged.
     */
    static readonly componentId = 'minecraft:is_charged';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
export class EntityIsChestedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_chested.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_chested.
     */
    static readonly componentId = 'minecraft:is_chested';
}
/**
 * @beta
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
export class EntityIsDyableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_dyeable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_dyeable.
     */
    static readonly componentId = 'minecraft:is_dyeable';
}
/**
 * @beta
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_hidden_when_invisible.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_hidden_when_invisible.
     */
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}
/**
 * @beta
 * When added, this component signifies that this entity this
 * currently on fire.
 */
export class EntityIsIgnitedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_ignited.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_ignited.
     */
    static readonly componentId = 'minecraft:is_ignited';
}
/**
 * @beta
 * When added, this component signifies that this entity is an
 * illager captain.
 */
export class EntityIsIllagerCaptainComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_illager_captain.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_illager_captain.
     */
    static readonly componentId = 'minecraft:is_illager_captain';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently saddled.
 */
export class EntityIsSaddledComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_saddled.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_saddled.
     */
    static readonly componentId = 'minecraft:is_saddled';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently shaking.
 */
export class EntityIsShakingComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_shaking.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_shaking.
     */
    static readonly componentId = 'minecraft:is_shaking';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently sheared.
 */
export class EntityIsShearedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_sheared.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_sheared.
     */
    static readonly componentId = 'minecraft:is_sheared';
}
/**
 * @beta
 * When added, this component signifies that this entity can be
 * stacked.
 */
export class EntityIsStackableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stackable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stackable.
     */
    static readonly componentId = 'minecraft:is_stackable';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently stunned.
 */
export class EntityIsStunnedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stunned.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stunned.
     */
    static readonly componentId = 'minecraft:is_stunned';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently tamed.
 */
export class EntityIsTamedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_tamed.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_tamed.
     */
    static readonly componentId = 'minecraft:is_tamed';
}
/**
 * @beta
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 */
export class EntityItemComponent extends IEntityComponent {
    protected constructor();
    /**
     * Item stack represented by this entity in the world.
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    /**
     * Identifier of this component.
     */
    readonly typeId: string;
    /**
     * Identifier of this component.
     */
    static readonly componentId = 'minecraft:item';
}
/**
 * @beta
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class EntityIterator implements Iterable<Entity> {
    protected constructor();
    [Symbol.iterator](): Iterator<Entity>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Entity in the iteration.
     */
    next(): IteratorResult<Entity>;
}
/**
 * @beta
 * Defines the base movement speed in lava of this entity.
 */
export class EntityLavaMovementComponent extends IEntityComponent {
    protected constructor();
    /**
     * Read-only. Returns the current value of movement speed on
     * lava for the entity.
     * @throws This property can throw when used.
     */
    readonly current: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:lava_movement.
     */
    readonly typeId: string;
    /**
     * Value for movement speed on lava as defined through entity
     * components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:lava_movement.
     */
    static readonly componentId = 'minecraft:lava_movement';
    /**
     * @remarks
     * Resets the current movement speed on lava for the entity to
     * its default value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the movement speed on lava to the maximum value for
     * the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the movement speed on lava speed to the minimum
     * value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of movement speed on lava for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}
/**
 * @beta
 * Allows this entity to be leashed and defines the conditions
 * and events for this entity when is leashed.
 */
export class EntityLeashableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:leashable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:leashable.
     */
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * Leashes this entity to another entity.
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     * @throws This function can throw errors.
     */
    unleash(): void;
}
/**
 * @beta
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
export class EntityMarkVariantComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:mark_variant.
     */
    readonly typeId: string;
    /**
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:mark_variant.
     */
    static readonly componentId = 'minecraft:mark_variant';
}
/**
 * @beta
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
export class EntityMountTamingComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:mount_taming.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:mount_taming.
     */
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    setTamed(showParticles: boolean): void;
}
/**
 * @beta
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
export class EntityMovementAmphibiousComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.amphibious.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.amphibious.
     */
    static readonly componentId = 'minecraft:movement.amphibious';
}
/**
 * @beta
 * This component accents the movement of an entity.
 */
export class EntityMovementBasicComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.basic.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.basic.
     */
    static readonly componentId = 'minecraft:movement.basic';
}
/**
 * @beta
 * Defines the general movement speed of this entity.
 */
export class EntityMovementComponent extends IEntityComponent {
    protected constructor();
    /**
     * Read-only. Returns the current value of default movement
     * speed for the entity.
     * @throws This property can throw when used.
     */
    readonly current: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.
     */
    readonly typeId: string;
    /**
     * Value for default movement speed as defined through entity
     * components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.
     */
    static readonly componentId = 'minecraft:movement';
    /**
     * @remarks
     * Resets the current default movement speed value for the
     * entity to the default value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the default movement speed to the maximum value for
     * the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the default movement speed to the minimum value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of default movement speed for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}
/**
 * @beta
 * When added, this move control causes the mob to fly.
 */
export class EntityMovementFlyComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.fly.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.fly.
     */
    static readonly componentId = 'minecraft:movement.fly';
}
/**
 * @beta
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
export class EntityMovementGenericComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.generic.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.generic.
     */
    static readonly componentId = 'minecraft:movement.generic';
}
/**
 * @beta
 * When added, this movement control allows the mob to glide.
 */
export class EntityMovementGlideComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Speed in effect when the entity is turning.
     * @throws This property can throw when used.
     */
    readonly speedWhenTurning: number;
    /**
     * Start speed during a glide.
     * @throws This property can throw when used.
     */
    readonly startSpeed: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.glide.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.glide.
     */
    static readonly componentId = 'minecraft:movement.glide';
}
/**
 * @beta
 * When added, this move control causes the mob to hover.
 */
export class EntityMovementHoverComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.hover.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.hover.
     */
    static readonly componentId = 'minecraft:movement.hover';
}
/**
 * @beta
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 */
export class EntityMovementJumpComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.jump.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.jump.
     */
    static readonly componentId = 'minecraft:movement.jump';
}
/**
 * @beta
 * When added, this move control causes the mob to hop as it
 * moves.
 */
export class EntityMovementSkipComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.skip.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.skip.
     */
    static readonly componentId = 'minecraft:movement.skip';
}
/**
 * @beta
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 */
export class EntityMovementSwayComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Amplitude of the sway motion.
     * @throws This property can throw when used.
     */
    readonly swayAmplitude: number;
    /**
     * Amount of sway frequency.
     * @throws This property can throw when used.
     */
    readonly swayFrequency: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.sway.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.sway.
     */
    static readonly componentId = 'minecraft:movement.sway';
}
/**
 * @beta
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
export class EntityNavigationClimbComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.climb.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.climb.
     */
    static readonly componentId = 'minecraft:navigation.climb';
}
/**
 * @beta
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 */
export class EntityNavigationFloatComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.float.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.float.
     */
    static readonly componentId = 'minecraft:navigation.float';
}
/**
 * @beta
 * Allows this entity to generate paths in the air (for
 * example, like Minecraft parrots do.)
 */
export class EntityNavigationFlyComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.fly.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.fly.
     */
    static readonly componentId = 'minecraft:navigation.fly';
}
/**
 * @beta
 * Allows this entity to generate paths by walking, swimming,
 * flying and/or climbing around and jumping up and down a
 * block.
 */
export class EntityNavigationGenericComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.generic.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.generic.
     */
    static readonly componentId = 'minecraft:navigation.generic';
}
/**
 * @beta
 * Allows this entity to generate paths in the air (for
 * example, like the Minecraft Bees do.) Keeps them from
 * falling out of the skies and doing predictive movement.
 */
export class EntityNavigationHoverComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.hover.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.hover.
     */
    static readonly componentId = 'minecraft:navigation.hover';
}
/**
 * @beta
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 */
export class EntityNavigationWalkComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.swim.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.swim.
     */
    static readonly componentId = 'minecraft:navigation.walk';
}
/**
 * @beta
 * When present on an entity, this entity is on fire.
 */
export class EntityOnFireComponent extends IEntityComponent {
    protected constructor();
    /**
     * The number of ticks remaining before the fire goes out.
     */
    readonly onFireTicksRemaining: number;
    /**
     * Should be 'minecraft:onfire'.
     */
    readonly typeId: string;
    static readonly componentId = 'minecraft:onfire';
}
/**
 * @beta
 * Sets the distance through which the entity can push through.
 */
export class EntityPushThroughComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:push_through.
     */
    readonly typeId: string;
    /**
     * The value of the entity's push-through, in blocks.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:push_through.
     */
    static readonly componentId = 'minecraft:push_through';
}
/**
 * @beta
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 */
export class EntityRideableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Zero-based index of the seat that can used to control this
     * entity.
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /**
     * Determines whether interactions are not supported if the
     * entity is crouching.
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /**
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /**
     * If true, this entity will be picked when looked at by the
     * rider.
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /**
     * Number of seats for riders defined for this entity.
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:rideable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:rideable.
     */
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     * @param rider
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /**
     * @remarks
     * A string-list of entity types that this entity can support
     * as riders.
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * Gets a list of positions and number of riders for each
     * position for entities riding this entity.
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}
/**
 * @beta
 * Sets the entity's visual size.
 */
export class EntityScaleComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:scale.
     */
    readonly typeId: string;
    /**
     * The value of the scale. 1.0 means the entity will appear at
     * the scale they are defined in their model. Higher numbers
     * make the entity bigger.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:scale.
     */
    static readonly componentId = 'minecraft:scale';
}
/**
 * @beta
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 */
export class EntitySkinIdComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:skin_id.
     */
    readonly typeId: string;
    /**
     * The identifier of the skin. By convention, 0 is the
     * identifier of the base skin.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:skin_id.
     */
    static readonly componentId = 'minecraft:skin_id';
}
/**
 * @beta
 * Contains data related to an entity spawning within the
 * world.
 */
export class EntitySpawnEvent {
    protected constructor();
    /**
     * Entity that was spawned.
     */
    entity: Entity;
}
/**
 * @beta
 * Registers a script-based event handler for handling what
 * happens when an entity spawns.
 */
export class EntitySpawnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity spawns.
     * @param callback
     * Function that handles the spawn event.
     */
    subscribe(callback: (arg: EntitySpawnEvent) => void): (arg: EntitySpawnEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntitySpawnEvent) => void): void;
}
/**
 * @beta
 * Defines the entity's strength to carry items.
 */
export class EntityStrengthComponent extends IEntityComponent {
    protected constructor();
    /**
     * Maximum strength of this entity, as defined in the entity
     * type definition.
     * @throws This property can throw when used.
     */
    readonly max: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:strength.
     */
    readonly typeId: string;
    /**
     * Current strength value of this entity, after any effects or
     * component updates are applied.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:strength.
     */
    static readonly componentId = 'minecraft:strength';
}
/**
 * @beta
 * Defines the rules for a mob to be tamed by the player.
 */
export class EntityTameableComponent extends IEntityComponent {
    protected constructor();
    /**
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     * @throws This property can throw when used.
     */
    readonly probability: number;
    /**
     * Event to run when this entity becomes tamed.
     * @throws This property can throw when used.
     */
    readonly tameEvent: Trigger;
    /**
     * Identifier of this component. Should always be
     * minecraft:tameable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:tameable.
     */
    static readonly componentId = 'minecraft:tameable';
    getTameItems(): string[];
    /**
     * @remarks
     * Tames this entity.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(): boolean;
}
/**
 * @beta
 * Represents information about a type of entity.
 */
export class EntityType {
    protected constructor();
    /**
     * Identifier of this entity type - for example,
     * 'minecraft:skeleton'.
     */
    readonly id: string;
}
/**
 * @beta
 * An iterator that loops through available entity types.
 */
export class EntityTypeIterator implements Iterable<EntityType> {
    protected constructor();
    [Symbol.iterator](): Iterator<EntityType>;
    next(): IteratorResult<EntityType>;
}
/**
 * @beta
 * Used for accessing all entity types currently available for
 * use within the world.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityTypes {
    protected constructor();
    /**
     * @remarks
     * Retrieves an entity type using a string-based identifier.
     * @param identifier
     */
    static get(identifier: string): EntityType;
    /**
     * @remarks
     * Retrieves an iterator of all entity types within this world.
     */
    static getAll(): EntityTypeIterator;
}
/**
 * @beta
 * Defines the general movement speed underwater of this
 * entity.
 */
export class EntityUnderwaterMovementComponent extends IEntityComponent {
    protected constructor();
    /**
     * Read-only. Returns the current value of movement speed
     * underwater for the entity.
     * @throws This property can throw when used.
     */
    readonly current: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:underwater_movement.
     */
    readonly typeId: string;
    /**
     * Value for movement speed underwater as defined through
     * entity components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:underwater_movement.
     */
    static readonly componentId = 'minecraft:underwater_movement';
    /**
     * @remarks
     * Resets the current movement speed underwater for the entity
     * to the default value implied by the current component state
     * of the entity.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the movement speed underwater to the maximum value
     * for the entity, as determined by the set of components that
     * are on the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the movement speed underwater to the minimum value as
     * defined by the component state of this entity.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of movement speed underwater for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}
/**
 * @beta
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 */
export class EntityVariantComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:variant.
     */
    readonly typeId: string;
    /**
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:variant.
     */
    static readonly componentId = 'minecraft:variant';
}
/**
 * @beta
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
export class EntityWantsJockeyComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:wants_jockey.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:wants_jockey.
     */
    static readonly componentId = 'minecraft:wants_jockey';
}
/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class Events {
    protected constructor();
    /**
     * This event fires before a chat message is broadcast or
     * delivered. The event can be canceled, and the message can
     * also be updated.
     */
    readonly beforeChat: BeforeChatEventSignal;
    /**
     * This event is fired before the triggering of an entity event
     * that updates the component definition state of an entity.
     * Within this event, you can cancel or shape the impacted
     * components and event triggers.
     */
    readonly beforeDataDrivenEntityTriggerEvent: BeforeDataDrivenEntityTriggerEventSignal;
    /**
     * This event is fired before an explosion occurs.
     */
    readonly beforeExplosion: BeforeExplosionEventSignal;
    /**
     * For custom items, this event is triggered before the set of
     * defined components for the item change in response to a
     * triggered event. Note that this event is only fired for
     * custom data-driven items.
     */
    readonly beforeItemDefinitionEvent: BeforeItemDefinitionEventSignal;
    /**
     * This event fires before an item is used by an entity or
     * player.
     */
    readonly beforeItemUse: BeforeItemUseEventSignal;
    /**
     * This event fires before an item is used on a block by an
     * entity or player.
     */
    readonly beforeItemUseOn: BeforeItemUseOnEventSignal;
    /**
     * Fires before a piston is activated.
     */
    readonly beforePistonActivate: BeforePistonActivateEventSignal;
    /**
     * This event fires for a block that is broken by a player.
     */
    readonly blockBreak: BlockBreakEventSignal;
    /**
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     */
    readonly blockExplode: BlockExplodeEventSignal;
    /**
     * This event fires for a block that is placed by a player.
     */
    readonly blockPlace: BlockPlaceEventSignal;
    /**
     * This event fires when a button is pushed.
     */
    readonly buttonPush: ButtonPushEventSignal;
    /**
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     */
    readonly chat: ChatEventSignal;
    /**
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal;
    /**
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     */
    readonly effectAdd: EffectAddEventSignal;
    readonly entityDie: EntityDieEventSignal;
    /**
     * This event fires when an entity hits (makes a melee attack)
     * and potentially impacts another entity or block.
     */
    readonly entityHit: EntityHitEventSignal;
    /**
     * This event fires when an entity is hurt (takes damage).
     */
    readonly entityHurt: EntityHurtEventSignal;
    /**
     * This event fires when an entity is spawned.
     */
    readonly entitySpawn: EntitySpawnEventSignal;
    /**
     * This event is fired after an explosion occurs.
     */
    readonly explosion: ExplosionEventSignal;
    /**
     * This event fires when a chargeable item completes charging.
     */
    readonly itemCompleteCharge: ItemCompleteChargeEventSignal;
    /**
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     */
    readonly itemDefinitionEvent: ItemDefinitionEventSignal;
    /**
     * This event fires when a chargeable item is released from
     * charging.
     */
    readonly itemReleaseCharge: ItemReleaseChargeEventSignal;
    /**
     * This event fires when a chargeable item starts charging.
     */
    readonly itemStartCharge: ItemStartChargeEventSignal;
    /**
     * This event fires when any particular item is starting to be
     * used by an entity or player.
     */
    readonly itemStartUseOn: ItemStartUseOnEventSignal;
    /**
     * This event fires when a chargeable item stops charging.
     */
    readonly itemStopCharge: ItemStopChargeEventSignal;
    /**
     * This event fires when any particular item is ending being
     * used by an entity or player.
     */
    readonly itemStopUseOn: ItemStopUseOnEventSignal;
    /**
     * This event fires when any particular item is used by an
     * entity or player.
     */
    readonly itemUse: ItemUseEventSignal;
    /**
     * This event fires when any particular item is used on a block
     * by an entity or player.
     */
    readonly itemUseOn: ItemUseOnEventSignal;
    /**
     * This event fires when a lever activates or is deactivated.
     */
    readonly leverActivate: LeverActionEventSignal;
    /**
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     */
    readonly messageReceive: ServerMessageSignal;
    /**
     * This event fires when a piston expands or retracts.
     */
    readonly pistonActivate: PistonActivateEventSignal;
    /**
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     */
    readonly playerJoin: PlayerJoinEventSignal;
    /**
     * This event fires when a player leaves a world.
     */
    readonly playerLeave: PlayerLeaveEventSignal;
    /**
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     */
    readonly playerSpawn: PlayerSpawnEventSignal;
    /**
     * This event fires when a projectile hits an entity or block.
     */
    readonly projectileHit: ProjectileHitEventSignal;
    /**
     * This event will be triggered when the weather changes within
     * Minecraft.
     */
    readonly weatherChange: WeatherChangeEventSignal;
    /**
     * This event fires when the script environment is initialized
     * on a World. In addition, you can register dynamic properties
     * within the scope of a world Initialize event.
     */
    readonly worldInitialize: WorldInitializeEventSignal;
}
/**
 * @beta
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionEvent {
    protected constructor();
    /**
     * Dimension where the explosion has occurred.
     */
    readonly dimension: Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly source: Entity;
    getImpactedBlocks(): Vector3[];
}
/**
 * @beta
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     * @param callback
     */
    subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionEvent) => void): void;
}
/**
 * @beta
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    protected constructor();
    /**
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     */
    readonly healAmount: number;
    /**
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     */
    readonly item: string;
    getEffects(): FeedItemEffect[];
}
/**
 * @beta
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
    protected constructor();
    /**
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     */
    readonly amplifier: number;
    /**
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     */
    readonly chance: number;
    /**
     * Gets the duration, in ticks, of this effect.
     */
    readonly duration: number;
    /**
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     */
    readonly name: string;
}
/**
 * @beta
 * Represents a set of filters for when an event should occur.
 */
// tslint:disable-next-line:no-unnecessary-class
export class FilterGroup {
    protected constructor();
}
/**
 * @beta
 * Represents constants related to fluid containers.
 */
// tslint:disable-next-line:no-unnecessary-class
export class FluidContainer {
    protected constructor();
    /**
     * Constant that represents the maximum fill level of a fluid
     * container.
     */
    static readonly maxFillLevel = 6;
    /**
     * Constant that represents the minimum fill level of a fluid
     * container.
     */
    static readonly minFillLevel = 0;
}
/**
 * @beta
 * Base interface that defines components associated with an
 * entity.
 */
export class IEntityComponent {
    protected constructor();
    /**
     * Identifier of the type of entity component.
     */
    readonly typeId: string;
}
export class InventoryComponentContainer extends Container {
    protected constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    clearAll(): void;
    clearItem(slot: number): void;
    getItem(slot: number): ItemStack;
    getSlot(slot: number): ContainerSlot;
    setItem(slot: number, itemStack?: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}
/**
 * @beta
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteChargeEvent {
    protected constructor();
    /**
     * Returns the item stack that has completed charging.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}
/**
 * @beta
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemCompleteChargeEvent) => void): (arg: ItemCompleteChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteChargeEvent) => void): void;
}
/**
 * @beta
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
export class ItemCooldownComponent {
    protected constructor();
    /**
     * Represents the cooldown category that this item is
     * associated with.
     * @throws This property can throw when used.
     */
    readonly cooldownCategory: string;
    /**
     * Amount of time, in ticks, that remain for this item
     * cooldown.
     * @throws This property can throw when used.
     */
    readonly cooldownTicks: number;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:cooldown'.
     */
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * Starts a new cooldown period for this item.
     * @param player
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}
/**
 * @beta
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class ItemDefinitionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     * @param callback
     */
    subscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): (arg: ItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a custom item having a data
 * definition change being triggered.
 */
export class ItemDefinitionTriggeredEvent {
    protected constructor();
    /**
     * Name of the data-driven item event that is triggering this
     * change.
     */
    readonly eventName: string;
    /**
     * The impacted item stack that is being used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}
/**
 * @beta
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 */
export class ItemDurabilityComponent {
    protected constructor();
    /**
     * Returns the current damage level of this particular item.
     */
    damage: number;
    /**
     * Represents the amount of damage that this item can take
     * before breaking.
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:durability'.
     */
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking level.
     * @param unbreaking
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be greater than
     * 0.
     * @throws This function can throw errors.
     */
    getDamageChance(unbreaking?: number): number;
    getDamageRange(): NumberRange;
}
/**
 * @beta
 * When present on an item, this item has applied enchantment
 * effects. Note that this component only applies to
 * data-driven items.
 */
export class ItemEnchantsComponent {
    protected constructor();
    /**
     * Returns a collection of the enchantments applied to this
     * item stack.
     */
    enchantments: EnchantmentList;
    /**
     * Identifier of this component.
     */
    static readonly componentId = 'minecraft:enchantments';
    /**
     * @remarks
     * Removes all enchantments applied to this item stack.
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
}
/**
 * @beta
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
export class ItemFoodComponent {
    protected constructor();
    /**
     * If true, the player can always eat this item (even when not
     * hungry).
     * @throws This property can throw when used.
     */
    readonly canAlwaysEat: boolean;
    /**
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     * @throws This property can throw when used.
     */
    readonly nutrition: number;
    /**
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     * @throws This property can throw when used.
     */
    readonly saturationModifier: number;
    /**
     * When specified, converts the active item to the one
     * specified by this property.
     * @throws This property can throw when used.
     */
    readonly usingConvertsTo: string;
    /**
     * Identifier of this component. Should always be
     * 'minecraft:food'.
     */
    static readonly componentId = 'minecraft:food';
}
/**
 * @beta
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 */
export class ItemReleaseChargeEvent {
    protected constructor();
    /**
     * Returns the item stack that triggered this item event.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}
/**
 * @beta
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 */
export class ItemReleaseChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemReleaseChargeEvent) => void): (arg: ItemReleaseChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void;
}
/**
 * @beta
 * Represents a collection of all of the available item types
 * in Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class Items {
    protected constructor();
    /**
     * @remarks
     * Returns an item type given an item type identifier.
     * @param itemId
     * Type of the item to return.
     */
    static get(itemId: string): ItemType;
}
/**
 * @beta
 * Defines a collection of items.
 */
export class ItemStack {
    /**
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     * @throws
     * Throws if the value is outside the range of 1-255.
     */
    amount: number;
    /**
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     */
    readonly isStackable: boolean;
    /**
     * Gets or sets whether the item is kept on death.
     */
    keepOnDeath: boolean;
    /**
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     */
    lockMode: ItemLockMode;
    /**
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     */
    readonly maxAmount: number;
    /**
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     * @throws
     * Throws if the length exceeds 255 characters.
     */
    nameTag?: string;
    /**
     * The type of the item.
     */
    readonly 'type': ItemType;
    /**
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     */
    readonly typeId: string;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     * @param itemType
     * Type of item to create. See the {@link MinecraftItemTypes}
     * enumeration for a list of standard item types in Minecraft
     * experiences.
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
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     */
    clone(): ItemStack;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed. If the component is not present on the item
     * stack, undefined is returned.
     * @example durability.ts
     * ```typescript
     *        // Get the maximum durability of a custom sword item
     *        const itemStack = new ItemStack("custom:sword");
     *        const durability = itemStack.getComponent("minecraft:durability") as ItemDurabilityComponent;
     *        const maxDurability = durability.maxDurability;
     *
     * ```
     */
    getComponent(componentId: string): any;
    /**
     * @remarks
     * Returns all components that are both present on this item
     * stack and supported by the API.
     */
    getComponents(): any[];
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     * @returns
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
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
     * @param itemStack
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     * @param blockIdentifiers
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @example example.ts
     * ```typescript
     *        // Creates a diamond pickaxe that can destroy cobblestone and obsidian
     *        const specialPickaxe = new ItemStack("minecraft:diamond_pickaxe");
     *        specialPickaxe.setCanDestroy(["minecraft:cobblestone", "minecraft:obsidian"]);
     *
     * ```
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     * @param blockIdentifiers
     * @throws
     * Throws if any of the provided block identifiers are invalid.
     * @example example.ts
     * ```typescript
     *        // Creates a gold block that can be placed on grass and dirt
     *        const specialGoldBlock = new ItemStack("minecraft:gold_block");
     *        specialPickaxe.setCanPlaceOn(["minecraft:grass", "minecraft:dirt"]);
     *
     * ```
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     * @param loreList
     * @example multilineLore.ts
     * ```typescript
     *        // Set the lore of an item to multiple lines of text
     *        const itemStack = new ItemStack("minecraft:diamond_sword");
     *        itemStack.setLore(["Line 1", "Line 2", "Line 3"]);
     *
     * ```
     */
    setLore(loreList?: string[]): void;
    /**
     * @remarks
     * Triggers an item type event. For custom items, a number of
     * events are defined in an items' definition for key item
     * behaviors.
     * @param eventName
     * Name of the item type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     */
    triggerEvent(eventName: string): void;
}
/**
 * @beta
 * Contains information related to a chargeable item starting
 * to be charged.
 */
export class ItemStartChargeEvent {
    protected constructor();
    /**
     * The impacted item stack that is starting to be charged.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}
/**
 * @beta
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 */
export class ItemStartChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemStartChargeEvent) => void): (arg: ItemStartChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * starts charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartChargeEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an item being used on a
 * block.
 */
export class ItemStartUseOnEvent {
    protected constructor();
    /**
     * The face of the block that an item is being used on.
     */
    readonly blockFace: Direction;
    /**
     * The impacted item stack that is starting to be used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    getBlockLocation(): Vector3;
    getBuildBlockLocation(): Vector3;
}
/**
 * @beta
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemStartUseOnEvent) => void): (arg: ItemStartUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 */
export class ItemStopChargeEvent {
    protected constructor();
    /**
     * The impacted item stack that is stopping being charged.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}
/**
 * @beta
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 */
export class ItemStopChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemStopChargeEvent) => void): (arg: ItemStopChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * stops charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopChargeEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an item that has stopped
 * being used on a block.
 */
export class ItemStopUseOnEvent {
    protected constructor();
    /**
     * The impacted item stack that is being used on a block.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    getBlockLocation(): Vector3;
}
/**
 * @beta
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemStopUseOnEvent) => void): (arg: ItemStopUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseOnEvent) => void): void;
}
/**
 * @beta
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    protected constructor();
    /**
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     */
    readonly id: string;
}
/**
 * @beta
 * An iterator over a set of available item types.
 */
export class ItemTypeIterator implements Iterable<ItemType> {
    protected constructor();
    [Symbol.iterator](): Iterator<ItemType>;
    next(): IteratorResult<ItemType>;
}
/**
 * @beta
 * Returns the set of item types registered within Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class ItemTypes {
    protected constructor();
    /**
     * @remarks
     * Returns a specific item type, if available within Minecraft.
     * @param itemId
     */
    static get(itemId: string): ItemType;
    /**
     * @remarks
     * Retrieves all available item types registered within
     * Minecraft.
     */
    static getAll(): ItemTypeIterator;
}
/**
 * @beta
 * Contains information related to an item being used.
 */
export class ItemUseEvent {
    protected constructor();
    /**
     * The impacted item stack that is being used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     * @param callback
     */
    subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an item being used on a
 * block.
 */
export class ItemUseOnEvent {
    protected constructor();
    /**
     * The face of the block that an item is being used on.
     */
    readonly blockFace: Direction;
    /**
     * X coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly faceLocationX: number;
    /**
     * Y coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly faceLocationY: number;
    /**
     * The impacted item stack that is being used on a block.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    getBlockLocation(): Vector3;
}
/**
 * @beta
 * Manages callbacks that are connected to an item being used
 * on a block event.
 */
export class ItemUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
}
/**
 * @beta
 * Contains information related to changes to a lever
 * activating or deactivating.
 */
export class LeverActionEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * True if the lever is activated (that is, transmitting
     * power).
     */
    readonly isPowered: boolean;
    /**
     * Optional player that triggered the lever activation.
     */
    readonly player: Player;
}
/**
 * @beta
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 */
export class LeverActionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a lever is moved
     * (activates or deactivates).
     * @param callback
     */
    subscribe(callback: (arg: LeverActionEvent) => void): (arg: LeverActionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a lever is moved
     * (activates or deactivates).
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionEvent) => void): void;
}
/**
 * @beta
 * A specific currently-internal event used for passing
 * messages from client to server.
 */
export class MessageReceiveEvent {
    protected constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
    readonly sourceType: MessageSourceType;
}
/**
 * @beta
 * Contains definitions of standard Minecraft and Minecraft
 * Education Edition block types.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftBlockTypes {
    protected constructor();
    /**
     * Represents an acacia button within Minecraft.
     */
    static readonly acaciaButton: BlockType;
    /**
     * Represents an acacia door within Minecraft.
     */
    static readonly acaciaDoor: BlockType;
    /**
     * Represents an acacia fence gate within Minecraft.
     */
    static readonly acaciaFenceGate: BlockType;
    static readonly acaciaHangingSign: BlockType;
    /**
     * Represents an acacia pressure plate within Minecraft.
     */
    static readonly acaciaPressurePlate: BlockType;
    /**
     * Represents a set of acacia stairs within Minecraft.
     */
    static readonly acaciaStairs: BlockType;
    /**
     * Represents an acacia standing sign within Minecraft.
     */
    static readonly acaciaStandingSign: BlockType;
    /**
     * Represents an acacia trapdoor within Minecraft.
     */
    static readonly acaciaTrapdoor: BlockType;
    /**
     * Represents an acacia wall sign within Minecraft.
     */
    static readonly acaciaWallSign: BlockType;
    /**
     * Represents an activator rail within Minecraft.
     */
    static readonly activatorRail: BlockType;
    /**
     * Represents an empty space (air) within Minecraft.
     */
    static readonly air: BlockType;
    /**
     * Represents an allow block within Minecraft.
     */
    static readonly allow: BlockType;
    /**
     * Represents an amethyst block within Minecraft.
     */
    static readonly amethystBlock: BlockType;
    /**
     * Represents a cluster of amethyst within Minecraft.
     */
    static readonly amethystCluster: BlockType;
    /**
     * Represents ancient debris within Minecraft.
     */
    static readonly ancientDebris: BlockType;
    /**
     * Represents andesite stairs within Minecraft.
     */
    static readonly andesiteStairs: BlockType;
    /**
     * Represents an anvil within Minecraft.
     */
    static readonly anvil: BlockType;
    /**
     * Represents an azalea flowering plant within Minecraft.
     */
    static readonly azalea: BlockType;
    /**
     * Represents azalea leaves within Minecraft.
     */
    static readonly azaleaLeaves: BlockType;
    /**
     * Represents flowered azalea leaves within Minecraft.
     */
    static readonly azaleaLeavesFlowered: BlockType;
    /**
     * Represents a bamboo tree within Minecraft.
     */
    static readonly bamboo: BlockType;
    static readonly bambooBlock: BlockType;
    static readonly bambooButton: BlockType;
    static readonly bambooDoor: BlockType;
    static readonly bambooDoubleSlab: BlockType;
    static readonly bambooFence: BlockType;
    static readonly bambooFenceGate: BlockType;
    static readonly bambooHangingSign: BlockType;
    static readonly bambooMosaic: BlockType;
    static readonly bambooMosaicDoubleSlab: BlockType;
    static readonly bambooMosaicSlab: BlockType;
    static readonly bambooMosaicStairs: BlockType;
    static readonly bambooPlanks: BlockType;
    static readonly bambooPressurePlate: BlockType;
    /**
     * Represents a bamboo sapling within Minecraft.
     */
    static readonly bambooSapling: BlockType;
    static readonly bambooSlab: BlockType;
    static readonly bambooStairs: BlockType;
    static readonly bambooStandingSign: BlockType;
    static readonly bambooTrapdoor: BlockType;
    static readonly bambooWallSign: BlockType;
    /**
     * Represents a barrel within Minecraft.
     */
    static readonly barrel: BlockType;
    /**
     * Represents an invisible but logical barrier within
     * Minecraft.
     */
    static readonly barrier: BlockType;
    /**
     * Represents a basalt block within Minecraft.
     */
    static readonly basalt: BlockType;
    /**
     * Represents a beacon within Minecraft.
     */
    static readonly beacon: BlockType;
    /**
     * Represents a bed within Minecraft.
     */
    static readonly bed: BlockType;
    /**
     * Represents a bedrock block within Minecraft.
     */
    static readonly bedrock: BlockType;
    /**
     * Represents a beehive within Minecraft.
     */
    static readonly beehive: BlockType;
    /**
     * Represents a bee nest within Minecraft.
     */
    static readonly beeNest: BlockType;
    /**
     * Represents a beetroot vegetable within Minecraft.
     */
    static readonly beetroot: BlockType;
    /**
     * Represents a bell within Minecraft.
     */
    static readonly bell: BlockType;
    /**
     * Represents a big dripleaf plant within Minecraft.
     */
    static readonly bigDripleaf: BlockType;
    /**
     * Represents a birch button within Minecraft.
     */
    static readonly birchButton: BlockType;
    /**
     * Represents a birch door within Minecraft.
     */
    static readonly birchDoor: BlockType;
    /**
     * Represents a birch fence gate within Minecraft.
     */
    static readonly birchFenceGate: BlockType;
    static readonly birchHangingSign: BlockType;
    /**
     * Represents a birch pressure plate within Minecraft.
     */
    static readonly birchPressurePlate: BlockType;
    /**
     * Represents a birch stairs block within Minecraft.
     */
    static readonly birchStairs: BlockType;
    /**
     * Represents a birch standing sign within Minecraft.
     */
    static readonly birchStandingSign: BlockType;
    /**
     * Represents a birch trapdoor within Minecraft.
     */
    static readonly birchTrapdoor: BlockType;
    /**
     * Represents a birch wall sign within Minecraft.
     */
    static readonly birchWallSign: BlockType;
    /**
     * Represents a black candle within Minecraft.
     */
    static readonly blackCandle: BlockType;
    /**
     * Represents a black candle cake within Minecraft.
     */
    static readonly blackCandleCake: BlockType;
    /**
     * Represents a black glazed terracotta block within Minecraft.
     */
    static readonly blackGlazedTerracotta: BlockType;
    /**
     * Represents a blackstone block within Minecraft.
     */
    static readonly blackstone: BlockType;
    /**
     * Represents a blackstone double slab within Minecraft.
     */
    static readonly blackstoneDoubleSlab: BlockType;
    /**
     * Represents a blackstone slab within Minecraft.
     */
    static readonly blackstoneSlab: BlockType;
    /**
     * Represents blackstone stairs within Minecraft.
     */
    static readonly blackstoneStairs: BlockType;
    /**
     * Represents a blackstone wall within Minecraft.
     */
    static readonly blackstoneWall: BlockType;
    static readonly blackWool: BlockType;
    /**
     * Represents a blast furnace within Minecraft.
     */
    static readonly blastFurnace: BlockType;
    /**
     * Represents a blue candle within Minecraft.
     */
    static readonly blueCandle: BlockType;
    /**
     * Represents a blue candle cake within Minecraft.
     */
    static readonly blueCandleCake: BlockType;
    /**
     * Represents a blue glazed terracotta block within Minecraft.
     */
    static readonly blueGlazedTerracotta: BlockType;
    /**
     * Represents a blue ice block within Minecraft.
     */
    static readonly blueIce: BlockType;
    static readonly blueWool: BlockType;
    /**
     * Represents a bone block within Minecraft.
     */
    static readonly boneBlock: BlockType;
    /**
     * Represents an unbreakable border block within Minecraft.
     */
    static readonly bookshelf: BlockType;
    /**
     * Represents a border block within Minecraft.
     */
    static readonly borderBlock: BlockType;
    /**
     * Represents a brewing stand within Minecraft.
     */
    static readonly brewingStand: BlockType;
    /**
     * Represents a block of brick within Minecraft.
     */
    static readonly brickBlock: BlockType;
    /**
     * Represents brick stairs within Minecraft.
     */
    static readonly brickStairs: BlockType;
    /**
     * Represents a brown candle within Minecraft.
     */
    static readonly brownCandle: BlockType;
    /**
     * Represents a brown candle cake within Minecraft.
     */
    static readonly brownCandleCake: BlockType;
    /**
     * Represents a brown glazed terracotta block within Minecraft.
     */
    static readonly brownGlazedTerracotta: BlockType;
    /**
     * Represents a brown mushroom within Minecraft.
     */
    static readonly brownMushroom: BlockType;
    /**
     * Represents a block of brown mushroom within Minecraft.
     */
    static readonly brownMushroomBlock: BlockType;
    static readonly brownWool: BlockType;
    /**
     * Represents a column of bubbles within Minecraft.
     */
    static readonly bubbleColumn: BlockType;
    /**
     * Represents a block of budding amethyst within Minecraft.
     */
    static readonly buddingAmethyst: BlockType;
    /**
     * Represents a cactus within Minecraft.
     */
    static readonly cactus: BlockType;
    /**
     * Represents a cake within Minecraft.
     */
    static readonly cake: BlockType;
    /**
     * Represents a calcite block within Minecraft.
     */
    static readonly calcite: BlockType;
    /**
     * Represents a camera within Minecraft Education Edition. It
     * is not available in Minecraft Bedrock Edition.
     */
    static readonly camera: BlockType;
    /**
     * Represents a campfire within Minecraft.
     */
    static readonly campfire: BlockType;
    /**
     * Represents a candle within Minecraft.
     */
    static readonly candle: BlockType;
    /**
     * Represents a cake with candles within Minecraft.
     */
    static readonly candleCake: BlockType;
    /**
     * Represents a carpet within Minecraft.
     */
    static readonly carpet: BlockType;
    /**
     * Represents carrots within Minecraft.
     */
    static readonly carrots: BlockType;
    /**
     * Represents a cartography table block within Minecraft.
     */
    static readonly cartographyTable: BlockType;
    /**
     * Represents a carved pumpkin within Minecraft.
     */
    static readonly carvedPumpkin: BlockType;
    /**
     * Represents a cauldron within Minecraft.
     */
    static readonly cauldron: BlockType;
    /**
     * Represents a set of cave vines within Minecraft.
     */
    static readonly caveVines: BlockType;
    /**
     * Represents the body of a set of cave vines with berries
     * within Minecraft.
     */
    static readonly caveVinesBodyWithBerries: BlockType;
    /**
     * Represents the head of a set of cave vines with berries
     * within Minecraft.
     */
    static readonly caveVinesHeadWithBerries: BlockType;
    /**
     * Represents a metallic chain within Minecraft.
     */
    static readonly chain: BlockType;
    /**
     * Represents a block that gives off heat but not light, within
     * Minecraft Education Edition or Bedrock Edition with
     * Education features.
     */
    static readonly chainCommandBlock: BlockType;
    /**
     * Represents a chemical heat block within Minecraft.
     */
    static readonly chemicalHeat: BlockType;
    /**
     * Represents a chemistry table within Minecraft Education
     * experiences.
     */
    static readonly chemistryTable: BlockType;
    /**
     * Represents a chest within Minecraft.
     */
    static readonly chest: BlockType;
    static readonly chiseledBookshelf: BlockType;
    /**
     * Represents a set of chiseled deepslate within Minecraft.
     */
    static readonly chiseledDeepslate: BlockType;
    /**
     * Represents a block of chiseled nether bricks within
     * Minecraft.
     */
    static readonly chiseledNetherBricks: BlockType;
    /**
     * Represents a block of chiseled polished blackstone within
     * Minecraft.
     */
    static readonly chiseledPolishedBlackstone: BlockType;
    /**
     * Represents a chorus flower within Minecraft.
     */
    static readonly chorusFlower: BlockType;
    /**
     * Represents a chorus plant within Minecraft.
     */
    static readonly chorusPlant: BlockType;
    /**
     * Represents a block of clay within Minecraft.
     */
    static readonly clay: BlockType;
    static readonly clientRequestPlaceholderBlock: BlockType;
    /**
     * Represents a block of solid coal within Minecraft.
     */
    static readonly coalBlock: BlockType;
    /**
     * Represents a block with embedded coal ore within Minecraft.
     */
    static readonly coalOre: BlockType;
    /**
     * Represents a block of cobbled deepslate within Minecraft.
     */
    static readonly cobbledDeepslate: BlockType;
    /**
     * Represents a double slab of cobbled deepslate within
     * Minecraft.
     */
    static readonly cobbledDeepslateDoubleSlab: BlockType;
    /**
     * Represents a slab of deepslate within Minecraft.
     */
    static readonly cobbledDeepslateSlab: BlockType;
    /**
     * Represents cobbled deepslate stairs within Minecraft.
     */
    static readonly cobbledDeepslateStairs: BlockType;
    /**
     * Represents a cobbled deepslate wall within Minecraft.
     */
    static readonly cobbledDeepslateWall: BlockType;
    /**
     * Represents a block of cobblestone within Minecraft.
     */
    static readonly cobblestone: BlockType;
    /**
     * Represents a wall of cobblestone within Minecraft.
     */
    static readonly cobblestoneWall: BlockType;
    /**
     * Represents a set of cocoa beans (typically on a tree) within
     * Minecraft.
     */
    static readonly cocoa: BlockType;
    /**
     * Represents blue/purple torches within Minecraft.
     */
    static readonly coloredTorchBp: BlockType;
    /**
     * Represents red/green torches within Minecraft.
     */
    static readonly coloredTorchRg: BlockType;
    /**
     * Represents a block that can run commands within Minecraft.
     */
    static readonly commandBlock: BlockType;
    /**
     * Represents a composter block within Minecraft.
     */
    static readonly composter: BlockType;
    /**
     * Represents a block of concrete powder within Minecraft.
     */
    static readonly concrete: BlockType;
    /**
     * Represents a block of concrete powder within Minecraft.
     */
    static readonly concretePowder: BlockType;
    /**
     * Represents a conduit block within Minecraft.
     */
    static readonly conduit: BlockType;
    /**
     * Represents a solid block of copper within Minecraft.
     */
    static readonly copperBlock: BlockType;
    /**
     * Represents a block with embedded copper ore within
     * Minecraft.
     */
    static readonly copperOre: BlockType;
    /**
     * Represents coral within Minecraft.
     */
    static readonly coral: BlockType;
    /**
     * Represents a solid block of coral within Minecraft.
     */
    static readonly coralBlock: BlockType;
    /**
     * Represents a fan formation of coral within Minecraft.
     */
    static readonly coralFan: BlockType;
    /**
     * Represents a fan formation of dead coral within Minecraft.
     */
    static readonly coralFanDead: BlockType;
    /**
     * Represents a hanging fan formation of coral within
     * Minecraft.
     */
    static readonly coralFanHang: BlockType;
    /**
     * Represents an alternate hanging fan formation of coral (#2)
     * within Minecraft.
     */
    static readonly coralFanHang2: BlockType;
    /**
     * Represents an alternate hanging fan formation of coral (#3)
     * within Minecraft.
     */
    static readonly coralFanHang3: BlockType;
    /**
     * Represents a block of cracked deepslate bricks within
     * Minecraft.
     */
    static readonly crackedDeepslateBricks: BlockType;
    /**
     * Represents tiles of cracked deepslate within Minecraft.
     */
    static readonly crackedDeepslateTiles: BlockType;
    /**
     * Represents a block of cracked nether bricks within
     * Minecraft.
     */
    static readonly crackedNetherBricks: BlockType;
    /**
     * Represents a block of cracked and polished blackstone bricks
     * within Minecraft.
     */
    static readonly crackedPolishedBlackstoneBricks: BlockType;
    /**
     * Represents a crafting table within Minecraft.
     */
    static readonly craftingTable: BlockType;
    /**
     * Represents a crimson button within Minecraft.
     */
    static readonly crimsonButton: BlockType;
    /**
     * Represents a crimson door within Minecraft.
     */
    static readonly crimsonDoor: BlockType;
    /**
     * Represents a crimson double slab within Minecraft.
     */
    static readonly crimsonDoubleSlab: BlockType;
    /**
     * Represents a crimson fence within Minecraft.
     */
    static readonly crimsonFence: BlockType;
    /**
     * Represents a crimson fence gate within Minecraft.
     */
    static readonly crimsonFenceGate: BlockType;
    /**
     * Represents a crimson fungus within Minecraft.
     */
    static readonly crimsonFungus: BlockType;
    static readonly crimsonHangingSign: BlockType;
    /**
     * Represents crimson hyphae within Minecraft.
     */
    static readonly crimsonHyphae: BlockType;
    /**
     * Represents crimson nylium within Minecraft.
     */
    static readonly crimsonNylium: BlockType;
    /**
     * Represents a set of crimson planks within Minecraft.
     */
    static readonly crimsonPlanks: BlockType;
    /**
     * Represents a crimson pressure plate within Minecraft.
     */
    static readonly crimsonPressurePlate: BlockType;
    /**
     * Represents a set of crimson roots within Minecraft.
     */
    static readonly crimsonRoots: BlockType;
    /**
     * Represents a crimson slab within Minecraft.
     */
    static readonly crimsonSlab: BlockType;
    /**
     * Represents a set of crimson stairs within Minecraft.
     */
    static readonly crimsonStairs: BlockType;
    /**
     * Represents a crimson standing sign within Minecraft.
     */
    static readonly crimsonStandingSign: BlockType;
    /**
     * Represents a crimson stem within Minecraft.
     */
    static readonly crimsonStem: BlockType;
    /**
     * Represents a crimson trapdoor within Minecraft.
     */
    static readonly crimsonTrapdoor: BlockType;
    /**
     * Represents a crimson wall sign within Minecraft.
     */
    static readonly crimsonWallSign: BlockType;
    /**
     * Represents crying obsidian within Minecraft.
     */
    static readonly cryingObsidian: BlockType;
    /**
     * Represents a cut copper block within Minecraft.
     */
    static readonly cutCopper: BlockType;
    /**
     * Represents a cut copper slab within Minecraft.
     */
    static readonly cutCopperSlab: BlockType;
    /**
     * Represents a set of cut copper stairs within Minecraft.
     */
    static readonly cutCopperStairs: BlockType;
    /**
     * Represents a cyan-colored candle within Minecraft.
     */
    static readonly cyanCandle: BlockType;
    /**
     * Represents a cake with a cyan-colored candle within
     * Minecraft.
     */
    static readonly cyanCandleCake: BlockType;
    /**
     * Represents a block of cyan-colored glazed terracotta within
     * Minecraft.
     */
    static readonly cyanGlazedTerracotta: BlockType;
    static readonly cyanWool: BlockType;
    /**
     * Represents a dark oak button within Minecraft.
     */
    static readonly darkOakButton: BlockType;
    /**
     * Represents a dark oak door within Minecraft.
     */
    static readonly darkOakDoor: BlockType;
    /**
     * Represents a dark oak fence gate within Minecraft.
     */
    static readonly darkOakFenceGate: BlockType;
    static readonly darkOakHangingSign: BlockType;
    /**
     * Represents a dark oak pressure plate within Minecraft.
     */
    static readonly darkOakPressurePlate: BlockType;
    /**
     * Represents a set of dark oak stairs within Minecraft.
     */
    static readonly darkOakStairs: BlockType;
    /**
     * Represents a dark oak standing sign within Minecraft.
     */
    static readonly darkoakStandingSign: BlockType;
    /**
     * Represents a dark oak trapdoor within Minecraft.
     */
    static readonly darkOakTrapdoor: BlockType;
    /**
     * Represents a dark oak wall sign within Minecraft.
     */
    static readonly darkoakWallSign: BlockType;
    /**
     * Represents a set of dark prismarine stairs within Minecraft.
     */
    static readonly darkPrismarineStairs: BlockType;
    /**
     * Represents a daylight detector within Minecraft.
     */
    static readonly daylightDetector: BlockType;
    /**
     * Represents an inverted daylight detector within Minecraft.
     */
    static readonly daylightDetectorInverted: BlockType;
    /**
     * Represents a dead bush within Minecraft.
     */
    static readonly deadbush: BlockType;
    static readonly decoratedPot: BlockType;
    /**
     * Represents a block of deepslate within Minecraft.
     */
    static readonly deepslate: BlockType;
    /**
     * Represents a double slab of deepslate brick within
     * Minecraft.
     */
    static readonly deepslateBrickDoubleSlab: BlockType;
    /**
     * Represents a block of deepslate bricks within Minecraft.
     */
    static readonly deepslateBricks: BlockType;
    /**
     * Represents a slab of deepslate brick within Minecraft.
     */
    static readonly deepslateBrickSlab: BlockType;
    /**
     * Represents a set of deepslate brick stairs within Minecraft.
     */
    static readonly deepslateBrickStairs: BlockType;
    /**
     * Represents a deepslate brick wall within Minecraft.
     */
    static readonly deepslateBrickWall: BlockType;
    /**
     * Represents a block of deepslate with embedded coal ore
     * within Minecraft.
     */
    static readonly deepslateCoalOre: BlockType;
    /**
     * Represents a block of deepslate with embedded copper ore
     * within Minecraft.
     */
    static readonly deepslateCopperOre: BlockType;
    /**
     * Represents a block of deepslate with embedded diamond ore
     * within Minecraft.
     */
    static readonly deepslateDiamondOre: BlockType;
    /**
     * Represents a block of deepslate with embedded emerald ore
     * within Minecraft.
     */
    static readonly deepslateEmeraldOre: BlockType;
    /**
     * Represents a block of deepslate with embedded gold ore
     * within Minecraft.
     */
    static readonly deepslateGoldOre: BlockType;
    /**
     * Represents a block of deepslate with embedded iron ore
     * within Minecraft.
     */
    static readonly deepslateIronOre: BlockType;
    /**
     * Represents a block of deepslate with embedded lapis lazuli
     * ore within Minecraft.
     */
    static readonly deepslateLapisOre: BlockType;
    /**
     * Represents a block of deepslate with embedded redstone ore
     * within Minecraft.
     */
    static readonly deepslateRedstoneOre: BlockType;
    /**
     * Represents a double slab of tiled deepslate within
     * Minecraft.
     */
    static readonly deepslateTileDoubleSlab: BlockType;
    /**
     * Represents a set of deepslate tiles within Minecraft.
     */
    static readonly deepslateTiles: BlockType;
    /**
     * Represents a slab of deepslate tiles within Minecraft.
     */
    static readonly deepslateTileSlab: BlockType;
    /**
     * Represents a set of deepslate tile stairs within Minecraft.
     */
    static readonly deepslateTileStairs: BlockType;
    /**
     * Represents a wall of deepslate tile within Minecraft.
     */
    static readonly deepslateTileWall: BlockType;
    /**
     * Represents a logical but generally invisible Deny logic
     * block within Minecraft.
     */
    static readonly deny: BlockType;
    /**
     * Represents a detector rail within Minecraft.
     */
    static readonly detectorRail: BlockType;
    /**
     * Represents a block of diamond within Minecraft.
     */
    static readonly diamondBlock: BlockType;
    /**
     * Represents a block with embedded diamond ore within
     * Minecraft.
     */
    static readonly diamondOre: BlockType;
    /**
     * Represents a set of diorite stairs within Minecraft.
     */
    static readonly dioriteStairs: BlockType;
    /**
     * Represents a block of dirt within Minecraft.
     */
    static readonly dirt: BlockType;
    /**
     * Represents a block of dirt with roots within Minecraft.
     */
    static readonly dirtWithRoots: BlockType;
    /**
     * Represents a dispenser within Minecraft.
     */
    static readonly dispenser: BlockType;
    /**
     * Represents a slab of double cut copper within Minecraft.
     */
    static readonly doubleCutCopperSlab: BlockType;
    /**
     * Represents a double plant within Minecraft.
     */
    static readonly doublePlant: BlockType;
    static readonly doubleStoneBlockSlab: BlockType;
    static readonly doubleStoneBlockSlab2: BlockType;
    static readonly doubleStoneBlockSlab3: BlockType;
    static readonly doubleStoneBlockSlab4: BlockType;
    /**
     * Represents a double slab of stone within Minecraft.
     */
    static readonly doubleStoneSlab: BlockType;
    /**
     * Represents an alternate double slab of stone (#2) within
     * Minecraft.
     */
    static readonly doubleStoneSlab2: BlockType;
    /**
     * Represents an alternate double slab of stone (#3) within
     * Minecraft.
     */
    static readonly doubleStoneSlab3: BlockType;
    /**
     * Represents an alternate double slab of stone (#4) within
     * Minecraft.
     */
    static readonly doubleStoneSlab4: BlockType;
    /**
     * Represents a double slab of wood within Minecraft.
     */
    static readonly doubleWoodenSlab: BlockType;
    /**
     * Represents a dragon egg within Minecraft.
     */
    static readonly dragonEgg: BlockType;
    /**
     * Represents a block of dried kelp within Minecraft.
     */
    static readonly driedKelpBlock: BlockType;
    /**
     * Represents a block of dripstone within Minecraft.
     */
    static readonly dripstoneBlock: BlockType;
    /**
     * Represents a dropper within Minecraft.
     */
    static readonly dropper: BlockType;
    /**
     * Represents an element in Minecraft Education experiences.
     */
    static readonly element0: BlockType;
    /**
     * Represents the hydrogen element in Minecraft Education
     * experiences.
     */
    static readonly element1: BlockType;
    /**
     * Represents the neon element in Minecraft Education
     * experiences.
     */
    static readonly element10: BlockType;
    /**
     * Represents the fermium element in Minecraft Education
     * experiences.
     */
    static readonly element100: BlockType;
    /**
     * Represents the mendelevium element in Minecraft Education
     * experiences.
     */
    static readonly element101: BlockType;
    /**
     * Represents the nobelium element in Minecraft Education
     * experiences.
     */
    static readonly element102: BlockType;
    /**
     * Represents the lawrencium element in Minecraft Education
     * experiences.
     */
    static readonly element103: BlockType;
    /**
     * Represents the rutherfordium element in Minecraft Education
     * experiences.
     */
    static readonly element104: BlockType;
    /**
     * Represents the dubnium element in Minecraft Education
     * experiences.
     */
    static readonly element105: BlockType;
    /**
     * Represents the seaborgium element in Minecraft Education
     * experiences.
     */
    static readonly element106: BlockType;
    /**
     * Represents the bohrium element in Minecraft Education
     * experiences.
     */
    static readonly element107: BlockType;
    /**
     * Represents the hassium element in Minecraft Education
     * experiences.
     */
    static readonly element108: BlockType;
    /**
     * Represents the meitnerium element in Minecraft Education
     * experiences.
     */
    static readonly element109: BlockType;
    /**
     * Represents the sodium element in Minecraft Education
     * experiences.
     */
    static readonly element11: BlockType;
    /**
     * Represents the darmstadtium element in Minecraft Education
     * experiences.
     */
    static readonly element110: BlockType;
    /**
     * Represents the roentgenium element in Minecraft Education
     * experiences.
     */
    static readonly element111: BlockType;
    /**
     * Represents the copernicium element in Minecraft Education
     * experiences.
     */
    static readonly element112: BlockType;
    /**
     * Represents the nihonium element in Minecraft Education
     * experiences.
     */
    static readonly element113: BlockType;
    /**
     * Represents the flerovium element in Minecraft Education
     * experiences.
     */
    static readonly element114: BlockType;
    /**
     * Represents the moscovium element in Minecraft Education
     * experiences.
     */
    static readonly element115: BlockType;
    /**
     * Represents the livermorium element in Minecraft Education
     * experiences.
     */
    static readonly element116: BlockType;
    /**
     * Represents the tennessine element in Minecraft Education
     * experiences.
     */
    static readonly element117: BlockType;
    /**
     * Represents the oganesson element in Minecraft Education
     * experiences.
     */
    static readonly element118: BlockType;
    /**
     * Represents the magnesium element in Minecraft Education
     * experiences.
     */
    static readonly element12: BlockType;
    /**
     * Represents the aluminum element in Minecraft Education
     * experiences.
     */
    static readonly element13: BlockType;
    /**
     * Represents the silicon element in Minecraft Education
     * experiences.
     */
    static readonly element14: BlockType;
    /**
     * Represents the phosphorus element in Minecraft Education
     * experiences.
     */
    static readonly element15: BlockType;
    /**
     * Represents the sulfur element in Minecraft Education
     * experiences.
     */
    static readonly element16: BlockType;
    /**
     * Represents the chlorine element in Minecraft Education
     * experiences.
     */
    static readonly element17: BlockType;
    /**
     * Represents the argon element in Minecraft Education
     * experiences.
     */
    static readonly element18: BlockType;
    /**
     * Represents the potassium element in Minecraft Education
     * experiences.
     */
    static readonly element19: BlockType;
    /**
     * Represents the helium element in Minecraft Education
     * experiences.
     */
    static readonly element2: BlockType;
    /**
     * Represents the calcium element in Minecraft Education
     * experiences.
     */
    static readonly element20: BlockType;
    /**
     * Represents the scandium element in Minecraft Education
     * experiences.
     */
    static readonly element21: BlockType;
    /**
     * Represents the titanium element in Minecraft Education
     * experiences.
     */
    static readonly element22: BlockType;
    /**
     * Represents the vanadium element in Minecraft Education
     * experiences.
     */
    static readonly element23: BlockType;
    /**
     * Represents the chromium element in Minecraft Education
     * experiences.
     */
    static readonly element24: BlockType;
    /**
     * Represents the manganese element in Minecraft Education
     * experiences.
     */
    static readonly element25: BlockType;
    /**
     * Represents the iron element in Minecraft Education
     * experiences.
     */
    static readonly element26: BlockType;
    /**
     * Represents the cobalt element in Minecraft Education
     * experiences.
     */
    static readonly element27: BlockType;
    /**
     * Represents the nickel element in Minecraft Education
     * experiences.
     */
    static readonly element28: BlockType;
    /**
     * Represents the copper element in Minecraft Education
     * experiences.
     */
    static readonly element29: BlockType;
    /**
     * Represents a lithium element in Minecraft Education
     * experiences.
     */
    static readonly element3: BlockType;
    /**
     * Represents the zinc element in Minecraft Education
     * experiences.
     */
    static readonly element30: BlockType;
    /**
     * Represents the gallium element in Minecraft Education
     * experiences.
     */
    static readonly element31: BlockType;
    /**
     * Represents a germanium element in Minecraft Education
     * experiences.
     */
    static readonly element32: BlockType;
    /**
     * Represents the arsenic element in Minecraft Education
     * experiences.
     */
    static readonly element33: BlockType;
    /**
     * Represents the selenium element in Minecraft Education
     * experiences.
     */
    static readonly element34: BlockType;
    /**
     * Represents the bromine element in Minecraft Education
     * experiences.
     */
    static readonly element35: BlockType;
    /**
     * Represents the krypton element in Minecraft Education
     * experiences.
     */
    static readonly element36: BlockType;
    /**
     * Represents the rubidium element in Minecraft Education
     * experiences.
     */
    static readonly element37: BlockType;
    /**
     * Represents the strontium element in Minecraft Education
     * experiences.
     */
    static readonly element38: BlockType;
    /**
     * Represents the yttrium element in Minecraft Education
     * experiences.
     */
    static readonly element39: BlockType;
    /**
     * Represents a beryllium element in Minecraft Education
     * experiences.
     */
    static readonly element4: BlockType;
    /**
     * Represents the zirconium element in Minecraft Education
     * experiences.
     */
    static readonly element40: BlockType;
    /**
     * Represents the niobium element in Minecraft Education
     * experiences.
     */
    static readonly element41: BlockType;
    /**
     * Represents the molybdenum element in Minecraft Education
     * experiences.
     */
    static readonly element42: BlockType;
    /**
     * Represents the technetium element in Minecraft Education
     * experiences.
     */
    static readonly element43: BlockType;
    /**
     * Represents the ruthenium element in Minecraft Education
     * experiences.
     */
    static readonly element44: BlockType;
    /**
     * Represents the rhodium element in Minecraft Education
     * experiences.
     */
    static readonly element45: BlockType;
    /**
     * Represents the palladium element in Minecraft Education
     * experiences.
     */
    static readonly element46: BlockType;
    /**
     * Represents the silver element in Minecraft Education
     * experiences.
     */
    static readonly element47: BlockType;
    /**
     * Represents the cadmium element in Minecraft Education
     * experiences.
     */
    static readonly element48: BlockType;
    /**
     * Represents the indium element in Minecraft Education
     * experiences.
     */
    static readonly element49: BlockType;
    /**
     * Represents the boron element in Minecraft Education
     * experiences.
     */
    static readonly element5: BlockType;
    /**
     * Represents the tin element in Minecraft Education
     * experiences.
     */
    static readonly element50: BlockType;
    /**
     * Represents the antimony element in Minecraft Education
     * experiences.
     */
    static readonly element51: BlockType;
    /**
     * Represents the tellurium element in Minecraft Education
     * experiences.
     */
    static readonly element52: BlockType;
    /**
     * Represents the iodine element in Minecraft Education
     * experiences.
     */
    static readonly element53: BlockType;
    /**
     * Represents the xenon element in Minecraft Education
     * experiences.
     */
    static readonly element54: BlockType;
    /**
     * Represents the cesium element in Minecraft Education
     * experiences.
     */
    static readonly element55: BlockType;
    /**
     * Represents the barium element in Minecraft Education
     * experiences.
     */
    static readonly element56: BlockType;
    /**
     * Represents the lanthanum element in Minecraft Education
     * experiences.
     */
    static readonly element57: BlockType;
    /**
     * Represents the cerium element in Minecraft Education
     * experiences.
     */
    static readonly element58: BlockType;
    /**
     * Represents the praseodymium element in Minecraft Education
     * experiences.
     */
    static readonly element59: BlockType;
    /**
     * Represents the carbon element in Minecraft Education
     * experiences.
     */
    static readonly element6: BlockType;
    /**
     * Represents the neodymium element in Minecraft Education
     * experiences.
     */
    static readonly element60: BlockType;
    /**
     * Represents the promethium element in Minecraft Education
     * experiences.
     */
    static readonly element61: BlockType;
    /**
     * Represents the samarium element in Minecraft Education
     * experiences.
     */
    static readonly element62: BlockType;
    /**
     * Represents the europium element in Minecraft Education
     * experiences.
     */
    static readonly element63: BlockType;
    /**
     * Represents the gadolinium element in Minecraft Education
     * experiences.
     */
    static readonly element64: BlockType;
    /**
     * Represents a terbium element in Minecraft Education
     * experiences.
     */
    static readonly element65: BlockType;
    /**
     * Represents the dysprosium element in Minecraft Education
     * experiences.
     */
    static readonly element66: BlockType;
    /**
     * Represents the holmium element in Minecraft Education
     * experiences.
     */
    static readonly element67: BlockType;
    /**
     * Represents the erbium element in Minecraft Education
     * experiences.
     */
    static readonly element68: BlockType;
    /**
     * Represents the thulium element in Minecraft Education
     * experiences.
     */
    static readonly element69: BlockType;
    /**
     * Represents the nitrogen element in Minecraft Education
     * experiences.
     */
    static readonly element7: BlockType;
    /**
     * Represents the ytterbium element in Minecraft Education
     * experiences.
     */
    static readonly element70: BlockType;
    /**
     * Represents the lutetium element in Minecraft Education
     * experiences.
     */
    static readonly element71: BlockType;
    /**
     * Represents a hafnium element in Minecraft Education
     * experiences.
     */
    static readonly element72: BlockType;
    /**
     * Represents the tantalum element in Minecraft Education
     * experiences.
     */
    static readonly element73: BlockType;
    /**
     * Represents the tungsten element in Minecraft Education
     * experiences.
     */
    static readonly element74: BlockType;
    /**
     * Represents the rhenium element in Minecraft Education
     * experiences.
     */
    static readonly element75: BlockType;
    /**
     * Represents the osmium element in Minecraft Education
     * experiences.
     */
    static readonly element76: BlockType;
    /**
     * Represents the iridium element in Minecraft Education
     * experiences.
     */
    static readonly element77: BlockType;
    /**
     * Represents the platinum element in Minecraft Education
     * experiences.
     */
    static readonly element78: BlockType;
    /**
     * Represents the gold element in Minecraft Education
     * experiences.
     */
    static readonly element79: BlockType;
    /**
     * Represents the oxygen element in Minecraft Education
     * experiences.
     */
    static readonly element8: BlockType;
    /**
     * Represents the mercury element in Minecraft Education
     * experiences.
     */
    static readonly element80: BlockType;
    /**
     * Represents the thallium element in Minecraft Education
     * experiences.
     */
    static readonly element81: BlockType;
    /**
     * Represents the lead element in Minecraft Education
     * experiences.
     */
    static readonly element82: BlockType;
    /**
     * Represents the bismuth element in Minecraft Education
     * experiences.
     */
    static readonly element83: BlockType;
    /**
     * Represents the polonium element in Minecraft Education
     * experiences.
     */
    static readonly element84: BlockType;
    /**
     * Represents the astatine element in Minecraft Education
     * experiences.
     */
    static readonly element85: BlockType;
    /**
     * Represents the radon element in Minecraft Education
     * experiences.
     */
    static readonly element86: BlockType;
    /**
     * Represents the francium element in Minecraft Education
     * experiences.
     */
    static readonly element87: BlockType;
    /**
     * Represents the radium element in Minecraft Education
     * experiences.
     */
    static readonly element88: BlockType;
    /**
     * Represents the actinium element in Minecraft Education
     * experiences.
     */
    static readonly element89: BlockType;
    /**
     * Represents the fluorine element in Minecraft Education
     * experiences.
     */
    static readonly element9: BlockType;
    /**
     * Represents the thorium element in Minecraft Education
     * experiences.
     */
    static readonly element90: BlockType;
    /**
     * Represents the protactinium element in Minecraft Education
     * experiences.
     */
    static readonly element91: BlockType;
    /**
     * Represents the uranium element in Minecraft Education
     * experiences.
     */
    static readonly element92: BlockType;
    /**
     * Represents the neptunium element in Minecraft Education
     * experiences.
     */
    static readonly element93: BlockType;
    /**
     * Represents the plutonium element in Minecraft Education
     * experiences.
     */
    static readonly element94: BlockType;
    /**
     * Represents the americium element in Minecraft Education
     * experiences.
     */
    static readonly element95: BlockType;
    /**
     * Represents the curium element in Minecraft Education
     * experiences.
     */
    static readonly element96: BlockType;
    /**
     * Represents the berkelium element in Minecraft Education
     * experiences.
     */
    static readonly element97: BlockType;
    /**
     * Represents the californium element in Minecraft Education
     * experiences.
     */
    static readonly element98: BlockType;
    /**
     * Represents the einsteinium element in Minecraft Education
     * experiences.
     */
    static readonly element99: BlockType;
    /**
     * Represents a block of emerald within Minecraft.
     */
    static readonly emeraldBlock: BlockType;
    /**
     * Represents a block with embedded emerald ore within
     * Minecraft.
     */
    static readonly emeraldOre: BlockType;
    /**
     * Represents an enchanting table within Minecraft.
     */
    static readonly enchantingTable: BlockType;
    /**
     * Represents an end bricks block within Minecraft.
     */
    static readonly endBricks: BlockType;
    /**
     * Represents a set of end brick stairs within Minecraft.
     */
    static readonly endBrickStairs: BlockType;
    /**
     * Represents an ender chest within Minecraft.
     */
    static readonly enderChest: BlockType;
    /**
     * Represents an end gateway within Minecraft.
     */
    static readonly endGateway: BlockType;
    /**
     * Represents an end portal block within Minecraft.
     */
    static readonly endPortal: BlockType;
    /**
     * Represents an end portal frame within Minecraft.
     */
    static readonly endPortalFrame: BlockType;
    /**
     * Represents an end rod within Minecraft.
     */
    static readonly endRod: BlockType;
    /**
     * Represents an end stone block within Minecraft.
     */
    static readonly endStone: BlockType;
    /**
     * Represents a block of exposed copper within Minecraft.
     */
    static readonly exposedCopper: BlockType;
    /**
     * Represents a block of exposed cut copper within Minecraft.
     */
    static readonly exposedCutCopper: BlockType;
    /**
     * Represents a slab of exposed cut copper within Minecraft.
     */
    static readonly exposedCutCopperSlab: BlockType;
    /**
     * Represents a set of exposed cut copper stairs within
     * Minecraft.
     */
    static readonly exposedCutCopperStairs: BlockType;
    /**
     * Represents a double slab of exposed cut copper within
     * Minecraft.
     */
    static readonly exposedDoubleCutCopperSlab: BlockType;
    /**
     * Represents a farmland block within Minecraft.
     */
    static readonly farmland: BlockType;
    /**
     * Represents a fence within Minecraft.
     */
    static readonly fence: BlockType;
    /**
     * Represents a fence gate within Minecraft.
     */
    static readonly fenceGate: BlockType;
    /**
     * Represents a fire within Minecraft.
     */
    static readonly fire: BlockType;
    /**
     * Represents a fletching table within Minecraft.
     */
    static readonly fletchingTable: BlockType;
    /**
     * Represents a flowering azalea plant within Minecraft.
     */
    static readonly floweringAzalea: BlockType;
    /**
     * Represents a flower pot within Minecraft.
     */
    static readonly flowerPot: BlockType;
    /**
     * Represents flowing lava within Minecraft.
     */
    static readonly flowingLava: BlockType;
    /**
     * Represents flowing water within Minecraft.
     */
    static readonly flowingWater: BlockType;
    /**
     * Represents a frame within Minecraft.
     */
    static readonly frame: BlockType;
    static readonly frogSpawn: BlockType;
    /**
     * Represents a frosted ice block within Minecraft.
     */
    static readonly frostedIce: BlockType;
    /**
     * Represents a furnace within Minecraft.
     */
    static readonly furnace: BlockType;
    /**
     * Represents a block of gilded blackstone within Minecraft.
     */
    static readonly gildedBlackstone: BlockType;
    /**
     * Represents a glass block within Minecraft.
     */
    static readonly glass: BlockType;
    /**
     * Represents a pane of glass within Minecraft.
     */
    static readonly glassPane: BlockType;
    /**
     * Represents a glowing frame within Minecraft.
     */
    static readonly glowFrame: BlockType;
    /**
     * Represents a glowing obsidian block within Minecraft.
     */
    static readonly glowingobsidian: BlockType;
    /**
     * Represents glow lichen within Minecraft.
     */
    static readonly glowLichen: BlockType;
    /**
     * Represents a block of glowstone within Minecraft.
     */
    static readonly glowstone: BlockType;
    /**
     * Represents a gold block within Minecraft.
     */
    static readonly goldBlock: BlockType;
    /**
     * Represents a golden rail element within Minecraft.
     */
    static readonly goldenRail: BlockType;
    /**
     * Represents a block with embedded gold ore within Minecraft.
     */
    static readonly goldOre: BlockType;
    /**
     * Represents a set of granite stairs within Minecraft.
     */
    static readonly graniteStairs: BlockType;
    /**
     * Represents a block of dirt and grass within Minecraft.
     */
    static readonly grass: BlockType;
    /**
     * Represents a block of dirt and grass with a path within
     * Minecraft.
     */
    static readonly grassPath: BlockType;
    /**
     * Represents a block of gravel within Minecraft.
     */
    static readonly gravel: BlockType;
    /**
     * Represents a gray-colored candle within Minecraft.
     */
    static readonly grayCandle: BlockType;
    /**
     * Represents a cake with gray-colored candle within Minecraft.
     */
    static readonly grayCandleCake: BlockType;
    /**
     * Represents a gray-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly grayGlazedTerracotta: BlockType;
    static readonly grayWool: BlockType;
    /**
     * Represents a green-colored candle within Minecraft.
     */
    static readonly greenCandle: BlockType;
    /**
     * Represents a green-colored candle cake within Minecraft.
     */
    static readonly greenCandleCake: BlockType;
    /**
     * Represents a green block of glazed terracotta within
     * Minecraft.
     */
    static readonly greenGlazedTerracotta: BlockType;
    static readonly greenWool: BlockType;
    /**
     * Represents a grindstone within Minecraft.
     */
    static readonly grindstone: BlockType;
    /**
     * Represents a set of hanging roots within Minecraft.
     */
    static readonly hangingRoots: BlockType;
    /**
     * Represents a block of hardened clay within Minecraft.
     */
    static readonly hardenedClay: BlockType;
    /**
     * Represents a block of hard glass within Minecraft.
     */
    static readonly hardGlass: BlockType;
    /**
     * Represents a pane of hard glass within Minecraft.
     */
    static readonly hardGlassPane: BlockType;
    /**
     * Represents a stained hard glass block within Minecraft.
     */
    static readonly hardStainedGlass: BlockType;
    /**
     * Represents a stained pane of hard glass within Minecraft.
     */
    static readonly hardStainedGlassPane: BlockType;
    /**
     * Represents a block of hay within Minecraft.
     */
    static readonly hayBlock: BlockType;
    /**
     * Represents a heavy weighted pressure plate within Minecraft.
     */
    static readonly heavyWeightedPressurePlate: BlockType;
    /**
     * Represents a block of honey within Minecraft.
     */
    static readonly honeyBlock: BlockType;
    /**
     * Represents a honeycomb block within Minecraft.
     */
    static readonly honeycombBlock: BlockType;
    /**
     * Represents a hopper within Minecraft.
     */
    static readonly hopper: BlockType;
    /**
     * Represents a block of ice within Minecraft.
     */
    static readonly ice: BlockType;
    /**
     * Represents an infested block of deepslate within Minecraft.
     */
    static readonly infestedDeepslate: BlockType;
    /**
     * Represents an information update block within Minecraft.
     */
    static readonly infoUpdate: BlockType;
    /**
     * Represents an information update block within Minecraft.
     */
    static readonly infoUpdate2: BlockType;
    /**
     * Represents an invisible boundary bedrock block within
     * Minecraft.
     */
    static readonly invisibleBedrock: BlockType;
    /**
     * Represents iron bars within Minecraft.
     */
    static readonly ironBars: BlockType;
    /**
     * Represents a block of iron within Minecraft.
     */
    static readonly ironBlock: BlockType;
    /**
     * Represents an iron door within Minecraft.
     */
    static readonly ironDoor: BlockType;
    /**
     * Represents a block with embedded iron ore within Minecraft.
     */
    static readonly ironOre: BlockType;
    /**
     * Represents an iron trapdoor within Minecraft.
     */
    static readonly ironTrapdoor: BlockType;
    /**
     * Represents a jigsaw within Minecraft.
     */
    static readonly jigsaw: BlockType;
    /**
     * Represents a jukebox within Minecraft.
     */
    static readonly jukebox: BlockType;
    /**
     * Represents jungle wood button within Minecraft.
     */
    static readonly jungleButton: BlockType;
    /**
     * Represents a jungle wood door within Minecraft.
     */
    static readonly jungleDoor: BlockType;
    /**
     * Represents a jungle wood fence gate within Minecraft.
     */
    static readonly jungleFenceGate: BlockType;
    static readonly jungleHangingSign: BlockType;
    /**
     * Represents a jungle wood pressure plate within Minecraft.
     */
    static readonly junglePressurePlate: BlockType;
    /**
     * Represents a set of jungle wood stairs within Minecraft.
     */
    static readonly jungleStairs: BlockType;
    /**
     * Represents a jungle wood standing sign within Minecraft.
     */
    static readonly jungleStandingSign: BlockType;
    /**
     * Represents a jungle wood trapdoor within Minecraft.
     */
    static readonly jungleTrapdoor: BlockType;
    /**
     * Represents a jungle wood wall sign within Minecraft.
     */
    static readonly jungleWallSign: BlockType;
    /**
     * Represents a set of kelp within Minecraft.
     */
    static readonly kelp: BlockType;
    /**
     * Represents a ladder within Minecraft.
     */
    static readonly ladder: BlockType;
    /**
     * Represents a lantern within Minecraft.
     */
    static readonly lantern: BlockType;
    /**
     * Represents a block of lapis lazuli within Minecraft.
     */
    static readonly lapisBlock: BlockType;
    /**
     * Represents a block with embedded lapis lazuli within
     * Minecraft.
     */
    static readonly lapisOre: BlockType;
    /**
     * Represents a bud of large amethyst within Minecraft.
     */
    static readonly largeAmethystBud: BlockType;
    /**
     * Represents lava within Minecraft.
     */
    static readonly lava: BlockType;
    /**
     * Represents a cauldron filled with lava within Minecraft.
     */
    static readonly lavaCauldron: BlockType;
    /**
     * Represents a set of leaves within Minecraft.
     */
    static readonly leaves: BlockType;
    /**
     * Represents an updated set of leaves within Minecraft.
     */
    static readonly leaves2: BlockType;
    /**
     * Represents a lectern within Minecraft.
     */
    static readonly lectern: BlockType;
    /**
     * Represents a lever within Minecraft.
     */
    static readonly lever: BlockType;
    /**
     * Represents a block of light within Minecraft.
     */
    static readonly lightBlock: BlockType;
    /**
     * Represents a light blue candle within Minecraft.
     */
    static readonly lightBlueCandle: BlockType;
    /**
     * Represents a light blue candle cake within Minecraft.
     */
    static readonly lightBlueCandleCake: BlockType;
    /**
     * Represents a light blue block of glazed terracotta within
     * Minecraft.
     */
    static readonly lightBlueGlazedTerracotta: BlockType;
    static readonly lightBlueWool: BlockType;
    /**
     * Represents a light gray candle within Minecraft.
     */
    static readonly lightGrayCandle: BlockType;
    /**
     * Represents a light gray candle cake within Minecraft.
     */
    static readonly lightGrayCandleCake: BlockType;
    static readonly lightGrayWool: BlockType;
    /**
     * Represents a lightning rod within Minecraft.
     */
    static readonly lightningRod: BlockType;
    /**
     * Represents a light weighted pressure plate within Minecraft.
     */
    static readonly lightWeightedPressurePlate: BlockType;
    /**
     * Represents a lime candle within Minecraft.
     */
    static readonly limeCandle: BlockType;
    /**
     * Represents a lime-colored candle cake within Minecraft.
     */
    static readonly limeCandleCake: BlockType;
    /**
     * Represents a lime-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly limeGlazedTerracotta: BlockType;
    static readonly limeWool: BlockType;
    /**
     * Represents a lit blast furnace within Minecraft.
     */
    static readonly litBlastFurnace: BlockType;
    /**
     * Represents lit deepslate redstone ore within Minecraft.
     */
    static readonly litDeepslateRedstoneOre: BlockType;
    /**
     * Represents a lit furnace within Minecraft.
     */
    static readonly litFurnace: BlockType;
    /**
     * Represents a lit pumpkin within Minecraft.
     */
    static readonly litPumpkin: BlockType;
    /**
     * Represents a lit redstone lamp within Minecraft.
     */
    static readonly litRedstoneLamp: BlockType;
    /**
     * Represents lit redstone ore within Minecraft.
     */
    static readonly litRedstoneOre: BlockType;
    /**
     * Represents a lit smoker within Minecraft.
     */
    static readonly litSmoker: BlockType;
    /**
     * Represents a lodestone within Minecraft.
     */
    static readonly lodestone: BlockType;
    /**
     * Represents a log within Minecraft.
     */
    static readonly log: BlockType;
    /**
     * Represents a more updated, customizable log within
     * Minecraft.
     */
    static readonly log2: BlockType;
    /**
     * Represents a loom within Minecraft.
     */
    static readonly loom: BlockType;
    /**
     * Represents a magenta candle within Minecraft.
     */
    static readonly magentaCandle: BlockType;
    /**
     * Represents a magenta candle cake within Minecraft.
     */
    static readonly magentaCandleCake: BlockType;
    /**
     * Represents a block of magenta-colored glazed terracotta
     * within Minecraft.
     */
    static readonly magentaGlazedTerracotta: BlockType;
    static readonly magentaWool: BlockType;
    /**
     * Represents magma within Minecraft.
     */
    static readonly magma: BlockType;
    static readonly mangroveButton: BlockType;
    static readonly mangroveDoor: BlockType;
    static readonly mangroveDoubleSlab: BlockType;
    static readonly mangroveFence: BlockType;
    static readonly mangroveFenceGate: BlockType;
    static readonly mangroveHangingSign: BlockType;
    static readonly mangroveLeaves: BlockType;
    static readonly mangroveLog: BlockType;
    static readonly mangrovePlanks: BlockType;
    static readonly mangrovePressurePlate: BlockType;
    static readonly mangrovePropagule: BlockType;
    static readonly mangroveRoots: BlockType;
    static readonly mangroveSlab: BlockType;
    static readonly mangroveStairs: BlockType;
    static readonly mangroveStandingSign: BlockType;
    static readonly mangroveTrapdoor: BlockType;
    static readonly mangroveWallSign: BlockType;
    static readonly mangroveWood: BlockType;
    /**
     * Represents a medium-sized bud of amethyst within Minecraft.
     */
    static readonly mediumAmethystBud: BlockType;
    /**
     * Represents a block of melon within Minecraft.
     */
    static readonly melonBlock: BlockType;
    /**
     * Represents a stem of melon within Minecraft.
     */
    static readonly melonStem: BlockType;
    /**
     * Represents a mob spawner within Minecraft.
     */
    static readonly mobSpawner: BlockType;
    /**
     * Represents a monster egg within Minecraft.
     */
    static readonly monsterEgg: BlockType;
    /**
     * Represents a block of moss within Minecraft.
     */
    static readonly mossBlock: BlockType;
    /**
     * Represents a carpet of moss within Minecraft.
     */
    static readonly mossCarpet: BlockType;
    /**
     * Represents a block of cobblestone with moss within
     * Minecraft.
     */
    static readonly mossyCobblestone: BlockType;
    /**
     * Represents a set of mossy cobblestone stairs within
     * Minecraft.
     */
    static readonly mossyCobblestoneStairs: BlockType;
    /**
     * Represents a set of mossy stone brick stairs within
     * Minecraft.
     */
    static readonly mossyStoneBrickStairs: BlockType;
    static readonly movingBlock: BlockType;
    static readonly mud: BlockType;
    static readonly mudBrickDoubleSlab: BlockType;
    static readonly mudBricks: BlockType;
    static readonly mudBrickSlab: BlockType;
    static readonly mudBrickStairs: BlockType;
    static readonly mudBrickWall: BlockType;
    static readonly muddyMangroveRoots: BlockType;
    /**
     * Represents a mycelium plant within Minecraft.
     */
    static readonly mycelium: BlockType;
    /**
     * Represents a nether brick block within Minecraft.
     */
    static readonly netherBrick: BlockType;
    /**
     * Represents a nether brick fence within Minecraft.
     */
    static readonly netherBrickFence: BlockType;
    /**
     * Represents a set of nether brick stairs within Minecraft.
     */
    static readonly netherBrickStairs: BlockType;
    /**
     * Represents a block of nether with embedded gold ore within
     * Minecraft.
     */
    static readonly netherGoldOre: BlockType;
    /**
     * Represents a block of netherite within Minecraft.
     */
    static readonly netheriteBlock: BlockType;
    /**
     * Represents a block of netherrack within Minecraft.
     */
    static readonly netherrack: BlockType;
    /**
     * Represents a nether rock within Minecraft.
     */
    static readonly netherreactor: BlockType;
    /**
     * Represents nether sprouts within Minecraft.
     */
    static readonly netherSprouts: BlockType;
    /**
     * Represents nether wart within Minecraft.
     */
    static readonly netherWart: BlockType;
    /**
     * Represents a block of nether wart within Minecraft.
     */
    static readonly netherWartBlock: BlockType;
    /**
     * Represents a standard set of stone stairs within Minecraft.
     */
    static readonly normalStoneStairs: BlockType;
    /**
     * Represents a note block within Minecraft.
     */
    static readonly noteblock: BlockType;
    static readonly oakHangingSign: BlockType;
    /**
     * Represents a set of oak stairs within Minecraft.
     */
    static readonly oakStairs: BlockType;
    /**
     * Represents an observer within Minecraft.
     */
    static readonly observer: BlockType;
    /**
     * Represents an obsidian block within Minecraft.
     */
    static readonly obsidian: BlockType;
    static readonly ochreFroglight: BlockType;
    /**
     * Represents an orange candle within Minecraft.
     */
    static readonly orangeCandle: BlockType;
    /**
     * Represents an orange candle cake within Minecraft.
     */
    static readonly orangeCandleCake: BlockType;
    /**
     * Represents a block of orange-colored glazed terracotta
     * within Minecraft.
     */
    static readonly orangeGlazedTerracotta: BlockType;
    static readonly orangeWool: BlockType;
    /**
     * Represents a block of oxidized copper within Minecraft.
     */
    static readonly oxidizedCopper: BlockType;
    /**
     * Represents a block of oxidized cut copper within Minecraft.
     */
    static readonly oxidizedCutCopper: BlockType;
    /**
     * Represents a slab of oxidized cut copper within Minecraft.
     */
    static readonly oxidizedCutCopperSlab: BlockType;
    /**
     * Represents a set of oxidized cut copper stairs within
     * Minecraft.
     */
    static readonly oxidizedCutCopperStairs: BlockType;
    /**
     * Represents a double slab of oxidized cut copper within
     * Minecraft.
     */
    static readonly oxidizedDoubleCutCopperSlab: BlockType;
    /**
     * Represents a block of packed ice within Minecraft.
     */
    static readonly packedIce: BlockType;
    static readonly packedMud: BlockType;
    static readonly pearlescentFroglight: BlockType;
    /**
     * Represents a pink candle within Minecraft.
     */
    static readonly pinkCandle: BlockType;
    /**
     * Represents a pink candle cake within Minecraft.
     */
    static readonly pinkCandleCake: BlockType;
    /**
     * Represents a pink-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly pinkGlazedTerracotta: BlockType;
    static readonly pinkWool: BlockType;
    /**
     * Represents a piston within Minecraft.
     */
    static readonly piston: BlockType;
    static readonly pistonArmCollision: BlockType;
    /**
     * Represents a set of planks within Minecraft.
     */
    static readonly planks: BlockType;
    /**
     * Represents podzol within Minecraft.
     */
    static readonly podzol: BlockType;
    /**
     * Represents pointed dripstone within Minecraft.
     */
    static readonly pointedDripstone: BlockType;
    /**
     * Represents a set of polished andesite stairs within
     * Minecraft.
     */
    static readonly polishedAndesiteStairs: BlockType;
    /**
     * Represents a block of polished basalt within Minecraft.
     */
    static readonly polishedBasalt: BlockType;
    /**
     * Represents a block of polished blackstone within Minecraft.
     */
    static readonly polishedBlackstone: BlockType;
    /**
     * Represents a double slab of polished blackstone brick within
     * Minecraft.
     */
    static readonly polishedBlackstoneBrickDoubleSlab: BlockType;
    /**
     * Represents a block of polished blackstone bricks within
     * Minecraft.
     */
    static readonly polishedBlackstoneBricks: BlockType;
    /**
     * Represents a slab of polished blackstone within Minecraft.
     */
    static readonly polishedBlackstoneBrickSlab: BlockType;
    /**
     * Represents a set of polished blackstone brick stairs within
     * Minecraft.
     */
    static readonly polishedBlackstoneBrickStairs: BlockType;
    /**
     * Represents a polished blackstone brick wall within
     * Minecraft.
     */
    static readonly polishedBlackstoneBrickWall: BlockType;
    /**
     * Represents a polished blackstone button within Minecraft.
     */
    static readonly polishedBlackstoneButton: BlockType;
    /**
     * Represents a double slab of polished blackstone within
     * Minecraft.
     */
    static readonly polishedBlackstoneDoubleSlab: BlockType;
    /**
     * Represents a polished blackstone pressure plate within
     * Minecraft.
     */
    static readonly polishedBlackstonePressurePlate: BlockType;
    /**
     * Represents a slab of polished blackstone within Minecraft.
     */
    static readonly polishedBlackstoneSlab: BlockType;
    /**
     * Represents a set of polished blackstone stairs within
     * Minecraft.
     */
    static readonly polishedBlackstoneStairs: BlockType;
    /**
     * Represents a polished blackstone wall within Minecraft.
     */
    static readonly polishedBlackstoneWall: BlockType;
    /**
     * Represents a block of polished deepslate within Minecraft.
     */
    static readonly polishedDeepslate: BlockType;
    /**
     * Represents a double slab of polished deepslate within
     * Minecraft.
     */
    static readonly polishedDeepslateDoubleSlab: BlockType;
    /**
     * Represents a slab of polished deepslate within Minecraft.
     */
    static readonly polishedDeepslateSlab: BlockType;
    /**
     * Represents a set of polished deepslate stairs within
     * Minecraft.
     */
    static readonly polishedDeepslateStairs: BlockType;
    /**
     * Represents a wall of polished deepslate within Minecraft.
     */
    static readonly polishedDeepslateWall: BlockType;
    /**
     * Represents a block of polished diorite within Minecraft.
     */
    static readonly polishedDioriteStairs: BlockType;
    /**
     * Represents a set of polished granite stairs within
     * Minecraft.
     */
    static readonly polishedGraniteStairs: BlockType;
    /**
     * Represents a portal within Minecraft.
     */
    static readonly portal: BlockType;
    /**
     * Represents a set of potatoes within Minecraft.
     */
    static readonly potatoes: BlockType;
    /**
     * Represents a block of powder snow within Minecraft.
     */
    static readonly powderSnow: BlockType;
    /**
     * Represents a powered comparator within Minecraft.
     */
    static readonly poweredComparator: BlockType;
    /**
     * Represents a powered repeater within Minecraft.
     */
    static readonly poweredRepeater: BlockType;
    /**
     * Represents a block of prismarine within Minecraft.
     */
    static readonly prismarine: BlockType;
    /**
     * Represents a set of prismarine brick stairs within
     * Minecraft.
     */
    static readonly prismarineBricksStairs: BlockType;
    /**
     * Represents a set of prismarine stairs within Minecraft.
     */
    static readonly prismarineStairs: BlockType;
    /**
     * Represents a pumpkin within Minecraft.
     */
    static readonly pumpkin: BlockType;
    /**
     * Represents a pumpkin stem within Minecraft.
     */
    static readonly pumpkinStem: BlockType;
    /**
     * Represents a purple candle within Minecraft.
     */
    static readonly purpleCandle: BlockType;
    /**
     * Represents a purple colored candle cake within Minecraft.
     */
    static readonly purpleCandleCake: BlockType;
    /**
     * Represents a purple-colored block of glazed terracotta
     * within Minecraft.
     */
    static readonly purpleGlazedTerracotta: BlockType;
    static readonly purpleWool: BlockType;
    /**
     * Represents a purpur block within Minecraft.
     */
    static readonly purpurBlock: BlockType;
    /**
     * Represents a set of purpur stairs within Minecraft.
     */
    static readonly purpurStairs: BlockType;
    /**
     * Represents a block of solid quartz within Minecraft.
     */
    static readonly quartzBlock: BlockType;
    /**
     * Represents a block of solid quartz bricks within Minecraft.
     */
    static readonly quartzBricks: BlockType;
    /**
     * Represents a block with embedded quartz ore within
     * Minecraft.
     */
    static readonly quartzOre: BlockType;
    /**
     * Represents a set of quartz stairs within Minecraft.
     */
    static readonly quartzStairs: BlockType;
    /**
     * Represents a set of rails within Minecraft.
     */
    static readonly rail: BlockType;
    /**
     * Represents a block of raw copper within Minecraft.
     */
    static readonly rawCopperBlock: BlockType;
    /**
     * Represents a block of raw gold within Minecraft.
     */
    static readonly rawGoldBlock: BlockType;
    /**
     * Represents a block of raw iron within Minecraft.
     */
    static readonly rawIronBlock: BlockType;
    /**
     * Represents a red candle within Minecraft.
     */
    static readonly redCandle: BlockType;
    /**
     * Represents a red candle cake within Minecraft.
     */
    static readonly redCandleCake: BlockType;
    /**
     * Represents a red flower within Minecraft.
     */
    static readonly redFlower: BlockType;
    /**
     * Represents a red-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly redGlazedTerracotta: BlockType;
    /**
     * Represents a red mushroom within Minecraft.
     */
    static readonly redMushroom: BlockType;
    /**
     * Represents a block of red mushroom within Minecraft.
     */
    static readonly redMushroomBlock: BlockType;
    /**
     * Represents a block of red nether brick within Minecraft.
     */
    static readonly redNetherBrick: BlockType;
    /**
     * Represents a set of red nether brick stairs within
     * Minecraft.
     */
    static readonly redNetherBrickStairs: BlockType;
    /**
     * Represents a block of red sandstone within Minecraft.
     */
    static readonly redSandstone: BlockType;
    /**
     * Represents a set of red sandstone stairs within Minecraft.
     */
    static readonly redSandstoneStairs: BlockType;
    /**
     * Represents a block of redstone within Minecraft.
     */
    static readonly redstoneBlock: BlockType;
    /**
     * Represents a redstone lamp within Minecraft.
     */
    static readonly redstoneLamp: BlockType;
    /**
     * Represents a block with embedded redstone ore within
     * Minecraft.
     */
    static readonly redstoneOre: BlockType;
    /**
     * Represents a redstone torch within Minecraft.
     */
    static readonly redstoneTorch: BlockType;
    /**
     * Represents a redstone wire within Minecraft.
     */
    static readonly redstoneWire: BlockType;
    static readonly redWool: BlockType;
    /**
     * Represents reeds within Minecraft.
     */
    static readonly reeds: BlockType;
    static readonly reinforcedDeepslate: BlockType;
    /**
     * Represents a repeating command block within Minecraft.
     */
    static readonly repeatingCommandBlock: BlockType;
    /**
     * Represents a reserved block within Minecraft.
     */
    static readonly reserved6: BlockType;
    /**
     * Represents a respawn anchor within Minecraft.
     */
    static readonly respawnAnchor: BlockType;
    /**
     * Represents a block of sand within Minecraft.
     */
    static readonly sand: BlockType;
    /**
     * Represents a block of sandstone within Minecraft.
     */
    static readonly sandstone: BlockType;
    /**
     * Represents a set of sandstone stairs within Minecraft.
     */
    static readonly sandstoneStairs: BlockType;
    /**
     * Represents a sapling within Minecraft.
     */
    static readonly sapling: BlockType;
    /**
     * Represents a set of scaffolding within Minecraft.
     */
    static readonly scaffolding: BlockType;
    static readonly sculk: BlockType;
    static readonly sculkCatalyst: BlockType;
    /**
     * Represents a sculk sensor within Minecraft.
     */
    static readonly sculkSensor: BlockType;
    static readonly sculkShrieker: BlockType;
    static readonly sculkVein: BlockType;
    /**
     * Represents seagrass within Minecraft.
     */
    static readonly seagrass: BlockType;
    /**
     * Represents a sealantern within Minecraft.
     */
    static readonly seaLantern: BlockType;
    /**
     * Represents a seapickle within Minecraft.
     */
    static readonly seaPickle: BlockType;
    /**
     * Represents a shroom light within Minecraft.
     */
    static readonly shroomlight: BlockType;
    /**
     * Represents a shulker box within Minecraft.
     */
    static readonly shulkerBox: BlockType;
    /**
     * Represents a silver-colored block of glazed terracotta
     * within Minecraft.
     */
    static readonly silverGlazedTerracotta: BlockType;
    /**
     * Represents a skull within Minecraft.
     */
    static readonly skull: BlockType;
    /**
     * Represents slime within Minecraft.
     */
    static readonly slime: BlockType;
    /**
     * Represents a small bud of amethyst within Minecraft.
     */
    static readonly smallAmethystBud: BlockType;
    /**
     * Represents a small dripleaf block within Minecraft.
     */
    static readonly smallDripleafBlock: BlockType;
    /**
     * Represents a smithing table within Minecraft.
     */
    static readonly smithingTable: BlockType;
    /**
     * Represents a smoker within Minecraft.
     */
    static readonly smoker: BlockType;
    /**
     * Represents a block of smooth basalt within Minecraft.
     */
    static readonly smoothBasalt: BlockType;
    /**
     * Represents a set of smooth quartz stairs within Minecraft.
     */
    static readonly smoothQuartzStairs: BlockType;
    /**
     * Represents a set of smooth red sandstone stairs within
     * Minecraft.
     */
    static readonly smoothRedSandstoneStairs: BlockType;
    /**
     * Represents a set of smooth redstone stairs within Minecraft.
     */
    static readonly smoothSandstoneStairs: BlockType;
    /**
     * Represents a smooth stone block within Minecraft.
     */
    static readonly smoothStone: BlockType;
    /**
     * Represents snow within Minecraft.
     */
    static readonly snow: BlockType;
    /**
     * Represents a layer of snow within Minecraft.
     */
    static readonly snowLayer: BlockType;
    /**
     * Represents a soul campfire within Minecraft.
     */
    static readonly soulCampfire: BlockType;
    /**
     * Represents soul fire within Minecraft.
     */
    static readonly soulFire: BlockType;
    /**
     * Represents a soul lantern within Minecraft.
     */
    static readonly soulLantern: BlockType;
    /**
     * Represents a block of soul sand within Minecraft.
     */
    static readonly soulSand: BlockType;
    /**
     * Represents soul soil within Minecraft.
     */
    static readonly soulSoil: BlockType;
    /**
     * Represents a soul torch within Minecraft.
     */
    static readonly soulTorch: BlockType;
    /**
     * Represents a sponge within Minecraft.
     */
    static readonly sponge: BlockType;
    /**
     * Represents a spore blossom within Minecraft.
     */
    static readonly sporeBlossom: BlockType;
    /**
     * Represents a spruce wood button within Minecraft.
     */
    static readonly spruceButton: BlockType;
    /**
     * Represents a spruce wood door within Minecraft.
     */
    static readonly spruceDoor: BlockType;
    /**
     * Represents a spruce wood fence gate within Minecraft.
     */
    static readonly spruceFenceGate: BlockType;
    static readonly spruceHangingSign: BlockType;
    /**
     * Represents a spruce wood pressure plate within Minecraft.
     */
    static readonly sprucePressurePlate: BlockType;
    /**
     * Represents a set of spruce wood stairs within Minecraft.
     */
    static readonly spruceStairs: BlockType;
    /**
     * Represents a spruce wood standing sign within Minecraft.
     */
    static readonly spruceStandingSign: BlockType;
    /**
     * Represents a spruce wood trapdoor within Minecraft.
     */
    static readonly spruceTrapdoor: BlockType;
    /**
     * Represents a spruce wood wall sign within Minecraft.
     */
    static readonly spruceWallSign: BlockType;
    /**
     * Represents stained glass within Minecraft.
     */
    static readonly stainedGlass: BlockType;
    /**
     * Represents a pane of stained glass within Minecraft.
     */
    static readonly stainedGlassPane: BlockType;
    /**
     * Represents a block of stained hardened clay within
     * Minecraft.
     */
    static readonly stainedHardenedClay: BlockType;
    /**
     * Represents a standing banner within Minecraft.
     */
    static readonly standingBanner: BlockType;
    /**
     * Represents a standing sign within Minecraft.
     */
    static readonly standingSign: BlockType;
    /**
     * Represents a piston block with a sticky arm within
     * Minecraft.
     */
    static readonly stickyPiston: BlockType;
    static readonly stickyPistonArmCollision: BlockType;
    /**
     * Represents a block of stone within Minecraft.
     */
    static readonly stone: BlockType;
    static readonly stoneBlockSlab: BlockType;
    static readonly stoneBlockSlab2: BlockType;
    static readonly stoneBlockSlab3: BlockType;
    static readonly stoneBlockSlab4: BlockType;
    /**
     * Represents a block of stone brick within Minecraft.
     */
    static readonly stonebrick: BlockType;
    /**
     * Represents a set of stone brick stairs within Minecraft.
     */
    static readonly stoneBrickStairs: BlockType;
    /**
     * Represents a stone button within Minecraft.
     */
    static readonly stoneButton: BlockType;
    /**
     * Represents a stonecutter within Minecraft.
     */
    static readonly stonecutter: BlockType;
    /**
     * Represents a stonecutter block within Minecraft.
     */
    static readonly stonecutterBlock: BlockType;
    /**
     * Represents a stone pressure plate within Minecraft.
     */
    static readonly stonePressurePlate: BlockType;
    /**
     * Represents a slab of stone within Minecraft.
     */
    static readonly stoneSlab: BlockType;
    /**
     * Represents a variant of a slab of stone (#2) within
     * Minecraft.
     */
    static readonly stoneSlab2: BlockType;
    /**
     * Represents a slab of stone (variant #3) within Minecraft.
     */
    static readonly stoneSlab3: BlockType;
    /**
     * Represents a slab of stone (variant #4) within Minecraft.
     */
    static readonly stoneSlab4: BlockType;
    /**
     * Represents a set of stone stairs within Minecraft.
     */
    static readonly stoneStairs: BlockType;
    /**
     * Represents a stripped acacia log within Minecraft.
     */
    static readonly strippedAcaciaLog: BlockType;
    static readonly strippedBambooBlock: BlockType;
    /**
     * Represents a stripped birch log within Minecraft.
     */
    static readonly strippedBirchLog: BlockType;
    /**
     * Represents stripped crimson hyphae within Minecraft.
     */
    static readonly strippedCrimsonHyphae: BlockType;
    /**
     * Represents a stripped crimson stem within Minecraft.
     */
    static readonly strippedCrimsonStem: BlockType;
    /**
     * Represents a stripped dark oak log within Minecraft.
     */
    static readonly strippedDarkOakLog: BlockType;
    /**
     * Represents a stripped jungle log within Minecraft.
     */
    static readonly strippedJungleLog: BlockType;
    static readonly strippedMangroveLog: BlockType;
    static readonly strippedMangroveWood: BlockType;
    /**
     * Represents a stripped oak log within Minecraft.
     */
    static readonly strippedOakLog: BlockType;
    /**
     * Represents a stripped spruce log within Minecraft.
     */
    static readonly strippedSpruceLog: BlockType;
    /**
     * Represents stripped warped hyphae within Minecraft.
     */
    static readonly strippedWarpedHyphae: BlockType;
    /**
     * Represents stripped warped stem within Minecraft.
     */
    static readonly strippedWarpedStem: BlockType;
    /**
     * Represents a structure block, which provides for the saving
     * and loading of block structures, within Minecraft.
     */
    static readonly structureBlock: BlockType;
    /**
     * Represents a structure void within Minecraft.
     */
    static readonly structureVoid: BlockType;
    static readonly suspiciousSand: BlockType;
    /**
     * Represents a sweet berry bush within Minecraft.
     */
    static readonly sweetBerryBush: BlockType;
    /**
     * Represents tall grass within Minecraft.
     */
    static readonly tallgrass: BlockType;
    /**
     * Represents a target within Minecraft.
     */
    static readonly target: BlockType;
    /**
     * Represents tinted glass within Minecraft.
     */
    static readonly tintedGlass: BlockType;
    /**
     * Represents a block of TnT within Minecraft.
     */
    static readonly tnt: BlockType;
    /**
     * Represents a torch within Minecraft.
     */
    static readonly torch: BlockType;
    static readonly torchflower: BlockType;
    static readonly torchflowerCrop: BlockType;
    /**
     * Represents a trapdoor within Minecraft.
     */
    static readonly trapdoor: BlockType;
    /**
     * Represents a trapped chest within Minecraft.
     */
    static readonly trappedChest: BlockType;
    static readonly tripWire: BlockType;
    /**
     * Represents a tripwire hook within Minecraft.
     */
    static readonly tripwireHook: BlockType;
    /**
     * Represents a block of tuff within Minecraft.
     */
    static readonly tuff: BlockType;
    /**
     * Represents a turtle egg within Minecraft.
     */
    static readonly turtleEgg: BlockType;
    /**
     * Represents a set of twisting vines within Minecraft.
     */
    static readonly twistingVines: BlockType;
    /**
     * Represents an underwater torch within Minecraft.
     */
    static readonly underwaterTorch: BlockType;
    /**
     * Represents an undyed shulker box within Minecraft.
     */
    static readonly undyedShulkerBox: BlockType;
    /**
     * Represents an unknown block within Minecraft.
     */
    static readonly unknown: BlockType;
    /**
     * Represents an unlit redstone torch within Minecraft.
     */
    static readonly unlitRedstoneTorch: BlockType;
    /**
     * Represents an unpowered comparator within Minecraft.
     */
    static readonly unpoweredComparator: BlockType;
    /**
     * Represents an unpowered repeater within Minecraft.
     */
    static readonly unpoweredRepeater: BlockType;
    static readonly verdantFroglight: BlockType;
    /**
     * Represents a set of vines within Minecraft.
     */
    static readonly vine: BlockType;
    /**
     * Represents a wall banner within Minecraft.
     */
    static readonly wallBanner: BlockType;
    /**
     * Represents a wall sign within Minecraft.
     */
    static readonly wallSign: BlockType;
    /**
     * Represents a warped button within Minecraft.
     */
    static readonly warpedButton: BlockType;
    /**
     * Represents a warped door within Minecraft.
     */
    static readonly warpedDoor: BlockType;
    /**
     * Represents a double slab of warped within Minecraft.
     */
    static readonly warpedDoubleSlab: BlockType;
    /**
     * Represents a warped fence within Minecraft.
     */
    static readonly warpedFence: BlockType;
    /**
     * Represents a warped fence gate within Minecraft.
     */
    static readonly warpedFenceGate: BlockType;
    /**
     * Represents warped fungus within Minecraft.
     */
    static readonly warpedFungus: BlockType;
    static readonly warpedHangingSign: BlockType;
    /**
     * Represents warped hyphae within Minecraft.
     */
    static readonly warpedHyphae: BlockType;
    /**
     * Represents warped nylium within Minecraft.
     */
    static readonly warpedNylium: BlockType;
    /**
     * Represents warped planks within Minecraft.
     */
    static readonly warpedPlanks: BlockType;
    /**
     * Represents a warped pressure plate within Minecraft.
     */
    static readonly warpedPressurePlate: BlockType;
    /**
     * Represents a set of warped roots within Minecraft.
     */
    static readonly warpedRoots: BlockType;
    /**
     * Represents a slab of warped material within Minecraft.
     */
    static readonly warpedSlab: BlockType;
    /**
     * Represents a set of warped stairs within Minecraft.
     */
    static readonly warpedStairs: BlockType;
    /**
     * Represents a warped standing sign within Minecraft.
     */
    static readonly warpedStandingSign: BlockType;
    /**
     * Represents a warped stem within Minecraft.
     */
    static readonly warpedStem: BlockType;
    /**
     * Represents a warped trapdoor within Minecraft.
     */
    static readonly warpedTrapdoor: BlockType;
    /**
     * Represents a warped wall sign within Minecraft.
     */
    static readonly warpedWallSign: BlockType;
    /**
     * Represents a warped wart block within Minecraft.
     */
    static readonly warpedWartBlock: BlockType;
    /**
     * Represents water within Minecraft.
     */
    static readonly water: BlockType;
    /**
     * Represents a water lily within Minecraft.
     */
    static readonly waterlily: BlockType;
    /**
     * Represents a block of waxed copper within Minecraft.
     */
    static readonly waxedCopper: BlockType;
    /**
     * Represents a block of waxed cut copper within Minecraft.
     */
    static readonly waxedCutCopper: BlockType;
    /**
     * Represents a slab of waxed cut copper within Minecraft.
     */
    static readonly waxedCutCopperSlab: BlockType;
    /**
     * Represents a set of waxed cut copper stairs within
     * Minecraft.
     */
    static readonly waxedCutCopperStairs: BlockType;
    /**
     * Represents a double slab of waxed cut copper within
     * Minecraft.
     */
    static readonly waxedDoubleCutCopperSlab: BlockType;
    /**
     * Represents a block of waxed exposed copper within Minecraft.
     */
    static readonly waxedExposedCopper: BlockType;
    /**
     * Represents a block of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly waxedExposedCutCopper: BlockType;
    /**
     * Represents a slab of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly waxedExposedCutCopperSlab: BlockType;
    /**
     * Represents a set of waxed exposed cut copper stairs within
     * Minecraft.
     */
    static readonly waxedExposedCutCopperStairs: BlockType;
    /**
     * Represents a double slab of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly waxedExposedDoubleCutCopperSlab: BlockType;
    /**
     * Represents a block of waxed oxidized copper within
     * Minecraft.
     */
    static readonly waxedOxidizedCopper: BlockType;
    /**
     * Represents a block of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly waxedOxidizedCutCopper: BlockType;
    /**
     * Represents a slab of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly waxedOxidizedCutCopperSlab: BlockType;
    /**
     * Represents a set of waxed oxidized cut copper stairs within
     * Minecraft.
     */
    static readonly waxedOxidizedCutCopperStairs: BlockType;
    /**
     * Represents a double slab of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly waxedOxidizedDoubleCutCopperSlab: BlockType;
    /**
     * Represents a block of waxed weathered copper within
     * Minecraft.
     */
    static readonly waxedWeatheredCopper: BlockType;
    /**
     * Represents a block of waxed weathered cut copper within
     * Minecraft.
     */
    static readonly waxedWeatheredCutCopper: BlockType;
    /**
     * Represents a slab of waxed weathered cut copper within
     * Minecraft.
     */
    static readonly waxedWeatheredCutCopperSlab: BlockType;
    /**
     * Represents a set of waxed weathered cut copper stairs within
     * Minecraft.
     */
    static readonly waxedWeatheredCutCopperStairs: BlockType;
    /**
     * Represents a double slab of waxed weathered cut copper
     * within Minecraft.
     */
    static readonly waxedWeatheredDoubleCutCopperSlab: BlockType;
    /**
     * Represents a block of weathered copper within Minecraft.
     */
    static readonly weatheredCopper: BlockType;
    /**
     * Represents a block of weathered cut copper within Minecraft.
     */
    static readonly weatheredCutCopper: BlockType;
    /**
     * Represents a slab of weathered cut copper within Minecraft.
     */
    static readonly weatheredCutCopperSlab: BlockType;
    /**
     * Represents a set of weathered cut copper stairs within
     * Minecraft.
     */
    static readonly weatheredCutCopperStairs: BlockType;
    /**
     * Represents a double slab of weathered cut copper within
     * Minecraft.
     */
    static readonly weatheredDoubleCutCopperSlab: BlockType;
    /**
     * Represents a web within Minecraft.
     */
    static readonly web: BlockType;
    /**
     * Represents a set of weeping vines within Minecraft.
     */
    static readonly weepingVines: BlockType;
    /**
     * Represents wheat within Minecraft.
     */
    static readonly wheat: BlockType;
    /**
     * Represents a white candle within Minecraft.
     */
    static readonly whiteCandle: BlockType;
    /**
     * Represents a white candle cake within Minecraft.
     */
    static readonly whiteCandleCake: BlockType;
    /**
     * Represents a block of white glazed terracotta within
     * Minecraft.
     */
    static readonly whiteGlazedTerracotta: BlockType;
    static readonly whiteWool: BlockType;
    /**
     * Represents a wither rose within Minecraft.
     */
    static readonly witherRose: BlockType;
    /**
     * Represents a block of wood within Minecraft.
     */
    static readonly wood: BlockType;
    /**
     * Represents a wooden button within Minecraft.
     */
    static readonly woodenButton: BlockType;
    /**
     * Represents a wooden door within Minecraft.
     */
    static readonly woodenDoor: BlockType;
    /**
     * Represents a wooden pressure plate within Minecraft.
     */
    static readonly woodenPressurePlate: BlockType;
    /**
     * Represents a wooden slab within Minecraft.
     */
    static readonly woodenSlab: BlockType;
    /**
     * Represents a yellow candle within Minecraft.
     */
    static readonly yellowCandle: BlockType;
    /**
     * Represents a yellow candle cake within Minecraft.
     */
    static readonly yellowCandleCake: BlockType;
    /**
     * Represents a yellow flower within Minecraft.
     */
    static readonly yellowFlower: BlockType;
    /**
     * Represents a yellow block of glazed terracotta within
     * Minecraft.
     */
    static readonly yellowGlazedTerracotta: BlockType;
    static readonly yellowWool: BlockType;
    /**
     * @remarks
     * Returns a specific Minecraft block type given a type id.
     * @param typeName
     */
    static get(typeName: string): BlockType;
    /**
     * @remarks
     * Returns an array of all block types within Minecraft.
     */
    static getAllBlockTypes(): BlockType[];
}
/**
 * A collection of default Minecraft dimension types.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftDimensionTypes {
    protected constructor();
    /**
     * The Nether is a collection of biomes separate from the
     * Overworld, including Soul Sand Valleys and Crimson forests.
     * Nether fortresses contain exclusive resources. Mobs such as
     * Blaze, Hoglins, Piglins, and Ghasts congregate here.
     */
    static readonly nether = 'minecraft:nether';
    /**
     * The overworld is a collection of biomes, including forests,
     * plains, jungles, mountains, deserts, taiga, and more. This
     * is the default starter dimension for Minecraft. Mobs such as
     * Axolotl, Cows, Creepers, and Zombies congregate here.
     */
    static readonly overworld = 'minecraft:overworld';
    /**
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
     */
    static readonly theEnd = 'minecraft:the_end';
}
/**
 * @beta
 * Returns available installed effect types within Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftEffectTypes {
    protected constructor();
    static readonly absorption: EffectType;
    static readonly badOmen: EffectType;
    static readonly blindness: EffectType;
    static readonly conduitPower: EffectType;
    static readonly darkness: EffectType;
    static readonly empty: EffectType;
    static readonly fatalPoison: EffectType;
    static readonly fireResistance: EffectType;
    static readonly haste: EffectType;
    static readonly healthBoost: EffectType;
    static readonly hunger: EffectType;
    static readonly instantDamage: EffectType;
    static readonly instantHealth: EffectType;
    static readonly invisibility: EffectType;
    static readonly jumpBoost: EffectType;
    static readonly levitation: EffectType;
    static readonly miningFatigue: EffectType;
    static readonly nausea: EffectType;
    static readonly nightVision: EffectType;
    static readonly poison: EffectType;
    static readonly regeneration: EffectType;
    static readonly resistance: EffectType;
    static readonly saturation: EffectType;
    static readonly slowFalling: EffectType;
    static readonly slowness: EffectType;
    static readonly speed: EffectType;
    static readonly strength: EffectType;
    static readonly villageHero: EffectType;
    static readonly waterBreathing: EffectType;
    static readonly weakness: EffectType;
    static readonly wither: EffectType;
}
/**
 * @beta
 * Describes a set of enchantment types.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftEnchantmentTypes {
    protected constructor();
    static readonly aquaAffinity: EnchantmentType;
    static readonly baneOfArthropods: EnchantmentType;
    static readonly binding: EnchantmentType;
    static readonly blastProtection: EnchantmentType;
    static readonly channeling: EnchantmentType;
    static readonly depthStrider: EnchantmentType;
    static readonly efficiency: EnchantmentType;
    static readonly featherFalling: EnchantmentType;
    static readonly fireAspect: EnchantmentType;
    static readonly fireProtection: EnchantmentType;
    static readonly flame: EnchantmentType;
    static readonly fortune: EnchantmentType;
    static readonly frostWalker: EnchantmentType;
    static readonly impaling: EnchantmentType;
    static readonly infinity: EnchantmentType;
    static readonly knockback: EnchantmentType;
    static readonly looting: EnchantmentType;
    static readonly loyalty: EnchantmentType;
    static readonly luckOfTheSea: EnchantmentType;
    static readonly lure: EnchantmentType;
    static readonly mending: EnchantmentType;
    static readonly multishot: EnchantmentType;
    static readonly piercing: EnchantmentType;
    static readonly power: EnchantmentType;
    static readonly projectileProtection: EnchantmentType;
    static readonly protection: EnchantmentType;
    static readonly punch: EnchantmentType;
    static readonly quickCharge: EnchantmentType;
    static readonly respiration: EnchantmentType;
    static readonly riptide: EnchantmentType;
    static readonly sharpness: EnchantmentType;
    static readonly silkTouch: EnchantmentType;
    static readonly smite: EnchantmentType;
    static readonly soulSpeed: EnchantmentType;
    static readonly swiftSneak: EnchantmentType;
    static readonly thorns: EnchantmentType;
    static readonly unbreaking: EnchantmentType;
    static readonly vanishing: EnchantmentType;
}
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftEntityTypes {
    protected constructor();
    static readonly agent: EntityType;
    static readonly allay: EntityType;
    static readonly areaEffectCloud: EntityType;
    static readonly armorStand: EntityType;
    static readonly arrow: EntityType;
    static readonly axolotl: EntityType;
    static readonly bat: EntityType;
    static readonly bee: EntityType;
    static readonly blaze: EntityType;
    static readonly boat: EntityType;
    static readonly cat: EntityType;
    static readonly caveSpider: EntityType;
    static readonly chestBoat: EntityType;
    static readonly chestMinecart: EntityType;
    static readonly chicken: EntityType;
    static readonly cod: EntityType;
    static readonly commandBlockMinecart: EntityType;
    static readonly cow: EntityType;
    static readonly creeper: EntityType;
    static readonly dolphin: EntityType;
    static readonly donkey: EntityType;
    static readonly dragonFireball: EntityType;
    static readonly drowned: EntityType;
    static readonly egg: EntityType;
    static readonly elderGuardian: EntityType;
    static readonly enderCrystal: EntityType;
    static readonly enderDragon: EntityType;
    static readonly enderman: EntityType;
    static readonly endermite: EntityType;
    static readonly enderPearl: EntityType;
    static readonly evocationIllager: EntityType;
    static readonly eyeOfEnderSignal: EntityType;
    static readonly fireball: EntityType;
    static readonly fireworksRocket: EntityType;
    static readonly fishingHook: EntityType;
    static readonly fox: EntityType;
    static readonly frog: EntityType;
    static readonly ghast: EntityType;
    static readonly glowSquid: EntityType;
    static readonly goat: EntityType;
    static readonly guardian: EntityType;
    static readonly hoglin: EntityType;
    static readonly hopperMinecart: EntityType;
    static readonly horse: EntityType;
    static readonly husk: EntityType;
    static readonly ironGolem: EntityType;
    static readonly lightningBolt: EntityType;
    static readonly lingeringPotion: EntityType;
    static readonly llama: EntityType;
    static readonly llamaSpit: EntityType;
    static readonly magmaCube: EntityType;
    static readonly minecart: EntityType;
    static readonly mooshroom: EntityType;
    static readonly mule: EntityType;
    static readonly npc: EntityType;
    static readonly ocelot: EntityType;
    static readonly panda: EntityType;
    static readonly parrot: EntityType;
    static readonly phantom: EntityType;
    static readonly pig: EntityType;
    static readonly piglin: EntityType;
    static readonly piglinBrute: EntityType;
    static readonly pillager: EntityType;
    static readonly player: EntityType;
    static readonly polarBear: EntityType;
    static readonly pufferfish: EntityType;
    static readonly rabbit: EntityType;
    static readonly ravager: EntityType;
    static readonly salmon: EntityType;
    static readonly sheep: EntityType;
    static readonly shulker: EntityType;
    static readonly shulkerBullet: EntityType;
    static readonly silverfish: EntityType;
    static readonly skeleton: EntityType;
    static readonly skeletonHorse: EntityType;
    static readonly slime: EntityType;
    static readonly smallFireball: EntityType;
    static readonly snowball: EntityType;
    static readonly snowGolem: EntityType;
    static readonly spider: EntityType;
    static readonly splashPotion: EntityType;
    static readonly squid: EntityType;
    static readonly stray: EntityType;
    static readonly strider: EntityType;
    static readonly tadpole: EntityType;
    static readonly thrownTrident: EntityType;
    static readonly tnt: EntityType;
    static readonly tntMinecart: EntityType;
    static readonly traderLlama: EntityType;
    static readonly tripodCamera: EntityType;
    static readonly tropicalfish: EntityType;
    static readonly turtle: EntityType;
    static readonly vex: EntityType;
    static readonly villager: EntityType;
    static readonly villagerV2: EntityType;
    static readonly vindicator: EntityType;
    static readonly wanderingTrader: EntityType;
    static readonly warden: EntityType;
    static readonly witch: EntityType;
    static readonly wither: EntityType;
    static readonly witherSkeleton: EntityType;
    static readonly witherSkull: EntityType;
    static readonly witherSkullDangerous: EntityType;
    static readonly wolf: EntityType;
    static readonly xpBottle: EntityType;
    static readonly xpOrb: EntityType;
    static readonly zoglin: EntityType;
    static readonly zombie: EntityType;
    static readonly zombieHorse: EntityType;
    static readonly zombiePigman: EntityType;
    static readonly zombieVillager: EntityType;
    static readonly zombieVillagerV2: EntityType;
}
/**
 * @beta
 * Contains definitions of standard Minecraft and Minecraft
 * Education Edition block types.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftItemTypes {
    protected constructor();
    static readonly acaciaBoat: ItemType;
    /**
     * Represents an item that can place an acacia button within
     * Minecraft.
     */
    static readonly acaciaButton: ItemType;
    static readonly acaciaChestBoat: ItemType;
    /**
     * Represents an item that can place an acacia door within
     * Minecraft.
     */
    static readonly acaciaDoor: ItemType;
    /**
     * Represents an item that can place an acacia fence gate
     * within Minecraft.
     */
    static readonly acaciaFenceGate: ItemType;
    /**
     * Represents an item that can place an acacia pressure plate
     * within Minecraft.
     */
    static readonly acaciaPressurePlate: ItemType;
    /**
     * Represents an item that can place an acacia sign within
     * Minecraft.
     */
    static readonly acaciaSign: ItemType;
    /**
     * Represents an item that can place a set of acacia stairs
     * within Minecraft.
     */
    static readonly acaciaStairs: ItemType;
    /**
     * Represents an item that can place an acacia trapdoor within
     * Minecraft.
     */
    static readonly acaciaTrapdoor: ItemType;
    /**
     * Represents an item that can place an activator rail within
     * Minecraft.
     */
    static readonly activatorRail: ItemType;
    static readonly allaySpawnEgg: ItemType;
    /**
     * Represents an item that can place an allow block within
     * Minecraft.
     */
    static readonly allow: ItemType;
    /**
     * Represents an item that can place an amethyst block within
     * Minecraft.
     */
    static readonly amethystBlock: ItemType;
    /**
     * Represents an item that can place a cluster of amethyst
     * within Minecraft.
     */
    static readonly amethystCluster: ItemType;
    static readonly amethystShard: ItemType;
    /**
     * Represents an item that can place ancient debris within
     * Minecraft.
     */
    static readonly ancientDebris: ItemType;
    /**
     * Represents an item that can place andesite stairs within
     * Minecraft.
     */
    static readonly andesiteStairs: ItemType;
    /**
     * Represents an item that can place an anvil within Minecraft.
     */
    static readonly anvil: ItemType;
    static readonly apple: ItemType;
    static readonly armorStand: ItemType;
    static readonly arrow: ItemType;
    static readonly axolotlBucket: ItemType;
    static readonly axolotlSpawnEgg: ItemType;
    /**
     * Represents an item that can place an azalea flowering plant
     * within Minecraft.
     */
    static readonly azalea: ItemType;
    /**
     * Represents an item that can place azalea leaves within
     * Minecraft.
     */
    static readonly azaleaLeaves: ItemType;
    /**
     * Represents flowered azalea leaves within Minecraft.
     */
    static readonly azaleaLeavesFlowered: ItemType;
    static readonly bakedPotato: ItemType;
    /**
     * Represents an item that can place a bamboo tree within
     * Minecraft.
     */
    static readonly bamboo: ItemType;
    static readonly banner: ItemType;
    static readonly bannerPattern: ItemType;
    /**
     * Represents an item that can place a barrel within Minecraft.
     */
    static readonly barrel: ItemType;
    /**
     * Represents an item that can place an invisible but logical
     * barrier within Minecraft.
     */
    static readonly barrier: ItemType;
    /**
     * Represents an item that can place a basalt block within
     * Minecraft.
     */
    static readonly basalt: ItemType;
    static readonly batSpawnEgg: ItemType;
    /**
     * Represents an item that can place a beacon within Minecraft.
     */
    static readonly beacon: ItemType;
    /**
     * Represents an item that can place a bed within Minecraft.
     */
    static readonly bed: ItemType;
    /**
     * Represents an item that can place a bedrock block within
     * Minecraft.
     */
    static readonly bedrock: ItemType;
    static readonly beef: ItemType;
    /**
     * Represents an item that can place a beehive within
     * Minecraft.
     */
    static readonly beehive: ItemType;
    /**
     * Represents an item that can place a bee nest within
     * Minecraft.
     */
    static readonly beeNest: ItemType;
    static readonly beeSpawnEgg: ItemType;
    /**
     * Represents an item that can place a beetroot vegetable
     * within Minecraft.
     */
    static readonly beetroot: ItemType;
    static readonly beetrootSeeds: ItemType;
    static readonly beetrootSoup: ItemType;
    /**
     * Represents an item that can place a bell within Minecraft.
     */
    static readonly bell: ItemType;
    /**
     * Represents an item that can place a big dripleaf plant
     * within Minecraft.
     */
    static readonly bigDripleaf: ItemType;
    static readonly birchBoat: ItemType;
    /**
     * Represents an item that can place a birch button within
     * Minecraft.
     */
    static readonly birchButton: ItemType;
    static readonly birchChestBoat: ItemType;
    /**
     * Represents an item that can place a birch door within
     * Minecraft.
     */
    static readonly birchDoor: ItemType;
    /**
     * Represents an item that can place a birch fence gate within
     * Minecraft.
     */
    static readonly birchFenceGate: ItemType;
    /**
     * Represents an item that can place a birch pressure plate
     * within Minecraft.
     */
    static readonly birchPressurePlate: ItemType;
    /**
     * Represents an item that can place a birch sign within
     * Minecraft.
     */
    static readonly birchSign: ItemType;
    /**
     * Represents an item that can place a birch stairs block
     * within Minecraft.
     */
    static readonly birchStairs: ItemType;
    /**
     * Represents an item that can place a birch trapdoor within
     * Minecraft.
     */
    static readonly birchTrapdoor: ItemType;
    /**
     * Represents an item that can place a black candle within
     * Minecraft.
     */
    static readonly blackCandle: ItemType;
    static readonly blackDye: ItemType;
    /**
     * Represents an item that can place a black glazed terracotta
     * block within Minecraft.
     */
    static readonly blackGlazedTerracotta: ItemType;
    /**
     * Represents an item that can place a blackstone block within
     * Minecraft.
     */
    static readonly blackstone: ItemType;
    /**
     * Represents an item that can place a blackstone slab within
     * Minecraft.
     */
    static readonly blackstoneSlab: ItemType;
    /**
     * Represents blackstone stairs within Minecraft.
     */
    static readonly blackstoneStairs: ItemType;
    /**
     * Represents an item that can place a blackstone wall within
     * Minecraft.
     */
    static readonly blackstoneWall: ItemType;
    static readonly blackWool: ItemType;
    /**
     * Represents an item that can place a blast furnace within
     * Minecraft.
     */
    static readonly blastFurnace: ItemType;
    static readonly blazePowder: ItemType;
    static readonly blazeRod: ItemType;
    static readonly blazeSpawnEgg: ItemType;
    /**
     * Represents an item that can place a blue candle within
     * Minecraft.
     */
    static readonly blueCandle: ItemType;
    static readonly blueDye: ItemType;
    /**
     * Represents an item that can place a blue glazed terracotta
     * block within Minecraft.
     */
    static readonly blueGlazedTerracotta: ItemType;
    /**
     * Represents an item that can place a blue ice block within
     * Minecraft.
     */
    static readonly blueIce: ItemType;
    static readonly blueWool: ItemType;
    static readonly boat: ItemType;
    static readonly bone: ItemType;
    /**
     * Represents an item that can place a bone block within
     * Minecraft.
     */
    static readonly boneBlock: ItemType;
    static readonly boneMeal: ItemType;
    static readonly book: ItemType;
    /**
     * Represents an item that can place an unbreakable border
     * block within Minecraft.
     */
    static readonly bookshelf: ItemType;
    /**
     * Represents an item that can place a border block within
     * Minecraft.
     */
    static readonly borderBlock: ItemType;
    static readonly bordureIndentedBannerPattern: ItemType;
    static readonly bow: ItemType;
    static readonly bowl: ItemType;
    static readonly bread: ItemType;
    /**
     * Represents an item that can place a brewing stand within
     * Minecraft.
     */
    static readonly brewingStand: ItemType;
    static readonly brick: ItemType;
    /**
     * Represents an item that can place a block of brick within
     * Minecraft.
     */
    static readonly brickBlock: ItemType;
    /**
     * Represents brick stairs within Minecraft.
     */
    static readonly brickStairs: ItemType;
    /**
     * Represents an item that can place a brown candle within
     * Minecraft.
     */
    static readonly brownCandle: ItemType;
    static readonly brownDye: ItemType;
    /**
     * Represents an item that can place a brown glazed terracotta
     * block within Minecraft.
     */
    static readonly brownGlazedTerracotta: ItemType;
    /**
     * Represents an item that can place a brown mushroom within
     * Minecraft.
     */
    static readonly brownMushroom: ItemType;
    /**
     * Represents an item that can place a block of brown mushroom
     * within Minecraft.
     */
    static readonly brownMushroomBlock: ItemType;
    static readonly brownWool: ItemType;
    static readonly bucket: ItemType;
    /**
     * Represents an item that can place a block of budding
     * amethyst within Minecraft.
     */
    static readonly buddingAmethyst: ItemType;
    /**
     * Represents an item that can place a cactus within Minecraft.
     */
    static readonly cactus: ItemType;
    /**
     * Represents an item that can place a cake within Minecraft.
     */
    static readonly cake: ItemType;
    /**
     * Represents an item that can place a calcite block within
     * Minecraft.
     */
    static readonly calcite: ItemType;
    /**
     * Represents an item that can place a campfire within
     * Minecraft.
     */
    static readonly campfire: ItemType;
    /**
     * Represents an item that can place a candle within Minecraft.
     */
    static readonly candle: ItemType;
    /**
     * Represents an item that can place a carpet within Minecraft.
     */
    static readonly carpet: ItemType;
    static readonly carrot: ItemType;
    static readonly carrotOnAStick: ItemType;
    /**
     * Represents an item that can place a cartography table block
     * within Minecraft.
     */
    static readonly cartographyTable: ItemType;
    /**
     * Represents an item that can place a carved pumpkin within
     * Minecraft.
     */
    static readonly carvedPumpkin: ItemType;
    static readonly catSpawnEgg: ItemType;
    /**
     * Represents an item that can place a cauldron within
     * Minecraft.
     */
    static readonly cauldron: ItemType;
    static readonly caveSpiderSpawnEgg: ItemType;
    /**
     * Represents an item that can place a metallic chain within
     * Minecraft.
     */
    static readonly chain: ItemType;
    /**
     * Represents an item that can place a block that gives off
     * heat but not light, within Minecraft Education Edition or
     * Bedrock Edition with Education features.
     */
    static readonly chainCommandBlock: ItemType;
    static readonly chainmailBoots: ItemType;
    static readonly chainmailChestplate: ItemType;
    static readonly chainmailHelmet: ItemType;
    static readonly chainmailLeggings: ItemType;
    static readonly charcoal: ItemType;
    /**
     * Represents an item that can place a chest within Minecraft.
     */
    static readonly chest: ItemType;
    static readonly chestBoat: ItemType;
    static readonly chestMinecart: ItemType;
    static readonly chicken: ItemType;
    static readonly chickenSpawnEgg: ItemType;
    /**
     * Represents an item that can place a set of chiseled
     * deepslate within Minecraft.
     */
    static readonly chiseledDeepslate: ItemType;
    /**
     * Represents an item that can place a block of chiseled nether
     * bricks within Minecraft.
     */
    static readonly chiseledNetherBricks: ItemType;
    /**
     * Represents an item that can place a block of chiseled
     * polished blackstone within Minecraft.
     */
    static readonly chiseledPolishedBlackstone: ItemType;
    /**
     * Represents an item that can place a chorus flower within
     * Minecraft.
     */
    static readonly chorusFlower: ItemType;
    static readonly chorusFruit: ItemType;
    /**
     * Represents an item that can place a chorus plant within
     * Minecraft.
     */
    static readonly chorusPlant: ItemType;
    /**
     * Represents an item that can place a block of clay within
     * Minecraft.
     */
    static readonly clay: ItemType;
    static readonly clayBall: ItemType;
    static readonly clock: ItemType;
    static readonly coal: ItemType;
    /**
     * Represents an item that can place a block of solid coal
     * within Minecraft.
     */
    static readonly coalBlock: ItemType;
    /**
     * Represents an item that can place a block with embedded coal
     * ore within Minecraft.
     */
    static readonly coalOre: ItemType;
    /**
     * Represents an item that can place a block of cobbled
     * deepslate within Minecraft.
     */
    static readonly cobbledDeepslate: ItemType;
    /**
     * Represents an item that can place a slab of deepslate within
     * Minecraft.
     */
    static readonly cobbledDeepslateSlab: ItemType;
    /**
     * Represents cobbled deepslate stairs within Minecraft.
     */
    static readonly cobbledDeepslateStairs: ItemType;
    /**
     * Represents an item that can place a cobbled deepslate wall
     * within Minecraft.
     */
    static readonly cobbledDeepslateWall: ItemType;
    /**
     * Represents an item that can place a block of cobblestone
     * within Minecraft.
     */
    static readonly cobblestone: ItemType;
    /**
     * Represents an item that can place a wall of cobblestone
     * within Minecraft.
     */
    static readonly cobblestoneWall: ItemType;
    static readonly cocoaBeans: ItemType;
    static readonly cod: ItemType;
    static readonly codBucket: ItemType;
    static readonly codSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block that can run
     * commands within Minecraft.
     */
    static readonly commandBlock: ItemType;
    static readonly commandBlockMinecart: ItemType;
    static readonly comparator: ItemType;
    static readonly compass: ItemType;
    /**
     * Represents an item that can place a composter block within
     * Minecraft.
     */
    static readonly composter: ItemType;
    /**
     * Represents an item that can place a block of concrete powder
     * within Minecraft.
     */
    static readonly concrete: ItemType;
    static readonly concretePowder: ItemType;
    /**
     * Represents an item that can place a conduit block within
     * Minecraft.
     */
    static readonly conduit: ItemType;
    static readonly cookedBeef: ItemType;
    static readonly cookedChicken: ItemType;
    static readonly cookedCod: ItemType;
    static readonly cookedMutton: ItemType;
    static readonly cookedPorkchop: ItemType;
    static readonly cookedRabbit: ItemType;
    static readonly cookedSalmon: ItemType;
    static readonly cookie: ItemType;
    /**
     * Represents an item that can place a solid block of copper
     * within Minecraft.
     */
    static readonly copperBlock: ItemType;
    static readonly copperIngot: ItemType;
    /**
     * Represents an item that can place a block with embedded
     * copper ore within Minecraft.
     */
    static readonly copperOre: ItemType;
    /**
     * Represents coral within Minecraft.
     */
    static readonly coral: ItemType;
    /**
     * Represents an item that can place a solid block of coral
     * within Minecraft.
     */
    static readonly coralBlock: ItemType;
    /**
     * Represents an item that can place a fan formation of coral
     * within Minecraft.
     */
    static readonly coralFan: ItemType;
    /**
     * Represents an item that can place a fan formation of dead
     * coral within Minecraft.
     */
    static readonly coralFanDead: ItemType;
    static readonly cowSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block of cracked
     * deepslate bricks within Minecraft.
     */
    static readonly crackedDeepslateBricks: ItemType;
    /**
     * Represents tiles of cracked deepslate within Minecraft.
     */
    static readonly crackedDeepslateTiles: ItemType;
    /**
     * Represents an item that can place a block of cracked nether
     * bricks within Minecraft.
     */
    static readonly crackedNetherBricks: ItemType;
    /**
     * Represents an item that can place a block of cracked and
     * polished blackstone bricks within Minecraft.
     */
    static readonly crackedPolishedBlackstoneBricks: ItemType;
    /**
     * Represents an item that can place a crafting table within
     * Minecraft.
     */
    static readonly craftingTable: ItemType;
    static readonly creeperBannerPattern: ItemType;
    static readonly creeperSpawnEgg: ItemType;
    /**
     * Represents an item that can place a crimson button within
     * Minecraft.
     */
    static readonly crimsonButton: ItemType;
    /**
     * Represents an item that can place a crimson door within
     * Minecraft.
     */
    static readonly crimsonDoor: ItemType;
    /**
     * Represents an item that can place a crimson fence within
     * Minecraft.
     */
    static readonly crimsonFence: ItemType;
    /**
     * Represents an item that can place a crimson fence gate
     * within Minecraft.
     */
    static readonly crimsonFenceGate: ItemType;
    /**
     * Represents an item that can place a crimson fungus within
     * Minecraft.
     */
    static readonly crimsonFungus: ItemType;
    /**
     * Represents crimson hyphae within Minecraft.
     */
    static readonly crimsonHyphae: ItemType;
    /**
     * Represents crimson nylium within Minecraft.
     */
    static readonly crimsonNylium: ItemType;
    /**
     * Represents an item that can place a set of crimson planks
     * within Minecraft.
     */
    static readonly crimsonPlanks: ItemType;
    /**
     * Represents an item that can place a crimson pressure plate
     * within Minecraft.
     */
    static readonly crimsonPressurePlate: ItemType;
    /**
     * Represents an item that can place a set of crimson roots
     * within Minecraft.
     */
    static readonly crimsonRoots: ItemType;
    static readonly crimsonSign: ItemType;
    /**
     * Represents an item that can place a crimson slab within
     * Minecraft.
     */
    static readonly crimsonSlab: ItemType;
    /**
     * Represents an item that can place a set of crimson stairs
     * within Minecraft.
     */
    static readonly crimsonStairs: ItemType;
    /**
     * Represents an item that can place a crimson stem within
     * Minecraft.
     */
    static readonly crimsonStem: ItemType;
    /**
     * Represents an item that can place a crimson trapdoor within
     * Minecraft.
     */
    static readonly crimsonTrapdoor: ItemType;
    static readonly crossbow: ItemType;
    /**
     * Represents crying obsidian within Minecraft.
     */
    static readonly cryingObsidian: ItemType;
    /**
     * Represents an item that can place a cut copper block within
     * Minecraft.
     */
    static readonly cutCopper: ItemType;
    /**
     * Represents an item that can place a cut copper slab within
     * Minecraft.
     */
    static readonly cutCopperSlab: ItemType;
    /**
     * Represents an item that can place a set of cut copper stairs
     * within Minecraft.
     */
    static readonly cutCopperStairs: ItemType;
    /**
     * Represents an item that can place a cyan-colored candle
     * within Minecraft.
     */
    static readonly cyanCandle: ItemType;
    static readonly cyanDye: ItemType;
    /**
     * Represents an item that can place a block of cyan-colored
     * glazed terracotta within Minecraft.
     */
    static readonly cyanGlazedTerracotta: ItemType;
    static readonly cyanWool: ItemType;
    static readonly darkOakBoat: ItemType;
    /**
     * Represents an item that can place a dark oak button within
     * Minecraft.
     */
    static readonly darkOakButton: ItemType;
    static readonly darkOakChestBoat: ItemType;
    /**
     * Represents an item that can place a dark oak door within
     * Minecraft.
     */
    static readonly darkOakDoor: ItemType;
    /**
     * Represents an item that can place a dark oak fence gate
     * within Minecraft.
     */
    static readonly darkOakFenceGate: ItemType;
    /**
     * Represents an item that can place a dark oak pressure plate
     * within Minecraft.
     */
    static readonly darkOakPressurePlate: ItemType;
    /**
     * Represents an item that can place a dark oak sign within
     * Minecraft.
     */
    static readonly darkOakSign: ItemType;
    /**
     * Represents an item that can place a set of dark oak stairs
     * within Minecraft.
     */
    static readonly darkOakStairs: ItemType;
    /**
     * Represents an item that can place a dark oak trapdoor within
     * Minecraft.
     */
    static readonly darkOakTrapdoor: ItemType;
    /**
     * Represents an item that can place a set of dark prismarine
     * stairs within Minecraft.
     */
    static readonly darkPrismarineStairs: ItemType;
    /**
     * Represents an item that can place a daylight detector within
     * Minecraft.
     */
    static readonly daylightDetector: ItemType;
    /**
     * Represents an item that can place a dead bush within
     * Minecraft.
     */
    static readonly deadbush: ItemType;
    /**
     * Represents an item that can place a block of deepslate
     * within Minecraft.
     */
    static readonly deepslate: ItemType;
    /**
     * Represents an item that can place a block of deepslate
     * bricks within Minecraft.
     */
    static readonly deepslateBricks: ItemType;
    /**
     * Represents an item that can place a slab of deepslate brick
     * within Minecraft.
     */
    static readonly deepslateBrickSlab: ItemType;
    /**
     * Represents an item that can place a set of deepslate brick
     * stairs within Minecraft.
     */
    static readonly deepslateBrickStairs: ItemType;
    /**
     * Represents an item that can place a deepslate brick wall
     * within Minecraft.
     */
    static readonly deepslateBrickWall: ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded coal ore within Minecraft.
     */
    static readonly deepslateCoalOre: ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded copper ore within Minecraft.
     */
    static readonly deepslateCopperOre: ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded diamond ore within Minecraft.
     */
    static readonly deepslateDiamondOre: ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded emerald ore within Minecraft.
     */
    static readonly deepslateEmeraldOre: ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded gold ore within Minecraft.
     */
    static readonly deepslateGoldOre: ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded iron ore within Minecraft.
     */
    static readonly deepslateIronOre: ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded lapis lazuli ore within Minecraft.
     */
    static readonly deepslateLapisOre: ItemType;
    /**
     * Represents an item that can place a block of deepslate with
     * embedded redstone ore within Minecraft.
     */
    static readonly deepslateRedstoneOre: ItemType;
    /**
     * Represents an item that can place a set of deepslate tiles
     * within Minecraft.
     */
    static readonly deepslateTiles: ItemType;
    /**
     * Represents an item that can place a slab of deepslate tiles
     * within Minecraft.
     */
    static readonly deepslateTileSlab: ItemType;
    /**
     * Represents an item that can place a set of deepslate tile
     * stairs within Minecraft.
     */
    static readonly deepslateTileStairs: ItemType;
    /**
     * Represents an item that can place a wall of deepslate tile
     * within Minecraft.
     */
    static readonly deepslateTileWall: ItemType;
    /**
     * Represents an item that can place a logical but generally
     * invisible Deny logic block within Minecraft.
     */
    static readonly deny: ItemType;
    /**
     * Represents an item that can place a detector rail within
     * Minecraft.
     */
    static readonly detectorRail: ItemType;
    static readonly diamond: ItemType;
    static readonly diamondAxe: ItemType;
    /**
     * Represents an item that can place a block of diamond within
     * Minecraft.
     */
    static readonly diamondBlock: ItemType;
    static readonly diamondBoots: ItemType;
    static readonly diamondChestplate: ItemType;
    static readonly diamondHelmet: ItemType;
    static readonly diamondHoe: ItemType;
    static readonly diamondHorseArmor: ItemType;
    static readonly diamondLeggings: ItemType;
    /**
     * Represents an item that can place a block with embedded
     * diamond ore within Minecraft.
     */
    static readonly diamondOre: ItemType;
    static readonly diamondPickaxe: ItemType;
    static readonly diamondShovel: ItemType;
    static readonly diamondSword: ItemType;
    /**
     * Represents an item that can place a set of diorite stairs
     * within Minecraft.
     */
    static readonly dioriteStairs: ItemType;
    /**
     * Represents an item that can place a block of dirt within
     * Minecraft.
     */
    static readonly dirt: ItemType;
    /**
     * Represents an item that can place a block of dirt with roots
     * within Minecraft.
     */
    static readonly dirtWithRoots: ItemType;
    static readonly discFragment5: ItemType;
    /**
     * Represents an item that can place a dispenser within
     * Minecraft.
     */
    static readonly dispenser: ItemType;
    static readonly dolphinSpawnEgg: ItemType;
    static readonly donkeySpawnEgg: ItemType;
    /**
     * Represents an item that can place a double plant within
     * Minecraft.
     */
    static readonly doublePlant: ItemType;
    static readonly dragonBreath: ItemType;
    /**
     * Represents an item that can place a dragon egg within
     * Minecraft.
     */
    static readonly dragonEgg: ItemType;
    static readonly driedKelp: ItemType;
    /**
     * Represents an item that can place a block of dried kelp
     * within Minecraft.
     */
    static readonly driedKelpBlock: ItemType;
    /**
     * Represents an item that can place a block of dripstone
     * within Minecraft.
     */
    static readonly dripstoneBlock: ItemType;
    /**
     * Represents an item that can place a dropper within
     * Minecraft.
     */
    static readonly dropper: ItemType;
    static readonly drownedSpawnEgg: ItemType;
    static readonly dye: ItemType;
    static readonly echoShard: ItemType;
    static readonly egg: ItemType;
    static readonly elderGuardianSpawnEgg: ItemType;
    static readonly elytra: ItemType;
    static readonly emerald: ItemType;
    /**
     * Represents an item that can place a block of emerald within
     * Minecraft.
     */
    static readonly emeraldBlock: ItemType;
    /**
     * Represents an item that can place a block with embedded
     * emerald ore within Minecraft.
     */
    static readonly emeraldOre: ItemType;
    static readonly emptyMap: ItemType;
    static readonly enchantedBook: ItemType;
    static readonly enchantedGoldenApple: ItemType;
    /**
     * Represents an item that can place an enchanting table within
     * Minecraft.
     */
    static readonly enchantingTable: ItemType;
    /**
     * Represents an item that can place an end bricks block within
     * Minecraft.
     */
    static readonly endBricks: ItemType;
    /**
     * Represents an item that can place a set of end brick stairs
     * within Minecraft.
     */
    static readonly endBrickStairs: ItemType;
    static readonly endCrystal: ItemType;
    /**
     * Represents an item that can place an ender chest within
     * Minecraft.
     */
    static readonly enderChest: ItemType;
    static readonly enderDragonSpawnEgg: ItemType;
    static readonly enderEye: ItemType;
    static readonly endermanSpawnEgg: ItemType;
    static readonly endermiteSpawnEgg: ItemType;
    static readonly enderPearl: ItemType;
    /**
     * Represents an item that can place an end portal frame within
     * Minecraft.
     */
    static readonly endPortalFrame: ItemType;
    /**
     * Represents an item that can place an end rod within
     * Minecraft.
     */
    static readonly endRod: ItemType;
    /**
     * Represents an item that can place an end stone block within
     * Minecraft.
     */
    static readonly endStone: ItemType;
    static readonly evokerSpawnEgg: ItemType;
    static readonly experienceBottle: ItemType;
    /**
     * Represents an item that can place a block of exposed copper
     * within Minecraft.
     */
    static readonly exposedCopper: ItemType;
    /**
     * Represents an item that can place a block of exposed cut
     * copper within Minecraft.
     */
    static readonly exposedCutCopper: ItemType;
    /**
     * Represents an item that can place a slab of exposed cut
     * copper within Minecraft.
     */
    static readonly exposedCutCopperSlab: ItemType;
    /**
     * Represents an item that can place a set of exposed cut
     * copper stairs within Minecraft.
     */
    static readonly exposedCutCopperStairs: ItemType;
    /**
     * Represents an item that can place a farmland block within
     * Minecraft.
     */
    static readonly farmland: ItemType;
    static readonly feather: ItemType;
    /**
     * Represents an item that can place a fence within Minecraft.
     */
    static readonly fence: ItemType;
    /**
     * Represents an item that can place a fence gate within
     * Minecraft.
     */
    static readonly fenceGate: ItemType;
    static readonly fermentedSpiderEye: ItemType;
    static readonly fieldMasonedBannerPattern: ItemType;
    static readonly filledMap: ItemType;
    static readonly fireCharge: ItemType;
    static readonly fireworkRocket: ItemType;
    static readonly fireworkStar: ItemType;
    static readonly fishingRod: ItemType;
    /**
     * Represents an item that can place a fletching table within
     * Minecraft.
     */
    static readonly fletchingTable: ItemType;
    static readonly flint: ItemType;
    static readonly flintAndSteel: ItemType;
    static readonly flowerBannerPattern: ItemType;
    /**
     * Represents an item that can place a flowering azalea plant
     * within Minecraft.
     */
    static readonly floweringAzalea: ItemType;
    /**
     * Represents an item that can place a flower pot within
     * Minecraft.
     */
    static readonly flowerPot: ItemType;
    static readonly foxSpawnEgg: ItemType;
    /**
     * Represents an item that can place a frame within Minecraft.
     */
    static readonly frame: ItemType;
    static readonly frogSpawn: ItemType;
    static readonly frogSpawnEgg: ItemType;
    /**
     * Represents an item that can place a frosted ice block within
     * Minecraft.
     */
    static readonly frostedIce: ItemType;
    /**
     * Represents an item that can place a furnace within
     * Minecraft.
     */
    static readonly furnace: ItemType;
    static readonly ghastSpawnEgg: ItemType;
    static readonly ghastTear: ItemType;
    /**
     * Represents an item that can place a block of gilded
     * blackstone within Minecraft.
     */
    static readonly gildedBlackstone: ItemType;
    /**
     * Represents an item that can place a glass block within
     * Minecraft.
     */
    static readonly glass: ItemType;
    static readonly glassBottle: ItemType;
    /**
     * Represents an item that can place a pane of glass within
     * Minecraft.
     */
    static readonly glassPane: ItemType;
    static readonly glisteringMelonSlice: ItemType;
    static readonly globeBannerPattern: ItemType;
    static readonly glowBerries: ItemType;
    /**
     * Represents an item that can place a glowing frame within
     * Minecraft.
     */
    static readonly glowFrame: ItemType;
    static readonly glowInkSac: ItemType;
    /**
     * Represents glow lichen within Minecraft.
     */
    static readonly glowLichen: ItemType;
    static readonly glowSquidSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block of glowstone
     * within Minecraft.
     */
    static readonly glowstone: ItemType;
    static readonly glowstoneDust: ItemType;
    static readonly goatHorn: ItemType;
    static readonly goatSpawnEgg: ItemType;
    /**
     * Represents an item that can place a gold block within
     * Minecraft.
     */
    static readonly goldBlock: ItemType;
    static readonly goldenApple: ItemType;
    static readonly goldenAxe: ItemType;
    static readonly goldenBoots: ItemType;
    static readonly goldenCarrot: ItemType;
    static readonly goldenChestplate: ItemType;
    static readonly goldenHelmet: ItemType;
    static readonly goldenHoe: ItemType;
    static readonly goldenHorseArmor: ItemType;
    static readonly goldenLeggings: ItemType;
    static readonly goldenPickaxe: ItemType;
    /**
     * Represents an item that can place a golden rail element
     * within Minecraft.
     */
    static readonly goldenRail: ItemType;
    static readonly goldenShovel: ItemType;
    static readonly goldenSword: ItemType;
    static readonly goldIngot: ItemType;
    static readonly goldNugget: ItemType;
    /**
     * Represents an item that can place a block with embedded gold
     * ore within Minecraft.
     */
    static readonly goldOre: ItemType;
    /**
     * Represents an item that can place a set of granite stairs
     * within Minecraft.
     */
    static readonly graniteStairs: ItemType;
    /**
     * Represents an item that can place a block of dirt and grass
     * within Minecraft.
     */
    static readonly grass: ItemType;
    /**
     * Represents an item that can place a block of dirt and grass
     * with a path within Minecraft.
     */
    static readonly grassPath: ItemType;
    /**
     * Represents an item that can place a block of gravel within
     * Minecraft.
     */
    static readonly gravel: ItemType;
    /**
     * Represents an item that can place a gray-colored candle
     * within Minecraft.
     */
    static readonly grayCandle: ItemType;
    static readonly grayDye: ItemType;
    /**
     * Represents an item that can place a gray-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly grayGlazedTerracotta: ItemType;
    static readonly grayWool: ItemType;
    /**
     * Represents an item that can place a green-colored candle
     * within Minecraft.
     */
    static readonly greenCandle: ItemType;
    static readonly greenDye: ItemType;
    /**
     * Represents an item that can place a green block of glazed
     * terracotta within Minecraft.
     */
    static readonly greenGlazedTerracotta: ItemType;
    static readonly greenWool: ItemType;
    /**
     * Represents an item that can place a grindstone within
     * Minecraft.
     */
    static readonly grindstone: ItemType;
    static readonly guardianSpawnEgg: ItemType;
    static readonly gunpowder: ItemType;
    /**
     * Represents an item that can place a set of hanging roots
     * within Minecraft.
     */
    static readonly hangingRoots: ItemType;
    /**
     * Represents an item that can place a block of hardened clay
     * within Minecraft.
     */
    static readonly hardenedClay: ItemType;
    /**
     * Represents an item that can place a block of hay within
     * Minecraft.
     */
    static readonly hayBlock: ItemType;
    static readonly heartOfTheSea: ItemType;
    /**
     * Represents an item that can place a heavy weighted pressure
     * plate within Minecraft.
     */
    static readonly heavyWeightedPressurePlate: ItemType;
    static readonly hoglinSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block of honey within
     * Minecraft.
     */
    static readonly honeyBlock: ItemType;
    static readonly honeyBottle: ItemType;
    static readonly honeycomb: ItemType;
    /**
     * Represents an item that can place a honeycomb block within
     * Minecraft.
     */
    static readonly honeycombBlock: ItemType;
    /**
     * Represents an item that can place a hopper within Minecraft.
     */
    static readonly hopper: ItemType;
    static readonly hopperMinecart: ItemType;
    static readonly horseSpawnEgg: ItemType;
    static readonly huskSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block of ice within
     * Minecraft.
     */
    static readonly ice: ItemType;
    /**
     * Represents an item that can place an infested block of
     * deepslate within Minecraft.
     */
    static readonly infestedDeepslate: ItemType;
    static readonly inkSac: ItemType;
    static readonly ironAxe: ItemType;
    /**
     * Represents iron bars within Minecraft.
     */
    static readonly ironBars: ItemType;
    /**
     * Represents an item that can place a block of iron within
     * Minecraft.
     */
    static readonly ironBlock: ItemType;
    static readonly ironBoots: ItemType;
    static readonly ironChestplate: ItemType;
    /**
     * Represents an item that can place an iron door within
     * Minecraft.
     */
    static readonly ironDoor: ItemType;
    static readonly ironGolemSpawnEgg: ItemType;
    static readonly ironHelmet: ItemType;
    static readonly ironHoe: ItemType;
    static readonly ironHorseArmor: ItemType;
    static readonly ironIngot: ItemType;
    static readonly ironLeggings: ItemType;
    static readonly ironNugget: ItemType;
    /**
     * Represents an item that can place a block with embedded iron
     * ore within Minecraft.
     */
    static readonly ironOre: ItemType;
    static readonly ironPickaxe: ItemType;
    static readonly ironShovel: ItemType;
    static readonly ironSword: ItemType;
    /**
     * Represents an item that can place an iron trapdoor within
     * Minecraft.
     */
    static readonly ironTrapdoor: ItemType;
    /**
     * Represents an item that can place a jigsaw within Minecraft.
     */
    static readonly jigsaw: ItemType;
    /**
     * Represents an item that can place a jukebox within
     * Minecraft.
     */
    static readonly jukebox: ItemType;
    static readonly jungleBoat: ItemType;
    /**
     * Represents jungle wood button within Minecraft.
     */
    static readonly jungleButton: ItemType;
    static readonly jungleChestBoat: ItemType;
    /**
     * Represents an item that can place a jungle wood door within
     * Minecraft.
     */
    static readonly jungleDoor: ItemType;
    /**
     * Represents an item that can place a jungle wood fence gate
     * within Minecraft.
     */
    static readonly jungleFenceGate: ItemType;
    /**
     * Represents an item that can place a jungle wood pressure
     * plate within Minecraft.
     */
    static readonly junglePressurePlate: ItemType;
    /**
     * Represents an item that can place a jungle sign within
     * Minecraft.
     */
    static readonly jungleSign: ItemType;
    /**
     * Represents an item that can place a set of jungle wood
     * stairs within Minecraft.
     */
    static readonly jungleStairs: ItemType;
    /**
     * Represents an item that can place a jungle wood trapdoor
     * within Minecraft.
     */
    static readonly jungleTrapdoor: ItemType;
    /**
     * Represents an item that can place a set of kelp within
     * Minecraft.
     */
    static readonly kelp: ItemType;
    /**
     * Represents an item that can place a ladder within Minecraft.
     */
    static readonly ladder: ItemType;
    /**
     * Represents an item that can place a lantern within
     * Minecraft.
     */
    static readonly lantern: ItemType;
    /**
     * Represents an item that can place a block of lapis lazuli
     * within Minecraft.
     */
    static readonly lapisBlock: ItemType;
    static readonly lapisLazuli: ItemType;
    /**
     * Represents an item that can place a block with embedded
     * lapis lazuli within Minecraft.
     */
    static readonly lapisOre: ItemType;
    /**
     * Represents an item that can place a bud of large amethyst
     * within Minecraft.
     */
    static readonly largeAmethystBud: ItemType;
    static readonly lavaBucket: ItemType;
    static readonly lead: ItemType;
    static readonly leather: ItemType;
    static readonly leatherBoots: ItemType;
    static readonly leatherChestplate: ItemType;
    static readonly leatherHelmet: ItemType;
    static readonly leatherHorseArmor: ItemType;
    static readonly leatherLeggings: ItemType;
    /**
     * Represents an item that can place a set of leaves within
     * Minecraft.
     */
    static readonly leaves: ItemType;
    /**
     * Represents an item that can place an updated set of leaves
     * within Minecraft.
     */
    static readonly leaves2: ItemType;
    /**
     * Represents an item that can place a lectern within
     * Minecraft.
     */
    static readonly lectern: ItemType;
    /**
     * Represents an item that can place a lever within Minecraft.
     */
    static readonly lever: ItemType;
    /**
     * Represents an item that can place a block of light within
     * Minecraft.
     */
    static readonly lightBlock: ItemType;
    /**
     * Represents an item that can place a light blue candle within
     * Minecraft.
     */
    static readonly lightBlueCandle: ItemType;
    static readonly lightBlueDye: ItemType;
    /**
     * Represents an item that can place a light blue block of
     * glazed terracotta within Minecraft.
     */
    static readonly lightBlueGlazedTerracotta: ItemType;
    static readonly lightBlueWool: ItemType;
    /**
     * Represents an item that can place a light gray candle within
     * Minecraft.
     */
    static readonly lightGrayCandle: ItemType;
    static readonly lightGrayDye: ItemType;
    static readonly lightGrayWool: ItemType;
    /**
     * Represents an item that can place a lightning rod within
     * Minecraft.
     */
    static readonly lightningRod: ItemType;
    /**
     * Represents an item that can place a light weighted pressure
     * plate within Minecraft.
     */
    static readonly lightWeightedPressurePlate: ItemType;
    /**
     * Represents an item that can place a lime candle within
     * Minecraft.
     */
    static readonly limeCandle: ItemType;
    static readonly limeDye: ItemType;
    /**
     * Represents an item that can place a lime-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly limeGlazedTerracotta: ItemType;
    static readonly limeWool: ItemType;
    static readonly lingeringPotion: ItemType;
    /**
     * Represents an item that can place a lit pumpkin within
     * Minecraft.
     */
    static readonly litPumpkin: ItemType;
    static readonly llamaSpawnEgg: ItemType;
    /**
     * Represents an item that can place a lodestone within
     * Minecraft.
     */
    static readonly lodestone: ItemType;
    static readonly lodestoneCompass: ItemType;
    /**
     * Represents an item that can place a log within Minecraft.
     */
    static readonly log: ItemType;
    /**
     * Represents an item that can place a more updated,
     * customizable log within Minecraft.
     */
    static readonly log2: ItemType;
    /**
     * Represents an item that can place a loom within Minecraft.
     */
    static readonly loom: ItemType;
    /**
     * Represents an item that can place a magenta candle within
     * Minecraft.
     */
    static readonly magentaCandle: ItemType;
    static readonly magentaDye: ItemType;
    /**
     * Represents an item that can place a block of magenta-colored
     * glazed terracotta within Minecraft.
     */
    static readonly magentaGlazedTerracotta: ItemType;
    static readonly magentaWool: ItemType;
    /**
     * Represents magma within Minecraft.
     */
    static readonly magma: ItemType;
    static readonly magmaCream: ItemType;
    static readonly magmaCubeSpawnEgg: ItemType;
    static readonly mangroveBoat: ItemType;
    static readonly mangroveButton: ItemType;
    static readonly mangroveChestBoat: ItemType;
    static readonly mangroveDoor: ItemType;
    static readonly mangroveFence: ItemType;
    static readonly mangroveFenceGate: ItemType;
    static readonly mangroveLeaves: ItemType;
    static readonly mangroveLog: ItemType;
    static readonly mangrovePlanks: ItemType;
    static readonly mangrovePressurePlate: ItemType;
    static readonly mangrovePropagule: ItemType;
    static readonly mangroveRoots: ItemType;
    static readonly mangroveSign: ItemType;
    static readonly mangroveSlab: ItemType;
    static readonly mangroveStairs: ItemType;
    static readonly mangroveTrapdoor: ItemType;
    static readonly mangroveWood: ItemType;
    /**
     * Represents an item that can place a medium-sized bud of
     * amethyst within Minecraft.
     */
    static readonly mediumAmethystBud: ItemType;
    /**
     * Represents an item that can place a block of melon within
     * Minecraft.
     */
    static readonly melonBlock: ItemType;
    static readonly melonSeeds: ItemType;
    static readonly melonSlice: ItemType;
    static readonly milkBucket: ItemType;
    static readonly minecart: ItemType;
    /**
     * Represents an item that can place a mob spawner within
     * Minecraft.
     */
    static readonly mobSpawner: ItemType;
    static readonly mojangBannerPattern: ItemType;
    /**
     * Represents an item that can place a monster egg within
     * Minecraft.
     */
    static readonly monsterEgg: ItemType;
    static readonly mooshroomSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block of moss within
     * Minecraft.
     */
    static readonly mossBlock: ItemType;
    /**
     * Represents an item that can place a carpet of moss within
     * Minecraft.
     */
    static readonly mossCarpet: ItemType;
    /**
     * Represents an item that can place a block of cobblestone
     * with moss within Minecraft.
     */
    static readonly mossyCobblestone: ItemType;
    /**
     * Represents an item that can place a set of mossy cobblestone
     * stairs within Minecraft.
     */
    static readonly mossyCobblestoneStairs: ItemType;
    /**
     * Represents an item that can place a set of mossy stone brick
     * stairs within Minecraft.
     */
    static readonly mossyStoneBrickStairs: ItemType;
    static readonly mud: ItemType;
    static readonly mudBricks: ItemType;
    static readonly mudBrickSlab: ItemType;
    static readonly mudBrickStairs: ItemType;
    static readonly mudBrickWall: ItemType;
    static readonly muddyMangroveRoots: ItemType;
    static readonly muleSpawnEgg: ItemType;
    static readonly mushroomStew: ItemType;
    static readonly musicDisc11: ItemType;
    static readonly musicDisc13: ItemType;
    static readonly musicDisc5: ItemType;
    static readonly musicDiscBlocks: ItemType;
    static readonly musicDiscCat: ItemType;
    static readonly musicDiscChirp: ItemType;
    static readonly musicDiscFar: ItemType;
    static readonly musicDiscMall: ItemType;
    static readonly musicDiscMellohi: ItemType;
    static readonly musicDiscOtherside: ItemType;
    static readonly musicDiscPigstep: ItemType;
    static readonly musicDiscStal: ItemType;
    static readonly musicDiscStrad: ItemType;
    static readonly musicDiscWait: ItemType;
    static readonly musicDiscWard: ItemType;
    static readonly mutton: ItemType;
    /**
     * Represents an item that can place a mycelium plant within
     * Minecraft.
     */
    static readonly mycelium: ItemType;
    static readonly nameTag: ItemType;
    static readonly nautilusShell: ItemType;
    /**
     * Represents an item that can place a nether brick block
     * within Minecraft.
     */
    static readonly netherbrick: ItemType;
    /**
     * Represents an item that can place a nether brick block
     * within Minecraft.
     */
    static readonly netherBrick: ItemType;
    /**
     * Represents an item that can place a nether brick fence
     * within Minecraft.
     */
    static readonly netherBrickFence: ItemType;
    /**
     * Represents an item that can place a set of nether brick
     * stairs within Minecraft.
     */
    static readonly netherBrickStairs: ItemType;
    /**
     * Represents an item that can place a block of nether with
     * embedded gold ore within Minecraft.
     */
    static readonly netherGoldOre: ItemType;
    static readonly netheriteAxe: ItemType;
    /**
     * Represents an item that can place a block of netherite
     * within Minecraft.
     */
    static readonly netheriteBlock: ItemType;
    static readonly netheriteBoots: ItemType;
    static readonly netheriteChestplate: ItemType;
    static readonly netheriteHelmet: ItemType;
    static readonly netheriteHoe: ItemType;
    static readonly netheriteIngot: ItemType;
    static readonly netheriteLeggings: ItemType;
    static readonly netheritePickaxe: ItemType;
    static readonly netheriteScrap: ItemType;
    static readonly netheriteShovel: ItemType;
    static readonly netheriteSword: ItemType;
    /**
     * Represents an item that can place a block of netherrack
     * within Minecraft.
     */
    static readonly netherrack: ItemType;
    /**
     * Represents nether sprouts within Minecraft.
     */
    static readonly netherSprouts: ItemType;
    static readonly netherStar: ItemType;
    /**
     * Represents nether wart within Minecraft.
     */
    static readonly netherWart: ItemType;
    /**
     * Represents an item that can place a block of nether wart
     * within Minecraft.
     */
    static readonly netherWartBlock: ItemType;
    /**
     * Represents an item that can place a standard set of stone
     * stairs within Minecraft.
     */
    static readonly normalStoneStairs: ItemType;
    /**
     * Represents an item that can place a note block within
     * Minecraft.
     */
    static readonly noteblock: ItemType;
    static readonly oakBoat: ItemType;
    static readonly oakChestBoat: ItemType;
    static readonly oakSign: ItemType;
    /**
     * Represents an item that can place a set of oak stairs within
     * Minecraft.
     */
    static readonly oakStairs: ItemType;
    /**
     * Represents an item that can place an observer within
     * Minecraft.
     */
    static readonly observer: ItemType;
    /**
     * Represents an item that can place an obsidian block within
     * Minecraft.
     */
    static readonly obsidian: ItemType;
    static readonly ocelotSpawnEgg: ItemType;
    static readonly ochreFroglight: ItemType;
    /**
     * Represents an item that can place an orange candle within
     * Minecraft.
     */
    static readonly orangeCandle: ItemType;
    static readonly orangeDye: ItemType;
    /**
     * Represents an item that can place a block of orange-colored
     * glazed terracotta within Minecraft.
     */
    static readonly orangeGlazedTerracotta: ItemType;
    static readonly orangeWool: ItemType;
    /**
     * Represents an item that can place a block of oxidized copper
     * within Minecraft.
     */
    static readonly oxidizedCopper: ItemType;
    /**
     * Represents an item that can place a block of oxidized cut
     * copper within Minecraft.
     */
    static readonly oxidizedCutCopper: ItemType;
    /**
     * Represents an item that can place a slab of oxidized cut
     * copper within Minecraft.
     */
    static readonly oxidizedCutCopperSlab: ItemType;
    /**
     * Represents an item that can place a set of oxidized cut
     * copper stairs within Minecraft.
     */
    static readonly oxidizedCutCopperStairs: ItemType;
    /**
     * Represents an item that can place a block of packed ice
     * within Minecraft.
     */
    static readonly packedIce: ItemType;
    static readonly packedMud: ItemType;
    static readonly painting: ItemType;
    static readonly pandaSpawnEgg: ItemType;
    static readonly paper: ItemType;
    static readonly parrotSpawnEgg: ItemType;
    static readonly pearlescentFroglight: ItemType;
    static readonly phantomMembrane: ItemType;
    static readonly phantomSpawnEgg: ItemType;
    static readonly piglinBannerPattern: ItemType;
    static readonly piglinBruteSpawnEgg: ItemType;
    static readonly piglinSpawnEgg: ItemType;
    static readonly pigSpawnEgg: ItemType;
    static readonly pillagerSpawnEgg: ItemType;
    /**
     * Represents an item that can place a pink candle within
     * Minecraft.
     */
    static readonly pinkCandle: ItemType;
    static readonly pinkDye: ItemType;
    /**
     * Represents an item that can place a pink-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly pinkGlazedTerracotta: ItemType;
    static readonly pinkWool: ItemType;
    /**
     * Represents an item that can place a piston within Minecraft.
     */
    static readonly piston: ItemType;
    /**
     * Represents an item that can place a set of planks within
     * Minecraft.
     */
    static readonly planks: ItemType;
    /**
     * Represents podzol within Minecraft.
     */
    static readonly podzol: ItemType;
    /**
     * Represents pointed dripstone within Minecraft.
     */
    static readonly pointedDripstone: ItemType;
    static readonly poisonousPotato: ItemType;
    static readonly polarBearSpawnEgg: ItemType;
    /**
     * Represents an item that can place a set of polished andesite
     * stairs within Minecraft.
     */
    static readonly polishedAndesiteStairs: ItemType;
    /**
     * Represents an item that can place a block of polished basalt
     * within Minecraft.
     */
    static readonly polishedBasalt: ItemType;
    /**
     * Represents an item that can place a block of polished
     * blackstone within Minecraft.
     */
    static readonly polishedBlackstone: ItemType;
    /**
     * Represents an item that can place a block of polished
     * blackstone bricks within Minecraft.
     */
    static readonly polishedBlackstoneBricks: ItemType;
    /**
     * Represents an item that can place a slab of polished
     * blackstone within Minecraft.
     */
    static readonly polishedBlackstoneBrickSlab: ItemType;
    /**
     * Represents an item that can place a set of polished
     * blackstone brick stairs within Minecraft.
     */
    static readonly polishedBlackstoneBrickStairs: ItemType;
    /**
     * Represents an item that can place a polished blackstone
     * brick wall within Minecraft.
     */
    static readonly polishedBlackstoneBrickWall: ItemType;
    /**
     * Represents an item that can place a polished blackstone
     * button within Minecraft.
     */
    static readonly polishedBlackstoneButton: ItemType;
    /**
     * Represents an item that can place a polished blackstone
     * pressure plate within Minecraft.
     */
    static readonly polishedBlackstonePressurePlate: ItemType;
    /**
     * Represents an item that can place a slab of polished
     * blackstone within Minecraft.
     */
    static readonly polishedBlackstoneSlab: ItemType;
    /**
     * Represents an item that can place a set of polished
     * blackstone stairs within Minecraft.
     */
    static readonly polishedBlackstoneStairs: ItemType;
    /**
     * Represents an item that can place a polished blackstone wall
     * within Minecraft.
     */
    static readonly polishedBlackstoneWall: ItemType;
    /**
     * Represents an item that can place a block of polished
     * deepslate within Minecraft.
     */
    static readonly polishedDeepslate: ItemType;
    /**
     * Represents an item that can place a slab of polished
     * deepslate within Minecraft.
     */
    static readonly polishedDeepslateSlab: ItemType;
    /**
     * Represents an item that can place a set of polished
     * deepslate stairs within Minecraft.
     */
    static readonly polishedDeepslateStairs: ItemType;
    /**
     * Represents an item that can place a wall of polished
     * deepslate within Minecraft.
     */
    static readonly polishedDeepslateWall: ItemType;
    /**
     * Represents an item that can place a block of polished
     * diorite within Minecraft.
     */
    static readonly polishedDioriteStairs: ItemType;
    /**
     * Represents an item that can place a set of polished granite
     * stairs within Minecraft.
     */
    static readonly polishedGraniteStairs: ItemType;
    static readonly poppedChorusFruit: ItemType;
    static readonly porkchop: ItemType;
    static readonly potato: ItemType;
    static readonly potion: ItemType;
    static readonly powderSnowBucket: ItemType;
    /**
     * Represents an item that can place a block of prismarine
     * within Minecraft.
     */
    static readonly prismarine: ItemType;
    /**
     * Represents an item that can place a set of prismarine brick
     * stairs within Minecraft.
     */
    static readonly prismarineBricksStairs: ItemType;
    static readonly prismarineCrystals: ItemType;
    static readonly prismarineShard: ItemType;
    /**
     * Represents an item that can place a set of prismarine stairs
     * within Minecraft.
     */
    static readonly prismarineStairs: ItemType;
    static readonly pufferfish: ItemType;
    static readonly pufferfishBucket: ItemType;
    static readonly pufferfishSpawnEgg: ItemType;
    /**
     * Represents an item that can place a pumpkin within
     * Minecraft.
     */
    static readonly pumpkin: ItemType;
    static readonly pumpkinPie: ItemType;
    static readonly pumpkinSeeds: ItemType;
    /**
     * Represents an item that can place a purple candle within
     * Minecraft.
     */
    static readonly purpleCandle: ItemType;
    static readonly purpleDye: ItemType;
    /**
     * Represents an item that can place a purple-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly purpleGlazedTerracotta: ItemType;
    static readonly purpleWool: ItemType;
    /**
     * Represents an item that can place a purpur block within
     * Minecraft.
     */
    static readonly purpurBlock: ItemType;
    /**
     * Represents an item that can place a set of purpur stairs
     * within Minecraft.
     */
    static readonly purpurStairs: ItemType;
    static readonly quartz: ItemType;
    /**
     * Represents an item that can place a block of solid quartz
     * within Minecraft.
     */
    static readonly quartzBlock: ItemType;
    /**
     * Represents an item that can place a block of solid quartz
     * bricks within Minecraft.
     */
    static readonly quartzBricks: ItemType;
    /**
     * Represents an item that can place a block with embedded
     * quartz ore within Minecraft.
     */
    static readonly quartzOre: ItemType;
    /**
     * Represents an item that can place a set of quartz stairs
     * within Minecraft.
     */
    static readonly quartzStairs: ItemType;
    static readonly rabbit: ItemType;
    static readonly rabbitFoot: ItemType;
    static readonly rabbitHide: ItemType;
    static readonly rabbitSpawnEgg: ItemType;
    static readonly rabbitStew: ItemType;
    /**
     * Represents an item that can place a set of rails within
     * Minecraft.
     */
    static readonly rail: ItemType;
    static readonly ravagerSpawnEgg: ItemType;
    static readonly rawCopper: ItemType;
    /**
     * Represents an item that can place a block of raw copper
     * within Minecraft.
     */
    static readonly rawCopperBlock: ItemType;
    static readonly rawGold: ItemType;
    /**
     * Represents an item that can place a block of raw gold within
     * Minecraft.
     */
    static readonly rawGoldBlock: ItemType;
    static readonly rawIron: ItemType;
    /**
     * Represents an item that can place a block of raw iron within
     * Minecraft.
     */
    static readonly rawIronBlock: ItemType;
    static readonly recoveryCompass: ItemType;
    /**
     * Represents an item that can place a red candle within
     * Minecraft.
     */
    static readonly redCandle: ItemType;
    static readonly redDye: ItemType;
    /**
     * Represents an item that can place a red flower within
     * Minecraft.
     */
    static readonly redFlower: ItemType;
    /**
     * Represents an item that can place a red-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly redGlazedTerracotta: ItemType;
    /**
     * Represents an item that can place a red mushroom within
     * Minecraft.
     */
    static readonly redMushroom: ItemType;
    /**
     * Represents an item that can place a block of red mushroom
     * within Minecraft.
     */
    static readonly redMushroomBlock: ItemType;
    /**
     * Represents an item that can place a block of red nether
     * brick within Minecraft.
     */
    static readonly redNetherBrick: ItemType;
    /**
     * Represents an item that can place a set of red nether brick
     * stairs within Minecraft.
     */
    static readonly redNetherBrickStairs: ItemType;
    /**
     * Represents an item that can place a block of red sandstone
     * within Minecraft.
     */
    static readonly redSandstone: ItemType;
    /**
     * Represents an item that can place a set of red sandstone
     * stairs within Minecraft.
     */
    static readonly redSandstoneStairs: ItemType;
    static readonly redstone: ItemType;
    /**
     * Represents an item that can place a block of redstone within
     * Minecraft.
     */
    static readonly redstoneBlock: ItemType;
    /**
     * Represents an item that can place a redstone lamp within
     * Minecraft.
     */
    static readonly redstoneLamp: ItemType;
    /**
     * Represents an item that can place a block with embedded
     * redstone ore within Minecraft.
     */
    static readonly redstoneOre: ItemType;
    /**
     * Represents an item that can place a redstone torch within
     * Minecraft.
     */
    static readonly redstoneTorch: ItemType;
    static readonly redWool: ItemType;
    static readonly reinforcedDeepslate: ItemType;
    static readonly repeater: ItemType;
    /**
     * Represents an item that can place a repeating command block
     * within Minecraft.
     */
    static readonly repeatingCommandBlock: ItemType;
    /**
     * Represents an item that can place a respawn anchor within
     * Minecraft.
     */
    static readonly respawnAnchor: ItemType;
    static readonly rottenFlesh: ItemType;
    static readonly saddle: ItemType;
    static readonly salmon: ItemType;
    static readonly salmonBucket: ItemType;
    static readonly salmonSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block of sand within
     * Minecraft.
     */
    static readonly sand: ItemType;
    /**
     * Represents an item that can place a block of sandstone
     * within Minecraft.
     */
    static readonly sandstone: ItemType;
    /**
     * Represents an item that can place a set of sandstone stairs
     * within Minecraft.
     */
    static readonly sandstoneStairs: ItemType;
    /**
     * Represents an item that can place a sapling within
     * Minecraft.
     */
    static readonly sapling: ItemType;
    /**
     * Represents an item that can place a set of scaffolding
     * within Minecraft.
     */
    static readonly scaffolding: ItemType;
    static readonly sculk: ItemType;
    static readonly sculkCatalyst: ItemType;
    /**
     * Represents an item that can place a sculk sensor within
     * Minecraft.
     */
    static readonly sculkSensor: ItemType;
    static readonly sculkShrieker: ItemType;
    static readonly sculkVein: ItemType;
    static readonly scute: ItemType;
    /**
     * Represents seagrass within Minecraft.
     */
    static readonly seagrass: ItemType;
    static readonly seaLantern: ItemType;
    /**
     * Represents an item that can place a seapickle within
     * Minecraft.
     */
    static readonly seaPickle: ItemType;
    static readonly shears: ItemType;
    static readonly sheepSpawnEgg: ItemType;
    static readonly shield: ItemType;
    /**
     * Represents an item that can place a shroom light within
     * Minecraft.
     */
    static readonly shroomlight: ItemType;
    /**
     * Represents an item that can place a shulker box within
     * Minecraft.
     */
    static readonly shulkerBox: ItemType;
    static readonly shulkerShell: ItemType;
    static readonly shulkerSpawnEgg: ItemType;
    static readonly silverfishSpawnEgg: ItemType;
    /**
     * Represents an item that can place a silver-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly silverGlazedTerracotta: ItemType;
    static readonly skeletonHorseSpawnEgg: ItemType;
    static readonly skeletonSpawnEgg: ItemType;
    /**
     * Represents an item that can place a skull within Minecraft.
     */
    static readonly skull: ItemType;
    static readonly skullBannerPattern: ItemType;
    /**
     * Represents slime within Minecraft.
     */
    static readonly slime: ItemType;
    static readonly slimeBall: ItemType;
    static readonly slimeSpawnEgg: ItemType;
    /**
     * Represents an item that can place a small bud of amethyst
     * within Minecraft.
     */
    static readonly smallAmethystBud: ItemType;
    /**
     * Represents an item that can place a small dripleaf block
     * within Minecraft.
     */
    static readonly smallDripleafBlock: ItemType;
    /**
     * Represents an item that can place a smithing table within
     * Minecraft.
     */
    static readonly smithingTable: ItemType;
    /**
     * Represents an item that can place a smoker within Minecraft.
     */
    static readonly smoker: ItemType;
    /**
     * Represents an item that can place a block of smooth basalt
     * within Minecraft.
     */
    static readonly smoothBasalt: ItemType;
    /**
     * Represents an item that can place a set of smooth quartz
     * stairs within Minecraft.
     */
    static readonly smoothQuartzStairs: ItemType;
    /**
     * Represents an item that can place a set of smooth red
     * sandstone stairs within Minecraft.
     */
    static readonly smoothRedSandstoneStairs: ItemType;
    /**
     * Represents an item that can place a set of smooth redstone
     * stairs within Minecraft.
     */
    static readonly smoothSandstoneStairs: ItemType;
    /**
     * Represents an item that can place a smooth stone block
     * within Minecraft.
     */
    static readonly smoothStone: ItemType;
    /**
     * Represents snow within Minecraft.
     */
    static readonly snow: ItemType;
    static readonly snowball: ItemType;
    static readonly snowGolemSpawnEgg: ItemType;
    /**
     * Represents an item that can place a layer of snow within
     * Minecraft.
     */
    static readonly snowLayer: ItemType;
    /**
     * Represents an item that can place a soul campfire within
     * Minecraft.
     */
    static readonly soulCampfire: ItemType;
    /**
     * Represents an item that can place a soul lantern within
     * Minecraft.
     */
    static readonly soulLantern: ItemType;
    /**
     * Represents an item that can place a block of soul sand
     * within Minecraft.
     */
    static readonly soulSand: ItemType;
    /**
     * Represents soul soil within Minecraft.
     */
    static readonly soulSoil: ItemType;
    /**
     * Represents an item that can place a soul torch within
     * Minecraft.
     */
    static readonly soulTorch: ItemType;
    static readonly spawnEgg: ItemType;
    static readonly spiderEye: ItemType;
    static readonly spiderSpawnEgg: ItemType;
    static readonly splashPotion: ItemType;
    /**
     * Represents an item that can place a sponge within Minecraft.
     */
    static readonly sponge: ItemType;
    /**
     * Represents an item that can place a spore blossom within
     * Minecraft.
     */
    static readonly sporeBlossom: ItemType;
    static readonly spruceBoat: ItemType;
    /**
     * Represents an item that can place a spruce wood button
     * within Minecraft.
     */
    static readonly spruceButton: ItemType;
    static readonly spruceChestBoat: ItemType;
    /**
     * Represents an item that can place a spruce wood door within
     * Minecraft.
     */
    static readonly spruceDoor: ItemType;
    /**
     * Represents an item that can place a spruce wood fence gate
     * within Minecraft.
     */
    static readonly spruceFenceGate: ItemType;
    /**
     * Represents an item that can place a spruce wood pressure
     * plate within Minecraft.
     */
    static readonly sprucePressurePlate: ItemType;
    /**
     * Represents an item that can place a spruce sign within
     * Minecraft.
     */
    static readonly spruceSign: ItemType;
    /**
     * Represents an item that can place a set of spruce wood
     * stairs within Minecraft.
     */
    static readonly spruceStairs: ItemType;
    /**
     * Represents an item that can place a spruce wood trapdoor
     * within Minecraft.
     */
    static readonly spruceTrapdoor: ItemType;
    static readonly spyglass: ItemType;
    static readonly squidSpawnEgg: ItemType;
    /**
     * Represents stained glass within Minecraft.
     */
    static readonly stainedGlass: ItemType;
    /**
     * Represents an item that can place a pane of stained glass
     * within Minecraft.
     */
    static readonly stainedGlassPane: ItemType;
    /**
     * Represents an item that can place a block of stained
     * hardened clay within Minecraft.
     */
    static readonly stainedHardenedClay: ItemType;
    static readonly stick: ItemType;
    /**
     * Represents an item that can place a piston block with a
     * sticky arm within Minecraft.
     */
    static readonly stickyPiston: ItemType;
    /**
     * Represents an item that can place a block of stone within
     * Minecraft.
     */
    static readonly stone: ItemType;
    static readonly stoneAxe: ItemType;
    static readonly stoneBlockSlab: ItemType;
    static readonly stoneBlockSlab2: ItemType;
    static readonly stoneBlockSlab3: ItemType;
    static readonly stoneBlockSlab4: ItemType;
    /**
     * Represents an item that can place a block of stone brick
     * within Minecraft.
     */
    static readonly stonebrick: ItemType;
    /**
     * Represents an item that can place a set of stone brick
     * stairs within Minecraft.
     */
    static readonly stoneBrickStairs: ItemType;
    /**
     * Represents an item that can place a stone button within
     * Minecraft.
     */
    static readonly stoneButton: ItemType;
    /**
     * Represents an item that can place a stonecutter block within
     * Minecraft.
     */
    static readonly stonecutterBlock: ItemType;
    static readonly stoneHoe: ItemType;
    static readonly stonePickaxe: ItemType;
    /**
     * Represents an item that can place a stone pressure plate
     * within Minecraft.
     */
    static readonly stonePressurePlate: ItemType;
    static readonly stoneShovel: ItemType;
    /**
     * Represents an item that can place a set of stone stairs
     * within Minecraft.
     */
    static readonly stoneStairs: ItemType;
    static readonly stoneSword: ItemType;
    static readonly straySpawnEgg: ItemType;
    static readonly striderSpawnEgg: ItemType;
    static readonly 'string': ItemType;
    /**
     * Represents an item that can place a stripped acacia log
     * within Minecraft.
     */
    static readonly strippedAcaciaLog: ItemType;
    /**
     * Represents an item that can place a stripped birch log
     * within Minecraft.
     */
    static readonly strippedBirchLog: ItemType;
    /**
     * Represents stripped crimson hyphae within Minecraft.
     */
    static readonly strippedCrimsonHyphae: ItemType;
    /**
     * Represents an item that can place a stripped crimson stem
     * within Minecraft.
     */
    static readonly strippedCrimsonStem: ItemType;
    /**
     * Represents an item that can place a stripped dark oak log
     * within Minecraft.
     */
    static readonly strippedDarkOakLog: ItemType;
    /**
     * Represents an item that can place a stripped jungle log
     * within Minecraft.
     */
    static readonly strippedJungleLog: ItemType;
    static readonly strippedMangroveLog: ItemType;
    static readonly strippedMangroveWood: ItemType;
    /**
     * Represents an item that can place a stripped oak log within
     * Minecraft.
     */
    static readonly strippedOakLog: ItemType;
    /**
     * Represents an item that can place a stripped spruce log
     * within Minecraft.
     */
    static readonly strippedSpruceLog: ItemType;
    /**
     * Represents stripped warped hyphae within Minecraft.
     */
    static readonly strippedWarpedHyphae: ItemType;
    /**
     * Represents stripped warped stem within Minecraft.
     */
    static readonly strippedWarpedStem: ItemType;
    /**
     * Represents an item that can place a structure block, which
     * provides for the saving and loading of block structures,
     * within Minecraft.
     */
    static readonly structureBlock: ItemType;
    /**
     * Represents an item that can place a structure void within
     * Minecraft.
     */
    static readonly structureVoid: ItemType;
    static readonly sugar: ItemType;
    static readonly sugarCane: ItemType;
    static readonly suspiciousStew: ItemType;
    static readonly sweetBerries: ItemType;
    static readonly tadpoleBucket: ItemType;
    static readonly tadpoleSpawnEgg: ItemType;
    /**
     * Represents tall grass within Minecraft.
     */
    static readonly tallgrass: ItemType;
    /**
     * Represents an item that can place a target within Minecraft.
     */
    static readonly target: ItemType;
    /**
     * Represents tinted glass within Minecraft.
     */
    static readonly tintedGlass: ItemType;
    /**
     * Represents an item that can place a block of TnT within
     * Minecraft.
     */
    static readonly tnt: ItemType;
    static readonly tntMinecart: ItemType;
    /**
     * Represents an item that can place a torch within Minecraft.
     */
    static readonly torch: ItemType;
    static readonly totemOfUndying: ItemType;
    static readonly traderLlamaSpawnEgg: ItemType;
    /**
     * Represents an item that can place a trapdoor within
     * Minecraft.
     */
    static readonly trapdoor: ItemType;
    /**
     * Represents an item that can place a trapped chest within
     * Minecraft.
     */
    static readonly trappedChest: ItemType;
    static readonly trident: ItemType;
    /**
     * Represents an item that can place a tripwire hook within
     * Minecraft.
     */
    static readonly tripwireHook: ItemType;
    static readonly tropicalFish: ItemType;
    static readonly tropicalFishBucket: ItemType;
    static readonly tropicalFishSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block of tuff within
     * Minecraft.
     */
    static readonly tuff: ItemType;
    /**
     * Represents an item that can place a turtle egg within
     * Minecraft.
     */
    static readonly turtleEgg: ItemType;
    static readonly turtleHelmet: ItemType;
    static readonly turtleSpawnEgg: ItemType;
    /**
     * Represents an item that can place a set of twisting vines
     * within Minecraft.
     */
    static readonly twistingVines: ItemType;
    /**
     * Represents an item that can place an undyed shulker box
     * within Minecraft.
     */
    static readonly undyedShulkerBox: ItemType;
    static readonly verdantFroglight: ItemType;
    static readonly vexSpawnEgg: ItemType;
    static readonly villagerSpawnEgg: ItemType;
    static readonly vindicatorSpawnEgg: ItemType;
    /**
     * Represents an item that can place a set of vines within
     * Minecraft.
     */
    static readonly vine: ItemType;
    static readonly wanderingTraderSpawnEgg: ItemType;
    static readonly wardenSpawnEgg: ItemType;
    /**
     * Represents an item that can place a warped button within
     * Minecraft.
     */
    static readonly warpedButton: ItemType;
    /**
     * Represents an item that can place a warped door within
     * Minecraft.
     */
    static readonly warpedDoor: ItemType;
    /**
     * Represents an item that can place a warped fence within
     * Minecraft.
     */
    static readonly warpedFence: ItemType;
    /**
     * Represents an item that can place a warped fence gate within
     * Minecraft.
     */
    static readonly warpedFenceGate: ItemType;
    /**
     * Represents warped fungus within Minecraft.
     */
    static readonly warpedFungus: ItemType;
    static readonly warpedFungusOnAStick: ItemType;
    /**
     * Represents warped hyphae within Minecraft.
     */
    static readonly warpedHyphae: ItemType;
    /**
     * Represents warped nylium within Minecraft.
     */
    static readonly warpedNylium: ItemType;
    /**
     * Represents warped planks within Minecraft.
     */
    static readonly warpedPlanks: ItemType;
    /**
     * Represents an item that can place a warped pressure plate
     * within Minecraft.
     */
    static readonly warpedPressurePlate: ItemType;
    /**
     * Represents an item that can place a set of warped roots
     * within Minecraft.
     */
    static readonly warpedRoots: ItemType;
    static readonly warpedSign: ItemType;
    /**
     * Represents an item that can place a slab of warped material
     * within Minecraft.
     */
    static readonly warpedSlab: ItemType;
    /**
     * Represents an item that can place a set of warped stairs
     * within Minecraft.
     */
    static readonly warpedStairs: ItemType;
    /**
     * Represents an item that can place a warped stem within
     * Minecraft.
     */
    static readonly warpedStem: ItemType;
    /**
     * Represents an item that can place a warped trapdoor within
     * Minecraft.
     */
    static readonly warpedTrapdoor: ItemType;
    /**
     * Represents an item that can place a warped wart block within
     * Minecraft.
     */
    static readonly warpedWartBlock: ItemType;
    static readonly waterBucket: ItemType;
    /**
     * Represents an item that can place a water lily within
     * Minecraft.
     */
    static readonly waterlily: ItemType;
    /**
     * Represents an item that can place a block of waxed copper
     * within Minecraft.
     */
    static readonly waxedCopper: ItemType;
    /**
     * Represents an item that can place a block of waxed cut
     * copper within Minecraft.
     */
    static readonly waxedCutCopper: ItemType;
    /**
     * Represents an item that can place a slab of waxed cut copper
     * within Minecraft.
     */
    static readonly waxedCutCopperSlab: ItemType;
    /**
     * Represents an item that can place a set of waxed cut copper
     * stairs within Minecraft.
     */
    static readonly waxedCutCopperStairs: ItemType;
    /**
     * Represents an item that can place a block of waxed exposed
     * copper within Minecraft.
     */
    static readonly waxedExposedCopper: ItemType;
    /**
     * Represents an item that can place a block of waxed exposed
     * cut copper within Minecraft.
     */
    static readonly waxedExposedCutCopper: ItemType;
    /**
     * Represents an item that can place a slab of waxed exposed
     * cut copper within Minecraft.
     */
    static readonly waxedExposedCutCopperSlab: ItemType;
    /**
     * Represents an item that can place a set of waxed exposed cut
     * copper stairs within Minecraft.
     */
    static readonly waxedExposedCutCopperStairs: ItemType;
    /**
     * Represents an item that can place a block of waxed oxidized
     * copper within Minecraft.
     */
    static readonly waxedOxidizedCopper: ItemType;
    /**
     * Represents an item that can place a block of waxed oxidized
     * cut copper within Minecraft.
     */
    static readonly waxedOxidizedCutCopper: ItemType;
    /**
     * Represents an item that can place a slab of waxed oxidized
     * cut copper within Minecraft.
     */
    static readonly waxedOxidizedCutCopperSlab: ItemType;
    /**
     * Represents an item that can place a set of waxed oxidized
     * cut copper stairs within Minecraft.
     */
    static readonly waxedOxidizedCutCopperStairs: ItemType;
    /**
     * Represents an item that can place a block of waxed weathered
     * copper within Minecraft.
     */
    static readonly waxedWeatheredCopper: ItemType;
    /**
     * Represents an item that can place a block of waxed weathered
     * cut copper within Minecraft.
     */
    static readonly waxedWeatheredCutCopper: ItemType;
    /**
     * Represents an item that can place a slab of waxed weathered
     * cut copper within Minecraft.
     */
    static readonly waxedWeatheredCutCopperSlab: ItemType;
    /**
     * Represents an item that can place a set of waxed weathered
     * cut copper stairs within Minecraft.
     */
    static readonly waxedWeatheredCutCopperStairs: ItemType;
    /**
     * Represents an item that can place a block of weathered
     * copper within Minecraft.
     */
    static readonly weatheredCopper: ItemType;
    /**
     * Represents an item that can place a block of weathered cut
     * copper within Minecraft.
     */
    static readonly weatheredCutCopper: ItemType;
    /**
     * Represents an item that can place a slab of weathered cut
     * copper within Minecraft.
     */
    static readonly weatheredCutCopperSlab: ItemType;
    /**
     * Represents an item that can place a set of weathered cut
     * copper stairs within Minecraft.
     */
    static readonly weatheredCutCopperStairs: ItemType;
    /**
     * Represents an item that can place a web within Minecraft.
     */
    static readonly web: ItemType;
    /**
     * Represents an item that can place a set of weeping vines
     * within Minecraft.
     */
    static readonly weepingVines: ItemType;
    /**
     * Represents wheat within Minecraft.
     */
    static readonly wheat: ItemType;
    static readonly wheatSeeds: ItemType;
    /**
     * Represents an item that can place a white candle within
     * Minecraft.
     */
    static readonly whiteCandle: ItemType;
    static readonly whiteDye: ItemType;
    /**
     * Represents an item that can place a block of white glazed
     * terracotta within Minecraft.
     */
    static readonly whiteGlazedTerracotta: ItemType;
    static readonly whiteWool: ItemType;
    static readonly witchSpawnEgg: ItemType;
    /**
     * Represents an item that can place a wither rose within
     * Minecraft.
     */
    static readonly witherRose: ItemType;
    static readonly witherSkeletonSpawnEgg: ItemType;
    static readonly witherSpawnEgg: ItemType;
    static readonly wolfSpawnEgg: ItemType;
    /**
     * Represents an item that can place a block of wood within
     * Minecraft.
     */
    static readonly wood: ItemType;
    static readonly woodenAxe: ItemType;
    /**
     * Represents an item that can place a wooden button within
     * Minecraft.
     */
    static readonly woodenButton: ItemType;
    /**
     * Represents an item that can place a wooden door within
     * Minecraft.
     */
    static readonly woodenDoor: ItemType;
    static readonly woodenHoe: ItemType;
    static readonly woodenPickaxe: ItemType;
    /**
     * Represents an item that can place a wooden pressure plate
     * within Minecraft.
     */
    static readonly woodenPressurePlate: ItemType;
    static readonly woodenShovel: ItemType;
    /**
     * Represents an item that can place a wooden slab within
     * Minecraft.
     */
    static readonly woodenSlab: ItemType;
    static readonly woodenSword: ItemType;
    /**
     * Represents wool within Minecraft.
     */
    static readonly wool: ItemType;
    static readonly writableBook: ItemType;
    /**
     * Represents an item that can place a yellow candle within
     * Minecraft.
     */
    static readonly yellowCandle: ItemType;
    static readonly yellowDye: ItemType;
    /**
     * Represents an item that can place a yellow flower within
     * Minecraft.
     */
    static readonly yellowFlower: ItemType;
    /**
     * Represents an item that can place a yellow block of glazed
     * terracotta within Minecraft.
     */
    static readonly yellowGlazedTerracotta: ItemType;
    static readonly yellowWool: ItemType;
    static readonly zoglinSpawnEgg: ItemType;
    static readonly zombieHorseSpawnEgg: ItemType;
    static readonly zombiePigmanSpawnEgg: ItemType;
    static readonly zombieSpawnEgg: ItemType;
    static readonly zombieVillagerSpawnEgg: ItemType;
}
/**
 * @beta
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * @param variableName
     * @param color
     */
    setColorRGB(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value
     * [0-1]
     * @param variableName
     * @param color
     */
    setColorRGBA(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link
     * Vector3} provided
     * @param variableName
     * @param speed
     * @param direction
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3}
     * provided
     * - `<variable_name>.y` - Y value from the {@link Vector3}
     * provided
     * - `<variable_name>.z` - Z value from the {@link Vector3}
     * provided
     * @param variableName
     * @param vector
     */
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}
/**
 * @beta
 * Contains data resulting from a navigation operation,
 * including whether the navigation is possible and the path of
 * navigation.
 */
export class NavigationResult {
    protected constructor();
    /**
     * Whether the navigation result contains a full path,
     * including to the requested destination.
     */
    readonly isFullPath: boolean;
    getPath(): Vector3[];
}
/**
 * @beta
 * Contains information related to changes to a piston
 * expanding or retracting.
 */
export class PistonActivateEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * True if the piston is the process of expanding.
     */
    readonly isExpanding: boolean;
    /**
     * Contains additional properties and details of the piston.
     */
    readonly piston: BlockPistonComponent;
}
/**
 * @beta
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a piston expands or
     * retracts.
     * @param callback
     * @example pistonEvent.ts
     * ```typescript
     *        let canceled = false;
     *
     *        const pistonLoc: mc.Vector3 = {
     *          x: Math.floor(targetLocation.x) + 1,
     *          y: Math.floor(targetLocation.y) + 2,
     *          z: Math.floor(targetLocation.z) + 1,
     *        };
     *
     *        const pistonCallback = mc.world.events.beforePistonActivate.subscribe((pistonEvent: mc.BeforePistonActivateEvent) => {
     *          if (pistonEvent.piston.location.equals(pistonLoc)) {
     *            log("Cancelling piston event");
     *            pistonEvent.cancel = true;
     *            canceled = true;
     *          }
     *        });
     *
     *
     * ```
     */
    subscribe(callback: (arg: PistonActivateEvent) => void): (arg: PistonActivateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateEvent) => void): void;
}
/**
 * Represents a player within the world.
 */
export class Player extends Entity {
    protected constructor();
    /**
     * @beta
     * Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * Unique identifier of the player. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * True if the player is currently using a sneaking movement.
     */
    isSneaking: boolean;
    readonly level: number;
    /**
     * @beta
     * Current location of the player.
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * Name of the player.
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @beta
     * Optional name tag of the player.
     */
    nameTag: string;
    /**
     * @beta
     * Contains methods for manipulating the on-screen display of a
     * Player.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * Returns a scoreboard identity that represents this entity.
     * @throws This property can throw when used.
     */
    readonly scoreboard: ScoreboardIdentity;
    /**
     * @beta
     * Manages the selected slot in the player's hotbar.
     */
    selectedSlot: number;
    readonly spawnDimension?: Dimension;
    /**
     * @beta
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. For players, which
     * don't use any AI semantics, this property does not do
     * anything.
     * @throws This property can throw when used.
     */
    readonly target: Entity;
    readonly totalXpNeededForNextLevel: number;
    /**
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:player'.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @beta
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @param showParticles
     * @throws This function can throw errors.
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @beta
     * @remarks
     * Adds/removes experience to/from the Player and returns the
     * current experience of the Player.
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     * @returns
     * Returns the current experience of the Player.
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /**
     * @beta
     * @remarks
     *  Adds/removes level to/from the Player and returns the
     * current level of the Player.
     * @param amount
     * Amount to add to the player.
     * @returns
     * Returns the current level of the Player.
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /**
     * @beta
     * @remarks
     * Adds a specified tag to an entity.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Applies damage to the player.
     * @param amount
     * Amount of damage to apply.
     * @param source
     * Additional information around the source of damage that can
     * apply to the player.
     * @throws This function can throw errors.
     */
    applyDamage(amount: number, source?: EntityDamageSource): boolean;
    applyImpulse(vector: Vector3): void;
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    clearSpawn(): void;
    clearVelocity(): void;
    /**
     * @beta
     * @remarks
     * Extinguishes the fire if the player is on fire. Note that
     * you can call getComponent('minecraft:onfire') and, if
     * present, the player is on fire."
     * @param useEffects
     * Whether to show any visual effects connected to the
     * extinguishing.
     * @throws This function can throw errors.
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Returns the first intersecting block from the direction that
     * this player is looking at.
     * @param options
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): Block;
    /**
     * @beta
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): IEntityComponent;
    /**
     * @beta
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): IEntityComponent[];
    /**
     * @beta
     * @remarks
     * Returns a property value.
     * @param identifier
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect;
    /**
     * @beta
     * @remarks
     * Returns a set of effects applied to this player.
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    /**
     * @beta
     * @remarks
     * Returns a potential set of entities from the direction that
     * this player is looking at.
     * @param options
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[];
    getHeadLocation(): Vector3;
    /**
     * @beta
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(itemCategory: string): number;
    getRotation(): XYRotation;
    getSpawnPosition(): Vector3 | undefined;
    /**
     * @beta
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     *  Gets the total experience of the Player.
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    getVelocity(): Vector3;
    getViewDirection(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @beta
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     * @throws This function can throw errors.
     */
    isOp(): boolean;
    /**
     * @beta
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @beta
     * @remarks
     * Plays a sound that only this particular player can hear.
     * @param soundID
     * Identifier of the sound to play.
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @beta
     * @remarks
     * This is an internal-facing method for posting a system
     * message to downstream clients.
     * @param id
     * @param value
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @beta
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @beta
     * @remarks
     * Removes a specified tag from an entity.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Resets the level of the player.
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity.  Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
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
     * Sends a message to the player.
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     *        // Displays "Apple or Coal"
     *        let rawMessage = {
     *          translate: "accessibility.list.or.two",
     *          with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     *        };
     *        player.sendMessage(rawMessage);
     *
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     *        // Displays the player's score for objective "obj". Each player will see their own score.
     *        const rawMessage = { score: { name: "*", objective: "obj" } };
     *        world.sendMessage(rawMessage);
     *
     * ```
     * @example simpleString.ts
     * ```typescript
     *        // Displays "Hello, world!"
     *        world.sendMessage("Hello, world!");
     *
     * ```
     * @example translation.ts
     * ```typescript
     *        // Displays "First or Second"
     *        const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     *        player.sendMessage(rawMessage);
     *
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @beta
     * @remarks
     * Sets a specified property to a value.
     * @param identifier
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @beta
     * @remarks
     * Sets a player on fire (if it is not in water or rain). Note
     * that you can call getComponent('minecraft:onfire') and, if
     * present, the player is on fire.
     * @param seconds
     * Length of time to set the player on fire.
     * @param useEffects
     * @throws This function can throw errors.
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Will change the specified players permissions, and whether
     * they are operator or not.
     * @param isOp
     * @throws This function can throw errors.
     */
    setOp(isOp: boolean): void;
    /**
     * @beta
     * @remarks
     * Sets the main rotation of the entity.
     * @param degreesX
     * @param degreesY
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    setSpawn(spawnPosition: Vector3, spawnDimension: Dimension): void;
    /**
     * @beta
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected player to a new location
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param xRotation
     * X rotation of the player after teleportation.
     * @param yRotation
     * Y rotation of the player after teleportation.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleport(
        location: Vector3,
        dimension: Dimension,
        xRotation: number,
        yRotation: number,
        keepVelocity?: boolean,
    ): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected player to a new location, and will
     * have the player facing a specified location.
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param facingLocation
     * Location that this player will be facing.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleportFacing(location: Vector3, dimension: Dimension, facingLocation: Vector3, keepVelocity?: boolean): void;
    /**
     * @beta
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
}
export class PlayerInventoryComponentContainer extends InventoryComponentContainer {
    protected constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    clearAll(): void;
    clearItem(slot: number): void;
    getItem(slot: number): ItemStack;
    getSlot(slot: number): ContainerSlot;
    setItem(slot: number, itemStack?: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}
/**
 * @beta
 * This type is usable for iterating over a set of players.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class PlayerIterator implements Iterable<Player> {
    protected constructor();
    [Symbol.iterator](): Iterator<Player>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Player in the iteration.
     */
    next(): IteratorResult<Player>;
}
/**
 * @beta
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that
 * could be returned after the first time a player has spawned
 * within the game.
 */
export class PlayerJoinEvent {
    protected constructor();
    /**
     * Opaque string identifier of the player that joined the game.
     */
    readonly playerId: string;
    /**
     * Name of the player that has joined.
     */
    readonly playerName: string;
}
/**
 * @beta
 * Manages callbacks that are connected to a player joining the
 * world.
 */
export class PlayerJoinEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player joins the
     * world.
     * @param callback
     */
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player joins the
     * world.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
}
/**
 * @beta
 * Contains information regarding a player that has left the
 * world.
 */
export class PlayerLeaveEvent {
    protected constructor();
    /**
     * Opaque string identifier of the player that has left the
     * event.
     */
    readonly playerId: string;
    /**
     * Player that has left the world.
     */
    readonly playerName: string;
}
/**
 * @beta
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     * @param callback
     */
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
}
/**
 * @beta
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnEvent {
    protected constructor();
    /**
     * If true, this is the initial spawn of a player after joining
     * the game.
     */
    initialSpawn: boolean;
    /**
     * Object that represents the player that joined the game.
     */
    player: Player;
}
/**
 * @beta
 * Registers an event when a player is spawned (or re-spawned
 * after death) and fully ready within the world.
 */
export class PlayerSpawnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Registers a new event receiver for this particular type of
     * event.
     * @param callback
     */
    subscribe(callback: (arg: PlayerSpawnEvent) => void): (arg: PlayerSpawnEvent) => void;
    /**
     * @remarks
     * De-registers an event receiver for the player spawn event.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerSpawnEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a projectile hitting an
 * entity or block.
 */
export class ProjectileHitEvent {
    protected constructor();
    /**
     * Dimension where this projectile hit took place.
     */
    readonly dimension: Dimension;
    /**
     * Direction vector of the projectile as it hit a block/entity.
     */
    readonly hitVector: Vector;
    /**
     * Location where the projectile hit occurred.
     */
    readonly location: Vector3;
    /**
     * Entity for the projectile that hit a block/entity.
     */
    readonly projectile: Entity;
    /**
     * Optional source entity that fired the projectile.
     */
    readonly source: Entity;
    getBlockHit(): BlockHitInformation | undefined;
    getEntityHit(): EntityHitInformation | undefined;
}
/**
 * @beta
 * Manages callbacks that are connected to when a projectile
 * hits an entity or block.
 */
export class ProjectileHitEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity or block.
     * @param callback
     */
    subscribe(callback: (arg: ProjectileHitEvent) => void): (arg: ProjectileHitEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity or block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitEvent) => void): void;
}
/**
 * @beta
 * Provides methods that should be used within the World
 * Initialize event to register dynamic properties that can be
 * used and stored within Minecraft.
 */
export class PropertyRegistry {
    protected constructor();
    /**
     * @remarks
     * Registers a dynamic property for a particular entity type
     * (e.g., a minecraft:skeleton.).
     * @param propertiesDefinition
     * @param entityType
     * @throws This function can throw errors.
     */
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityType: EntityType,
    ): void;
    /**
     * @remarks
     * Registers a globally available dynamic property for a world.
     * @param propertiesDefinition
     * @throws This function can throw errors.
     */
    registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void;
}
/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export class Scoreboard {
    protected constructor();
    /**
     * @remarks
     * Adds a new objective to the scoreboard.
     * @param objectiveId
     * @param displayName
     * @throws This function can throw errors.
     */
    addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
    /**
     * @remarks
     * Clears the objective that occupies a display slot.
     * @param displaySlotId
     * @throws This function can throw errors.
     */
    clearObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjective;
    /**
     * @remarks
     * Returns a specific objective (by id).
     * @param objectiveId
     * Identifier of the objective.
     * @throws This function can throw errors.
     */
    getObjective(objectiveId: string): ScoreboardObjective;
    /**
     * @remarks
     * Returns an objective that occupies the specified display
     * slot.
     * @param displaySlotId
     * @throws This function can throw errors.
     */
    getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions;
    /**
     * @remarks
     * Returns all defined objectives.
     * @throws This function can throw errors.
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * Returns all defined scoreboard identities.
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Returns a score given an objective and participant.
     * @param objective
     * Objective to retrieve the score for.
     * @param participant
     * Participant to retrieve the score for.
     * @returns
     * Score value.
     * @throws This function can throw errors.
     */
    getScore(objective: ScoreboardObjective, participant: ScoreboardIdentity): number;
    /**
     * @remarks
     * Removes an objective from the scoreboard.
     * @param objectiveId
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * Sets an objective into a display slot with specified
     * additional display settings.
     * @param displaySlotId
     * @param objectiveDisplaySetting
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: string,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective;
    /**
     * @remarks
     * Sets the score given a participant and objective.
     * @param objective
     * Objective to use for the scoreboard.
     * @param participant
     * Participant to apply the scoreboard value to.
     * @param score
     * @throws This function can throw errors.
     */
    setScore(objective: ScoreboardObjective, participant: ScoreboardIdentity, score: number): boolean;
}
/**
 * @beta
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    protected constructor();
    /**
     * Returns the player-visible name of this identity.
     */
    readonly displayName: string;
    /**
     * Identifier of the scoreboard identity.
     */
    readonly id: number;
    /**
     * Type of the scoreboard identity.
     */
    readonly 'type': ScoreboardIdentityType;
    /**
     * @remarks
     * If the scoreboard identity is an entity or player, returns
     * the entity that this scoreboard item corresponds to.
     * @throws This function can throw errors.
     */
    getEntity(): Entity;
    /**
     * @remarks
     * Gets the current score for this participant based on an
     * objective.
     * @param objective
     * The objective to retrieve the score for.
     * @returns
     * Score value.
     * @throws This function can throw errors.
     */
    getScore(objective: ScoreboardObjective): number;
    /**
     * @remarks
     * Removes this participant from an objective.
     * @param objective
     * The objective to remove this participant from.
     * @throws This function can throw errors.
     */
    removeFromObjective(objective: ScoreboardObjective): boolean;
    /**
     * @remarks
     * Sets a score for this participant for a particular
     * objective.
     * @param objective
     * Objective to apply the score to.
     * @param score
     * Score value.
     * @throws This function can throw errors.
     */
    setScore(objective: ScoreboardObjective, score: number): boolean;
}
/**
 * @beta
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    protected constructor();
    /**
     * Returns the player-visible name of this scoreboard
     * objective.
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * Identifier of the scoreboard objective.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @remarks
     * Returns all objective participant identities.
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * Returns a specific score for a participant.
     * @param participant
     * Identifier of the participant to retrieve a score for.
     * @throws This function can throw errors.
     */
    getScore(participant: ScoreboardIdentity): number;
    /**
     * @remarks
     * Returns specific scores for this objective for all
     * participants.
     * @throws This function can throw errors.
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @remarks
     * Removes a participant from this scoreboard objective.
     * @param participant
     * Participant to remove from being tracked with this
     * objective.
     * @throws This function can throw errors.
     */
    removeParticipant(participant: ScoreboardIdentity): boolean;
    /**
     * @remarks
     * Sets a score for a participant.
     * @param participant
     * Identity of the participant.
     * @param score
     * New value of the score.
     * @throws This function can throw errors.
     */
    setScore(participant: ScoreboardIdentity, score: number): boolean;
}
/**
 * @beta
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    protected constructor();
    /**
     * This scoreboard participant for this score.
     */
    readonly participant: ScoreboardIdentity;
    /**
     * Score value of the identity for this objective.
     */
    readonly score: number;
}
/**
 * @beta
 * Contains information about user interface elements that are
 * showing up on the screen.
 */
export class ScreenDisplay {
    protected constructor();
    /**
     * @remarks
     * Clears the title and subtitle, if currently displayed.
     * @throws This function can throw errors.
     */
    clearTitle(): void;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     * @param text
     * @throws This function can throw errors.
     */
    setActionBar(text: string): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. You can optionally specify an additional subtitle
     * as well as fade in, stay and fade out times.
     * @param title
     * @param options
     * @throws This function can throw errors.
     */
    setTitle(title: string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     * @param subtitle
     * @throws This function can throw errors.
     */
    updateSubtitle(subtitle: string): void;
}
/**
 * @beta
 * Returns additional data about a /scriptevent command
 * invocation.
 */
export class ScriptEventCommandMessageEvent {
    protected constructor();
    /**
     * Identifier of this ScriptEvent command message.
     */
    readonly id: string;
    /**
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     */
    readonly initiator: Entity;
    /**
     * Optional additional data passed in with the script event
     * command.
     */
    readonly message: string;
    /**
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     */
    readonly sourceBlock: Block;
    /**
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     */
    readonly sourceEntity: Entity;
    /**
     * Returns the type of source that fired this command.
     */
    readonly sourceType: MessageSourceType;
}
/**
 * @beta
 * Allows for registering an event handler that responds to
 * inbound /scriptevent commands.
 */
export class ScriptEventCommandMessageSignal {
    protected constructor();
    /**
     * @remarks
     * Registers a new ScriptEvent handler.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: ScriptEventCommandMessageEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageEvent) => void;
    /**
     * @remarks
     * Unsubscribes a particular handler for a ScriptEvent event.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ScriptEventCommandMessageEvent) => void): void;
}
/**
 * @beta
 * Describes a particular seating position on this rideable
 * entity.
 */
export class Seat {
    protected constructor();
    /**
     * If specified, contains a forced rotation that the riders in
     * this seat are facing.
     */
    readonly lockRiderRotation: number;
    /**
     * A maximum number of riders that this seat can support.
     */
    readonly maxRiderCount: number;
    /**
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     */
    readonly minRiderCount: number;
    /**
     * Physical location of this seat, relative to the entity's
     * location.
     */
    readonly position: Vector3;
}
/**
 * @beta
 * Manages callbacks that are message passing to a server. This
 * event is not currently fully implemented, and should not be
 * used.
 */
export class ServerMessageSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an internal message
     * is passed.
     * @param callback
     */
    subscribe(callback: (arg: MessageReceiveEvent) => void): (arg: MessageReceiveEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an internal
     * message is passed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: MessageReceiveEvent) => void): void;
}
/**
 * A class that provides system-level events and functions.
 */
export class System {
    protected constructor();
    /**
     * @beta
     * Represents the current world tick of the server.
     */
    readonly currentTick: number;
    /**
     * @beta
     * Contains a set of events that are applicable for the
     * lifecycle of items in the Minecraft system.
     */
    readonly events: SystemEvents;
    /**
     * @beta
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via the `run` function.
     * @param runId
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at a future time. This is
     * frequently used to implement delayed behaviors and game
     * loops.
     * @param callback
     * Function callback to run when the tickDelay time criteria is
     * met.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     */
    run(callback: () => void): number;
    /**
     * @beta
     * @remarks
     * Runs a set of code on an interval.
     * @param callback
     * Functional code that will run when this interval occurs.
     * @param tickInterval
     * An interval of every N ticks that the callback will be
     * called upon.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @beta
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
     * @param callback
     * Functional code that will run when this timeout occurs.
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be
     * called.
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
}
/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the Minecraft add-on system.
 */
export class SystemEvents {
    protected constructor();
    /**
     * This event fires before a the performance watchdog
     * terminates scripting execution due to exceeding a
     * performance boundary. Depending on the configuration of the
     * runtime environment, this event can be canceled. For
     * example, on certain dedicated server environments the
     * ability to override termination events may be disabled.
     */
    readonly beforeWatchdogTerminate: BeforeWatchdogTerminateEventSignal;
    /**
     * This event fires if a /scriptevent command is invoked by a
     * player, NPC, or block.
     */
    readonly scriptEventReceive: ScriptEventCommandMessageSignal;
}
/**
 * @beta
 * An event for handling updates, that fires 20 times every
 * second.
 */
export class TickEvent {
    protected constructor();
    /**
     * Current tick at the time this event was fired.
     */
    readonly currentTick: number;
    /**
     * Time since the last tick was fired.
     */
    readonly deltaTime: number;
}
/**
 * @beta
 * Manages callbacks that are connected to a tick event.
 */
export class TickEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called on every tick.
     * @param callback
     */
    subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called every tick.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TickEvent) => void): void;
}
/**
 * @beta
 * Represents a trigger for firing an event.
 */
export class Trigger {
    /**
     * Event name of the trigger.
     */
    eventName: string;
    /**
     * @remarks
     * Creates a new trigger.
     * @param eventName
     */
    constructor(eventName: string);
}
/**
 * @beta
 * Contains a description of a vector.
 */
export class Vector {
    /**
     * X component of this vector.
     */
    x: number;
    /**
     * Y component of this vector.
     */
    y: number;
    /**
     * Z component of this vector.
     */
    z: number;
    /**
     * A constant vector that represents (0, 0, -1).
     */
    static readonly back: Vector;
    /**
     * A constant vector that represents (0, -1, 0).
     */
    static readonly down: Vector;
    /**
     * A constant vector that represents (0, 0, 1).
     */
    static readonly forward: Vector;
    /**
     * A constant vector that represents (-1, 0, 0).
     */
    static readonly left: Vector;
    /**
     * A constant vector that represents (1, 1, 1).
     */
    static readonly one: Vector;
    /**
     * A constant vector that represents (1, 0, 0).
     */
    static readonly right: Vector;
    /**
     * A constant vector that represents (0, 1, 0).
     */
    static readonly up: Vector;
    /**
     * A constant vector that represents (0, 0, 0).
     */
    static readonly zero: Vector;
    /**
     * @remarks
     * Creates a new instance of an abstract vector.
     * @param x
     * X component of the vector.
     * @param y
     * Y component of the vector.
     * @param z
     * Z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     * @param other
     * Other vector to compare this vector to.
     * @returns
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
    /**
     * @remarks
     * Returns the length of this vector.
     */
    length(): number;
    /**
     * @remarks
     * Returns the squared length of this vector.
     */
    lengthSquared(): number;
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     */
    normalized(): Vector;
    /**
     * @remarks
     * Returns the addition of these vectors.
     * @param a
     * @param b
     */
    static add(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     * @param a
     * @param b
     */
    static cross(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the distance between two vectors.
     * @param a
     * @param b
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     * @param a
     * @param b
     */
    static divide(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     * @param a
     * @param b
     * @param t
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     * @param a
     * @param b
     */
    static max(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     * @param a
     * @param b
     */
    static min(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     * @param a
     * @param b
     */
    static multiply(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     * @param a
     * @param b
     * @param s
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     * @param a
     * @param b
     */
    static subtract(a: Vector3, b: Vector3): Vector;
}
/**
 * @beta
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeEvent {
    protected constructor();
    /**
     * Dimension in which the weather has changed.
     */
    readonly dimension: string;
    /**
     * Whether it is lightning after the change in weather.
     */
    readonly lightning: boolean;
    /**
     * Whether it is raining after the change in weather.
     */
    readonly raining: boolean;
}
/**
 * @beta
 * Manages callbacks that are connected to weather changing.
 */
export class WeatherChangeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     * @param callback
     */
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
}
/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    protected constructor();
    /**
     * @beta
     * Contains a set of events that are applicable to the entirety
     * of the world.
     */
    readonly events: Events;
    /**
     * @beta
     * Returns the general global scoreboard that applies to the
     * world.
     */
    readonly scoreboard: Scoreboard;
    /**
     * @beta
     * @remarks
     * A method that is internal-only, used for broadcasting
     * specific messages between client and server.
     * @param id
     * @param value
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @beta
     * @remarks
     * Returns the absolute time since the start of the world.
     */
    getAbsoluteTime(): number;
    /**
     * @remarks
     * Returns an array of all active players within the world.
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    getDefaultSpawnPosition(): Vector3;
    /**
     * @remarks
     * Returns a dimension object.
     * @param dimensionId
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @beta
     * @remarks
     * Returns a property value.
     * @param identifier
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    /**
     * @beta
     * @remarks
     * Sets the current game time of the day.
     */
    getTime(): number;
    /**
     * @beta
     * @remarks
     * Plays a particular music track for all players.
     * @param trackID
     * @param musicOptions
     */
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Plays a sound for all players.
     * @param soundID
     * @param soundOptions
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @beta
     * @remarks
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     * @param trackID
     * @param musicOptions
     */
    queueMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @beta
     * @remarks
     * Sends a message to all players.
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     *        // Displays "Apple or Coal"
     *        let rawMessage = {
     *          translate: "accessibility.list.or.two",
     *          with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     *        };
     *        world.sendMessage(rawMessage);
     *
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     *        // Displays the player's score for objective "obj". Each player will see their own score.
     *        const rawMessage = { score: { name: "*", objective: "obj" } };
     *        world.sendMessage(rawMessage);
     *
     * ```
     * @example simpleString.ts
     * ```typescript
     *        // Displays "Hello, world!"
     *        world.sendMessage("Hello, world!");
     *
     * ```
     * @example translation.ts
     * ```typescript
     *        // Displays "First or Second"
     *        const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
     *        world.sendMessage(rawMessage);
     *
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    setDefaultSpawn(spawnPosition: Vector3): void;
    /**
     * @beta
     * @remarks
     * Sets a specified property to a value.
     * @param identifier
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @beta
     * @remarks
     * Returns the current game time of the day.
     * @param timeOfDay
     */
    setTime(timeOfDay: number): void;
    /**
     * @beta
     * @remarks
     * Stops any music tracks from playing.
     */
    stopMusic(): void;
}
/**
 * @beta
 * Contains information and methods that can be used at the
 * initialization of the scripting environment for a World.
 * Also, use the supplied propertyRegistry object to register
 * any dynamic properties, within the scope of the World
 * Initialize execution.
 */
export class WorldInitializeEvent {
    protected constructor();
    /**
     * Contains methods for scripts to initialize and register
     * dynamic properties they may wish to use within a world.
     * @example propertyRegistration.js
     * ```typescript
     *        import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "@minecraft/server";
     *
     *        world.events.worldInitialize.subscribe((e) => {
     *          let def = new DynamicPropertiesDefinition();
     *
     *          def.defineNumber("rpgStrength");
     *          def.defineString("rpgRole", 16);
     *          def.defineBoolean("rpgIsHero");
     *
     *          e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);
     *        });
     *
     * ```
     */
    readonly propertyRegistry: PropertyRegistry;
}
/**
 * @beta
 * Manages callbacks that are run at the initialization of the
 * scripting environment for a World. Do note that this event
 * may run multiple times within a session in the case that the
 * /reload command is used.
 */
export class WorldInitializeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the scripting
     * environment is initialized for a World.
     * @param callback
     */
    subscribe(callback: (arg: WorldInitializeEvent) => void): (arg: WorldInitializeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called the scripting
     * environment is initialized for a World.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeEvent) => void): void;
}
/**
 * @beta
 * Represents a rotation structure with pitch and yaw
 * components.
 */
export class XYRotation {
    protected constructor();
    /**
     * Yaw component (left-to-right) of this position.
     */
    x: number;
    /**
     * Pitch (up-and-down) element of this rotation.
     */
    y: number;
}
export interface BlockFillOptions {
    matchingBlock?: BlockPermutation;
}
/**
 * @beta
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
    /**
     * Block that was hit.
     */
    block: Block;
    /**
     * Face of the block that was hit.
     */
    face: Direction;
    /**
     * X coordinate on the face that was hit.
     */
    faceLocationX: number;
    /**
     * Y coordinate on the face that was hit.
     */
    faceLocationY: number;
}
/**
 * @beta
 * Contains additional options for configuring a block raycast
 * query.
 */
export interface BlockRaycastOptions {
    /**
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     */
    includeLiquidBlocks?: boolean;
    /**
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     */
    includePassableBlocks?: boolean;
    /**
     * Maximum distance, in blocks, to process the raycast.
     */
    maxDistance?: number;
}
/**
 * @beta
 * Represents a fully customizable color within Minecraft.
 */
export interface Color {
    /**
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     */
    alpha: number;
    /**
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     */
    blue: number;
    /**
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     */
    green: number;
    /**
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     */
    red: number;
}
export interface EntityDamageSource {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
    damagingProjectile?: Entity;
}
/**
 * @beta
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     */
    entities?: Entity[];
    /**
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     */
    entityTypes?: string[];
    /**
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     */
    eventTypes?: string[];
}
/**
 * @beta
 * Contains optional parameters for registering an entity
 * event.
 */
export interface EntityEventOptions {
    /**
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     */
    entities?: Entity[];
    /**
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     */
    entityTypes?: string[];
}
/**
 * @beta
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
    /**
     * Entity that was hit.
     */
    entity: Entity;
}
/**
 * @beta
 * Contains options for selecting entities within an area.
 */
export interface EntityQueryOptions {
    /**
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     */
    closest?: number;
    /**
     * Excludes entities that match one or more of the specified
     * families.
     */
    excludeFamilies?: string[];
    /**
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     */
    excludeGameModes?: GameMode[];
    /**
     * Excludes entities that have a name that match one of the
     * specified values.
     */
    excludeNames?: string[];
    /**
     * Excludes entities with a tag that matches one of the
     * specified values.
     */
    excludeTags?: string[];
    /**
     * Excludes entities if they are one of the specified types.
     */
    excludeTypes?: string[];
    /**
     * If specified, includes entities that match all of the
     * specified families.
     */
    families?: string[];
    /**
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     */
    farthest?: number;
    /**
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     */
    gameMode?: GameMode;
    /**
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     */
    location?: Vector3;
    /**
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     */
    maxDistance?: number;
    /**
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     */
    maxHorizontalRotation?: number;
    /**
     * If defined, only players that have at most this level are
     * returned.
     */
    maxLevel?: number;
    /**
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     */
    maxVerticalRotation?: number;
    /**
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     */
    minDistance?: number;
    /**
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     */
    minHorizontalRotation?: number;
    /**
     * If defined, only players that have at least this level are
     * returned.
     */
    minLevel?: number;
    /**
     * If specified, will only include entities that have at least
     * this vertical rotation.
     */
    minVerticalRotation?: number;
    /**
     * Includes entities with the specified name.
     */
    name?: string;
    /**
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * Includes entities that match all of the specified tags.
     */
    tags?: string[];
    /**
     * If defined, entities that match this type are included.
     */
    type?: string;
    /**
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     */
    volume?: BlockAreaSize;
}
/**
 * @beta
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * If set to true, entities and players within this score range
     * are excluded from query results.
     */
    exclude?: boolean;
    /**
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     */
    maxScore?: number;
    /**
     * If defined, only players that have a score equal to or over
     * minScore are included.
     */
    minScore?: number;
    /**
     * Identifier of the scoreboard objective to filter on.
     */
    objective?: string;
}
/**
 * @beta
 * Contains additional options for an entity raycast operation.
 */
export interface EntityRaycastOptions {
    /**
     * Maximum distance, in blocks, to process the raycast.
     */
    maxDistance?: number;
}
/**
 * @beta
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 */
export interface ExplosionOptions {
    /**
     * Whether parts of the explosion also impact underwater.
     */
    allowUnderwater?: boolean;
    /**
     * Whether the explosion will break blocks within the blast
     * radius.
     */
    breaksBlocks?: boolean;
    /**
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     */
    causesFire?: boolean;
    /**
     * Optional source of the explosion.
     */
    source?: Entity;
}
/**
 * @beta
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * Specifies a fade overlap for music at the end of play.
     */
    fade?: number;
    /**
     * If set to true, this music track will play repeatedly.
     */
    loop?: boolean;
    /**
     * Relative volume level of the music.
     */
    volume?: number;
}
/**
 * @beta
 * Represents a min/max structure for expressing a potential
 * range of numbers.
 */
export interface NumberRange {
    /**
     * Maximum value within a range.
     */
    max: number;
    /**
     * Minimum value within a range.
     */
    min: number;
}
export interface PlayAnimationOptions {
    blendOutTime?: number;
    controller?: string;
    nextState?: string;
    stopExpression?: string;
}
export interface RawMessage {
    rawtext?: (RawMessage | string)[];
    score?: RawMessageScore;
    text?: string;
    translate?: string;
    with?: string[] | RawMessage;
}
export interface RawMessageScore {
    name?: string;
    objective?: string;
}
/**
 * @beta
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * Objective to be displayed.
     */
    objective: ScoreboardObjective;
    /**
     * The sort order to display the objective items within.
     */
    sortOrder?: ObjectiveSortOrder;
}
export interface ScriptEventMessageFilterOptions {
    namespaces: string[];
}
/**
 * @beta
 * Additional configuration options for the {@link
 * Player.playSound}/{@link World.playSound} method.
 */
export interface SoundOptions {
    /**
     * Specifies a location of where to play a particular sound.
     */
    location?: Vector3;
    /**
     * Pitch adjustment level for the sound.
     */
    pitch?: number;
    /**
     * Relative volume level of the sound.
     */
    volume?: number;
}
/**
 * @beta
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * Fade-in time for the title and subtitle, in seconds.
     */
    fadeInSeconds: number;
    /**
     * Fade-out time for the title and subtitle, in seconds.
     */
    fadeOutSeconds: number;
    /**
     * Amount of time for the title and subtitle to stay in place.
     */
    staySeconds: number;
    /**
     * Optional subtitle text.
     */
    subtitle?: string;
}
/**
 * @beta
 * Contains a description of a vector.
 */
export interface Vector3 {
    /**
     * X component of this vector.
     */
    x: number;
    /**
     * Y component of this vector.
     */
    y: number;
    /**
     * Z component of this vector.
     */
    z: number;
}
export const TicksPerDay = 24000;
/**
 * @beta
 * How many times the server ticks per second of real time.
 */
export const TicksPerSecond = 20;
/**
 * A class that provides system-level events and functions.
 */
export const system: System;
/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export const world: World;
