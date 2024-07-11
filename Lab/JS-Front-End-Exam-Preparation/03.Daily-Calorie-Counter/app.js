const baseUrl = `http://localhost:3030/jsonstore/tasks`;

const loadButtonElement = document.getElementById('load-meals');
const listDivElement = document.getElementById('list');
const addButtonElement = document.getElementById('add-meal');
const editButtonElement = document.getElementById('edit-meal');
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

loadButtonElement.addEventListener('click', loadEvent)

function loadEvent() {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(data => {
        listDivElement.innerHTML = '';

        for (const meal of Object.values(data)) {
            const newMeal = createMeal(meal);
            listDivElement.appendChild(newMeal); //forgot
        }
    })
}

addButtonElement.addEventListener('click', () => {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;

    const mealObj = { food, time, calories };

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(mealObj)
    })
        .then(resp => {  // it was resp.json and in the next then(data => {loadEvent()...})
            loadEvent();
            foodInputElement.value = '';
            timeInputElement.value = '';
            caloriesInputElement.value = '';
        })
})

function createMeal(m) {
    const changeMealButtonElement = document.createElement('button');
    changeMealButtonElement.classList.add('change-meal');
    changeMealButtonElement.textContent = 'Change';

    const deleteMealButtonElement = document.createElement('button');
    deleteMealButtonElement.classList.add('delete-meal');
    deleteMealButtonElement.textContent = 'Delete';

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.setAttribute('id', 'meal-buttons');
    buttonsDivElement.appendChild(changeMealButtonElement);
    buttonsDivElement.appendChild(deleteMealButtonElement);

    const foodH2Element = document.createElement('h2');
    foodH2Element.textContent = m.food;

    const timeH3Element = document.createElement('h3');
    timeH3Element.textContent = m.time;

    const caloriesH3Element = document.createElement('h3');
    caloriesH3Element.textContent = m.calories;

    const mealDivElement = document.createElement('div');
    mealDivElement.classList.add('meal');
    mealDivElement.appendChild(foodH2Element);
    mealDivElement.appendChild(timeH3Element);
    mealDivElement.appendChild(caloriesH3Element);
    mealDivElement.appendChild(buttonsDivElement);

    deleteMealButtonElement.addEventListener('click', () => {
        fetch(`${baseUrl}/${m._id}`, {
            method: 'DELETE'
        })

        mealDivElement.remove();
    })

    changeMealButtonElement.addEventListener('click', () => {
        listDivElement.remove(mealDivElement);
    
        foodInputElement.value = m.food;
        timeInputElement.value = m.time;
        caloriesInputElement.value = m.calories;
    
        editButtonElement.disabled = false;
        addButtonElement.disabled = 'disabled';
    })

    editButtonElement.addEventListener('click', () => {
        const editedMeal = {
            food: foodInputElement.value,
            time: timeInputElement.value,
            calories: caloriesInputElement.value,
            _id: m.id
        };

        fetch(`${baseUrl}/${m._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedMeal)
        })
            .then(resp => resp.json())
            .then(data => {
                loadEvent();
                foodInputElement.value = '';
                timeInputElement.value = '';
                caloriesInputElement.value = '';
            })
    })

    return mealDivElement;
}
