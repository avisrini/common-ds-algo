function maximumPower(s) {
  let maxCount = 0;
  let consZeroCount = 0;
  let edgeZeroCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      consZeroCount++;
    } else {
      maxCount = Math.max(maxCount, consZeroCount);
      consZeroCount = 0;
    }
  }
  maxCount = Math.max(maxCount, consZeroCount);

  // calc edgo zero case e.g. 001000
  let arr = [...s];
  while (arr) {
    if (arr.pop() === "0") {
      edgeZeroCount++;
    } else {
      break;
    }
  }
  while (arr) {
    if (arr.shift() === "0") {
      edgeZeroCount++;
    } else {
      break;
    }
  }
  return maxCount === s.length ? -1 : Math.max(maxCount, edgeZeroCount);
}

console.log(maximumPower("001000"));
