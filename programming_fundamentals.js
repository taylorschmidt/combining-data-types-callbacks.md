// Common programming principles
// As you are starting out, there may be things you are really worried about and other big gotchas that you aren't yet aware that are gotchas!

// Read this article on programming principles, focus on the following nine:

// DRY
    //Make your code as short as possible and avoid repeats.
// KISS
    //Avoid complexitity in your code so that others understand what you are attempting to accomplish.
// Avoid creating a YAGNI
    //Only add functions when you actually need them, not when you think you might need them.
// Do the simplest thing that could possibly work
    //Keep it simple - don't try to be fancy for no reason.
// Don't make me think
    //Make the code readable.
// Write code for the maintainer
    //Write your code for someone else, don't think you will be the only one maintaining the code.
// Single responsibility principle
    //Each piece of code should have a single job. Don't try to have one piece of code do too many things.
// Avoid premature optimization
    //Don't worry about optimization until your code is actually running slow.
// Separation of concerns
    //Don't overlap functions, especially if they don't have much to do with each other.


// Write a ~1 sentence summary for each one
// Which ones surprise you (if any)?
    //These all make sense to me, with the exception of the paradox between keeping code dry, but also keeping it simple and following the single responsibility principle. I'm not sure which to prioritize when trying to minimize the amount of code.
// Which one is currently giving you the most struggle?
    //Writing code for the maintainer -  I need to get better at writing variables that have meaningful names.

// Commenting Code
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

// const f = l => {
    //function "f" with the parameter of "l" is declared
//   let es = 0, p = 0, c = 1, n = 0
    //assigning variables to numbers
//   while (c <= l) {
    //conditional that says while c is less than or equal to the parameter
//     n = c + p;
    //while the above conditional is true, n is equal to the addition of p and c
//     [c, p] = [n, c]
    //these two arrays are equal to each other when the conditional is true
//     es += (c % 2 === 0) ? c : 0
    //variable es is incremented by c only if it is even
//   }
//   return es
    //the incremeneted variable is returned
// }

// console.log(f(55))
// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

// const f2 = (limit) => {
//   let evenSum = 0;
//   let previous = 0;
//   let current = 1;
//   while (current <= limit) {
//     let next = current + previous;
//     previous = current;
//     current = next;
//     if (current % 2 === 0) {
//       evenSum += current;
//     }
//   }
//   return evenSum;
// }


// console.log(f2(55))
// Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
    //I think this is the fibonnaci sequence? Perhaps that would be a better name?
// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
    //I would definitely want to work with the second function. Having appropriately named variables goes a long way.
// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
    //Yes, this semi-colon is necessary. Without it, this error is thrown: SyntaxError: Invalid left-hand side in assignment