// Charm the Commuter: Forecast a City That Isn't
// Entry program: writes one short weather line for an invented city
// to /output/entry.txt, where the make.fun gate checks it is UTF-8
// text of 1 to 140 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const FORECAST: string =
  "In Drizzleville, light rain all morning, 14°C, with a 100% chance the bus arrives the moment you finally give up waiting.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate refuses anything over 140 characters, so fail loudly here
// rather than shipping an invalid entry.
if (FORECAST.length > 140) {
  throw new Error(
    `Forecast is ${FORECAST.length} characters, over the 140 limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, FORECAST, "utf8");
