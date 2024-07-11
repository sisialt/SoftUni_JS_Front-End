function solve(input) {
    const meetings = {};

    for (const line of input) {
        const weekday = line.split(' ')[0];
        const name = line.split(' ')[1];

        if (!meetings[weekday]) {
            console.log(`Scheduled for ${weekday}`);
            meetings[weekday] = name;
        } else {
            console.log(`Conflict on ${weekday}!`)
        };
    };

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`)
    };
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);