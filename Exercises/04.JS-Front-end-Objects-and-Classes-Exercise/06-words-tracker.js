function solve(input) {
    const searchedWordsOccurrences = {};
    
    let [searchedWords, ...words] = input;

    searchedWords = searchedWords.split(' ');

    for (const searchedWord of searchedWords) {
        searchedWordsOccurrences[searchedWord] = 0;
    };

    for (const word of words) {
        if (searchedWordsOccurrences.hasOwnProperty(word)) { /* (searchedWords.includes(word)) */
            searchedWordsOccurrences[word] += 1;
        };
    };
    
    Object
        .entries(searchedWordsOccurrences)
        .sort((a, b) => b[1] - a[1])
        .forEach(entry => console.log(`${entry[0]} - ${entry[1]}`));
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );