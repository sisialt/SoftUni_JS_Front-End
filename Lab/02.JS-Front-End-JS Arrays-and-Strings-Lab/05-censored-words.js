function solve(text, word) {
    /* let censoredText = text.replaceAll(word, '*'.repeat(word.length)) */
    let pattern = new RegExp(word, 'g');
    let censoredText = text.replace(pattern, '*'.repeat(word.length))
    console.log(censoredText);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');