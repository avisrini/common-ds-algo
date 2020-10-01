function isUniqStr(str) {
    let boolObj = {};
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (boolObj[c]) {
            return false;
        }
        boolObj[c] = true;
    }
    return true;
}

// no external datastructure
function isUniqStr2(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== i) {
            return false;
        }
    }
    return true;
}

function isPermutationOf(s1, s2) {
    if (s1.length !== s2.length) return false;
    else {
        let a1 = [...s1].sort().toString();
        let a2 = [...s2].sort().toString();
        if (a1 === a2) return true;
    }
    return false;
}

// Replace spaces with "%20"
function URLify(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            res += "%20";
        } else {
            res += str[i];
        }
    }
    return res;
}

function isPermutationOfPalindrome(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (charCount[c]) ++charCount[c];
        else charCount[c] = 1;
    }

    let maxOdd = 0;
    for (count of Object.values(charCount)) {
        if (maxOdd > 1) return false;
        if (count % 2 !== 0) {
            maxOdd++;
        }
    }
    return true;
}

function isEditDistanceOne(s1, s2) {
    if (Math.abs(s1.length - s2.length) > 1) {
        return false;
    }

    let numEdits = 0;
    let i = 0,
        j = 0;
    while (i < s1.length && j < s2.length) {
        if (s1[i] != s2[j]) {
            if (numEdits >= 1) {
                return false;
            }
            if (s1.length > s2.length) i++;
            else if (s2.length < s1.length) j++;
            // Iflengths of both strings
            // is same
            else {
                i++;
                j++;
            }
            numEdits++;
        } else {
            i++;
            j++;
        }
    }
    if (i < s1.length || j < s2.length) {
        numEdits++;
    }
    return numEdits <= 1;
}

function compressString(str) {
    let res = "";
    let consOcc = 0;
    for (let i = 0; i < str.length; i++) {
        consOcc++;
        if (i + 1 >= str.length || str[i] != str[i + 1]) {
            res += str[i] + consOcc;
            consOcc = 0;
        }
    }
    return res;
}

function findPermutations(str) {
    let permutationsArr = [];
    if (str.length < 2) {
        return str;
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);
        for (let perm of findPermutations(remainingChars)) {
            permutationsArr.push(char + perm);
        }
    }
    return permutationsArr;
}

console.log(isUniqStr2("Heloeasdf"));
// console.log(isPermutationOf("Heloa sdf", "Heas dlof"));
// console.log(URLify("Mr John Smith"));
// console.log(isPermutationOfPalindrome("HelqoeHadoaqlfawssdf"));
// console.log(isEditDistanceOne("HelloWorld", "HelloWorls"));
// console.log(compressString("aabcccccaaa"));
// console.log(findPermutations("abc"));
