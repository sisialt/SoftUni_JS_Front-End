function solve(arr, step) {
    let searchedArr = [];

    for (let i = 0; i < arr.length;) {
        searchedArr.push(arr[i]);
        i += step;
    }
    
    return searchedArr;
} 

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
);