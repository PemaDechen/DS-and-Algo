function optimisedEquilibriumIndex(arr) {
  // Calculating Prefix Array in optimised methd/ universally accepted method.
  let pf = [];
  pf[0] = 0;
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    pf[i + 1] = pf[i] + arr[i];
  }

  //   Now calculating the sum
  for (let i = 0; i < N; i++) {
    const totalSum = pf[N];
    let leftSum = pf[i];
    let rightSum = totalSum - pf[i + 1];

    if (leftSum == rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(
  "The equilibrium index is ",
  optimisedEquilibriumIndex([-3, 2, 4, -1])
);
