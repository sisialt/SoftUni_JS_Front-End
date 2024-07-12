function solve(n) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        const innerMatrix = [];

        for (let j = 0; j < n; j++) {
            innerMatrix.push(n);
        }
        matrix.push(innerMatrix.join(' '));
    }

    console.log(matrix.join('\n'))
    
}

function solve2(n) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push(n)
    }

    for (let i = 0; i < n; i++) {
        console.log(matrix.join(' '))
    }
}

solve(3);
solve(7);
solve(2);