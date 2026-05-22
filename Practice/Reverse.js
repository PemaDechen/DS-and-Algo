function Reverser(arr) {
  const N = arr.length;

  for (let i = 0; i < N/2; i++) {
    let temp = arr[i];
    arr[i] = arr[N-1-i];
    arr[N-1-i]= temp;
  }

  return arr;
}
