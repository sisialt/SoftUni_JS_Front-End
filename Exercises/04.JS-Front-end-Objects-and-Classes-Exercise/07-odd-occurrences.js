function solve(input) {
    const words = input.split(' ');
    const wordOccurances = {};

    for (const word of words) {
        if (!wordOccurances.hasOwnProperty(word.toLowerCase())) {
            wordOccurances[word.toLowerCase()] = 0;
        }

        wordOccurances[word.toLowerCase()]++;
    }

    const result = [];
    for (const word in wordOccurances) {
        if (wordOccurances[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

function mapSolve(input) {
    const words = input.toLowerCase().split(' ');
    const wordMap = new Map();

    for (const word of words) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 0);
        }

        wordMap.set(word, wordMap.get(word) + 1);
    }

    const result = [];
    for (const [word, occurances] of wordMap) {
        if (occurances % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

function fancySolve(input) {
    const occurances = input
        .toLowerCase()
        .split(' ')
        .reduce((acc, word) =>
            acc.hasOwnProperty(word)
                ? { ...acc, [word]: acc[word] + 1 }
                : { ...acc, [word]: 1 }
        , {});

    const result = Object
        .entries(occurances)
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word, count]) => word)
        .join(' ');

    console.log(result);
}

function solve2(input) {
    const searchedWords = [];
    const notSearchedWords = [];
    const words = input.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];

        if (!searchedWords.includes(currentWord) && !notSearchedWords.includes(currentWord)) {
            let count = 1;

            for (let j = i + 1; j < words.length; j++) {
                if (currentWord === words[j]) {
                    count += 1;
                };
            };

            (count % 2 !== 0) ? searchedWords.push(currentWord) : notSearchedWords.push(currentWord);
        };
    };

    console.log(searchedWords.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');