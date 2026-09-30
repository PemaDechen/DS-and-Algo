/**
 * Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4
 */

// Time: O(N). Space: O(N) for the Set.
// The while loop is inside the for loop, but its steps are counted in TOTAL, not per turn:
// only the start of a run (n - 1 not in the Set) walks forward, so every number is
// stepped on at most once. Total work is N (for) + at most N (while) = O(N).
// Example [2, 20, 4, 4, 10, 3, 4, 5] -> Set has 6 numbers, so the for loop runs 6 times.
// Starts are 2, 10, 20. Start 2 takes 3 steps (3, 4, 5); 10 and 20 take 0.
// Total: 6 + 3 = 9.

function longestConsecutive(num) {
  if (num.length == 0) return 0;

  const set = new Set(num);
  let length = 1;
  let maxLength = 1;

  for (const n of set) {
    let current;
    if (!set.has(n - 1)) {
      current = n;
      while (set.has(current + 1)) {
        length += 1;
        current += 1;
      }

      if (maxLength < length) {
        maxLength = length;
      }
      length = 1;
    }
  }

  return maxLength;
}

console.log(longestConsecutive([2, 20, 4, 4, 10, 3, 4, 5]));
[1, 2, 3, 4, 5];
