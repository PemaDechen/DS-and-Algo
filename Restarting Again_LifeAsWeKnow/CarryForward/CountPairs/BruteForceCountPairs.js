// Given a string (array of characters) s = \text{"acgaag"}. We want to find the number of pairs (i, j) such that i < j, s[i] = 'a', and s[j] = 'g'.

function countPairs(arrayOfStrings) {
  // let's use O(N^2) loop
  let count = 0;
  const indexes = [];

  for (let i = 0; i < arrayOfStrings?.length; i++) {
    if (arrayOfStrings[i] == "a") {
      for (let j = i + 1; j < arrayOfStrings?.length; j++) {
        if (arrayOfStrings[j] == "g") {
          count += 1;
          indexes.push({ index: [i, j] });
        }
      }
    }
  }

  console.log(count);
  console.log(indexes);
}

countPairs(["d ", "a", "g", " x", "a", "g"]);
