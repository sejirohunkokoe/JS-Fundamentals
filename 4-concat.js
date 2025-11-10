const firstArgument = process.argv[2];

// The second user-provided argument is at process.argv[3]
const secondArgument = process.argv[3];

// We use string concatenation (or template literals) to combine 
// the two arguments with " is " in between.
console.log(firstArgument + " is " + secondArgument);