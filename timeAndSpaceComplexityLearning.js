/*
 
Kind of doubtful with 
1. Conceptual understanding: ⚠️ (missed dependency variable)

! Rule to lock in (very important)
If inner loop cost = log(i)
And i goes from 1 to n
👉 Total = O(n log n)


! Rule to lock in (very important)
If outer loop runs log n times
And inner loop costs log i
And i itself grows exponentially
👉 Total = (log n)², not n log n
Only when you sum log i over i = 1 to n do you get n log n.


! Rule to lock in (very important)
If an inner loop variable is monotonic and never resets,
you count its total lifetime work, not per-iteration work.


! RECURSION RULE 
The recursion forms a binary tree with depth log n. The total number of calls across all levels is O(n), giving linear time. However, the maximum recursion depth is log n, so space complexity is O(log n).

Any recursion of the form f(n-1) creates O(n) stack space, regardless of what work happens inside.

In balanced recursion,
even if each node does log n work,
the total work can still be linear.

Space complexity in recursion depends on the longest call chain, not on total work done.
 */


