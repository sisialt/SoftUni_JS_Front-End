function solve(word, text) {
    let textArr = text.toLowerCase().split(' ');

    if (textArr.includes(word.toLowerCase())) {
        return console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}

solve('javascrip',
'JavaScript is the best programming language'
);

solve('python',
'JavaScript is the best programming language'
);

/* problem was when input javascripttt -> it should return not found, 
with .includes() it returns true */