function solve(number) {
    const properDivisors = [];
    let sumDivisors = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            properDivisors.push(i);
        }
    }

    for (let divisor of properDivisors) {
        sumDivisors += divisor;
    }

    if (number > 0 && number === sumDivisors) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

solve(6);
solve(28);
solve(1236498);