import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One line, one joke: the pick is written verbatim below, no trailing newline.
// The grader runs this twice; both runs must produce identical bytes.

const PICK = "My cat unties my shoelaces at 6 a.m., and she watches me trip like she is grading my balance, and I have failed three mornings in a row.";

const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
