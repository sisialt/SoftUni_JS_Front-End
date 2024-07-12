function solve() {
    const sectionElements = document.querySelectorAll('#quizzie section');
    const resultsH1Element = document.querySelector('#results h1');

    let rightAnswersCount = 0;

    for (const currentSection of sectionElements) {
        const answerElements = currentSection.querySelectorAll('.quiz-answer .answer-text');

        for (const answerEl of answerElements) {
            answerEl.addEventListener('click', (e) => {
                const rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
                
                if (rightAnswers.includes(answerEl.textContent)) {
                    rightAnswersCount++;
                }
                    
                currentSection.style.display = 'none';
                currentSection.nextElementSibling.style.display = 'block';

                if (rightAnswersCount === 3) {
                    resultsH1Element.textContent = 'You are recognized as top JavaScript fan!';
                } else {
                    resultsH1Element.textContent = `You have ${rightAnswersCount} right answers`
                }
            })
        }
    }
}



function solve2() {
    const sectionElements = document.querySelectorAll('#quizzie section');
    const resultsH1Element = document.querySelector('#results h1');

    let rightAnswers = 0;

    for (const currentSection of sectionElements) {
        const answerElements = currentSection.querySelectorAll('.quiz-answer .answer-text');

        for (const answerEl of answerElements) {
            answerEl.addEventListener('click', (e) => {
                const question = currentSection.querySelector('.question-wrap').textContent;

                if (question.includes('Question #1')) {
                    if (answerEl.textContent === 'onclick') {
                        rightAnswers++;
                    };
                } else if (question.includes('Question #2')) {
                    if (answerEl.textContent === 'JSON.stringify()') {
                        rightAnswers++;
                    };
                } else if (question.includes('Question #3')) {
                    if (answerEl.textContent === 'A programming API for HTML and XML documents') {
                        rightAnswers++;
                    };
                    
                    if (rightAnswers === 3) {
                        resultsH1Element.textContent = 'You are recognized as top JavaScript fan!';
                    } else {
                        resultsH1Element.textContent = `You have ${rightAnswers} right answers`
                    }
                }
                    
                currentSection.style.display = 'none';
                currentSection.nextElementSibling.style.display = 'block';
            })
        }
    }
}