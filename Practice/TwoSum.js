function twoSum(arr, k) {
  const N = arr.length;
  let obj = {};
  let array = [];
  for (let i = 0; i < N; i++) {
    obj[k - arr[i]]
      ? pushInAnArray([arr[i], k - arr[i]])
      : (obj[arr[i]] = true);

    if (array.length == 2) {
      break;
    }
  }

  if (array.length !== 2) {
    return "Two numbers with target number does not exists";
  }

  function pushInAnArray(numbers) {
    array.push(numbers[0]);
    array.push(numbers[1]);

    return array;
  }
  return array;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6)); // [2, 4]
console.log(twoSum([3, 3], 6)); // [3, 3]
console.log(twoSum([1, 2, 3], 10));
