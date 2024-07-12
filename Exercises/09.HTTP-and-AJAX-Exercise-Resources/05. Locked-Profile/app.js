function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    const mainElement = document.getElementById('main');

    let count = 0;

    loadData();

    async function loadData() {
        const resp = await fetch(baseUrl);
        const data = await resp.json();

        mainElement.innerHTML = '';

        for (const user of Object.values(data)) {
            count++;
            createProfile(count, user.username, user.email, user.age);

            const unlockElement = document.querySelector(`input[name="user${count}Locked"][value="unlock"]`);
            const usernameElement = document.querySelector(`input[name="user${count}Username"]`);
            const submitButtonElement = usernameElement.nextElementSibling.nextElementSibling;

            submitButtonElement.addEventListener('click', submitEvent);

            async function submitEvent() {
                if (unlockElement.checked) {
                    const hiddenDivElement = usernameElement.nextElementSibling;

                    if (submitButtonElement.textContent === 'Show more') { //it was =
                        hiddenDivElement.classList.remove('hiddenInfo');
                        submitButtonElement.textContent = 'Hide it';
                    } else {
                        hiddenDivElement.classList.add('hiddenInfo')
                        submitButtonElement.textContent = 'Show more';
                    }
                }
            }
        }

    }

    async function createProfile(n, username, email, age) {
        const profileDivElement = document.createElement('div');
        profileDivElement.classList.add('profile');
        profileDivElement.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />\
            <label>Lock</label>\
            <input type="radio" name="user${n}Locked" value="lock" checked>\
            <label>Unlock</label>\
            <input type="radio" name="user${n}Locked" value="unlock"><br>\
            <hr>\
            <label>Username</label>\
            <input type="text" name="user${n}Username" value="${username}" disabled readonly />\
            <div id="user${n}HiddenFields" class="hiddenInfo">\
                <hr>\
                <label>Email:</label>\
                <input type="email" name="user${n}Email" value="${email}" disabled readonly />\
                <label>Age:</label>\
                <input type="email" name="user${n}Age" value="${age}" disabled readonly />\
            </div>\
            \
            <button>Show more</button>`
        
        mainElement.appendChild(profileDivElement);
    }
}