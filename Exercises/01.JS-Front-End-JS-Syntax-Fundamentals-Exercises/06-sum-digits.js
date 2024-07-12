function solve(num) {
    let sumNum = 0;
    while (num) {
        digit = num % 10;
        sumNum += digit;
        num = (num - digit) / 10;
    }

    console.log(sumNum);
}

solve(245678);
solve(97561);
solve(543);