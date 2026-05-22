const checkAnagram = (str1, str2) => {

    // // Sorted Manner
    // const firstString= str1.toLowerCase().split('').sort().join('');
    // const secondString= str2.toLowerCase().split('').sort().join('');

    // return firstString === secondString;

    // Brute Force
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};

    for (let char of str1.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2.toLowerCase()) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}
