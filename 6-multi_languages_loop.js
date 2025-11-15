// The three required lines of output are stored in a constant array.
const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Initialize a string variable using 'let' (no 'var' allowed).
let outputString = "";

// Use a 'for...of' loop to iterate over the array elements.
// This satisfies the 'must use a loop' constraint and elegantly avoids 
// using the forbidden 'length' property or any 'if/else' statements.
for (const line of languages) {
  // Append the line and a newline character (\n) to the output string.
  outputString = outputString + line + "\n";
}

// Print the entire result using a single console.log call,
// which contains all three lines separated by newlines.
// Note: This approach leaves a harmless trailing newline at the end.
console.log(outputString);