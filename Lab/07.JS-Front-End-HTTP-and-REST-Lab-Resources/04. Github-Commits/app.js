function loadCommits() {
    const usernameInputElement = document.getElementById('username');
    const repoInputElement = document.getElementById('repo');
    const commitsUlElement = document.getElementById('commits');

    const username = usernameInputElement.value;
    const repo = repoInputElement.value;

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then(resp => {
            resp.json()
                .then(data => {
                    commitsUlElement.innerHTML = '';
                    
                    for (const obj of data) {
                        const newLiElement = document.createElement('li');
                        newLiElement.textContent = `${obj.commit.author.name}: ${obj.commit.message}`
        
                        commitsUlElement.appendChild(newLiElement);
                    }
                })
                .catch(err => {
                    /*const newLiElement = document.createElement('li');
                    newLiElement.textContent = `Error: <${resp.status}> (${resp.statusText})`;
                    commitsUlElement.appendChild(newLiElement);*/
                    commitsUlElement.innerHTML = `<li>Error: ${resp.status} (Not Found)</li>`
                })
        })
        .catch(message => console.log(message))
}