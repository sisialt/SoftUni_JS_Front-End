function solve(product, quantity) {
    const getProductPrice = function(product) {
        switch (product) {
            case 'coffee' :
                return 1.5;
            case 'water' :
                return 1;
            case 'coke' :
                return 1.4;
            case 'snacks' :
                return 2;
        }
    }

    const productPrice = getProductPrice(product);

    console.log((productPrice * quantity).toFixed(2));
}

solve("water", 5);
solve("coffee", 2);