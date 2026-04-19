// ! Reverse a String
function reverseString(s) {
  // split string into array of characters
  let arr = s.split('');

  // reverse the array
  arr.reverse();

  // join array back into string
  return arr.join('');
}

reverseString(''); // ""
reverseString('a'); // "a"
reverseString('hello'); // "olleh"
reverseString('12345'); // "54321"
reverseString('racecar'); // "racecar"

// ! FizzBuzz
function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

fizzBuzz(1); // ["1"]
fizzBuzz(3); // ["1","2","Fizz"]
fizzBuzz(5); // ["1","2","Fizz","4","Buzz"]
fizzBuzz(15); // includes "FizzBuzz" at 15
fizzBuzz(10); // ends with "Buzz"

// ! Largest Number
function findMax(nums) {
  let max = nums[0]; // assume first is max

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

findMax([1]); // 1
findMax([1, 2, 3]); // 3
findMax([-1, -5, -3]); // -1
findMax([10, 10, 10]); // 10
findMax([5, 2, 99, 1]); // 99

// ! Palindrome Check
function isPalindrome(s) {
  let reversed = s.split('').reverse().join('');
  return s === reversed;
}

isPalindrome('a'); // true
isPalindrome('racecar'); // true
isPalindrome('hello'); // false
isPalindrome(''); // true
isPalindrome('madam'); // true

// ! Sum of Array
function sumArray(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

sumArray([]); // 0
sumArray([1]); // 1
sumArray([1, 2, 3]); // 6
sumArray([-1, 1]); // 0
sumArray([10, -5, 5]); // 10

// ! Count Vowels
function countVowels(s) {
  let count = 0;
  let vowels = 'aeiouAEIOU';

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }

  return count;
}

countVowels(''); // 0
countVowels('a'); // 1
countVowels('bcdf'); // 0
countVowels('hello'); // 2
countVowels('AEIOU'); // 5

// ! Factorial
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
factorial(10); // 3628800

// ! Even Numbers
function getEvens(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }

  return result;
}

getEvens([]); // []
getEvens([1, 3, 5]); // []
getEvens([2, 4, 6]); // [2,4,6]
getEvens([1, 2, 3, 4]); // [2,4]
getEvens([0, -2, 7]); // [0,-2]

// ! Fibonacci
function fibonacci(n) {
  if (n === 1) return [0];

  let result = [0, 1];

  for (let i = 2; i < n; i++) {
    let next = result[i - 1] + result[i - 2];
    result.push(next);
  }

  return result;
}

fibonacci(1); // [0]
fibonacci(2); // [0,1]
fibonacci(5); // [0,1,1,2,3]
fibonacci(7); // [0,1,1,2,3,5,8]
fibonacci(3); // [0,1,1]

// ! Minimum Number
function findMin(nums) {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}

findMin([1]); // 1
findMin([1, 2, 3]); // 1
findMin([-5, -1, -10]); // -10
findMin([10, 10, 10]); // 10
findMin([5, 2, 99, 1]); // 1

// ! Multiplication Table
function multiplicationTable(n) {
  let result = [];

  for (let i = 1; i <= 10; i++) {
    result.push(`${n} x ${i} = ${n * i}`);
  }

  return result;
}

multiplicationTable(1); // ["1 x 1 = 1", ..., "1 x 10 = 10"]
multiplicationTable(5); // ["5 x 1 = 5", ..., "5 x 10 = 50"]
multiplicationTable(10); // ["10 x 1 = 10", ..., "10 x 10 = 100"]
multiplicationTable(0); // ["0 x 1 = 0", ..., "0 x 10 = 0"]
multiplicationTable(7); // correct multiples of 7

// ! Prime Check
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

isPrime(1); // false
isPrime(2); // true
isPrime(3); // true
isPrime(4); // false
isPrime(29); // true

// ! Remove Duplicates
function removeDuplicates(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }

  return result;
}

removeDuplicates([]); // []
removeDuplicates([1, 1, 1]); // [1]
removeDuplicates([1, 2, 3]); // [1,2,3]
removeDuplicates([1, 2, 1, 3]); // [1,2,3]
removeDuplicates([5, 5, 4, 4, 3]); // [5,4,3]

// ! Celsius → Fahrenheit
function cToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

cToF(0); // 32
cToF(100); // 212
cToF(-40); // -40
cToF(25); // 77
cToF(10); // 50

// ! Count Character Occurrences
function countChar(s, c) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++;
    }
  }

  return count;
}

countChar('', 'a'); // 0
countChar('a', 'a'); // 1
countChar('hello', 'l'); // 2
countChar('hello', 'z'); // 0
countChar('Mississippi', 's'); // 4
