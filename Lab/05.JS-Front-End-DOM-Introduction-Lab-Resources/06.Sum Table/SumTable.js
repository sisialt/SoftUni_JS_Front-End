function sumTable() {
    const lastColumnElements = document.querySelectorAll('table td:last-of-type:not(#sum)');
    const totalElement = document.getElementById('sum')

    let sumTotal = 0;

    for (const el of lastColumnElements) {
        sumTotal += Number(el.textContent)
    };

    totalElement.textContent = sumTotal;
}