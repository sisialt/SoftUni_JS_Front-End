function loadRepos() {
	const baseUrl = 'https://api.github.com/users/testnakov/repos';
	const resultElement = document.getElementById('res');

	fetch(baseUrl)
		.then(body => body.text())
		.then(data => {
			resultElement.textContent = data;
		})
		.catch(err => console.log(err))

}