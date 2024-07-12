function solve(text) {
    let matches = text.matchAll(/#[a-zA-Z]+/g);  /* (/#(?<word>[a-zA-Z]+)/g) */
    for (let match of matches) {
        console.log(match[0].substring(1))  /* (match.groups.word) */
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');