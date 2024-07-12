function attachEvents() {
	const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
	
	const tbodyElement = document.querySelector('#results tbody');
	const firstNameInputElement = document.querySelector('input[name="firstName"]');
	const lastNameInputElement = document.querySelector('input[name="lastName"]');
	const facultyNumberInputElement = document.querySelector('input[name="facultyNumber"]');
	const gradeInputElement = document.querySelector('input[name="grade"]');
	const submitButtonElement = document.getElementById('submit');

	extractData(); //that should not be in the event function

	async function extractData() {
		const resp = await fetch(baseUrl);
		const data = await resp.json();

		for (const student of Object.values(data)) {
			const firstNameTd = document.createElement('td');
			firstNameTd.textContent = student.firstName;

			const lastNameTd = document.createElement('td');
			lastNameTd.textContent = student.lastName;

			const facultyNumberTd = document.createElement('td');
			facultyNumberTd.textContent = student.facultyNumber;

			const gradeTd = document.createElement('td');
			gradeTd.textContent = student.grade;

			const newTr = document.createElement('tr');
			newTr.appendChild(firstNameTd);
			newTr.appendChild(lastNameTd);
			newTr.appendChild(facultyNumberTd);
			newTr.appendChild(gradeTd);

			tbodyElement.appendChild(newTr);
		}
	}

	submitButtonElement.addEventListener('click', submitEvent);

	async function submitEvent() {
		const firstName = firstNameInputElement.value;
		const lastName = lastNameInputElement.value;
		const facultyNumber = facultyNumberInputElement.value;
		const grade = gradeInputElement.value;

		if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
			const student = {
				firstName,
				lastName,
				facultyNumber,
				grade
			};

			fetch(baseUrl, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(student)
			});
		}
	}
}

attachEvents();