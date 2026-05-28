// firs make the anagram as key of sorted strings and then place value of each anagram as array of string
const groupAnagram = (strs) => {
  const obj = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split("").sort().join("");
    if (!obj.hasOwnProperty(sortedString)) {
      obj[sortedString] = [strs[i]];
    }else{
          obj[sortedString].push(strs[i]);
    }
  }

  return Object.values(obj);
};


console.log(groupAnagram((strs = ["act", "pots", "tops", "cat", "stop", "hat"])));
