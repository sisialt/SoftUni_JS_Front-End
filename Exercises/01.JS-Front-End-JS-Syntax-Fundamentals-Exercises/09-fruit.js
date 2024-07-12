function solve(fruit, weigthGrams, priceKg) {
    let weigthKgs = weigthGrams / 1000;
    console.log(`I need $${(weigthKgs * priceKg).toFixed(2)} to buy ${weigthKgs.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);