function GroupAnagram(strs) {
  // Input: strs = ["act","pots","tops","cat","stop","hat"]
  // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedData = strs[i].split("").sort().join("");

    if (map.has(sortedData)) {
      map.set(sortedData, [...map.get(sortedData), strs[i]]);
    } else {
      map.set(sortedData, [strs[i]]);
    }
  }
  return [...map.values()];
}

console.log(GroupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));
