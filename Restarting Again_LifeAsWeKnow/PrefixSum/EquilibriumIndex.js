function equilibriumIndex(arr) {
  let leftSum = 0,
    rightSum = 0;

  // Calculating Prefix Sum
  let pf = [];
  pf[0] = 0;
  for (let i = 0; i < arr.length; i++) {
    pf[i + 1] = pf[i] + arr[i];
  }
  ``;

  for (let i = 0; i < arr.length; i++) {
    let left = i,
      right = arr.length - 1;
    if (i == 0) {
      leftSum = 0;
      rightSum = pf[arr.length - 1 + 1] - pf[i + 1];
    } else if (i == arr.length - 1) {
      leftSum = pf[i] - pf[0];
      rightSum = 0;
    } else {
      leftSum = pf[i] - pf[0];
      rightSum = pf[arr.length - 1 + 1] - pf[i + 1];
    }

    if (leftSum == rightSum) {
      return i;
    }

    (left += 1), (right -= 1);
  }
}

console.log('The equilibrium index is ',equilibriumIndex([-3, 2, 4, -1]));
