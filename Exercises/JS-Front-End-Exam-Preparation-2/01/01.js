function solve(input) {
    const takeEven = (message) => {
        let result = message.split('').filter((_, i) => i % 2 == 0).join('');

        console.log(result);

        return result;
    }

    const changeAll = (message, substring, replacement) => {
        let result = message;

        while (result.includes(substring)) {
            result = result.replace(substring, replacement)
        }

        console.log(result);
        return result;
    };

    
    const fancyChangeAll = (message, substring, replacement) => {
        let result = message.replace(new RegExp(substring, 'g', replacement));

        console.log(result);
        return result;
    };

    const rayasFancyChangeAll = (message, substring, replacement) => {
        const result = message.split(substring).join(replacement);

        console.log(result);

        return result;
    };

    const reverse = (message, substring) => {
        if (!message.includes(substring)) {
            console.log('error');

            return message;
        }

        let result = message.replace(substring, '');

        result += substring.split('').reverse().join('');

        console.log(result);
        return result;
    };

    let message = input.shift();
    let line = input.shift();
    while (line !== 'Buy') {
        const [command, substring, replacement] = line.split('?');

        switch (command) {
            case 'TakeEven':
                message = takeEven(message);
                break;
            case 'ChangeAll':
                message = changeAll(message, substring, replacement)
                break;
            case 'Reverse':
                message = reverse(message, substring)
                break;
        }

        line = input.shift();
    }

    console.log(`The cryptocurrency is: ${message}`);
}

function solve2(data) { //not working
    let encodedMessage = data.shift();
    let result = [];

    let commandLine = data.shift();

    while (commandLine != 'Buy') {
        const [ command, ...args] = commandLine.split('?');

        switch (command) {
            case 'TakeEven':
                result = []
                for (let i = 0; i < encodedMessage.length; i += 2) {
                    result.push(encodedMessage[i]);
                }

                console.log(result.join(''));
                break;

            case 'ChangeAll':
                const substring = args[0];
                const replacement = args[1];

                while (result.join('').includes(substring)) {
                    result = Array.from(result.join('').replace(substring, replacement))
                }

                console.log(result.join(''))
                break;

            case 'Reverse':
                const substringToReverse = args[0];

                if (result.join('').includes(substringToReverse)) {
                    const reversedString = Array.from(substringToReverse).reverse().join('');
                    const index = result.join('').indexOf(substringToReverse);

                    result.splice(index, reversedString.length);
                    result.push(reversedString)
                    console.log(result.join(''));
                } else {
                    console.log('error');
                }

                break;
        }

        commandLine = data.shift();
        encodedMessage = result.join('');
    }

    console.log(`The cryptocurrency is: ${result.join('')}`);
}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])
)

solve((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])

)