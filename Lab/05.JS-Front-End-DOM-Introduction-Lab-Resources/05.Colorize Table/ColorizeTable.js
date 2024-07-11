function colorize() {
    const evenTableElements = document.querySelectorAll('tr:nth-child(2n)')

    for (const el of evenTableElements) {
        el.style.backgroundColor = 'teal';
    };
}