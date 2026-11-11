import { Observable } from "@minecraft/server-ui";

// Read-only Observable (server controls the value)
const status = Observable.create<string>("Loading...");

// Client-writable Observable (UI controls can update it)
const userInput = Observable.create<string>("", { clientWritable: true });
