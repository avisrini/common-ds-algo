function solution() {
    let A = [1, 2, 3, 4, 6];
    const len = A.length;
    let leftSum = 0;

    let arraySum = 0;
    arraySum = A.reduce((arraySum, el) => (arraySum += el));

    let rightSum = arraySum;
    let minDiff = Number.MAX_VALUE;

    for (let i = 0; i < len; i++) {
        leftSum += A[i];
        rightSum = arraySum - leftSum;
        curDiff = Math.abs(leftSum - rightSum);
        console.log(curDiff);
        console.log(minDiff);
        minDiff = Math.min(minDiff, curDiff);
        console.log(minDiff);
    }
    return minDiff;
}

console.log(solution());
