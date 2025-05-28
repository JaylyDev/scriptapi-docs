/// <reference no-default-lib="true"/>

/// <reference lib="es2015.collection" />
/// <reference lib="es2015.iterable" />
/// <reference lib="es2015.generator" />
/// <reference lib="es2015.promise" />
/// <reference lib="es2015.proxy" />
/// <reference lib="es2015.reflect" />
/// <reference lib="es2015.symbol" />
/// <reference lib="es2015.symbol.wellknown" />

/// <reference lib="es2016.array.include" />

/// <reference lib="es2017.arraybuffer" />
/// <reference lib="es2017.date" />
/// <reference lib="es2017.object" />
/// <reference lib="es2017.string" />
/// <reference lib="es2017.typedarrays" />

/// <reference lib="es2018.asynciterable" />
/// <reference lib="es2018.asyncgenerator" />
/// <reference lib="es2018.promise" />
/// <reference lib="es2018.regexp" />

/// <reference lib="es2019.array" />
/// <reference lib="es2019.object" />
/// <reference lib="es2019.string" />
/// <reference lib="es2019.symbol" />

/// <reference lib="es2020.promise" />
/// <reference lib="es2020.symbol.wellknown" />

/// <reference lib="es2021.promise" />
/// <reference lib="es2021.string" />
/// <reference lib="es2021.weakref" />

/// <reference lib="es2022.array" />
/// <reference lib="es2022.error" />
/// <reference lib="es2022.object" />
/// <reference lib="es2022.regexp" />
/// <reference lib="es2022.string" />

/// <reference lib="es2023.array" />
/// <reference lib="es2023.collection" />

/////////////////////////////
/// QuickJS APIs
/////////////////////////////

interface Console {
    error(...data: any[]): void;
    info(...data: any[]): void;
    log(...data: any[]): void;
    warn(...data: any[]): void;
}

declare var console: Console;

interface InternalError extends Error { }

interface InternalErrorConstructor {
    new(message?: string): InternalError;
    (message?: string): InternalError;
    readonly prototype: InternalError;
}

declare var InternalError: InternalErrorConstructor;
declare function print(...data: any[]): void;
