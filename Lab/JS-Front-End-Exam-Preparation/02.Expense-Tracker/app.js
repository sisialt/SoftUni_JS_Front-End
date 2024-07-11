window.addEventListener("load", solve);

function solve() {
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const addButtonElement = document.getElementById('add-btn');
    const ulPreviewElement = document.getElementById('preview-list');
    const ulExpensesElement = document.getElementById('expenses-list');
    const deleteButtonElement = document.querySelector('.btn.delete');

    deleteButtonElement.addEventListener('click', () => {
        location.reload();
    })

    addButtonElement.addEventListener('click', () => {
        const expenseType = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        if (!expenseType || !amount || !date) {
            return;
        }

        const newTypeP = document.createElement('p');
        newTypeP.textContent = `Type: ${expenseType}`;

        const newAmountP = document.createElement('p');
        newAmountP.textContent = `Amount: ${amount}$`;

        const newDateP = document.createElement('p');
        newDateP.textContent = `Date: ${date}`;

        const newArticle = document.createElement('article');
        newArticle.appendChild(newTypeP);
        newArticle.appendChild(newAmountP);
        newArticle.appendChild(newDateP);

        const newEditButton = document.createElement('button');
        newEditButton.classList.add('btn');
        newEditButton.classList.add('edit');
        newEditButton.textContent = 'edit';
        newEditButton.addEventListener('click', () => {
            expenseInputElement.value = expenseType;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            ulPreviewElement.innerHTML = '';
            addButtonElement.disabled = false;
        });

        const newOkButton = document.createElement('button');
        newOkButton.classList.add('btn');
        newOkButton.classList.add('ok');
        newOkButton.textContent = 'ok';
        newOkButton.addEventListener('click', () => {
            newLi.removeChild(newDiv);

            ulExpensesElement.appendChild(newLi);
            //ulPreviewElement.removeChild(newLi);
            //ulPreviewElement.innerHTML = ''; // s red 59 mestim newLi i veche tuk nqma nishto

            addButtonElement.disabled = false;
        })

        const newDiv = document.createElement('div');
        newDiv.classList.add('buttons');
        newDiv.appendChild(newEditButton);
        newDiv.appendChild(newOkButton);

        const newLi = document.createElement('li');
        newLi.classList.add('expense-item');
        newLi.appendChild(newArticle);
        newLi.appendChild(newDiv);

        ulPreviewElement.appendChild(newLi);

        addButtonElement.disabled = 'disabled';
        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';
    })
}