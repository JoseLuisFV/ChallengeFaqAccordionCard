let questions = [
    {
        "title": "How many team members can I invite?",
        "content": "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
        "title": "What is the maximum file upload size?",
        "content": "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
        "title": "How do I reset my password?",
        "content": "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
        "title": "Can I cancel my subscription?",
        "content": "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
        "title": "Do you provide additional support?",
        "content": "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
];


const nodesQuestion = []

const questionsList = document.querySelector('.questions__list');
const fragmentQuestion = document.createDocumentFragment();

for (const question of questions) {
    const questionItem = document.createElement('li')
    questionItem.classList.add('questions__item')

    const questionItemTitle = document.createElement('h4');
    questionItemTitle.classList.add('question__title')
    const arrow = document.createElement('span');
    questionItemTitle.append(`${question.title}`, arrow);

    const questionItemContent = document.createElement('p');
    questionItemContent.classList.add('question__answear');
    questionItemContent.classList.add('close');
    questionItemContent.textContent = `${question.content}`;
    fragmentQuestion.append(questionItemTitle, questionItemContent);

    questionItem.appendChild(fragmentQuestion);
    nodesQuestion.push(questionItem);
}


questionsList.append(...nodesQuestion);


questionsList.addEventListener('click', (e) => {
    const elementClicked = e.target;
    if (elementClicked.classList.contains('questions__item')) {
        const content = Array.from(elementClicked.children);
        if (content[1].classList.contains('close')){
            content[1].classList.remove('close');
        } else {
            content[1].classList.add('close');
        }
    } else if (elementClicked.classList.contains('question__title')) {
        const content = elementClicked.nextElementSibling;
        if (content.classList.contains('close')){
            content.classList.remove('close');
        } else {
            content.classList.add('close');
        }
    } else if (elementClicked.classList.contains('question__answear')){
        const content = elementClicked;
        if (content.classList.contains('close')){
            content.classList.remove(('close'));
        } else {
            content.classList.add('close');
        }
    }
});