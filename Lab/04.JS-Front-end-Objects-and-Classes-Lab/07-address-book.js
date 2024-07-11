function solve(input) {
    const addressBook = {};

    for (const line of input) {
        const [name, address] = line.split(':');

        addressBook[name] = address;
    };

    const sortedEntries = Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]));

    for (const name in Object.fromEntries(sortedEntries)) {
        console.log(`${name} -> ${addressBook[name]}`)
    };
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);
solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);