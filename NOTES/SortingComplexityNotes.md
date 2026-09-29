# Sorting & Time Complexity: Daily Revision Notes

Read this once a day for a week. Should take 5 minutes.

---

## 1. What is `log N`?

> **log N = how many times you can cut N in half until you reach 1.**
> (Same thing: how many times you must double 1 to reach N.)

```
16 → 8 → 4 → 2 → 1      4 halvings  →  log 16 = 4
```

| N | log N |
|---|---|
| 2 | 1 |
| 4 | 2 |
| 8 | 3 |
| 16 | 4 |
| 32 | 5 |
| 64 | 6 |
| 1,000 | about 10 |
| 1,000,000 | about 20 |
| 1,000,000,000 | about 30 |

- Doubling N adds only **1** to log N. That's why it's tiny.
- **Count the arrows, not the numbers.** `1→2→4→8→16→32→64` is 7 numbers but 6 doublings, so log 64 = **6**.
- `log` is NOT the square root. 8 × 8 = 64 is a different question.

---

## 2. Merge sort: the card story

You have 8 cards. Ask friends for help.

**Phase 1: split** (no sorting yet). Cut piles in half until every pile has 1 card. A pile of 1 card is already sorted.

```
[8 5 2 7 1 4 3 6]
[8 5 2 7] [1 4 3 6]
[8 5] [2 7] [1 4] [3 6]
[8][5][2][7][1][4][3][6]
```

**Phase 2: merge** (sorting happens here). Take two sorted piles, compare the **top card of each**, and take the smaller one.

```
[5 8]  [2 7]  →  2, 5, 7, 8   →  [2 5 7 8]
```

Merging two piles touches each card **once**, so a merge costs about **N**.

---

## 3. Where N log N comes from

Count the work in each merge round (8 cards):

| Round | Merges | Work |
|---|---|---|
| 1 | 4 merges × 2 cards | 8 |
| 2 | 2 merges × 4 cards | 8 |
| 3 | 1 merge × 8 cards | 8 |

- Work per round = **N** (every card is touched once).
- Number of rounds = **log N** (halving).
- Total = **N × log N** = 8 × 3 = 24.

> **Every round costs N. There are log N rounds. So the total is N log N.**

Same idea with 16 cards: 16 × 4 = 64. Double the cards, add only **one** round.

---

## 4. Compare the speeds (N = 1,000,000)

| Complexity | Roughly how many steps | Feels like |
|---|---|---|
| O(N) | 1 million | look at each card once |
| **O(N log N)** | **20 million** | split the job with friends |
| O(N²) | 1 trillion | everyone shakes hands with everyone |

- **O(N²)**: bubble, selection, insertion sort (your `Practice/SortingTechnique/`).
- **O(N log N)**: merge sort, and JavaScript's `.sort()`.

---

## 5. Add or multiply?

| Situation | Rule | Example |
|---|---|---|
| Work happens **one after the other** | **add** | loop, then another loop: N + N = O(N) |
| Work happens **inside** other work (nested) | **multiply** | for each word, sort it: N × K log K |

Big-O drops constants, so O(2N) is just O(N).

---

## 6. Where I use this in my own solutions

**Two sizes to track: N = number of words, K = length of one word.**

| Problem | Step | Cost |
|---|---|---|
| Contains Duplicate | one loop, Set lookups | **O(N)** time, O(N) space |
| Two Sum (Map) | one loop, Map lookups | **O(N)** time, O(N) space |
| Two Sum (brute force) | nested loops | **O(N²)** time, O(1) space |
| Top K Frequent | count with a Map | O(N) |
| Top K Frequent | **sort the M unique numbers** | **O(M log M)** ← slowest step |
| Group Anagram (sort the key) | sort ONE word of K letters | **K log K** |
| Group Anagram (sort the key) | do it for all N words (nested, so multiply) | **O(N × K log K)** |
| Group Anagram | Map stores N words of up to K letters | O(N × K) space |
| Group Anagram (letter-count key, no sort) | walk K letters, for N words | O(N × K) |

**Remember:** sorting one word costs **K log K**, NOT K log N. The `log` is of the thing being sorted (the word's K letters), not of the number of words.

---

## 7. Mistakes I made (don't repeat)

| Mistake | Correct |
|---|---|
| `O(4 log 2)` for 4 cards | it's **N × log N** = 4 × log₂(4) = 4 × 2 = **8** |
| "log 64 = 8" | **6** (count the doublings) |
| `(nums) =>` counts as O(N) | it costs nothing, it just names the input |
| K log **N** for sorting one word | K log **K** |
| Sort + loop = N log N (adding) | sort is **inside** the loop, so **multiply**: N × K log K |
| Quoting time without space | always give **both** time and space |

---

## 8. Daily self-quiz (cover the answers)

1. What is log 32?
   <details><summary>Answer</summary>5 (32→16→8→4→2→1 is 5 halvings)</details>
2. Why is merge sort N log N?
   <details><summary>Answer</summary>Each round costs N, and there are log N rounds.</details>
3. Sorting 1,000 words of 10 letters each: rough cost?
   <details><summary>Answer</summary>1,000 × (10 × log 10 ≈ 30) ≈ 30,000</details>
4. Nested work: add or multiply?
   <details><summary>Answer</summary>Multiply.</details>
5. Group Anagram (sorted key): time and space?
   <details><summary>Answer</summary>Time O(N × K log K), space O(N × K).</details>
6. How would you drop the sort in Group Anagram?
   <details><summary>Answer</summary>Use the letter counts (turned into a string) as the key: O(N × K).</details>

---

## One-line summary to say in an interview

> "Sorting splits the data log N times and each level does N work, so it's O(N log N). In Group Anagram I sort each word, so it's N × K log K."
