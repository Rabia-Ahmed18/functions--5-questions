"use strict";
function findFirstNonRepeatedCharacter(inputString) {
    const charCount = new Map();
    // Count occurrences of each character
    for (const char of inputString) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    // Find the first non-repeated character
    for (const char of inputString) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    // If no non-repeated character found, return null or an appropriate message
    return null;
}
// Example usage:
const input = "Rabia ahmed";
const result = findFirstNonRepeatedCharacter(input);
if (result !== null) {
    console.log(`The first non-repeated character in "${input}" is "${result}".`);
}
else {
    console.log(`No non-repeated character found in "${input}".`);
}
