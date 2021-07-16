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

    const questionItemTitle = document.createElement('button');
    questionItemTitle.classList.add('question__button');
    questionItemTitle.textContent = question.title;

    const questionItemContent = document.createElement('p');
    questionItemContent.classList.add('question__answear');
    questionItemContent.textContent = `${question.content}`;
    fragmentQuestion.append(questionItemTitle, questionItemContent);

    questionItem.appendChild(fragmentQuestion);
    nodesQuestion.push(questionItem);
}


questionsList.append(...nodesQuestion);

const changeStateQuestion = (title, content) => {
    if (!content.classList.contains('open') && !title.classList.contains('active')){
        content.classList.add('open');
        title.classList.add('active')
    } else {
        content.classList.remove('open');
        title.classList.remove('active')
    }
}

questionsList.addEventListener('click', (e) => {
    const elementClicked = e.target;
    if (elementClicked.classList.contains('questions__item')) {
        const item = Array.from(elementClicked.children);
        changeStateQuestion(item[0], item[1]);
    } else if (elementClicked.classList.contains('question__button')) {
        changeStateQuestion(elementClicked, elementClicked.nextElementSibling);
    } else if (elementClicked.classList.contains('question__answear')){
        changeStateQuestion(elementClicked.previousElementSibling, elementClicked);
    }
});