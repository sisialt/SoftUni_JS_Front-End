function solve(grade) {
    if (grade < 3) {
        return console.log(`Fail (2)`)
    }

    if (grade < 3.5) {
        return console.log(`Poor (${grade.toFixed(2)})`)
    }

    if (grade < 4.5) {
        return console.log(`Good (${grade.toFixed(2)})`)
    }

    if (grade < 5.5) {
        return console.log(`Very good (${grade.toFixed(2)})`)
    }

    return console.log(`Excellent (${grade.toFixed(2)})`)
}

solve(3.33);
solve(4.50);
solve(2.99);