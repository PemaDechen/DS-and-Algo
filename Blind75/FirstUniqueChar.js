function uniqueChar(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return s.indexOf(key);
    }
  }

  return -1;

}

console.log(uniqueChar("pempa"));
