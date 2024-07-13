function solve(input) {
    const n = Number(input.shift());

    const riders = {};
    const maxFuelCapacity = 100;

    for (let i = 0; i < n; i++) {
        const [ name, fuelCapacity, position ] = input.shift().split('|');
        riders[name] = { 
            fuelCapacity: Number(fuelCapacity), 
            position: Number(position),
        }
    }

    let commandLine = input.shift();

    while (commandLine != 'Finish') {
        let [ command, name, ...args ] = commandLine.split(' - ');
        
        if (command === 'StopForFuel') {
            const minimumFuel = Number(args[0]);
            const newPosition = Number(args[1]);

            if (riders[name].fuelCapacity < minimumFuel) {
                riders[name].fuelCapacity -= minimumFuel;
                riders[name].position = newPosition;
                console.log(`${name} stopped to refuel but lost his position, now he is ${newPosition}.`)
            } else {
                console.log(`${name} does not need to stop for fuel!`)
            }

        } else if (command === 'Overtaking') {
            const name2 = args[0];

            const rider1position = riders[name].position;
            const rider2position = riders[name2].position;

            riders[name].position = rider2position;
            riders[name2].position = rider1position;

            console.log(`${name} overtook ${name2}!`)
            

        } else if (command === 'EngineFail') {
            const lapsLeft = Number(args[0]);

            /*for (const key of Object.keys(riders)) {
                if (riders[key].position > riders[name].position) {
                    riders[key].position -= 1;
                }
            }*/

            delete riders[name];

            console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
        }

        commandLine = input.shift();
    }

    for (const name of Object.keys(riders)) {
        console.log(`${name}\n  Final position: ${riders[name].position}`)
    }
}

solve((["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);

solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);