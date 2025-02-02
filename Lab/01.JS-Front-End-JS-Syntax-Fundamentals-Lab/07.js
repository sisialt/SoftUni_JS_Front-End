function solve(day, age) {
    let price = 0;
    switch (day) {
        case 'Weekday':
            if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
                price = 12;
            } else if (18 < age && age <= 64) {
                price = 18;
            }
            break;

        case 'Weekend':
            if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
                price = 15;
            } else if (18 < age && age <= 64) {
                price = 20;
            }
            break;

        case 'Holiday':
            if (0 <= age && age <= 18) {
                price = 5;
            } else if (18 < age && age <= 64) {
                price = 12;
            } else if (64 < age && age <= 122) {
                price = 10;
            }
            break;
    }

    if (price !== 0) {
        console.log(`${price}$`)
    } else {
        console.log('Error!')
    }
}

solve('Weekday', 42)
solve('Holiday', -12)
solve('Holiday', 15)