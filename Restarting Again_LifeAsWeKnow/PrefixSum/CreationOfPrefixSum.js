function prefixSum(arr) {
  const N = arr?.length;
  let pf = [],
    i;
  pf[0] = arr[0];
  for (i = 1; i < N; i++) {
    pf[i] = pf[i - 1] + arr[i];
  }

  return pf;
}

console.log(prefixSum([3, -2, 4, 5, 2, 6, -1]));
