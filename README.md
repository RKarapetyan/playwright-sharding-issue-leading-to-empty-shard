# Complex Distribution Sharding Issue

This directory demonstrates a scenario where Playwright's sharding algorithm creates gaps, resulting in "no tests found" for certain shards.

## Test Distribution

This scenario uses **40 tests** distributed across **14 files** with varying test counts:

| File | Tests | Cumulative Tests | Test Range |
|------|-------|------------------|------------|
| file-01-single.spec.ts | 1 | 1 | 0-0 |
| file-02-single.spec.ts | 1 | 2 | 1-1 |
| file-03-double.spec.ts | 2 | 4 | 2-3 |
| file-04-single.spec.ts | 1 | 5 | 4-4 |
| file-05-triple.spec.ts | 3 | 8 | 5-7 |
| file-06-single.spec.ts | 1 | 9 | 8-8 |
| file-07-double.spec.ts | 2 | 11 | 9-10 |
| file-08-large.spec.ts | 16 | 27 | 11-26 |
| file-09-five.spec.ts | 5 | 32 | 27-31 |
| file-10-double.spec.ts | 2 | 34 | 32-33 |
| file-11-double.spec.ts | 2 | 36 | 34-35 |
| file-12-single.spec.ts | 1 | 37 | 36-36 |
| file-13-double.spec.ts | 2 | 39 | 37-38 |
| file-14-single.spec.ts | 1 | 40 | 39-39 |

## Sharding Analysis

With `fullyParallel: false` and 5 shards, the algorithm calculates:

- **Base shard size**: `Math.floor(40/5) = 8` tests per shard
- **Extra tests**: `40 - 8*5 = 0` (no extra tests)

**Expected test ranges per shard**:
- Shard 1: tests 0-7
- Shard 2: tests 8-15
- Shard 3: tests 16-23
- Shard 4: tests 24-31
- Shard 5: tests 32-39

**Actual test group assignments** (based on first test of each group):
- Group 1 (tests 0-0) → Shard 1 ✅
- Group 2 (tests 1-1) → Shard 1 ✅
- Group 3 (tests 2-3) → Shard 1 ✅
- Group 4 (tests 4-4) → Shard 1 ✅
- Group 5 (tests 5-7) → Shard 1 ✅
- Group 6 (tests 8-8) → Shard 2 ✅
- Group 7 (tests 9-10) → Shard 2 ✅
- Group 8 (tests 11-26) → Shard 2 ✅
- Group 9 (tests 27-31) → Shard 4 ✅ (skips Shard 3!)
- Group 10 (tests 32-33) → Shard 5 ✅
- Group 11 (tests 34-35) → Shard 5 ✅
- Group 12 (tests 36-36) → Shard 5 ✅
- Group 13 (tests 37-38) → Shard 5 ✅
- Group 14 (tests 39-39) → Shard 5 ✅

## Result

**Shard 3 gets no tests** because no test group starts in the range 16-23!

- Shard 1: 8 tests (Groups 1-5)
- Shard 2: 19 tests (Groups 6-8)
- Shard 3: 0 tests ❌
- Shard 4: 5 tests (Group 9)
- Shard 5: 8 tests (Groups 10-14)

## Reproducing the Issue
```sh
pnpm install

pnpm run reproduction
```

## Key Insight

This demonstrates that sharding gaps can occur even with many small test groups when there happens to be a large group (file-08-large.spec.ts with 16 tests) that creates uneven distribution. The gap occurs because:

1. Group 8 (file-08-large.spec.ts) starts at test 11 and contains 16 tests (11-26)
2. This places it entirely in Shard 2's range (8-15), but it extends well beyond
3. Group 9 (file-09-five.spec.ts) starts at test 27, which falls in Shard 4's range (24-31)
4. No group starts in Shard 3's range (16-23), leaving it empty

