function solution(S) {
    // let arr = [];
    // let lastChar = "$";
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === opp(lastChar)) {
    //         arr.pop();
    //         lastChar = arr[arr.length - 1];
    //     } else {
    //         arr.push(str[i]);
    //         lastChar = str[i];
    //     }
    // }
    // return arr.length;
    let b = {};
    for (let i = 0; i < S.length; i++) {
        b[S[i]] ? b[S[i]]++ : (b[S[i]] = 1);
    }

    for (let value of Object.values(b)) {
        if (value % 2) continue;
        else return 0;
    }
    return 1;
}

function opp(char) {
    if (char === "(") return ")";
    else if (char === "[") return "]";
    else if (char === "{") return "}";
    else if (char === "}") return "{";
    else if (char === "]") return "[";
    else if (char === ")") return "(";
}

let str = "{[])([}";
console.log(solution(str));
