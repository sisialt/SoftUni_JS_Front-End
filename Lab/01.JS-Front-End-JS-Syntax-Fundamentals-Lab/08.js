function solve(dataInput) {
    if (typeof dataInput === 'number') {
        console.log((Math.PI * dataInput ** 2).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof dataInput}.`)
    }
}

solve(5)
solve('name')