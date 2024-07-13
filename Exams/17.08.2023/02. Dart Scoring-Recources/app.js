window.addEventListener("load", solve);

function solve() {
    const playerInputElement = document.getElementById('player');
    const scoreInputElement = document.getElementById('score');
    const roundInputElement = document.getElementById('round');
    const addButtonElement = document.getElementById('add-btn');
    const sureListElement = document.getElementById('sure-list');
    const scoreboardListElement = document.getElementById('scoreboard-list');
    const clearButtonElement = document.querySelector('.btn.clear');

    addButtonElement.addEventListener('click', () => {
        const [ player, score, round ] = getInputData();

        if (!player || !score || !round) {
            return;
        }

        const playerPElement = document.createElement('p');
        playerPElement.textContent = player;

        const scorePElement = document.createElement('p');
        scorePElement.textContent = `Score: ${score}`;

        const roundPElement = document.createElement('p');
        roundPElement.textContent = `Round: ${round}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(playerPElement);
        articleElement.appendChild(scorePElement);
        articleElement.appendChild(roundPElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.textContent = 'edit';
        editButtonElement.classList.add('edit', 'btn');

        editButtonElement.addEventListener('click', () => {
            playerInputElement.value = player;
            scoreInputElement.value = score;
            roundInputElement.value = round;
            
            dartItemLiElement.remove();

            addButtonElement.removeAttribute('disabled');
        })

        const okButtonElement = document.createElement('button');
        okButtonElement.textContent = 'ok';
        okButtonElement.classList.add('ok', 'btn');

        okButtonElement.addEventListener('click', () => {
            dartItemLiElement.removeChild(editButtonElement);
            dartItemLiElement.removeChild(okButtonElement);

            scoreboardListElement.appendChild(dartItemLiElement);

            addButtonElement.removeAttribute('disabled');
        });

        const dartItemLiElement = document.createElement('li');
        dartItemLiElement.classList.add('dart-item');
        dartItemLiElement.appendChild(articleElement);
        dartItemLiElement.appendChild(editButtonElement);
        dartItemLiElement.appendChild(okButtonElement);

        sureListElement.appendChild(dartItemLiElement);

        addButtonElement.setAttribute('disabled', 'disabled');

        clearInputData();
    })

    clearButtonElement.addEventListener('click', () => {
        location.reload();
    })
    
    function getInputData() {
        const player = playerInputElement.value;
        const score = scoreInputElement.value;
        const round = roundInputElement.value;

        return [ player, score, round ];
    }

    function clearInputData() {
        playerInputElement.value = '';
        scoreInputElement.value = '';
        roundInputElement.value = '';
    }
}