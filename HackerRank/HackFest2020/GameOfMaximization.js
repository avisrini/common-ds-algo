const arr = [5, 1, 1, 4];

function maximumStones(arr) {
  const len = arr.length;
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < len; i += 2) {
    oddSum += arr[i];
    evenSum += arr[i + 1] ? arr[i + 1] : 0;
  }
  return 2 * Math.min(oddSum, evenSum);
}

console.log(maximumStones(arr));
