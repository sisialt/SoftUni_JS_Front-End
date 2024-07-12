const isValidLength = password => password.length >= 6 && password.length <= 10;
const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password);
const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;

function solve(password) {
    let isValid = true;

    if (!isValidLength(password)) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters')
    }

    if (!isAlphaNumerical(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }

    if (!isStrong(password)) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

function fancySolve(password) {
    const validations = [
        [isValidLength, 'Password must be between 6 and 10 characters'],
        [isAlphaNumerical, 'Password must consist only of letters and digits'],
        [isStrong, 'Password must have at least 2 digits'],
    ];

    const errors = validations
        .map(([validator, message]) => validator(password) ? '' : message)
        .filter(message => !!message);

    errors.forEach(message => console.log(message));

    if (errors.length === 0) {
        console.log('Password is valid');
    }
}



function solve2(password) {
    function isValid(password) {
        let isWrong = false;
        const matchesLettersDigits = Array.from(password.matchAll(/^[a-zA-Z0-9]+$/g));
        const matchesTwoDigits = Array.from(password.matchAll(/\d/g));

        if (!(password.length >= 6 && password.length <= 10)) {
            console.log("Password must be between 6 and 10 characters");
            isWrong = true;
        }

        if (matchesLettersDigits.length === 0) {
            console.log("Password must consist only of letters and digits");
            isWrong = true;
        }

        if (matchesTwoDigits.length < 2) {
            console.log("Password must have at least 2 digits");
            isWrong = true;
        }

        if (isWrong) {
            return false;
        }

        return true;
    }

    if (isValid(password)) {
        return console.log("Password is valid");
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');