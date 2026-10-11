function containerWithMostWater(h) {
  let maxArea = 0;
  let left = 0;
  let right = h.length - 1;

  while (left < right) {
    const minHeight = Math.min(h[left], h[right]);
    const width = right - left;
    const area = minHeight * width;

    if (minHeight === h[left]) {
      left += 1;
    } else {
      right -= 1;
    }
    if (maxArea < area) {
      maxArea = area;
    }
  }

  return maxArea;
}

console.log(containerWithMostWater([1, 7, 2, 5, 4, 7, 3, 6]));
console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7] ));

//  0, 1, 2 ,3, 4, 5, 6, 7, 8= width
// [1, 8, 6, 2, 5, 4, 8, 3, 7] = height
