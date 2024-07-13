function solve(input) {
    const n = Number(input.shift());

    const heros = {};
    const maxHealth = 100;
    const maxBullets = 6;

    for (let i = 0; i < n; i++) {
        const [ name, health, bullets ] = input.shift().split(' ');
        heros[name] = { 
            health: Number(health), 
            bullets: Number(bullets)
        }
    }

    let commandLine = input.shift();

    while (commandLine != 'Ride Off Into Sunset') {
        let [ command, name, ...args ] = commandLine.split(' - ');
        
        if (command === 'FireShot') {
            const target = args[0];

            if (heros[name].bullets > 0) {
                heros[name].bullets -= 1;
                console.log(`${name} has successfully hit ${target} and now has ${heros[name].bullets} bullets!`)
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`)
            }

        } else if (command === 'TakeHit') {
            const damage = Number(args[0]);
            const attacker = args[1];

            heros[name].health -= damage;

            if (heros[name].health > 0) {
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${heros[name].health} HP!`)
            } else {
                console.log(`${name} was gunned down by ${attacker}!`);
            }

        } else if (command === 'Reload') {
            if (heros[name].bullets < maxBullets) {
                console.log(`${name} reloaded ${maxBullets - heros[name].bullets} bullets!`);
                heros[name].bullets = maxBullets;
            } else {
                console.log(`${name}'s pistol is fully loaded!`);
            }
            
        } else if (command === 'PatchUp') {
            const amount = Number(args[0]);
            let recovered = 0;

            if (heros[name].health === maxHealth) {
                console.log(`${name} is in full health!`);
            } else {
                if (heros[name].health + amount <= maxHealth) {
                    recovered = amount;
                } else {
                    recovered = maxHealth - heros[name].health;
                }
    
                heros[name].health += recovered;
                console.log(`${name} patched up and recovered ${recovered} HP!`);
            }
        }

        commandLine = input.shift();
    }

    for (const name of Object.keys(heros)) {
        if (heros[name].health > 0) {
            console.log(name);
            console.log(` HP: ${heros[name].health}`);
            console.log(` Bullets: ${heros[name].bullets}`);
        }
    }
}

/*solve((["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"])
);

solve((["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"])
);

solve((["2",
"Gus 100 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"Ride Off Into Sunset"])
);*/