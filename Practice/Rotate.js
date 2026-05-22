function rotateNumber(arr, k) {
  const N = arr.length;
  const formerElements = arr.slice(0, N - k);
  const latterElements = arr.slice(N - k, N);
  return [...latterElements , ...formerElements];
}



console.log(rotateNumber([1, 2, 3, 4, 5], 2))  // [4, 5, 1, 2, 3]
console.log(rotateNumber([1, 2, 3, 4, 5], 1))  // [5, 1, 2, 3, 4]
console.log(rotateNumber([1, 2, 3, 4, 5], 5))  // [1, 2, 3, 4, 5]
console.log(rotateNumber([1, 2, 3, 4, 5], 0))  // [1, 2, 3, 4, 5]
console.log(rotateNumber([42], 1))     
