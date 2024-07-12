function generateReport() {
    const thElements = document.querySelectorAll('table thead th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columns = Array
        .from(thElements)
        .map(thElement => {  /* vseki el go wryshtame kato obekt s ime: imeto, active: dali e cheknat */
            const checkboxElement = thElement.querySelector('input[type=checkbox]');

            return {
                name: thElement.textContent.toLowerCase().trim(),
                active: checkboxElement.checked
            };
        });

    const reportData = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td');

            const result = Array
                .from(tdElements)
                .reduce((data, tdElement, i) => {
                    if (!columns[i].active) {
                        return data;
                    }

                    const columnName = columns[i].name;
                    data[columnName] = tdElement.textContent;

                    return data;
                }, {})

            return result;
        })

    outputElement.value = JSON.stringify(reportData, null, 2);
}



/*function generateReport() {
    const outputElement = document.getElementById('output');
    const employeeCheckboxElement = document.querySelector('input[name="employee"]');
    const departmentCheckboxElement = document.querySelector('input[name="deparment"]');
    const statusCheckboxElement = document.querySelector('input[name="status"]');
    const dateHiredCheckboxElement = document.querySelector('input[name="dateHired"]');
    const benefitsCheckboxElement = document.querySelector('input[name="benefits"]');
    const salaryCheckboxElement = document.querySelector('input[name="salary"]');
    const ratingCheckboxElement = document.querySelector('input[name="rating"]');
    const tbodyTrElements = document.querySelectorAll('tbody tr');

    const report = [];

    for (const row of tbodyTrElements) {
        function deletePropertyIfNotChecked(empObj, property, checkboxElement) {
            if (!checkboxElement.checked) {
                delete empObj[property];
            }
        }

        const data = row.children;
        const employeeObj = {
            employee: data[0].textContent,
            deparment: data[1].textContent,
            status: data[2].textContent,
            'date hired': data[3].textContent,
            benefits: data[4].textContent,
            salary: data[5].textContent,
            rating: data[6].textContent,
        }

        deletePropertyIfNotChecked(employeeObj, 'employee', employeeCheckboxElement);
        deletePropertyIfNotChecked(employeeObj, 'deparment', departmentCheckboxElement);
        deletePropertyIfNotChecked(employeeObj, 'status', statusCheckboxElement);
        deletePropertyIfNotChecked(employeeObj, 'date hired', dateHiredCheckboxElement);
        deletePropertyIfNotChecked(employeeObj, 'benefits', benefitsCheckboxElement);
        deletePropertyIfNotChecked(employeeObj, 'salary', salaryCheckboxElement);
        deletePropertyIfNotChecked(employeeObj, 'rating', ratingCheckboxElement);

        report.push(employeeObj);
    }

    outputElement.value = JSON.stringify(report);
}*/

/*document.body.innerHTML = `
<main>
  <table>
    <thead>
        <tr>
            <th>First <input type="checkbox" name="first"></th>
            <th>Second <input type="checkbox" name="second"></th>
            <th>Third <input type="checkbox" name="third"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Word1</td>
            <td>Word2</td>
            <td>Word3</td>
        </tr>
        <tr>
            <td>Word4</td>
            <td>Word5</td>
            <td>Word6</td>
        </tr>
        <tr>
            <td>Word7</td>
            <td>Word8</td>
            <td>Word9</td>
        </tr>
    </tbody>
</table>

     <div>
        <button onclick="generateReport()">Generate Report</button>
     </div>
     <div>
        <textarea id="output"></textarea>
     </div>
</main>
`;

const boxes = [document.querySelector('input[name="first"]'), document.querySelector('input[name="third"]')];
boxes.forEach(b => {
    b.setAttribute('checked', 'true');
    b.checked = true;
});

generateReport();

let data;
try {
    data = JSON.parse(document.getElementById('output').value);
} catch(err) {
    throw new Error('Error parsing output - you must provide valid JSON');
}

expect(data.length).to.equal(3, 'Number of parsed objects doesn\'t match number of table rows');

expect(data[0].first).to.equal('Word1', 'Missing expected property on parsed object');
expect(data[0].third).to.equal('Word3', 'Missing expected property on parsed object');
expect(Object.keys(data[0]).length).to.equal(2, 'Too many properties on parsed object');

expect(data[1].first).to.equal('Word4', 'Missing expected property on parsed object');
expect(data[1].third).to.equal('Word6', 'Missing expected property on parsed object');
expect(Object.keys(data[1]).length).to.equal(2, 'Too many properties on parsed object');*/