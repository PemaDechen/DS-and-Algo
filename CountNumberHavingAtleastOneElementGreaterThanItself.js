function count(arr) {
  const totalLength = arr.length;
  let count = 0,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max == arr[i]) {
      count += 1;
    }
    if (max < arr[i]) {
      count = 1;
      max = arr[i];
    }
  }
  console.log("max", max);

  console.log("count ", count);
  console.log("totalLength ", totalLength);
  console.log("The total count = ", totalLength - count);
}

count([-3, -2, 6, 8, 4, 8, 5]);
