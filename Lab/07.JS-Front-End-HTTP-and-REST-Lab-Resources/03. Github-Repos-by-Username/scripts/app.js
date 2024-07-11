function loadRepos() {
	const inputElement = document.getElementById('username');
	const username = inputElement.value;
	const currentLiElement = document.querySelector('li');
	const ulElement = document.getElementById('repos');

	fetch(`https://api.github.com/users/${username}/repos`)
		.then(resp => resp.json())
		.then(data => {
			ulElement.innerHTML = '';

			for (const obj of data) {
				const newAElement = document.createElement('a');
				newAElement.href = obj['html_url']
				newAElement.textContent = obj['full_name'];

				const newLiElement = document.createElement('li');
				newLiElement.appendChild(newAElement);

				ulElement.appendChild(newLiElement);
			}
		})
		.catch(err => ulElement.innerHTML = `<li><a href="{repo.html_url}">{repo.${username}}</a></li>`)
}