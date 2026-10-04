const validAnagram = (s, t) => {
    console.log(s);
  const str1 = s.split('').sort().join('');
  const str2 = t.split('').sort().join('');

  console.log(str1)

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("cat", "act"));
