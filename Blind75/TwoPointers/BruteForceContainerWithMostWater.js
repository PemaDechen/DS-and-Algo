function containerWithMostWater(h) {
  // first find the two highest data in an array and then calculate the width

  let maxArea = -Infinity;

  for (let i = 0; i < h.length; i++) {
    for (let j = i + 1; j < h.length; j++) {
      const area = Math.min(h[i], h[j]) * (j - i);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  return maxArea;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
