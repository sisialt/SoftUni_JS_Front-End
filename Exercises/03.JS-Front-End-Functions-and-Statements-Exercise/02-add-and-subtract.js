function solve(a, b, c) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    console.log(subtract(sum(a, b), c));
}

solve(23,
    6,
    10
    );
solve(1,
    17,
    30
    );
solve(42,
    58,
    100
    );