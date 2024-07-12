function solve2(text) {
    let matches = text.matchAll(/[A-Z][a-z]*/g);
    let splittedWords = [];

    for (let match of matches) {
        splittedWords.push(match[0])
    }

    console.log(splittedWords.join(', '))
}


/* it was text.matchAll(/[A-Z][a-z]+/g) and it did not include a single Upper letter*/


function solve(text) {
    let splittedWords = [];
    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
            if (startIndex > -1 && endIndex > -1) {
                splittedWords.push(text.substring(startIndex, endIndex + 1))
            }
            startIndex = i;
            endIndex = i;  /* forgot, so that it catches single upper inbetween */
        } else {
            endIndex = i;
        }
    }

    if (startIndex > endIndex) {
        splittedWords.push(text.substring(startIndex))
    } else {
        splittedWords.push(text.substring(startIndex, endIndex + 1))
    }

    console.log(splittedWords.join(', '))
}

solve('ABSplitQMeIfYouCanHaHaYouCantOrYouCanS');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');