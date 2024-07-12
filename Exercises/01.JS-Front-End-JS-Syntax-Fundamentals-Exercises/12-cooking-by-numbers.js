function solve(numAsString, operation1, operation2, operation3, operation4, operation5) {
    num = Number(numAsString);
    result = num;

    if (operation1 == 'chop') {
        result /= 2;
    } else if (operation1 == 'dice') {
        result = Math.sqrt(result);
    } else if (operation1 == 'spice') {
        result += 1;
    } else if (operation1 == 'bake') {
        result *= 3;
    } else if (operation1 == 'fillet') {
        result *= 0.8;
    }

    console.log(result);

    if (operation2 == 'chop') {
        result /= 2;
    } else if (operation2 == 'dice') {
        result = Math.sqrt(result);
    } else if (operation2 == 'spice') {
        result += 1;
    } else if (operation2 == 'bake') {
        result *= 3;
    } else if (operation2 == 'fillet') {
        result *= 0.8;
    }

    console.log(result);

    if (operation3 == 'chop') {
        result /= 2;
    } else if (operation3 == 'dice') {
        result = Math.sqrt(result);
    } else if (operation3 == 'spice') {
        result += 1;
    } else if (operation3 == 'bake') {
        result *= 3;
    } else if (operation3 == 'fillet') {
        result *= 0.8;
    }

    console.log(result);

    if (operation4 == 'chop') {
        result /= 2;
    } else if (operation4 == 'dice') {
        result = Math.sqrt(result);
    } else if (operation4 == 'spice') {
        result += 1;
    } else if (operation4 == 'bake') {
        result *= 3;
    } else if (operation4 == 'fillet') {
        result *= 0.8;
    }

    console.log(result);

    if (operation5 == 'chop') {
        result /= 2;
    } else if (operation5 == 'dice') {
        result = Math.sqrt(result);
    } else if (operation5 == 'spice') {
        result += 1;
    } else if (operation5 == 'bake') {
        result *= 3;
    } else if (operation5 == 'fillet') {
        result *= 0.8;
    }

    console.log(result);

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');