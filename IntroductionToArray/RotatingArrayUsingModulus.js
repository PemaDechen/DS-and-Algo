function RotateAnArrayUsingModulus(arr, k) {
  const N = arr.length;
  let i;
  for (i = 0; i < N/2; i++) {
    const temp = arr[i];
    arr[i] = arr[(i + k) % N];
    arr[(i + k) % N] = temp;
  }
  console.log(arr);
}

RotateAnArrayUsingModulus([1, 2, 4, 5, 6, 7, 9, 10], 4);
