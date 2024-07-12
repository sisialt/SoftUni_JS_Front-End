function solve(numbers) {
    let sortedNumbers = [];
    numbers.sort((a, b) => a - b);

    let loops = Math.ceil(numbers.length / 2);

    for (let i = 0; i < loops; i++) {
        if (i == loops - 1 && numbers.length % 2 != 0) {
            sortedNumbers.push(numbers[i]);
        } else {
        sortedNumbers.push(numbers[i], numbers[numbers.length - 1 - i])
        }
    }

    return sortedNumbers;
}

function solveLector(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const result = [];

    while (sortedNumbers.length > 0) {
        let firstNum = sortedNumbers.shift();
        let lastNum = sortedNumbers.pop();

        result.push(firstNum); /* result.push(firstNum, lastNum) i bez if*/
        
        if (lastNum) {
            result.push(lastNum);
        }
    }

    return result;
}

solve([1, 65, 3, 52, 63, 31, -3, 18, 56]);