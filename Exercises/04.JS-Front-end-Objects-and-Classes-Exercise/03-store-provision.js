function solve(currentStock, orderedProducts) {
    const products = {};

    currentStock.forEach((element, index) => index % 2 === 0 ? products[element] = Number(currentStock[index + 1]) : null);

    for (let i = 0; i < orderedProducts.length; i += 2) {
        if (products[orderedProducts[i]]) {
            products[orderedProducts[i]] += Number(orderedProducts[i + 1]);
        } else {
            products[orderedProducts[i]] = Number(orderedProducts[i + 1]);
        } 
    }

    Object.entries(products).forEach(product => console.log(`${product[0]} -> ${product[1]}`));
}

function solve2(currentStock, orderedProducts) {
    const products = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        if (!products['productName']) {
            products['productName'] = [];
            products['quantity'] = [];
        }

        products['productName'].push(currentStock[i]);
        products['quantity'].push(Number(currentStock[i + 1]));
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        if (products['productName'].includes(orderedProducts[i])) {
            products['quantity'][products['productName'].indexOf(orderedProducts[i])] += Number(orderedProducts[i + 1]);
        } else {
            products['productName'].push(orderedProducts[i]);
            products['quantity'].push(Number(orderedProducts[i + 1]));
        }
    }

    const productNames = products['productName'];
    const quantities = products['quantity'];

    for (let i = 0; i < productNames.length; i++) {
        console.log(`${productNames[i]} -> ${quantities[i]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );
solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );