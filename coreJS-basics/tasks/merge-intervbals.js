// Merge intervals
// ? Algorithm time complexity === O(n * log n)
// ? Algorithm memory complexity === O(log n)
/*
 * Input:
 * [11, 12][2, 3][5, 7][1, 4][89, 10][6, 8]
 * Result:
 * [1, 4][5, 10][11, 12]
 *
 * 1. Sort an Array by its starting value
 * 2. declare result[] and push input[0]
 * 3. check if ending value of current input[i] is grater than ending value of previous one
 * */

// ! Test cases
let input1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

let input2 = [
  [1, 4],
  [4, 5],
];

let input3 = [
  [11, 12],
  [2, 3],
  [5, 7],
  [1, 4],
  [8, 10],
  [6, 8],
];

function merge(intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let interval of intervals) {
    let recent = result[result.length - 1]; // this is the last element from result

    if (recent[1] >= interval[0]) {
      recent[1] = Math.max(recent[1], interval[1]);
    } else {
      result.push(interval);
    }
  }
  return result;
}

console.log("input1:", merge(input1));
console.log("input2:", merge(input2));
console.log("input3:", merge(input3));
