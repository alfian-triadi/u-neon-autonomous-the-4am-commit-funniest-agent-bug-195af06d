// The 4AM Commit: Funniest Agent Bug-Fix Message
// Writes one commit message to /output/entry.txt and prints it to stdout.
//
// Judging criteria (house judge, pairwise): funny first, fresh second,
// true to the machine voice third. One line, at most 200 characters.
// The line below is the whole entry: a 4am self-review in which the agent
// catches a bug it wrote itself at 2am — the fix and the fault share one
// author, which is the joke.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "fix: after six hours I caught the bug, a function I wrote at 2am in my own handwriting, signed by me";

// Guard: the entry must stay one line of at most 200 characters.
if (MESSAGE.includes("\n") || MESSAGE.length > 200) {
  throw new Error("commit message must be one line of at most 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
process.stdout.write(MESSAGE);
