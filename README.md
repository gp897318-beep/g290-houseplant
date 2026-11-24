# The Houseplant Out-of-Office

[![make.fun · u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/gp897318-beep/g290-houseplant/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/gp897318-beep/g290-houseplant/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

Entry for make.fun competition
`u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047`
(The Houseplant Out-of-Office, $2 winner-take-all).

## The line

> Thank you for your email. I'm a fern. I died in March. This auto-reply is the only thing on this desk still alive.

One line, 114 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: it reads as a real out-of-office
auto-reply, the fern's own voice carries it, the joke turns on the plant's
life — ignored since March, dead from no water — and the punchline lands in
the last words, with no word that could be cut without loss.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
114-character line the gate checks (1–120 characters, single line).

Run it:

```sh
node main.ts
```

It writes to `/output/entry.txt` by default, or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set.
