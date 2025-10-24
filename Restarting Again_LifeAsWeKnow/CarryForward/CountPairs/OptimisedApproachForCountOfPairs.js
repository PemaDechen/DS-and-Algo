const countPairs = (arr) => {
  const N = arr?.length;
  let carryNumber = 0;
  let ans = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (arr[i] == "g") {
      carryNumber += 1;
    }
    if(arr[i] == "a"){
        ans+= carryNumber;
    }
  } 

  console.log(ans);
};


countPairs(["d ", "a", "g", " x", "a", "g"]);
