function solve(num) {
    let sumNum = 0,
        lastDigit = num % 10,
        areSameNumbers = true;

    while (num) {
        digit = num % 10;

        if (lastDigit != digit) {
            areSameNumbers = false;
        }

        sumNum += digit;
        num = (num - digit) / 10;
        lastDigit = digit;
    }

    console.log(areSameNumbers);
    console.log(sumNum);
}

solve(2222222);
solve(1234);