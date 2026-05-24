const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }

    if (charCount[char]) {
      charCount[char]--;
    }
  }

  return true;
};

console.log(checkAnagram("listen", "silent")); // true
console.log(checkAnagram("hello", "world")); // false
