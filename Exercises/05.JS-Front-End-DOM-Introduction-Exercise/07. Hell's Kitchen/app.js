function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick () {
        const areaInputElement = document.querySelector('#inputs textarea');
        const bestRestaurantParagraphElement = document.querySelector('#bestRestaurant p');
        const workersParagraphElement = document.querySelector('#workers p');

        const restaurantsInfo = JSON.parse(areaInputElement.value);

        let bestAverageSalary = 0;
        let bestSalary = 0;
        let bestWorkers = [];
        let bestRestaurantName = '';
        const restaurants = {};
        
        for (const restaurant of restaurantsInfo) {
            let avgSalary = 0;
            let currentBestSalary = 0;
            let sumSalaries = 0;

            let [restaurantName, workers] = restaurant.split(' - ');

            /*if (restaurants[restaurantName]) {
                restaurants[restaurantName].push(workers)
            }*/

            const workersArr = workers.split(', ');

            for (const worker of workersArr) {
                let [workerName, salary] = worker.split(' ');
                salary = Number(salary);

                if (salary > currentBestSalary) {
                    currentBestSalary = salary;
                }

                sumSalaries += salary;
            }

            avgSalary = sumSalaries / workersArr.length;

            if (avgSalary > bestAverageSalary) {
                bestAverageSalary = avgSalary;
                bestWorkers = workersArr;
                bestRestaurantName = restaurantName;
                bestSalary = currentBestSalary;
            }
            
        }

        bestRestaurantParagraphElement.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
        result = [];

        for (const w of bestWorkers) {
            result.push(`Name: ${w.split(' ')[0]} With Salary: ${w.split(' ')[1]}`)
        }

        workersParagraphElement.textContent = result.join(' ');
    }
}


function solveRaya() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
 
    function onClick () {
       let restaurants = Array.from(document.querySelectorAll('#inputs textarea'))
       let restaurantsObj = {}
 
       let restaurantsArr = JSON.parse(restaurants[0].value)
       for (let restaurant of restaurantsArr) {
          let [restaurantName, workers] = restaurant.split(' - ')
          
          if (!Object.keys(restaurantsObj).includes(restaurantName)){
             restaurantsObj[restaurantName] = {
                totalSalary: 0,
                bestSalary: 0,
                workers: {}
             }
          }
          workers = workers.split(', ')
 
          for (let worker of workers) {
             let [workerName, salary] = worker.split(' ')
             restaurantsObj[restaurantName]['totalSalary'] += Number(salary)
             restaurantsObj[restaurantName]['workers'][workerName] = Number(salary)
 
             if (Number(salary) > restaurantsObj[restaurantName]['bestSalary']) {
                restaurantsObj[restaurantName]['bestSalary'] = Number(salary)
             }
          }
       }
 
       let bestRestaurant = {
          'name': '',
          'avgSalary': 0,
          'bestSalary': 0,
          'workers': {}
       }
       
       for (let restaurantName of Object.keys(restaurantsObj)) {
          let workersCount = Object.keys(restaurantsObj[restaurantName]['workers']).length
          let averageSalary = restaurantsObj[restaurantName]['totalSalary'] / workersCount
 
          if (averageSalary > bestRestaurant['avgSalary']) {
             bestRestaurant['name'] = restaurantName
             bestRestaurant['avgSalary'] = averageSalary
             bestRestaurant['bestSalary'] = restaurantsObj[restaurantName]['bestSalary']
             bestRestaurant['workers'] = restaurantsObj[restaurantName]['workers']
          }
       }
 
       let sortedWorkers = Object.entries(bestRestaurant['workers'])
       sortedWorkers.sort((a, b) => b[1] - a[1])
       sortedWorkers = Object.fromEntries(sortedWorkers)
       bestRestaurant['workers'] = sortedWorkers
 
       let bestRestaurantInfo = `Name: ${bestRestaurant['name']} Average Salary: ${bestRestaurant['avgSalary'].toFixed(2)} Best Salary: ${bestRestaurant['bestSalary'].toFixed(2)}`
       let bestRestaurantWorkersInfo = []
       for (let [workerName, workerSalary] of Object.entries(bestRestaurant['workers'])) {
          bestRestaurantWorkersInfo.push(`Name: ${workerName} With Salary: ${workerSalary}`)
       }
       bestRestaurantWorkersInfo = bestRestaurantWorkersInfo.join(' ')
 
       let p1 = document.querySelector('#bestRestaurant p')
       p1.textContent = bestRestaurantInfo
 
       let p2 = document.querySelector('#workers p')
       p2.textContent = bestRestaurantWorkersInfo
    }
 }