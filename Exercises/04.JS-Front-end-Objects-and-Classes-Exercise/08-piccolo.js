function solve(input) {
    const parking = {};

    for (const line of input) {
        const [action, carNumber] = line.split(', ');

        if (action === 'IN') {
            parking[carNumber] = true;
        } else {
            delete parking[carNumber];
        };
    };

    if (Object.entries(parking).length > 0) {
        Object.keys(parking).sort((a, b) => a.localeCompare(b))
        .forEach(carN => console.log(carN));
    } else {
        console.log("Parking Lot is Empty");
    };
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);