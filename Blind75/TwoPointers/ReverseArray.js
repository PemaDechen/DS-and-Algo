function reverseArray(arr){
    let left = 0;
    right = arr.length -1;

    while(left <right){
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left +=1;
        right -=1;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));   // [5, 4, 3, 2, 1]
console.log(reverseArray([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverseArray([7]));          