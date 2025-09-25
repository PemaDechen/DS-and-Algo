/* 
TODO: You are given an array A of integers of size N.Your task is to find the equilibrium index of the given arrayThe equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.
*/

const equilibriumIndex = (arr) => {
  // 1st need to create an array that has a prefix sum
  // why we are using prefix sum is to optimise the program
  let pf = [];
  const N = arr.length;
  if (arr?.length >= 0) {
        pf[0] = arr[0];
    for (let i = 1; i <= N - 1; i++) {
      pf[i] = pf[i - 1] + arr[i];
    }
  }

  console.log('This is prefix sum ', pf);

  /* 
? Check if the array has an equilibrium index;=> Equilibrium index is the one in which if both the sum of left hand side and right hand side are equal than the index is equilibrium
*/

  for (let i = 0; i < N; i++) {
    // find prefix sum of left hand side
    let leftHandSum = 0;
    let rightHandSum = 0;

    if (i == 0) {
      leftHandSum = 0;
      rightHandSum = pf[i + 1] - pf[N-1];
    }

    if (i == N - 1) {
      leftHandSum = pf[i - 1] - arr[i - 2];
      rightHandSum = 0;
    }

    if (i !== 0 && i !== N - 1) {
      leftHandSum = pf[i - 1] - arr[i - 2];
      rightHandSum = pf[i + 1] - arr[i];
    }
    console.log('This is index ', i)
    console.log("This is leftSum", leftHandSum);
    console.log("This is rightHandSum", rightHandSum);
  }
};

equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]);
