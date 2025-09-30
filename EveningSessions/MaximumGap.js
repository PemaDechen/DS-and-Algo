const maxGap = (arr) => {
  const N = arr?.length;
  if (N < 2) return 0;
  arr = arr.sort();
  arr.sort((a, b) => a - b); 

  let maxDifference = arr[1] - arr[0];

  let i = 1;
  for (let j = 2; j < N; j++) {
    let diff = arr[j] - arr[i];
    i = i + 1;
    diff = diff < 0 ? - diff : diff;
    if (maxDifference < diff) {
      maxDifference = diff;
    }
  }
  return maxDifference;


};

// console.log(maxGap([3, 6, 9, 1]));
//  console.log(maxGap([10])); 
 console.log(maxGap([1,3,100]))
