const encode = (strs) => {
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    result = (result + strs[i].length + "#$%" + strs[i]);
  }
  return result;
};

const decode = (str) => {
  const result = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#" || str.slice(j, j + 3) !== "#$%") j++;

    const len = +str.slice(i, j);
    const word = str.slice(j + 3, j + 3 + len);
    result.push(word);
    i = j + 3 + len; 
  }

  return result;
};

const endCodedData = encode(["Hello", "World"]);
console.log("This is encodedData ", endCodedData);
const decodedData = decode(endCodedData);
console.log("Decoded Data", decodedData);

// I need to understand splice, slice, Objects parameter and so on.
// substring also not sure about it 
