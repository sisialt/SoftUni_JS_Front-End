function solve(input) {
    const employees = {};

    for (const line of input) {
        employees[line] = line.length;
    }

    Object.keys(employees).forEach(name => console.log(`Name: ${name} -- Personal Number: ${employees[name]}`));
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );