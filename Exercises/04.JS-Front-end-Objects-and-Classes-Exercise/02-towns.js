function solve(input) {
    const towns = {};

    for (const line of input) {
        const [town, latitude, longitude] = line.split(' | ');

        towns['town'] = town;
        towns['latitude'] = Number(latitude).toFixed(2);
        towns['longitude'] = Number(longitude).toFixed(2);

        console.log(towns);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
solve(['Plovdiv | 136.45 | 812.575']);