// Retrieve the first user-provided argument (index 2).
const argument = process.argv[2];

// Attempt to convert the argument into an integer.
const size = parseInt(argument);

// --- Argument Validation ---

// 1. Check if the argument is missing or cannot be converted to a number (NaN).
if (Number.isNaN(size)) {
  console.log("Missing size");
} 
// 2. Check if the argument is a valid, positive integer.
else if (size > 0) {
  // --- Drawing the Square ---

  // Use the outer loop for the rows (must use a loop as required).
  for (let row = 0; row < size; row++) {
    // Use 'let' to build the string for the current row.
    let line = "";
    
    // Use the inner loop for the columns.
    for (let col = 0; col < size; col++) {
      line += "X";
    }
    
    // Print the complete row using console.log.
    // console.log automatically adds a newline, forming the vertical separation.
    console.log(line);
  }
}
// 3. If the size is 0 or negative, the script exits silently.