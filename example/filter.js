const originalArray = [1, 3, 2, 5, 10];

const evenNumbers = originalArray.filter((data) => data % 2 ===0);

// console.log(evenNumbers);
// console.log(originalArray);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this


// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// Your code here
const primeArray = originalArray.filter(isPrime);

console.log(primeArray);

const moreThan5Array = originalArray.filter(num => num > 5);

console.log(moreThan5Array);
// Bonus: Use arrow functions as callbacks!
