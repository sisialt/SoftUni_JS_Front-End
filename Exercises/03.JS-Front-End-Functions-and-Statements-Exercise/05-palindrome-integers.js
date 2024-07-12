function solve(numbers) {
    // numbers.forEach(number => printPalindromeResult(number))
    numbers.forEach(printPalindromeResult)
}

function isPalindrome(number) {
    const forwardNumber = number.toString();
    const backwardNumber = forwardNumber.split('').reverse().join('');

    return forwardNumber === backwardNumber;
}

function printPalindromeResult(number) {
    console.log(isPalindrome(number))
}


function solve2(numbersArray) {
    function isPalindrome(numAsString) {
        const numAsArr = Array.from(numAsString);

        if (numAsString.length === 1 || (numAsString.length === 2 && numAsString[0] === numAsString[1])) {
            return true;
        }

        if (numAsArr[0] === numAsArr[numAsArr.length - 1]) {
            numAsArr.pop();
            numAsArr.shift();
            isPalindrome(numAsArr.join(', '));
        } else {
            return false;
        }

        return true;
    }

    for (let i = 0; i < numbersArray.length; i++) {
        if (isPalindrome(numbersArray[i].toString())) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

solve([1001,123,323,421,121]);
solve([32,2,232,1010]);