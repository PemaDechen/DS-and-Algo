const minMax = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    if (max<arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  console.log("The minimum number is ", min);
  console.log("The maximum number is ", max);
};

minMax([5, 1, 2, 3, 4, 5]);
