function attachEvents() {
    const loadPostsButtonElement = document.getElementById('btnLoadPosts');
    const selectElement = document.getElementById('posts');
    const viewButtonElement = document.getElementById('btnViewPost');
    const h1Element = document.getElementById('post-title');
    const pElement = document.getElementById('post-body');
    const ulCommentsElement = document.getElementById('post-comments');

    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts'; 
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    let posts = {};

    loadPostsButtonElement.addEventListener('click', loadPostsEvent);

    async function loadPostsEvent() {
        selectElement.innerHTML = '';
        
        const resp = await fetch(postsUrl);
        posts = await resp.json();

        for (let key of Object.keys(posts)) {
            const optionElement = document.createElement('option');
            optionElement.value = key;
            optionElement.textContent = posts[key]['title'];

            selectElement.appendChild(optionElement);
        };
    }

    /*loadPostsButtonElement.addEventListener('click', () => {
        fetch(postsUrl)
            .then(resp => resp.json())
            .then(data => {
                posts = data;

                for (let key of Object.keys(data)) {
                    const optionElement = document.createElement('option');
                    optionElement.value = key;
                    optionElement.textContent = data[key]['title'];

                    selectElement.appendChild(optionElement);
                };
            })
            .catch(err => console.log(err));
    });*/

    viewButtonElement.addEventListener('click', viewButtonEvent);

    async function viewButtonEvent() {
        const resp = await fetch(commentsUrl);
        const data = await resp.json();

        ulCommentsElement.innerHTML = '';

        h1Element.textContent = posts[selectElement.value].title;
        pElement.textContent = posts[selectElement.value].body;

        for (let key of Object.keys(data)) {
            const comment = data[key];

            if (comment['postId'] === selectElement.value) {
                const newLiElement = document.createElement('li');
                newLiElement.textContent = comment.text;
                newLiElement.id = comment.id;

                ulCommentsElement.appendChild(newLiElement);
            }
        }
    }

    /*viewButtonElement.addEventListener('click', () => {
        fetch(commentsUrl)
            .then(resp => resp.json())
            .then(data => {
                ulCommentsElement.innerHTML = '';

                h1Element.textContent = posts[selectElement.value].title;
                pElement.textContent = posts[selectElement.value].body;

                for (let key of Object.keys(data)) {
                    console.log(selectElement.value)
                    console.log(key)
                    console.log(data[key]['postId'])
                    
                    const comment = data[key];

                    if (comment['postId'] === selectElement.value) {
                        console.log(comment)
                        //h1Element.textContent = selectElement.querySelector(`option[value=${selectElement.value}`).textContent;
                        
                        const newLiElement = document.createElement('li');
                        newLiElement.textContent = comment.text;

                        ulCommentsElement.appendChild(newLiElement);
                    }
                }
            })
    })*/

}

attachEvents();