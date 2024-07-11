function solve(number, power) {
    const calculatePower = function(number, power) {
        return number ** power
    }

    result = calculatePower(number, power);
    console.log(result);
}

solve(2,8);
solve(3,4);