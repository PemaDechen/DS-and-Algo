/*
Problem: Find the number of subarrays with a given XOR sum.
Now the thought that arises is how to make this work
*/
/**
 * Finds the number of contiguous subarrays in 'A' whose XOR sum is equal to 'B'.
 * @param {number[]} A - The input array of integers.
 * @param {number} B - The target XOR sum.
 * @returns {number} The total count of such subarrays.
 */
function solve(A, B) {
    // 1. Initialize variables
    let count = 0;
    let prefixXor = 0; // Represents P[i]
    
    // 2. HashMap to store {prefix_xor_value: frequency}
    // We use a Map object in JavaScript for this.
    const xorMap = new Map();
    
    // 3. Initialize the map with {0: 1}
    // This handles the case where the subarray starts from index 0.
    // (i.e., when P[i] ^ B = 0, meaning P[i] = B, the subarray A[0...i] has XOR B)
    xorMap.set(0, 1); 

    // 4. Iterate through the array
    for (const num of A) {
        // Step 4a: Update the current prefix XOR (P[i])
        // This is the "Big Train Color" in our analogy.
        prefixXor = prefixXor ^ num;
        
        // Step 4b: Calculate the required previous prefix XOR (P[j])
        // We need P[j] = P[i] ^ B. This is the "Small Train Color" we need to cut off.
        const requiredPrefixXor = prefixXor ^ B;
        
        // Step 4c: Check the map (the "Lost and Found Box")
        if (xorMap.has(requiredPrefixXor)) {
            // If the required P[j] exists, it means we found 'frequency' number of subarrays 
            // ending at the current position 'i' with the target XOR 'B'.
            count += xorMap.get(requiredPrefixXor);
        }
        
        // Step 4d: Update the map with the current prefix XOR (P[i])
        // "Throw the new train color into the Box."
        // If it exists, increment its count; otherwise, set it to 1.
        xorMap.set(prefixXor, (xorMap.get(prefixXor) || 0) + 1);
    }

    return count;
}

// Example from the walkthrough:
const A = [4, 2, 2, 6, 4];
const B = 6;
const result = solve(A, B);

console.log(`Array: [${A}], Target XOR: ${B}`);
console.log(`Number of subarrays with XOR sum ${B}: ${result}`); // Output: 4