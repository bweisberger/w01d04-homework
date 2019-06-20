console.log("Working");
// 1. Verbal questions
// Write answers to the following questions as comments.
//
// What is the difference between a parameter and an argument?
//A parameter is passed into a function definition, whereas an argument is passed into a function when it's actually called/invoked.
// Within a function, what is the difference between return and console.log?
//Return actually returns a value, so the function becomes equal to that value. Console.log just logs something to the console so you can see it.
// What are the implications of the ability of a function to return a value?
//Because a function can return a value, you can invoke the function and then carry on as if the function you invoked is equal to its return value.
// 🔴 **Commit your work.**
// The commit message should read:
// "Commit 1 - Verbal questions".
// 2. Palindrome again.
// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.
const checkPalindrome = (str) =>  {
  littleStr = str.toLowerCase();
  reverseStr = ""
  for (let i = str.length-1; i >= 0; i--) {
    if (littleStr[i] !== " ") {
    reverseStr += littleStr[i];
    }
  }
  console.log(littleStr);
  console.log(reverseStr);
  if (reverseStr !== littleStr.split(" ").join("")) {
    return false;
  }
  // for(let i = 0; i < str.length; i++)
  // {
  //   while (i < str.length-i)
  //   {
  //     if (littleStr[i] !== littleStr[(str.length-1)-i]){
  //       return false;
  //     }
  //   }
  // }
  return true;
}

console.log(checkPalindrome("Radar"));
// => true
console.log(checkPalindrome("Borscht"));
// => false
console.log(checkPalindrome("A man a plan a canal panama"));
// 🔴 **Commit your work.**
// The commit message should read:
// "Commit 2 - Palindrome".
// 3. Digit Sum
// Write a function sumDigits that accepts a number and returns the sum of its digits.
const sumDigits = (num) => {
  numArr = num.toString().split("");
  sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
  }
  return sum;
}
console.log(sumDigits(42));
// => 6;
// 🔴 **Commit your work.**
// The commit message should read:
// "Commit 3 - Digit Sum".
// 4. Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.
//Pythagorean Theorem: a^2 + b^2 = c^2
// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript
const calculateSide = (sideA, sideB) => {
  return Math.sqrt(sideA**2 + sideB**2);
}
console.log(calculateSide(8, 6));
// => 10
// 🔴 **Commit your work.**
// The commit message should read:
// "Commit 4 - Pythagoras".
// 5. Sum Array
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array.
//
// Expected result:
//
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21
// 🔴 **Commit your work.**
// The commit message should read:
// "Commit 5 - Sum Array".
// 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.
//
// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.
//
// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.
//
// 🔴 **Commit your work.**
// The commit message should read:
// "Commit 6 - Prime Numbers".
// CSS
// Watch the following three videos on CSS:
//
// First CSS video - 5 minutes
// Second CSS video - 11 minutes
// Third CSS video - 17 minutes
// You will need to have watched these videos for tomorrow's lab.
//
// Hungry for more?
// Complete the afternoon lab.
//
// Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.
//
// console.log(insertDash(454793));
//
// => 4547-9-3
// Commit.
// Write a function reverseString that takes a string as a parameter and returns that string with the letters reversed without using .split(), .reverse(), or .join().
//
// Commit.
//
// Make your palindrome function from problem two above work regardless of spacing (or capitalization). So, for example, "Sit on a potato pan Otis" or "Bird rib" would pass the test.
//
// Commit.
//
// Make your palindrome function work even if the string contains punctuation. So: "Sit on a potato pan, Otis!!!" or "A man, a plan, a canal: Panama." would pass the test.
//
// Commit.
//
// Make a "word palindrome" function that returns true if the words in a phrase are the same backwards and forwards. It should not care about spacing, capitalization, or punctuation. For example the following string would pass the test:
//
// "Son, I am able," she said. "Though you scare me, watch!" said I, "Beloved," I said, "watch me scare you!" Though, said she: "able am I, son."
//
// Commit.
//
// You still want more?!?! Do you even sleep? Create an account on Project euler and keep working on those problems.
