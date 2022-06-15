//fibonacci not efficient
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
console.time("all");
console.group("fibonacci");
console.log(fib(6));
console.log(fib(7));

//fibonacci efficient memoization
//store duplicate values in an object
// obj keys are arg
//
const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
};
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(50));
console.groupEnd("fibonacci");
/**
 * say that you are a traveler on a 2d grid
 * you begin in the top left corner and your goal is to travel
 * to the bottom right corner.
 * you may only move right and down
 * in how many ways can you travel from
 *  the top left to the bottom right
 * in a grid of size m x n
 * args: m, n
 */

const gridTraveler = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];

  if (m === 0 || n === 0) return 0;

  if (m === 1 && n === 1) return 1;
  return (memo[key] =
    gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo));
};
console.group("Grid Traveler");
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(19, 14));

console.groupEnd("Grid Traveler");
/**
 * write a function that takes a target sum and an array of numbers
 * the function returns a boolean indicating whether
 *  or not there is a subset of the array that sums to the target sum
 * args: target sum, array of numbers
 * return: boolean
 */
const canSum = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target <= 0) return true;
  if (arr.length < 0) return false;

  for (let num of arr) {
    const remainder = target - num;
    if (canSum(remainder, arr, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};
console.group("canSum");
console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(10, [2, 4]));

console.group("canSum");

/**
 * write a function that takes in a target sum and an array of numbers
 * the function should retunr an array containing any combination of elements
 * that sum to the target sumif no combination exists, return an empty array
 *if there are multiple combinations, return the one that has the smallest length
 * args: target sum, array of numbers
 * return: array of arrays
 */

const howSum = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target <= 0) return [];
  if (arr.length < 0) return [];

  let combinations = [];

  for (let num of arr) {
    const remainder = target - num;
    const remainderCombinations = howSum(remainder, arr, memo);
    if (remainderCombinations !== null) {
      const newCombination = [...remainderCombinations, num];
      combinations = newCombination;
    }
  }
  return combinations;
};
console.log(howSum(7, [5, 3, 4]));

/**
 * can construct a word, from the words of an array
 *  by concatenating the words in the array
 *
 * target: string
 * arr: array of strings
 * return: boolean
 */
const canConstruct = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target.length === 0) return true;
  if (arr.length === 0) return false;
  for (const word of arr) {
    if (target.indexOf(word) === 0) {
      const remainder = target.slice(word.length);
      if (canConstruct(remainder, arr, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  return false;
};

console.log(
  canConstruct("catgod", ["at", "bat", "cat", "dog", "god", "hat", "cat"])
);
console.timeEnd("all");
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "eee",
    "eeee",
    "eeeee",
    "eeeeeee",
  ])
); //false