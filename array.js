function merge(a1, a2) {
    let res = [];
    while (a1.length && a2.length) {
        if (a1[0] < a2[0]) {
            res.push(a1.shift());
        } else {
            res.push(a2.shift());
        }
    }
    res = [...res, ...a1, ...a2];
    return res;
}

function sort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid);
    return merge(sort(arr1), sort(arr2));
}

function quicksort(arr) {
    if (arr.length < 2) return arr;
    const chosenIndex = arr.length - 1;
    const chosen = arr[chosenIndex];

    const a = [];
    const b = [];
    for (let i = 0; i < chosenIndex; i++) {
        const temp = arr[i];
        temp < chosen ? a.push(temp) : b.push(temp);
    }
    return [...quicksort(a), chosen, ...quicksort(b)];
}

function countSubarrays(arr) {
    // Initialize variables
    let count = 0;
    let n = arr.length;

    // Iterate over the array
    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < n; j++) {
            // Check if position is
            // even then add to sum
            if ((j - i) % 2 == 0) sum += arr[j];
            // else subtract it to sum
            else sum -= arr[j];

            // Increment the count
            // if the sum equals 0
            if (sum == 0) count++;
        }
    }

    return count;
}

console.log(countSubarrays([2, 4, 6, 4, 2]));
