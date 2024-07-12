function solve(a, b) {
    const result = calculateFactorial(a) / calculateFactorial(b)

    console.log(result.toFixed(2));
}

function calculateFactorial(number) {
    if (number <= 1) {
        return 1;
    }

    return number * calculateFactorial(number - 1)
}


function solve2(numOne, numTwo) {
    const calculateFactorialDivision = function(a) {
        let product = 1;

        for (let i = a; i > 0; i--) {
            product *= i;
        }

        return product;
    }

    let result = calculateFactorialDivision(numOne) / calculateFactorialDivision(numTwo);

    console.log(result.toFixed(2));
}

solve(5,
    2
    );
solve(6,
    2
    );