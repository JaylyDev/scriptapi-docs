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
 *   "version": "1.1.0"
 * }
 * ```
 *
 */
/**
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * @remarks
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     *
     */
    adventure = 'adventure',
    /**
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
    spectator = 'spectator',
    /**
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
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
    protected constructor();
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
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}). This type was introduced as of version 1.17.10.21.
 */
export class BlockPermutation {
    protected constructor();
    /**
     * @remarks
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockName
     * An optional set of states to compare against.
     */
    matches(blockName: string, properties?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * This function can't be called in read-only mode.
     *
     * @param blockName
     * Identifier of the block to check.
     * @param properties
     * Optional additional set of properties to check against.
     * @throws This function can throw errors.
     */
    static resolve(blockName: string, properties?: Record<string, boolean | number | string>): BlockPermutation;
}

/**
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    protected constructor();
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
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
    protected constructor();
    /**
     * @remarks
     * Identifier of the dimension.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @remarks
     * Returns a block instance at the given location. This method
     * was introduced as of version 1.17.10.21.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location.
     * @throws This function can throw errors.
     */
    getBlock(location: Vector3): Block;
    /**
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * This function can't be called in read-only mode.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * entities returned.
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
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @remarks
     * Returns a set of entities at a particular location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to return entities.
     * @returns
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * This function can't be called in read-only mode.
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
     * @remarks
     * Runs a particular command asynchronously from the context of
     * the broader dimension.  Note that there is a maximum queue
     * of 128 asynchronous commands that can be run in a given
     * tick.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    protected constructor();
    /**
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
     * this unique identifier - do not parse or interpret it.
     *
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @remarks
     * Current location of the entity.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Given name of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     */
    nameTag: string;
    /**
     * @remarks
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:skeleton'.
     *
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @remarks
     * Returns the current location of the head component of this
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks
     * Returns the current velocity vector of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getVelocity(): Vector3;
    /**
     * @remarks
     * Returns the current view direction of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getViewDirection(): Vector3;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
     *
     * This function can't be called in read-only mode.
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
}

/**
 * A collection of default Minecraft dimension types.
 */
export class MinecraftDimensionTypes {
    protected constructor();
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
export class Player extends Entity {
    protected constructor();
    /**
     * @remarks
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @remarks
     * Sends a message to the player.
     *
     * This function can't be called in read-only mode.
     *
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
}

/**
 * A class that provides system-level events and functions.
 */
export class System {
    protected constructor();
    /**
     * @remarks
     * Represents the current world tick of the server.
     *
     */
    readonly currentTick: number;
    /**
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via the `run` function.
     *
     * This function can't be called in read-only mode.
     *
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at a future time. This is
     * frequently used to implement delayed behaviors and game
     * loops.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function callback to run when the tickDelay time criteria is
     * met.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * Runs a set of code on an interval.
     *
     * This function can't be called in read-only mode.
     *
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
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
     *
     * This function can't be called in read-only mode.
     *
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
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    protected constructor();
    /**
     * @remarks
     * Returns an array of all active players within the world.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    /**
     * @remarks
     * Returns a dimension object.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * This function can't be called in read-only mode.
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
     * @remarks
     * Sends a message to all players.
     *
     * This function can't be called in read-only mode.
     *
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
}

/**
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

/** */
export interface RawMessage {
    rawtext?: RawMessage[];
    score?: RawMessageScore;
    text?: string;
    translate?: string;
    with?: string[] | RawMessage;
}

/** */
export interface RawMessageScore {
    /** */
    name?: string;
    /** */
    objective?: string;
}

/**
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
