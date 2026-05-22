/*
Address of element = Base address + (index × size)
For first element:
1000 + (0 × 4) = 1000
If indexing started at 1:
1000 + (1 × 4) = 1004
That would skip the first memory position.
So index 0 means:
"No offset from starting point."
It makes memory calculation clean and fast.


 */
