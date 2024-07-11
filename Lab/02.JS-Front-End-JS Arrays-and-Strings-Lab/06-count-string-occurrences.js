function solve(text, word) {
    let textArr = text.split(' ');
    let count = 0;
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] == word) {
            count += 1;
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');