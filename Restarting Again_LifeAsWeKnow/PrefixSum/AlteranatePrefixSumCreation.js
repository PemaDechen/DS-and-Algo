function alternatePrefixSum(arr, L, R) {
  let pf = [];
  pf[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    pf[i + 1] = pf[i] + arr[i];
  }

  //   Finding sum between the range

  sum = pf[R + 1] - pf[L];
  console.log('This is sum', sum);
}

alternatePrefixSum([3, -2, 4, 5, 2, 6, -1], 3, 5);
