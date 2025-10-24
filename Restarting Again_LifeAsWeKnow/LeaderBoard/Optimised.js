function leaderBoard(arr) {
  const N = arr?.length;
  let max = arr[0];
  let leaderCount = 1;
  for (let i = 1; i < N; i++) {
    if (max < arr[i]) {
      leaderCount += 1;
      max= arr[i]
    }
  }

  console.log(leaderCount);
}

leaderBoard([3, 2, 4, 5, 2, 7, -1, 15]);
