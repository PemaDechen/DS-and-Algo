const reverseArray = (arr) => {
  const N = arr.length;
  let left = 0;
  let right = N - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  console.log('This is an arr', arr);
};

reverseArray([-1, 4, 7, 6, -2, 7, 8, 10]);
