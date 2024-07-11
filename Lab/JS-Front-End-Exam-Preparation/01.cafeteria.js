function solve([n, ...data]) {
    const baristaDetails = [];

    for (let i = 0; i < n; i++) {
        const baristaData = data[i].split(' ');
        const barista = {
            name: baristaData[0],
            shift: baristaData[1],
            coffeeTypes: baristaData[2].split(','),
        };

        baristaDetails.push(barista);
    }

    const commands = data.slice(n);

    for (let i = 0; i < commands.length - 1; i++) {
        const commandData = commands[i].split(' / ');
        const [ command, baristaName ] = commandData.slice(0, 2);
        const barista = baristaDetails.find(obj => obj.name === baristaName);

        if (command === 'Prepare') {
            const [ baristaShift, coffeeType ] = commandData.slice(2);

            if (baristaShift === barista.shift && barista.coffeeTypes.includes(coffeeType)) {
                console.log(`${baristaName} has prepared a ${coffeeType} for you!`)
            } else {
                console.log(`${baristaName} is not available to prepare a ${coffeeType}.`)
            }

        } else if (command === 'Change Shift') {
            const newShift = commandData[2];
            barista.shift = newShift;

            console.log(`${baristaName} has updated his shift to: ${newShift}`);

        } else if (command === 'Learn') {
            const newCoffeeType = commandData[2];

            if (barista.coffeeTypes.includes(newCoffeeType)) {
                console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
            } else {
                barista.coffeeTypes.push(newCoffeeType);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
            }
        } 
    }

    for (const b of baristaDetails) {
        console.log(`Barista: ${b.name}, Shift: ${b.shift}, Drinks: ${b.coffeeTypes.join(', ')}`)
    }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    );
solve(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
);