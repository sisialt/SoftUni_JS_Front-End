function solve(number) {
    const isEven = x => x % 2 === 0;
    const isOdd = x => !isEven(x);
    
    const evenSum = calculateDigitSum(number, isEven);
    const oddSum = calculateDigitSum(number, isOdd);

    printResult(oddSum, evenSum);

    function calculateDigitSum(number, filter) {
        const filteredDigits = number
            .toString()
            .split('')
            .map(Number)
            .filter(filter);
    
        const sum = filteredDigits.reduce((acc, digit) => acc + digit, 0);
    
        return sum;
    }
    
    function printResult(oddSum, evenSum) {
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
}



function solve2(number) {
    const numberAsString = number.toString();
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] % 2 === 0) {
            sumEven += Number(numberAsString[i]);
        } else {
            sumOdd += Number(numberAsString[i]);
        }
    }
    
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

solve(1000435);
solve(3495892137259234);