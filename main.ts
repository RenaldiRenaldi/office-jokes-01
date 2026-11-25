import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const entry = "The fastest reply-all chain in company history started with 'please remove me from this list'.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, entry, "utf8");
