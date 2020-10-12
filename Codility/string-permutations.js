function findPermutations(word) {
    if (!word || typeof word != "string") return "Not a string";
    if (word.length < 2) return word;

    let permutationsArray = [];

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let remainingChars = word.slice(0, i) + word.slice(i + 1, word.length);
        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation);
        }
    }

    return permutationsArray;
}

let str = "abcd";
console.log(findPermutations(str).length);
