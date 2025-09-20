function pairSum(arr, k) {
  let N = arr.length,
    i;
  for (i = 0; i <= N; i++) {
    let data = "";
    for (j = i + 1; j < N; j++) {
      if (i !== j) {
        if(arr[i]+arr[j]==k){
            console.log(arr[i]);
            console.log(arr[j]);
            return true;
        }
      }
    }
  }
  return false;
}

console.log(pairSum([2, 2, 2, 4, 5, 9, 7, 4, 9], 10));
