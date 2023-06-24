import { system, TicksPerSecond } from "@minecraft/server";

let count = 0;

const runId = system.runInterval(() => {
  count++;
  console.log(`Running callback function (${count} times)...`);

  if (count === 10) {
    system.clearRun(runId);
    console.log("runInterval cleared after 10 times.");
  }
}, TicksPerSecond); // Runs every 20 ticks or 1 second.
