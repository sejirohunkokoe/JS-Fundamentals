// You have to define a function with this prototype: function add(a, b)
/**
 * @param {number} a - The first integer.
 * @param {number} b - The second integer.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    // Since 'a' and 'b' are guaranteed to be numbers (or NaN) after parseInt, 
    // we can use the standard addition operator.
    return a + b;
  }
  
  // --- Main Script Execution ---
  
  // Retrieve the command-line arguments using 'const' (no 'var' allowed).
  const firstArg = process.argv[2];
  const secondArg = process.argv[3];
  
  // Convert the arguments from strings (or undefined) to integers.
  // If an argument is missing or invalid, parseInt returns NaN.
  const num1 = parseInt(firstArg);
  const num2 = parseInt(secondArg);
  
  // Calculate the result by calling the defined function.
  const result = add(num1, num2);
  
  // Print the result. If either input was non-numeric, the result will be NaN.
  console.log(result);