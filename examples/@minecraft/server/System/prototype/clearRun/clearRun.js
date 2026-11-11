import { system } from "@minecraft/server";

const runId = system.run(() => {
  // console.log removed for example clarity
});

// Clear the run, so it will not run again.
system.clearRun(runId);
