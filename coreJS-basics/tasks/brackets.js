// STACK (FILO)
// Algorithm Complexity linear === O(n)
// Memory complexity linear === O(n)
// Test cases
let s1 = "()";
let s2 = "()[]{}";
let s3 = "(]";
let s4 = "{[]}";
let s5 = "([)]";
let s6 = "{[[]{}]}()()";

function isValid(str) {
  let stack = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const isClosedBracket = (char) => [")", "}", "]"].indexOf(char) > -1;

  for (let i = 0; i < str.length; i += 1) {
    const currentElem = str[i];

    if (isClosedBracket(currentElem)) {
      if (brackets[currentElem] !== stack.pop()) return false;
    } else {
      stack.push(currentElem);
    }
  }
  return stack.length === 0;
}

console.log(s1, isValid(s1)); // ()           true
console.log(s2, isValid(s2)); // ()[]{}       true
console.log(s3, isValid(s3)); // ()[]{}       true
console.log(s4, isValid(s4)); // {[]}         true
console.log(s5, isValid(s5)); // ([)]         false
console.log(s6, isValid(s6)); // {[[]{}]}()() true
