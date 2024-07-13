function solve(input) {
    const n = input.shift();

    const team = {};
    const maxEnergy = 200;
    const macOxygen = 100;

    for (let i = 0; i < n; i++) {
        const [ name, oxygen, energy ] = input.shift().split(' ');
        team[name] = { 
            oxygen: Number(oxygen), 
            energy: Number(energy)
        }
    }

    let commandLine = input.shift();

    while (commandLine != 'End') {
        let [ command, name, lastArg ] = commandLine.split(' - ');
        
        if (command === 'Explore') {
            const neededEnergy = Number(lastArg);

            if (team[name].energy >= neededEnergy) {
                team[name].energy -= neededEnergy;
                console.log(`${name} has successfully explored a new area and now has ${team[name].energy} energy!`)
            } else {
                console.log(`${name} does not have enough energy to explore!`)
            }

        } else if (command === 'Refuel') {
            const amountEnergy = Number(lastArg);
            let energyRefueled = 0;

            if (team[name].energy + amountEnergy <= maxEnergy) {
                team[name].energy += amountEnergy;
                energyRefueled = amountEnergy;
            } else {
                energyRefueled = maxEnergy - team[name].energy;
                team[name].energy = maxEnergy;
            }

            console.log(`${name} refueled their energy by ${energyRefueled}!`)

        } else if (command === 'Breathe') {
            const amountOxygen = Number(lastArg);
            let oxygenRecovered = 0;

            if (team[name].oxygen + amountOxygen < macOxygen) {
                team[name].oxygen += amountOxygen;
                oxygenRecovered = amountOxygen;
            } else {
                oxygenRecovered = macOxygen - team[name].oxygen;
                team[name].oxygen = macOxygen;
            }

            console.log(`${name} took a breath and recovered ${oxygenRecovered} oxygen!`)
        }

        commandLine = input.shift();
    }

    for (const name of Object.keys(team)) {
        console.log(`Astronaut: ${name}, Oxygen: ${team[name].oxygen}, Energy: ${team[name].energy}`)
    }
}

solve([  '3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breathe - Rob - 20',
'End']
);

solve([    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End']
);