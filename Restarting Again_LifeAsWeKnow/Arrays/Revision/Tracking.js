/**
 * Q5: Data Locality (Index Tracking - Min/Max)A sensor network recorded values.
// TODO: You need to find the shortest continuous period (subarray) that captures both the lowest recorded value (Min) and the highest recorded value (Max).Input Array ($A$): [2, 4, 1, 5, 9, 3, 1, 8, 9, 7]
// ! Task:Identify the global Min and Max values.Find the length of the smallest contiguous subarray containing both those values.Start with Task 1. Find the two target values.
 //TODO: Task:Identify the global Min and Max values.Find the length of the smallest contiguous subarray containing both those values.Start with Task 1. Find the two target values.
 */

function indexTracking(arr) {
  let minValue = Infinity;
  let maxValue = -Infinity;
  const N = arr?.length;

  for (let i = 0; i < N; i++) {
    let element = arr[i];
    if (element > maxValue) {
      maxValue = element;
    }

    if (element < minValue) {
      minValue = element;
    }
  }

  //   Find the shortest distance
  let shortestDistance = Infinity;
  let minValueIndex, maxValueIndex;
  for (let i = 0; i < N; i++) {
    if (arr[i] == minValue) {
      minValueIndex = i;
    }
    if (arr[i] == maxValue) {
      maxValueIndex = i;
    }

    let currenDistance = Math.abs(maxValueIndex - minValueIndex)+1;
    if (currenDistance < shortestDistance) {
      shortestDistance = currenDistance;
    }
  }
  return shortestDistance
}

console.log(indexTracking([2, 4, 1, 5, 9, 3, 1, 8, 9, 7]));
