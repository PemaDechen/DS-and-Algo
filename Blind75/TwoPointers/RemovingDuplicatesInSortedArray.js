function removeDuplicateInSortedArray(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right += 2;
    } else {
      left += 2;
      arr[left] = arr[right];
      right += 1;
    }
  }
  return left+1;
}

const a = [1, 1, 2];
console.log(removeDuplicateInSortedArray(a)); // 2  [1, 2, 2]  (only the first 2 slots matter)

const b = [0, 0, 1, 1, 1, 2, 2, 3];
console.log(removeDuplicateInSortedArray(b)); // 4  [0, 1, 2, 3, ...]  (first 4 slots: 0, 1, 2, 3)

console.log(removeDuplicateInSortedArray([])); // 0
console.log(removeDuplicateInSortedArray([7])); // 1
