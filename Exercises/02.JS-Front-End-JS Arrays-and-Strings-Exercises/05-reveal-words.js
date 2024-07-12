function solve(words, text) {
    const wordsArr = words.split(', ');
    const textArr = text.split(' ');

    const result = textArr
        .map(textWord => textWord[0] === '*'
            ? wordsArr.find(w => w.length === textWord.length)
            : textWord)
        .join(' ');

    console.log(result)
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages *****'
);
solve('great',
'softuni is ***** place for learning new programming languages ***** '
);