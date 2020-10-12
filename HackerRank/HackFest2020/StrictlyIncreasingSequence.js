// const arr = [1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 7, 8, 8, 9];
// const arr = [3, 1, 2, 5, 4];
const arr = [1, 2, 2, 3];

const hasDuplicates = (arr) => {
  return new Set(arr).size !== arr.length;
};

const removeUniques = (arr) => {
  // console.log(arr);
  let removedCount = 0;
  let countObj = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    countObj[num] = countObj[num] ? countObj[num] + 1 : 1;
  }
  // console.log(countObj);
  for (let i = 0; i < arr.length; ) {
    // console.log(i);
    if (countObj[arr[i]] === 1) {
      arr.splice(i, 1);
      removedCount++;
    } else {
      i++;
    }
  }
  // console.log(arr);
  return removedCount;
};

const whoIsTheWinner = (arr) => {
  let turns = 1;
  if (arr.length <= 1) return "First";
  while (arr.length > 1) {
    // console.log("-------------------");
    // console.log("player: " + (turns % 2));
    // console.log("turns: " + turns);
    // console.log("start arr: " + arr);
    // console.log("hasDuplicates(arr): " + hasDuplicates(arr));
    if (!hasDuplicates(arr)) break; // winner found. exit.

    // has duplicates, remove uniques and get count
    let removedCount = removeUniques(arr);
    if (removedCount) {
      turns += removedCount;
    } else {
      arr.splice(0, 1);
      turns++;
    }
    // console.log("final arr: " + arr);
  }
  return turns % 2 ? "First" : "Second";
};

console.log(whoIsTheWinner(arr));
