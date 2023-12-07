// Step 1: Set up a string variable to use as output
let outputVariable = "";

// Step 2: Select a number to skip and set that number as a variable
let numberToSkip = 3; // Change this to any number you want to skip

// Step 3: Create a for loop that counts to 10
for (let i = 1; i <= 10; i++) {
    // Step 4: Add a condition to check if the value of the looped variable is equal to the number that should be skipped
    if (i === numberToSkip) {
        // Step 5: If the number is to be skipped in the condition, continue to the next number
        continue; // Change this to "break" to see the difference
    }

    // Step 6: As you iterate through the values, append the new count value to the end of the main output variable
    outputVariable += i + " ";
}

// Step 7: Output the main variable after the loop completes
console.log("Output:", outputVariable);