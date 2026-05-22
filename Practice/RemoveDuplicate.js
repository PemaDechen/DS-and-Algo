function removeDuplicates(arr) {
  const N = arr.length;
  let newArray = [];
  let obj = {};
  for (let i = 0; i < N; i++) {
    obj[arr[i]] ? null : ((obj[arr[i]] = true), newArray.push(arr[i]));
  }

  return newArray;
}

console.log(removeDuplicates([1, 2, 3, 2, 1, 4, 5, 4])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1, 1]));
console.log(removeDuplicates([1, 2, 3, 4, 5]));
console.log(removeDuplicates([]));
console.log(removeDuplicates([5]));
