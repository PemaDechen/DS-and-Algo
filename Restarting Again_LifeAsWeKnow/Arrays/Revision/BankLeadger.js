/*
 TODO:  2: Bank Ledger Audit (Range Query)Your bank ledger records transactions (positive for deposits, negative for withdrawals). An auditor asks for the net change across several different time periods.Input Array A: [-3, 6, 2, 4, -1, 5, 2, 8]
 Task (Query 1): Find the sum of transactions in the range [2, 5] (indices 2 through 5, inclusive).
 Task (Query 2): Find the sum of transactions in the range [0, 3] (indices 0 through 3, inclusive).*/

function bankLeadger(arr, L, R) {
  const N = arr?.length;
  let pf = [];
  pf[0] = 0;
  // calculate the prefix sum
  for (let i = 1; i <= N; i++) {
    pf[i] = pf[i - 1] + arr[i - 1];
  }

  //   Checking the net change
  const netChange = pf[R+1]-pf[L];
  return netChange;
}

console.log(bankLeadger([-3, 6, 2, 4, -1, 5, 2, 8], 2, 5));
