function reverseAnArray(arr) {
  const arrayLength = arr?.length;
  let i;
  for (i = 0; i < arrayLength / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arrayLength - 1 - i];
    arr[arrayLength - 1 - i] = temp;
  }

  console.log(arr);
}

// ANOTHER METHOD

function reverseArrayAnotherMethod(arr) {
  let l = 0,
    r = arr.length-1;
  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l += 1;
    r -= 1;
  }
  console.log(arr)
}

// reverseAnArray([-1, 4, 7, 6, -2, 7, 8, 10]);
reverseArrayAnotherMethod([-1, 4, 7, 6, -2, 7, 8, 10]);
