function solve(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName,
        hairColor,
    }

    console.log(JSON.stringify(person));
}

solve('George', 'Jones', 'Brown');
solve('Peter', 'Smith', 'Blond');