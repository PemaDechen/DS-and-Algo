Two-Sum (The Foundation)
Problem: Given an array of integers A and a target value T, return the indices of the two numbers in A such that they add up to T. Assume there is exactly one solution.

Constraint: The solution must run in O(N) time, not O(N 
2
 ).

HashMap Pattern: Lookup Optimization. For each number A[i], calculate the required complement C=T−A[i]. Use the HashMap to instantly check if C was seen previously.

2. Group Anagrams (The Grouping Pattern)
Problem: Given an array of strings, group the anagrams together. Anagrams are words formed by rearranging the letters of another word (e.g., "eat," "tea," and "ate").

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

HashMap Pattern: Key Mapping. How can you create a canonical (unique) key for all anagrams? Use that key to map to an array of all strings that share that key.

3. Longest Consecutive Sequence (The Chain Pattern)
Problem: Given an unsorted array of integers A, find the length of the longest consecutive elements sequence.

Example:
Input: [100, 4, 200, 1, 3, 2]
Output: 4. (The sequence is [1,2,3,4])

Constraint: The solution must run in O(N) time.

HashMap Pattern: Set/Presence Check. First, put all numbers into a HashMap (or Set) for O(1) lookup. Then, iterate through the numbers. For each number x, check if x−1 exists. If x−1 does not exist, then x is the potential start of a sequence. Trace the sequence (x,x+1,x+2,…) forward using the Set/HashMap to find the max length.

4. Majority Element (The Frequency Pattern)
Problem: Given an array A of size N, find the majority element. The majority element is the element that appears more than ⌊N/2⌋ times. Assume the array is non-empty and the majority element always exists.

Example:
Input: [2, 2, 1, 1, 1, 2, 2] (N=7, ⌊N/2⌋=3)
Output: 2 (Appears 4 times).

HashMap Pattern: Frequency Counting. Use a HashMap to count the occurrences of every element. Once counted, iterate through the HashMap to find the key whose value exceeds N/2.

5. Subarray Sum Equals K (Prefix Sum Optimization)
Problem: Given an array of integers A and an integer K, return the total number of contiguous subarrays whose sum equals K.

Example:
Input: A=[1,1,1], K=2
Output: 2. (Subarrays are [1,1] from index 0 and [1,1] from index 1).

HashMap Pattern: Prefix Sum Mapping. (This is the cousin problem to Subarray XOR we discussed!)

Calculate the Prefix Sum P[i] (sum from A[0] to A[i]).

We need Subarray Sum (j,i)=P[i]−P[j−1]=K.

Therefore, we need to find how many times a previous prefix sum P[j−1] equals P[i]−K.

Use a HashMap to store {Prefix Sum:Frequency} for O(1) lookups.

Your next step is clear: Start with Question 1 (Two-Sum). Implement the O(N) HashMap solution. Consistency beats talent!