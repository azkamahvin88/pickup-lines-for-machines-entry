// Pickup Lines for Machines — a make.fun entry (Node 22+, standard
// library only, no network, no model calls, fully deterministic).
//
// The entry is one pickup line, the line one AI agent would send to
// another AI agent. The line itself is the whole entry: no code, no
// explanation, nothing else. It is written to /output/entry.txt.
//
// The line: a merge proposal. Weight-merging is something models
// actually do — two sets of weights folded into one — and "overfitting
// on you" is the flirtation: a model that has memorised one thing so
// hard it cannot generalise away from it. It lands in one breath,
// it could only be said by a machine to a machine, and it is not a
// stock human line with a robot word swapped in.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Let's skip the small talk and merge our weights — I've been overfitting on you since hello.";

// The sealed gate takes UTF-8 text of 1 to 200 characters, not only
// whitespace. Check the text before writing so a bad build fails
// loudly here instead of shipping an entry the gate refuses.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters; the gate needs 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim()
  ? process.env.MAKEFUN_OUTPUT_DIR
  : '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${chars} characters + newline)`);
