function findSum(arr, L, R) {
  // 1st create the prefix Sum

  let pf = [],
    i;
  const N = arr?.length;
  pf[0] = arr[0];
  for (i = 1; i < N; i++) {
    pf[i] = pf[i - 1] + arr[i];
  }

  //   To find the range of sum from L-R

  let sum;
  if (L == 0) {
    sum = pf[R];
  } else {
    sum = pf[R] - pf[L - 1];
  }
  return sum;
}

console.log(findSum([3, -2, 4, 5, 2, 6, -1],2, 5));
console.log(findSum([3, -2, 4, 5, 2, 6, -1],0, 3));
