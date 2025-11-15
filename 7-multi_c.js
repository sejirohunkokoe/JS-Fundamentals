// Retrieve the first user-provided argument (index 2).
const argument = process.argv[2];

// Attempt to convert the argument into an integer.
const numOccurrences = parseInt(argument);

// --- Argument Validation and Conditional Output ---

// 1. Check if the argument is missing or cannot be converted to a number (NaN).
// This uses the first allowed console.log.
if (Number.isNaN(numOccurrences)) {
  console.log("Missing number of occurrences");
} 
// 2. Check if the argument is a valid, positive integer to start the loop.
else if (numOccurrences > 0) {
  // Use 'let' (instead of forbidden 'var') to build the output string.
  let outputString = "";
  
  // Use a 'for' loop as required, iterating 'numOccurrences' times.
  for (let i = 0; i < numOccurrences; i++) {
    outputString += "C is fun";
    
    // Add a newline after every instance, EXCEPT the last one, 
    // to prevent a trailing newline character.
    if (i < numOccurrences - 1) {
      outputString += "\n";
    }
  }

  // Use the second allowed console.log to print the complete, multi-line string.
  console.log(outputString);
}
// 3. If numOccurrences is 0 or negative (like -3), the script reaches the end 
// of the 'else if' structure and exits silently without printing anything, 
// matching the required test case behavior.