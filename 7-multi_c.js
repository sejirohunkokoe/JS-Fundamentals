// Retrieve the first user-provided argument (index 2).
const argument = process.argv[2];

// Attempt to convert the argument into an integer.
const numOccurrences = parseInt(argument);

// Check if the argument is missing or cannot be converted to a valid positive number.
if (Number.isNaN(numOccurrences) || numOccurrences <= 0) {
  // Use the first allowed console.log for the error message.
  console.log("Missing number of occurrences");
} else {
  // If the conversion is successful and the number is positive, proceed with the loop.
  
  // Use 'let' (instead of forbidden 'var') to build the output string.
  let outputString = "";
  
  // Use a 'for' loop as required, iterating 'numOccurrences' times.
  for (let i = 0; i < numOccurrences; i++) {
    outputString += "C is fun";
    
    // Add a newline after every instance, EXCEPT the last one, to match 
    // typical output behavior and avoid an unnecessary trailing newline.
    if (i < numOccurrences - 1) {
      outputString += "\n";
    }
  }

  // Use the second allowed console.log to print the complete, multi-line string.
  console.log(outputString);
}