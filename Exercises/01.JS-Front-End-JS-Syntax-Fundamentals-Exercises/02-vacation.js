function solve(groupNum, groupType, day) {
    let price;

    switch (groupType) {

        case 'Students':
            switch (day) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
            }

            if (groupNum >= 30) {
                price *= 0.85;
            }
            break;

        case 'Business':
            switch (day) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
            }

            if (groupNum >= 100) {
                groupNum -= 10;
            }
            break;

        case 'Regular':
            switch (day) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
            }

            if (10 <= groupNum && groupNum <= 20) {
                price *= 0.95;
            }
            break;

    }

    console.log(`Total price: ${(price * groupNum).toFixed(2)}`)
}

solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")