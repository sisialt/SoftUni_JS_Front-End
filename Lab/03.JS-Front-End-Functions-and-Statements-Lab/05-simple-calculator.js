function solve(firstNum, secondNum, operator) {
    const operation = getOperation(operator);
    const result = operation(firstNum, secondNum);

    console.log(result);

    function getOperation(operator) {
        switch (operator) {
            case 'multiply':
                return (a, b) => a * b;
            case 'divide':
                return (a, b) => a / b;
            case 'add':
                return (a, b) => a + b;
            case 'subtract':
                return (a, b) => a - b;
        }
    }
}

solve(5,
    5,
    'multiply'
    );
solve(40,
    8,
    'divide'
    );
solve(12,
    19,
    'add'
    );
solve(50,
    13,
    'subtract'
    );