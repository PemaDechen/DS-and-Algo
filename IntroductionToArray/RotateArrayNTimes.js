const RotateArray = (arr, k) => {
  const N = arr.length;
  for (let i = 0; i < N / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[(i + k) % N];
    arr[(i + k) % N] = temp;
  }

  console.log("This is an array ", arr);
};

RotateArray([1, 2, 3,4],2);
// 3 4 1 2
