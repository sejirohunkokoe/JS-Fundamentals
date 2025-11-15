// The three required lines of output are stored in a constant array.
const languages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
  ];
  
  // Initialize a temporary array using 'const' (no 'var' allowed) to hold the output lines.
  // We cannot use 'let' for the final output string here because we are preparing to use join.
  const outputLines = [];
  
  // Use a 'for...of' loop to iterate over the array elements.
  // This satisfies the "must use a loop" constraint and avoids the forbidden 'length' property.
  for (const line of languages) {
    outputLines.push(line);
  }
  
  // Convert the array into the final output string, using '\n' as the separator.
  // This single step uses an internal iterator to correctly place newlines *between* lines
  // without requiring any conditional logic (if/else or ternary) inside the loop, 
  // and ensures there is no trailing newline.
  const outputString = outputLines.join('\n');
  
  // Print the entire result using a single console.log call.
  // The string length is now exactly 45 characters, and console.log will add the 
  // final newline, making the total output 46 characters long, which matches the expected length.
  console.log(outputString);