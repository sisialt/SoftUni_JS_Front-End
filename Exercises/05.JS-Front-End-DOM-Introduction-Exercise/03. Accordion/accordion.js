function toggle() {
    const moreElement = document.querySelector('.head .button');
    const extraParagraphElement = document.getElementById('extra');

    if (moreElement.textContent === 'More') {
        extraParagraphElement.style.display = 'block';
        moreElement.textContent = 'Less';
    } else {
        extraParagraphElement.style.display = 'none';
        moreElement.textContent = 'More';
    };
}