/**
 * Group Anagrams
Medium
Topics
Company Tags
Hints
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
 */

function groupAnagram(strs) {
  // First I will first check if the sorted word exists as a key
  const anagramList = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedWord = [...strs[i]].sort().join("");
    if (anagramList.has(sortedWord)) {
      anagramList.set(sortedWord, [...anagramList.get(sortedWord), strs[i]]);
    } else {
      anagramList.set(sortedWord, [strs[i]]);
    }
  }

  return [...anagramList.values()];
}

console.log(
  "RETURN",
  groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]),
);
