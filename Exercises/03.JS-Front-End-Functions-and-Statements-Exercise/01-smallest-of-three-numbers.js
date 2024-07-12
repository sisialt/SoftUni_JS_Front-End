function solve(a, b, c) {
    function findSmallest(a, b) {
        if (a < b) {
            return a;
        }
        
        return b;
    }

    const smallestNumber = findSmallest(findSmallest(a, b), c);

    console.log(smallestNumber);
}

solve(2,
    5,
    3
    );
solve(600,
    342,
    123
    );
solve(25,
    21,
    4
    );
solve(2,
    2,
    2
    );