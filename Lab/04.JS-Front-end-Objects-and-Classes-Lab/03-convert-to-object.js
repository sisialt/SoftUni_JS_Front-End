function solve(jsonString) {
    const objFromJSON = JSON.parse(jsonString);

    Object.keys(objFromJSON).forEach(key => console.log(`${key}: ${objFromJSON[key]}`))
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');