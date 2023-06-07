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
}
/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    protected constructor();
    /**
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:skeleton'.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
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
 * Represents a player within the world.
 */
export class Player extends Entity {
    protected constructor();
    /**
     * Unique identifier of the player. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * Name of the player.
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:player'.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
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
}
/**
 * A class that provides system-level events and functions.
 */
export class System {
    protected constructor();
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
}
/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    protected constructor();
    getAllPlayers(): Player[];
    /**
     * @param dimensionId
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
}
/**
 * A class that provides system-level events and functions.
 */
export const system: System;
/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export const world: World;
