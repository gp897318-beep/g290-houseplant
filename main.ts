// g290-houseplant: writes one houseplant out-of-office auto-reply to
// /output/entry.txt. Chosen from 8 distinct candidates against the judge
// brief: it reads as an auto-reply ("Thank you for your email"), the fern
// speaks in its own voice, the joke turns on the plant's life — ignored
// since March, dead from no water — and the punchline lands in the last
// words: the auto-reply is the only thing on this desk still alive.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Thank you for your email. I'm a fern. I died in March. This auto-reply is the only thing on this desk still alive.";

// The gate needs exactly one line of UTF-8 text, 1 to 120 characters, not
// only white space — no trailing newline, so the file is the line alone.
function checkLine(line: string): void {
  if (line.length < 1 || line.length > 120) {
    throw new Error(`entry must be 1-120 characters, got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be one non-blank line");
  }
}

checkLine(LINE);

// Write the line, deterministic, no network, no secrets. The grader
// reads /output/entry.txt; honour $MAKEFUN_OUTPUT_DIR when it is set.
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
