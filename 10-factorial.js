// You have to define a function with this prototype: function factorial(n)
/**
 * Computes the factorial of an integer recursively.
 * Handles the special case where the input is NaN, as per constraints.
 * * @param {number} n - The integer argument (may be NaN from parseInt).
 * @returns {number} The calculated factorial.
 */
function factorial(n) {
    // Constraint: Factorial of NaN is 1.
    // This handles missing arguments (undefined -> NaN) and non-numeric strings.
    if (Number.isNaN(n)) {
      return 1;
    }
    
    // Base Case 1: Factorial of 0 or 1 is 1.
    // This also stops the recursion if a negative number is passed, returning 1 
    // (which is the standard return for non-positive integers in simplified challenges).
    if (n <= 1) {
      return 1;
    }
    
    // Recursive Step: n! = n * (n-1)!
    // Math.floor is included to ensure the calculation uses the integer part, 
    // although parseInt generally handles this.
    return Math.floor(n) * factorial(n - 1);
  }
  
  // --- Main Script Execution ---
  
  // Retrieve the command-line argument using 'const' (no 'var' allowed).
  const firstArg = process.argv[2];
  
  // Convert the argument from string (or undefined) to integer.
  // This is the value passed to the recursive function.
  const num = parseInt(firstArg);
  
  // Calculate the result by calling the recursive function.
  const result = factorial(num);
  
  // Print the result.
  console.log(result);