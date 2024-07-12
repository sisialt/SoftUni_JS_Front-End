function solve(percent) {
    const loadingBar = [];
    const percentSymbolCount = percent.toString()[0];

    if (percent === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]')
        return;
    }

    for (let i = 0; i < percentSymbolCount; i ++) {
        loadingBar.push('%');
    }

    console.log(`${percent}% [${(loadingBar.join('')).padEnd(10, '.')}]`)
    console.log('Still loading...')
}

solve(30);
solve(50);
solve(100);