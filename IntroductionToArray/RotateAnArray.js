function RotateAnArray(arr, k) {
    console.log(ReverseArray(arr, 0, arr.length-1));
    console.log(ReverseArray(arr, 0, k-1));
    console.log(ReverseArray(arr, k, arr.length-1));
}

function ReverseArray(arr, l, r) {
  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr;
}

RotateAnArray([1,2,4,5,6,7,9,10],4)   