function solve(num1, num2) {
    let result = '';
    let sumNums = 0;
    for (let i = num1; i <= num2; i++) {
        result += i + ' ';
        sumNums += i;
    }
    console.log(result);
    console.log(`Sum: ${sumNums}`)
}

solve(5, 10);
solve(0, 26);
solve(50, 60);