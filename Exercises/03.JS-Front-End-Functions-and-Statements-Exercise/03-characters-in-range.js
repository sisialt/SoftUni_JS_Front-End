function solve(firstChar, secondChar) {
    let result = [];
    const charsArr = [firstChar, secondChar];

    const sortedChars = charsArr.sort();
    /* default sort - const sortedChars = charsArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)); */
    
    const asciiFirstChar = sortedChars[0].charCodeAt(0);
    const asciiSecondChar = sortedChars[1].charCodeAt(0);

    for (let i = asciiFirstChar + 1; i < asciiSecondChar; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

solve('a',
'd'
);
solve('#',
':'
);
solve('C',
'#'
);