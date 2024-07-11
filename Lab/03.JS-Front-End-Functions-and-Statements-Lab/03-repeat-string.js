function solve(text, repeatCount) {
    result = '';
    for (let i = 0; i < repeatCount; i++) {
        result += text;
    }

    return result;
}

solve("abc", 3);
solve("String", 2);