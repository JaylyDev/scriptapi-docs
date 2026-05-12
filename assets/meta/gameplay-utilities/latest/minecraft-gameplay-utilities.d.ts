import { SystemAfterEvents } from '@minecraft/server';
import { WorldAfterEvents } from '@minecraft/server';

/**
 * A promise wrapper utility which returns a new promise that will resolve when the next
 * event is raised.
 *
 * @public
 */
export declare interface EventPromise<T> extends Promise<T | undefined> {
    /**
     * Cancels the promise and unsubscribes from the event signal. Cancellation is done
     * by fulfilling with undefined.
     *
     * @public
     */
    cancel(): void;
    /**
     * Promise-like interface then.
     *
     * @param onfulfilled - Called if the promise fulfills
     * @param onrejected - Called if the promise rejects
     * @public
     */
    then<TFulfill = T | undefined, TReject = never>(onfulfilled?: ((value: T | undefined) => TFulfill | PromiseLike<TFulfill>) | null, onrejected?: ((reason: unknown) => TReject | PromiseLike<TReject>) | null): Promise<TFulfill | TReject>;
    /**
     * Promise-like interface catch.
     *
     * @param onrejected - Called if the promise rejects
     * @public
     */
    catch<TReject = never>(onrejected?: ((reason: unknown) => TReject | PromiseLike<TReject>) | null): Promise<T | undefined | TReject>;
    /**
     * Promise-like interface finally.
     *
     * @param onfinally - Called when the promise resolves
     * @public
     */
    finally(onfinally?: (() => void) | null): Promise<T | undefined>;
}

/**
 * The keys of after event signals that exist in Minecraft's API that EventPromise can use.
 *
 * @public
 */
export declare type MinecraftAfterEventSignalKeys = keyof WorldAfterEvents | keyof SystemAfterEvents;

/**
 * The types of after event signals that exist in Minecraft's API that EventPromise can use.
 *
 * @public
 */
export declare type MinecraftAfterEventSignals<K extends MinecraftAfterEventSignalKeys> = K extends keyof WorldAfterEvents ? WorldAfterEvents[K] : K extends keyof SystemAfterEvents ? SystemAfterEvents[K] : never;

/**
 * Helper to create a new EventPromise from an after event signal.
 *
 * @public
 */
export declare function nextEvent<T extends MinecraftAfterEventSignals<MinecraftAfterEventSignalKeys>>(signal: T, filter?: Parameters<T['subscribe']>[1]): EventPromise<Parameters<ReturnType<T['subscribe']>>[0]>;

export { }
